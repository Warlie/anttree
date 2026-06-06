console.debug('[ontology_loader] script parsed');

de.auster_gmbh.OntologyLoader = class {

    #fetched = new Set();   // URIs already queued, fetched, or known loaded
    #graph   = new Map();   // uri → [import-uri, ...]
    #cache   = new Map();   // uri → XMLDocument
    #pending = 0;
    #onDone;                // callback(sortedURIs, cache)

    constructor(onDone) {
        this.#onDone = onDone;
    }

    resolve(uris) {
        if (!uris || uris.length === 0) { this.#onDone([], this.#cache); return; }
        uris.forEach(uri => this.#fetch(uri));
    }

    // Check if namespace already registered in semantic web (runtime reload guard)
    #isLoaded(uri) {
        const ns = de.auster_gmbh.semanticelement.ns;
        return ns && ns[uri] !== undefined;
    }

    #fetch(uri) {
        if (this.#fetched.has(uri) || this.#isLoaded(uri)) return;
        this.#fetched.add(uri);
        this.#graph.set(uri, []);
        this.#pending++;

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'index.php?i=__system', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onload = () => {
            if (xhr.status === 200 && xhr.responseText) {
                try {
                    const fixed = de.auster_gmbh.library.xml_util.fixMissingNamespaces(xhr.responseText);
                    const doc = new DOMParser().parseFromString(fixed, 'application/xml');
                    if (doc.documentElement.nodeName !== 'parsererror') {
                        this.#cache.set(uri, doc);
                        const imports = this.#extractImports(doc);
                        // only track deps that aren't already loaded — keeps topoSort clean
                        this.#graph.set(uri, imports.filter(imp => !this.#isLoaded(imp)));
                        imports.forEach(imp => this.#fetch(imp));
                    } else {
                        console.warn('[OntologyLoader] XML parse error:', uri);
                    }
                } catch(e) {
                    console.warn('[OntologyLoader] exception parsing:', uri, e.message);
                }
            } else {
                console.warn('[OntologyLoader] fetch failed:', uri, xhr.status);
            }
            if (--this.#pending === 0) this.#onDone(this.#topoSort(), this.#cache);
        };

        xhr.onerror = () => {
            console.warn('[OntologyLoader] network error:', uri);
            if (--this.#pending === 0) this.#onDone(this.#topoSort(), this.#cache);
        };

        xhr.send('modus=ONTOLOGY&URI=' + encodeURIComponent(uri));
    }

    #extractImports(doc) {
        const NS_OWL = 'http://www.w3.org/2002/07/owl';
        const NS_RDF = 'http://www.w3.org/1999/02/22-rdf-syntax-ns';
        const nodes = doc.getElementsByTagNameNS(NS_OWL, 'imports');
        const imports = [];
        for (let i = 0; i < nodes.length; i++) {
            const res = nodes[i].getAttributeNS(NS_RDF, 'resource');
            if (res) imports.push(res);
        }
        return imports;
    }

    // Kahn's algorithm: dependencies before dependents
    #topoSort() {
        const inDegree = new Map();
        for (const uri of this.#graph.keys()) inDegree.set(uri, 0);

        for (const [uri, deps] of this.#graph) {
            for (const dep of deps) {
                if (!inDegree.has(dep)) inDegree.set(dep, 0);
                inDegree.set(uri, inDegree.get(uri) + 1);
            }
        }

        const queue = [...inDegree.entries()]
            .filter(([, deg]) => deg === 0)
            .map(([uri]) => uri);

        const sorted = [];
        while (queue.length) {
            const uri = queue.shift();
            sorted.push(uri);
            for (const [dep, deps] of this.#graph) {
                if (!deps.includes(uri)) continue;
                const nd = inDegree.get(dep) - 1;
                inDegree.set(dep, nd);
                if (nd === 0) queue.push(dep);
            }
        }

        if (sorted.length < this.#graph.size)
            console.warn('[OntologyLoader] cycle detected —',
                this.#graph.size - sorted.length, 'nodes could not be ordered');

        console.debug('[OntologyLoader] resolved load order (' + sorted.length + '):', sorted);
        return sorted;
    }
};
