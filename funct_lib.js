
String.prototype.repeat = function(times) {
   var res = '';
   var i;
   for(i= 1;i <= times;i++)res += this;
   return res;
}

/**
* @param xml : xmldocument
* @param path : xpath expression
* @param document : xml-document (not relevant yet)
* @return array with found elements
*/
function xpathRequest(xml, path, document) {
    var results = [];
    
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();

        while (result) {
        	results.push(result);
            result = nodes.iterateNext();
        } 
        
    // Code For Internet Explorer
    } /* 
    else if (window.ActiveXObject || document.responseType == "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
        	results.push(result);
        }
    }
    */
    else
    	{console.error("xml element is not valid for xpath");//later throws
    	}

    return results;
}

var de;
 if(!de) de = {};
 else if (typeof de != 'object')
 throw new Error('de allready exists and os not an object'); 

 if(!de.auster_gmbh) de.auster_gmbh = {};
 else if (typeof de.auster_gmbh != 'object')
 throw new Error('de.auster_gmbh allready exists and os not an object'); 

 if(!de.auster_gmbh.library) de.auster_gmbh.library = {};
 else if (typeof de.auster_gmbh.library != 'object')
 throw new Error('de.auster_gmbh.graphicelement allready exists and os not an object'); 

 if(!de) de = {};
 else if (typeof de != 'object')
 throw new Error('de allready exists and os not an object'); 

de.auster_gmbh.library.access = {};
de.auster_gmbh.library.tools = {};
de.auster_gmbh.library.commonrefs = {};
de.auster_gmbh.library.xml_util = {
  // Known ontology namespaces that qPortal omits from the serialized <rdf:RDF> root
  // because they lack a registered NameSpace_factory entry.
  _knownNS: {
    'person': 'http://www.auster-gmbh.de/ontologies/person',
    'gender': 'http://www.auster-gmbh.de/ontologies/gender'
  },
  fixMissingNamespaces: function(text) {
    const rdfRDFPattern = /(<rdf:RDF\b[^>]*>)/;
    const match = text.match(rdfRDFPattern);
    if (!match) return text;
    let rootTag = match[1];
    let inject = '';
    for (const [prefix, uri] of Object.entries(this._knownNS)) {
      if (text.indexOf(prefix + ':') !== -1 && text.indexOf('xmlns:' + prefix) === -1)
        inject += ' xmlns:' + prefix + '="' + uri + '"';
    }
    if (!inject) return text;
    return text.replace(rootTag, rootTag.replace('>', inject + '>'));
  }
};
de.auster_gmbh.library.commonrefs.STDNODE = null;
de.auster_gmbh.library.commonrefs.STDLISTENER = null;

/*
 * @param listOfURIs: array of uri strings
 * @param fromFunction: (optional) uri for copy methods
 *
 * The object named fromFunction gives it methods to these functions metioned in the array
 */
de.auster_gmbh.library.tools.addRelevantMethods = function(listOfURIs, fromFunction = 'http://www.w3.org/2000/01/rdf-schema#Resource') {
  if (!Array.isArray(listOfURIs)) throw new Error("First argument must be an array");
  if (!de.auster_gmbh.semanticelement.hasOwnProperty(fromFunction)) throw new Error("Second argument '" + fromFunction + "' is not a valid key.");

  let helpvar = new de.auster_gmbh.semanticelement[fromFunction];

  for (var prop in helpvar) {
    listOfURIs.forEach(
      function(item) {
        if (!(prop in de.auster_gmbh.semanticelement[item]?.prototype)) {
        	//console.log(item + " -> " + prop)
          de.auster_gmbh.semanticelement[item].prototype[prop] = helpvar[prop];
        }
        else
        {
        	//if("handling" ==  prop)  // Brauche ein handling
        	//console.log("ignore:" + item + " -> " + prop);
        }
      });
  }
}
/*
* @param node: xml-node
* @param position: constante  de.auster_gmbh.library.tools.tripleElement.const
*
*/
de.auster_gmbh.library.tools.tripleElement = function (node,position)
{
	let constants = de.auster_gmbh.library.tools.tripleElement.const;
	this.elementType = 2;
	this.xmlNode = node;
	this.semObject = null;
	

	
	if(node.nodeType != Node.TEXT_NODE)
	{
		this.baseURI = node.namespaceURI  + '#' +  node.localName;
		this.getResourceURI = function(){if(this.newURI)return this.newURI;if(this.refURI)return this.refURI; return this.baseURI;}
		this.handling = de.auster_gmbh.semanticelement.tools.showHandlingToURI(this.getResourceURI());
	}
	//console.info(node.namespaceURI  + '#' +  node.localName);
	if(node.nodeType == Node.ELEMENT_NODE)
	{
/*		
		de.auster_gmbh.semanticelement.VALUE = 0;
de.auster_gmbh.semanticelement.NODE = 1;
de.auster_gmbh.semanticelement.GRAPH = 2;
de.auster_gmbh.semanticelement.DEFINITION = 3;
de.auster_gmbh.semanticelement.TAG = 4;
de.auster_gmbh.semanticelement.REF = 5;
*/
		
//console.info("ELEMENT_NODE", de.auster_gmbh.semanticelement.tools.showHandlingToURI(node.namespaceURI  + '#' +  node.localName));
		
	for(var j = 0; j < node.attributes.length;j++)
	{
		
	 		//console.debug(node.attributes[j].namespaceURI  + '#' +  node.attributes[j].localName , de.auster_gmbh.semanticelement.tools.showHandlingToURI(node.attributes[j].namespaceURI  + '#' +  node.attributes[j].localName), this.handling);
	 		if(de.auster_gmbh.semanticelement.tools.showHandlingToURI(node.attributes[j].namespaceURI  + '#' +  node.attributes[j].localName) == de.auster_gmbh.semanticelement.DEFINITION)
	 		{

	 			this.newURI = node.attributes[j].value;
	 			this.elementType = 1;
	 		}
	 		

	 		
	 }



	 		//if(position == de.auster_gmbh.library.tools.tripleElement.const.PREDICATE)
	 			
	if((position == constants.PREDICATE || position == constants.OBJECT ) &&
	   (this.handling == de.auster_gmbh.semanticelement.NODE ||
	    this.handling == de.auster_gmbh.semanticelement.GRAPH ||
	    this.handling == de.auster_gmbh.semanticelement.XMLELEMENT))
	{
		this.subTree = new de.auster_gmbh.library.tools.xmlToTriple(node);
		return;
	}
	
	
	
	}
	
	if(node.nodeType == Node.ATTRIBUTE_NODE)
	{
//console.info("ATTRIBUTE_NODE");
	 		//console.debug(first_node.attributes[j].namespaceURI  + '#' +  first_node.attributes[j].localName , de.auster_gmbh.semanticelement.tools.showHandlingToURI(first_node.attributes[j].namespaceURI  + '#' +  first_node.attributes[j].localName));
	 		if(this.handling == de.auster_gmbh.semanticelement.REF)
	 		{

	 			this.refURI = node.value;
	 			//if(this.refURI.includes("#"))
	 			//{
	 			//	console.error(node);
	 				this.elementType = 1;
	 			//}
	 			//else
	 			//	this.elementType = 1;
	 		}
	 		
	 		if(this.handling == de.auster_gmbh.semanticelement.TAG)
	 		{
	 			this.value = node.value;
	 			
	 			if(position == constants.PREDICATE)
	 				this.elementType = 2;
	 			else
	 				this.elementType = 3;
	 		}


	this.baseURI = node.namespaceURI  + '#' +  node.localName;
	}
	
	if(node.nodeType == Node.TEXT_NODE)
	{
		
//console.info("TEXT_NODE", node.nodeValue);
//console.error(node);
		this.value = node.nodeValue;
	 	this.elementType = 3;
	}
	
	if(node.nodeType == Node.CDATA_SECTION_NODE)
	{
		//console.info("CDATA_SECTION_NODE");
		//console.debug(node);
		this.value = node.nodeValue;
	 	this.elementType = 3;
	}
	

	
	//console.debug(first_node);


}
de.auster_gmbh.library.tools.tripleElement.const = {};
de.auster_gmbh.library.tools.tripleElement.const.SUBJECT = -3;
de.auster_gmbh.library.tools.tripleElement.const.PREDICATE = -2;
de.auster_gmbh.library.tools.tripleElement.const.OBJECT = -1;
de.auster_gmbh.library.tools.tripleElement.const.NOTHING = 0;
de.auster_gmbh.library.tools.tripleElement.const.ID_ELEMENT = 1;
de.auster_gmbh.library.tools.tripleElement.const.ANONYM_ELEMENT = 2;
de.auster_gmbh.library.tools.tripleElement.const.TEXT_ELEMENT = 3;


/**
*	creates object eventObject, which contains the request, who was requesting and additive content 
*	@param: request
*	@param: requester
*	@param: context
*   @return array of 
* 
*/
de.auster_gmbh.library.tools.xmlToTriple = function (node)
{

	let constants = de.auster_gmbh.library.tools.tripleElement.const;
	var checkFirstElement = function(first_node)
	{
		let handling = de.auster_gmbh.semanticelement.tools.showHandlingToURI(first_node.namespaceURI  + '#' +  first_node.localName);
		if(handling != de.auster_gmbh.semanticelement.NODE && handling != de.auster_gmbh.semanticelement.GRAPH && handling != de.auster_gmbh.semanticelement.XMLELEMENT)
			return false;

	//console.debug(first_node);
		return new de.auster_gmbh.library.tools.tripleElement( first_node, constants.SUBJECT);
	}
	
	var checkSecondElement = function(second_node)
	{
		//ignores Text nodes
		if(second_node.nodeType == Node.TEXT_NODE)return false;
		if(second_node.nodeType == Node.CDATA_SECTION_NODE)return false;
		//console.log(second_node.namespaceURI  + '#' +  second_node.localName);
		//			console.debug(second_node, de.auster_gmbh.semanticelement.tools.showHandlingToURI(second_node.namespaceURI  + '#' +  second_node.localName));
		if(de.auster_gmbh.semanticelement.tools.showHandlingToURI(second_node.namespaceURI  + '#' +  second_node.localName) == de.auster_gmbh.semanticelement.GRAPH)
		{
			//console.debug("Graph",second_node);
			return new de.auster_gmbh.library.tools.tripleElement( second_node, constants.PREDICATE);//second_node.namespaceURI  + '#' +  second_node.localName;
		}
		
		if(de.auster_gmbh.semanticelement.tools.showHandlingToURI(second_node.namespaceURI  + '#' +  second_node.localName) == de.auster_gmbh.semanticelement.NODE)
		{
			//console.debug("Node",second_node);
			return new de.auster_gmbh.library.tools.tripleElement( second_node, constants.PREDICATE);
		}

		if(de.auster_gmbh.semanticelement.tools.showHandlingToURI(second_node.namespaceURI  + '#' +  second_node.localName) == de.auster_gmbh.semanticelement.XMLELEMENT)
		{
			//console.debug("XmlElement",second_node);
			return new de.auster_gmbh.library.tools.tripleElement( second_node, constants.PREDICATE);
		}

		if(de.auster_gmbh.semanticelement.tools.showHandlingToURI(second_node.namespaceURI  + '#' +  second_node.localName) == de.auster_gmbh.semanticelement.TAG)
		{
			//console.debug("Tag",second_node);
			return new de.auster_gmbh.library.tools.tripleElement( second_node, constants.PREDICATE);
		}		
		/*
		if(de.auster_gmbh.semanticelement.tools.showHandlingToURI(second_node.namespaceURI  + '#' +  second_node.localName) == de.auster_gmbh.semanticelement.TAG)
		{
			//console.debug("Tag",second_node);
			return new de.auster_gmbh.library.tools.tripleElement( second_node, constants.PREDICATE);
		}
		*/

	}

	var checkThirdElement = function(third_node)
	{
		


var handling = 0;
if(third_node.nodeType == Node.TEXT_NODE) handling = de.auster_gmbh.semanticelement.tools.showHandlingToURI(third_node.parentElement.namespaceURI  + '#' +  third_node.parentElement.localName);
if(third_node.nodeType == Node.ELEMENT_NODE ||
	third_node.nodeType == Node.ATTRIBUTE_NODE) handling = de.auster_gmbh.semanticelement.tools.showHandlingToURI(third_node.namespaceURI  + '#' +  third_node.localName);
	//console.debug(third_node, third_node.nodeType, handling);
	if(third_node.nodeType == Node.ELEMENT_NODE)
		if(handling == de.auster_gmbh.semanticelement.NODE)
	 	{
	 		//console.log("NODE");
	 		return new de.auster_gmbh.library.tools.tripleElement( third_node, constants.OBJECT);
	 	}

	if(third_node.nodeType == Node.ATTRIBUTE_NODE)
		if((handling == de.auster_gmbh.semanticelement.REF) ||
		(handling == de.auster_gmbh.semanticelement.TAG))
	 	{
	 		//console.log("REF, TAG");
	 		return new de.auster_gmbh.library.tools.tripleElement( third_node, constants.OBJECT);
	 	}
	 	
	if((third_node.nodeType == Node.TEXT_NODE) ||
		(third_node.nodeType == Node.CDATA_SECTION_NODE) ||
		(third_node.nodeType == Node.PROCESSING_INSTRUCTION_NODE))
		if(handling == de.auster_gmbh.semanticelement.TAG || handling == de.auster_gmbh.semanticelement.GRAPH)
	 	{
	 		//console.log("TAG");
	 		return new de.auster_gmbh.library.tools.tripleElement( third_node, constants.OBJECT);
	 	}


			return false;
	}

	
	this.triples = [];
	this.valid = false;
	let subject = "";
	let predicate = "";
	let object = "";
	

	// this if is about  nodeType Element_Node
if(node.nodeType == Node.ELEMENT_NODE)
{	

/* check first element to be a usable node */
if(subject = checkFirstElement(node))
{
	this.valid = true; /* if usable, show it to the parent process */
	
	for(var k = 0; k < node.attributes.length;k++)
	{
	 		//console.debug(first_node.attributes[j].namespaceURI  + '#' +  first_node.attributes[j].localName , de.auster_gmbh.semanticelement.tools.showHandlingToURI(first_node.attributes[j].namespaceURI  + '#' +  first_node.attributes[j].localName));
	 		let hand = de.auster_gmbh.semanticelement.tools.showHandlingToURI(node.attributes[k].namespaceURI  + '#' +  node.attributes[k].localName);
	 		if((hand == de.auster_gmbh.semanticelement.GRAPH) ||(hand == de.auster_gmbh.semanticelement.TAG))
	 		{
	 			this.triples.push([subject, checkSecondElement(node.attributes[k]), checkThirdElement(node.attributes[k])]);
	 		}
	 						
	 }
	
	
	for (let i = 0; i < node.childNodes.length; i++) /* Walk though child nodes and for other resources or properties */
	{

				if(predicate = checkSecondElement(node.childNodes[i])) /* when found a useful predicate or bag element, use it */
				{
					
					if(node.childNodes[i].childNodes.length)
						for (let j = 0; j < node.childNodes[i].childNodes.length; j++)
						{
							if(object = checkThirdElement(node.childNodes[i].childNodes[j]))break;
						}
					else
					{
						for(var j = 0; j < node.childNodes[i].attributes.length; j++)
						{
							let _a = node.childNodes[i].attributes[j];
							if(de.auster_gmbh.semanticelement.tools.showHandlingToURI(_a.namespaceURI + '#' + _a.localName) == de.auster_gmbh.semanticelement.REF)
								if(object = checkThirdElement(_a)) break;
						}
						if(!object)
							for(var j = 0; j < node.childNodes[i].attributes.length; j++)
							{
								if(object = checkThirdElement(node.childNodes[i].attributes[j])) break;
							}
					}
						
							
//console.log(subject.baseURI, predicate.baseURI, object.baseURI);
this.triples.push([subject, predicate, object]);					
					
				}
			
	}

}




//console.debug(node);

}
};

/**
*	creates object eventObject, which contains the request, who was requesting and additive content 
*	@param: request
*	@param: requester
*	@param: context
* 
de.auster_gmbh.library.tools.tripleElement.const = {};
de.auster_gmbh.library.tools.tripleElement.const.SUBJECT = -3;
de.auster_gmbh.library.tools.tripleElement.const.PREDICATE = -2;
de.auster_gmbh.library.tools.tripleElement.const.OBJECT = -1;
de.auster_gmbh.library.tools.tripleElement.const.NOTHING = 0;
de.auster_gmbh.library.tools.tripleElement.const.ID_ELEMENT = 1;
de.auster_gmbh.library.tools.tripleElement.const.ANONYM_ELEMENT = 2;
de.auster_gmbh.library.tools.tripleElement.const.TEXT_ELEMENT = 3;
					try{
					de.auster_gmbh.semanticelement.semantic_web.getObjByRepresentation(x[i].getAttributeNS( 'http://www.w3.org/1999/02/22-rdf-syntax-ns', 'resource' ), 2);
					if(element)console.debug(element.innerID + "(" + this.innerID + ", (" + x[i].getAttributeNS( 'http://www.w3.org/1999/02/22-rdf-syntax-ns', 'resource' ) + "))");
					}
					catch(err) {
					alert(err.message);
    				}
*/
de.auster_gmbh.library.tools.triplesToGrid = function (setOfTriple, parent)
{
	var subject = false;
	
	/* Delivers an anonym Element or a specific one */
	var findProperElement = function(triple_element)
	{
				
		if(triple_element.elementType == de.auster_gmbh.library.tools.tripleElement.const.ID_ELEMENT)
		{
			//console.debug("id ", triple_element.getResourceURI());
			return de.auster_gmbh.semanticelement.semantic_web.getObjByRepresentationObj(triple_element.getResourceURI());
		}
		
		if(triple_element.elementType == de.auster_gmbh.library.tools.tripleElement.const.ANONYM_ELEMENT)
		{
			//console.debug(triple_element);
			//console.debug("A ", triple_element.getResourceURI());
			return de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz(triple_element.getResourceURI());
		}
	}
	
	/* creates all elements and builds bags, tags and graphs */
	var processSingleTriple = function(triple)
	{
		if(!triple)return;
		
		//if(triple[0].semObject)
		
		if(!subject)
		{
			if(parent.getName() == "http://www.w3.org/2002/07/owl#Ontology")
			{
				subject = triple[0];
				subject.semObject = findProperElement(subject);

				de.auster_gmbh.semanticelement.semantic_web.addBag(parent,subject.semObject);
			}
			else
			{
				subject = triple[0];
				subject.semObject = parent;
			}
			
		}
		let predicate = triple[1];
		let object =((triple[2]) ? triple[2] : null);

		
		predicate.semObject = findProperElement(predicate);

		if(object && predicate.handling == de.auster_gmbh.semanticelement.GRAPH)object.semObject = findProperElement(object);
		
		if(!predicate.semObject)
		{
			console.debug(predicate,object);
			console.error(predicate.getResourceURI() + " is not known");

		}
		
		/* is bag operation */
		if(predicate.handling == de.auster_gmbh.semanticelement.NODE)
		{
			de.auster_gmbh.semanticelement.semantic_web.addBag(subject.semObject,predicate.semObject);
			
			if(predicate.subTree)
			 	de.auster_gmbh.library.tools.triplesToGrid(predicate.subTree, predicate.semObject);
			 	
		}
		
		if(predicate.handling == de.auster_gmbh.semanticelement.GRAPH && object !== null && ("semObject"  in  object))
		{
			if(object.semObject == null || object.semObject === undefined)
			{
				if(object.value !== undefined)
					de.auster_gmbh.semanticelement.semantic_web.setGraphLiteralObj(subject.semObject, predicate.semObject, object.value);
				else if(predicate.subTree)
					de.auster_gmbh.library.tools.triplesToGrid(predicate.subTree, predicate.semObject);
			}
			else
			{

			de.auster_gmbh.semanticelement.semantic_web.setManuallyGraph(subject.semObject,predicate.semObject, object.semObject);

			if(predicate.subTree)
				de.auster_gmbh.library.tools.triplesToGrid(predicate.subTree, predicate.semObject);

			if(object.subTree)
			{
				//console.debug(object.semObject);
			 	de.auster_gmbh.library.tools.triplesToGrid(object.subTree, object.semObject);
			}

			} // end else (object.semObject valid)
		}
		else
			if(object !== undefined && object !== null)
			{
				if(!("semObject"  in  object))	console.warn(object.getName() + " has no semObj", object);
			}
			/* object is null — benign for rdf:about predicates (object is in predicate.semObject)
			   and for embedded SVG structure elements that have no RDF object counterpart */
		
		if(predicate.handling == de.auster_gmbh.semanticelement.XMLELEMENT)
		{
			console.debug("triplesToGrid XMLELEMENT: " + (subject.semObject ? subject.semObject.getName() : '?') + " -> " + (predicate.semObject ? predicate.semObject.getName() : '?'));
			de.auster_gmbh.semanticelement.semantic_web.addBag(subject.semObject, predicate.semObject);
			if(predicate.subTree)
				de.auster_gmbh.library.tools.triplesToGrid(predicate.subTree, predicate.semObject);
			// Inject text/CDATA content directly for elements like textarea
			if(typeof predicate.semObject.setText === 'function' && predicate.xmlNode) {
				var _txt = '';
				for(var _ci = 0; _ci < predicate.xmlNode.childNodes.length; _ci++) {
					var _cn = predicate.xmlNode.childNodes[_ci];
					if(_cn.nodeType === 3 || _cn.nodeType === 4) _txt += _cn.nodeValue;
				}
				if(_txt.trim()) predicate.semObject.setText(_txt.trim());
			}
		}

		if(predicate.handling == de.auster_gmbh.semanticelement.TAG)
		{
					if(object !== null)
						de.auster_gmbh.semanticelement.semantic_web.setGraphLiteralObj(subject.semObject,predicate.semObject, object.value);
					if(predicate.subTree)
						de.auster_gmbh.library.tools.triplesToGrid(predicate.subTree, predicate.semObject);
		}

		
		//console.debug(subject,predicate, object);
	}
	
	setOfTriple.triples.forEach(processSingleTriple);
	
	

	
}

/**
*	creates object eventObject, which contains the request, who was requesting and additive content 
*	@param: request
*	@param: requester
*	@param: context
* 
*/
de.auster_gmbh.library.tools.eventObject = function eventObject(request, requester, context)
{
var obj_request = request;
var obj_requester = requester;
var obj_context = context;


this.id = 'eventObject';
this.getRequest = function () {return obj_request;}
this.getRequester = function () {return obj_requester;}
this.getContext = function () {return obj_context;}
this.setRequest = function ( newRequest ) {obj_request = newRequest;}
this.setRequester = function ( newRequester ) {obj_requester = newRequester;}
this.setContext = function ( newContext ) {obj_context = newContext;}

this.toString = function () {return "EventObject";}



};

/**
* function for dumping a variable
* @param arr_arg : various variable 
*/

de.auster_gmbh.library.tools.var_dump = function ( arr_arg )
{
   
   var line = function(arg, space)
   {
   	var res = "";
   	res += " ".repeat(space);
   	if(arg instanceof Array) 
   	{
   	res += '(array[' + arg.length + "]){\n";
   	
   	  for( var k in arg )
   	  {
   	  res += " ".repeat(space);
   	  res += '"' + k + '"->' + line(arg[k], space + 2) + ";\n";
   	  }
   	 res += " ".repeat(space);
   	 res +="}";
   	  
   	}
   	else
   	{
   	if(arg instanceof String)
   	{
   	res += '(string[' + arg.length + "])->" + arg;  	  
   	}
   	else if(arg instanceof Object)
   	res += '(' + (typeof arg) + ')';
   	else
   	res += '(' + (typeof arg) + ')' + arg;
   	}
   	return res;
   } 
   return line(arr_arg,0);


};

/**
* object qPComObject
* @function setNewNode
* 
*
*/

de.auster_gmbh.library.tools.qPComObject = function qPComObject()
{
var id = 1;
var stack = new Array();
var attrib = new de.auster_gmbh.library.parser.csv(undefined,',','~');
var request = new de.auster_gmbh.library.parser.csv();

			attrib.addName('uri');
			attrib.addName('qName');
			attrib.addName('value');

			request.addName('command');
			request.addName('id');
			request.addName('ns');
			request.addName('URI');
			request.addName('goto');
			request.addName('attib');
			request.addName('stamp');
			request.addName('newstamp');
			request.addName('success');
			

/**
* 
* @param doc:
* @param stamp:
* @param uri:
* 
*/
this.setNewNode = function (doc, stamp, uri ) 
{
	
	request.addNewLine();
	request.addValue('command','create');
	request.addValue('id',id);
	request.addValue('ns',doc);
	request.addValue('URI',uri);
	request.addValue('attib',attrib.toString());
	if(arguments.length > 3)
	  request.addValue('goto',arguments[3]);
	else
	  request.addValue('stamp',stamp);

	attrib.truncate();
 
	return id++;

}

/**
* 
* @param uri:
* @param qName:
* @param value:
* 
*/
this.setAttribute = function (uri, qName, value ) 
{
	attrib.addNewLine();
	attrib.addValue('uri',uri);
	attrib.addValue('qName',qName);
	attrib.addValue('value',value);

}

/**
* 
*/
this.getConfigArray = function () 
{
var output = new Array();

output['modus'] = "COMMAND_LIST";
output['content'] = request.toString();
return output;
}



};

de.auster_gmbh.library.tools.Recordset = function()
   {
    var record_list = new Array();
    var col_list = new Array();
    var cur = -1;
    var delete_list = new Array();

    
    this.append_col = function(name){ if( col_list[name] != true )col_list[name] = true;}
    
    this.setValue = function(key, value)
    {
      if(col_list[key] == true)
        record_list[cur][key] = value;
    }
    
    this.AddNew = function()
    {
    
      cur++;
      record_list[cur] = new Array();
      for(var col_name in col_list )
        record_list[cur][col_name] = null;
    
    }
    
    this.first = function(){cur = 0;}
    this.last = function(){cur = record_list.length - 1;}
    this.prev = function(){if(cur > 0){cur--;return true;}else return false;}
    this.next = function(){if(cur < record_list.length - 1){cur++;return true;}else return false;}

    this.getValue = function(key)
    {
      if(col_list[key] == true )
        if( cur > -1  && cur < record_list.length )
          return record_list[cur][key];
        else
          throw new de.auster_gmbh.library.error.RecordsetEOFException(cur);
      else
        throw new de.auster_gmbh.library.error.RecordsetWrongKeyException(key);
    }
    
    
    this.delete = function(){delete_list.push(cur);}
    this.delete_col = function(col){ col_list[col] = false;}
    

    this.update = function()
    {
      var old = record_list;
      var oldcol = col_list;
      col_list = new Array();


        for(var col_name in oldcol )if(oldcol[col_name])col_list[col_name] = true;        
        
      record_list = new Array();
      cur = -1;
      delete_list.sort();
      
      for(var i = 0; i < old.length; i++ )
      {
        if(delete_list.length > 0 && i == delete_list[0])
        {
          delete_list.shift();
          continue;
        }
        
        this.AddNew();
        
        for(var col_name in col_list )
        {
          this.setValue(col_name, old[i][col_name]);
          
        }

      }
      
      
      
    }
    
    this.toString = function()
    {
      
      var res = "";
      var komma = "";
  
      for(var col_name in col_list )
      {
          res +=  komma + col_name;
          komma = ", ";
      }
      
      res += "\n";
      
      
      for(var i = 0; i < record_list.length; i++ )
      {
        komma = "";
        for(var col_name in col_list )
        {
        
          if(record_list[i][col_name] == null)res += "NULL" + komma;
          else
          if(record_list[i][col_name]['toString'] == undefined)
            if(record_list[i][col_name]['getName'] != undefined)
              res += record_list[i][col_name].getName() + komma;
            else
              res += (typeof record_list[i][col_name]) + komma;
          else
            res += record_list[i][col_name] + komma;
          komma = ", ";
        }
        res += "\n";
      }
      
      return res;
    }

    this.RecordCount = function(){return record_list.length;}
    
   } 

de.auster_gmbh.library.tools.findInString = function(myexp, mystring)
{
 	return mystring.match(new RegExp(myexp));
}

//de.auster_gmbh.library
de.auster_gmbh.library.access.semantic_web = function()
 	{
	
	var semweb = de.auster_gmbh.semanticelement.semantic_web;

 	}


/**
* FindSpecificNode(Classfunction)
* -------------------------------
* | 
*/
de.auster_gmbh.library.tools.FINDSPECIFICNODE = function(currentNode, URIofDestinationNode )
{
	var containerArray = currentNode.container;
	var containerLength = containerArray.length;
	var secCounter = 20;

	for(i = 0;(containerArray.length > i) && ( secCounter > 0); i++)
	{
		secCounter--;
		
		if(containerArray[i].container)
		{
			for(j = 0;(containerArray[i].container.length > j); j++)
			{
				containerArray[ containerLength + j] = containerArray[i].container[j];
				
			}
			containerLength = containerArray.length;			
			
			
		}
		if(de.auster_gmbh.library.tools.isSubOf(containerArray[i], URIofDestinationNode))return containerArray[i];

	}
	
}

de.auster_gmbh.library.tools.isSubOf = function(currentNode, URI )
{
	if(currentNode.getName() == URI)return true;
	var rotateObj = currentNode;
	while(rotateObj.superObj)
	{
	rotateObj = rotateObj.superObj;
	//alert(rotateObj);
		if(rotateObj.getName() == URI)return true;
	
	}
	return false;
	
}

de.auster_gmbh.library.tools.getBagElementbyClassName = function(currentNode, URI)
 	{
 	
 		for(pos = 0;pos < currentNode.bag.length;pos++)
 		{
	 		if(this.isSub(currentNode.bag[pos], name))
	 		{
	 		return currentNode.bag[pos];
	 		}
 		}
 	};

/**
*	OWL Support
*/
de.auster_gmbh.library.owl = {};

de.auster_gmbh.library.owl.createIntersectionOf = function(){;}
de.auster_gmbh.library.owl.createUnionOf = function(domainObject)
	{
		
		if(arguments.length < 1)throw new de.auster_gmbh.library.error.ArgumentIsMissingException("createUnionOf needs a domainObject!");
		if(arguments.length < 2) return domainObject;
		
		var base = arguments[0];
		var relation = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz('http://www.w3.org/2002/07/owl#unionOf');
		if(arguments[0] != undefined)de.auster_gmbh.semanticelement.semantic_web.addBag(base, relation);
		//.connect(secEl,firstEl);
		for(var i = 1;i < arguments.length;i++)
		{
			relation.add(arguments[i]);
		}
		if(arguments[0] != undefined)
			return base;
		else
			return relation;
	}
	
de.auster_gmbh.library.owl.createComplementOf = function(){;}

de.auster_gmbh.library.pedl = {};

de.auster_gmbh.library.pedl.createfunction = function(pedl_class, functionURI, param_URI_array, functionName, param_name_array, description, functionality)
	{
		
		var text = '';
		if(functionality != undefined)text = functionality.toString();
		var relation = null;
		var container = null;
		var param = null;
		var func = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz(
			'http://www.auster-gmbh.de/2006/05/pedl-lib#Instance-Function');

 			
		var graph = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 
			de.auster_gmbh.semanticelement.semantic_web.definitionTag );
 		graph.about(func,functionURI);
		

		if(functionality != undefined)
		de.auster_gmbh.semanticelement.semantic_web.setGraphLiteralObj(func, 'http://www.auster-gmbh.de/2006/05/pedl-lib#script', text );
			
		de.auster_gmbh.semanticelement.semantic_web.setGraphLiteralObj(func,'http://www.w3.org/2000/01/rdf-schema#label',functionName);
		
		for(var i = 0;param_URI_array.length > i; i++)
		{
			param = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz(
			'http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter');
			
			graph = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 
			de.auster_gmbh.semanticelement.semantic_web.definitionTag );
 			graph.about(param,param_URI_array[i]);
 			
 			de.auster_gmbh.semanticelement.semantic_web.setGraphLiteralObj(
 			param,'http://www.w3.org/2000/01/rdf-schema#label',param_name_array[i]);
 			
 			func.add(param);
			
			
			
		}
		
		pedl_class.add(func);
		

		
	}
	
de.auster_gmbh.library.pedl.callFunction = function(pedl_class, functionURI)
	{
		
		var relation = null;
		var container = null;
		
 			
		var graph = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 
			de.auster_gmbh.semanticelement.semantic_web.definitionTag );
 		graph.about(func,functionURI);
		
		//kann zu problemen 
		func.clazz.prototype.script_prototype = functionality;
		
		func.script = new functionality(
 			de.auster_gmbh.semanticelement.SOM(func));
		
		//de.auster_gmbh.semanticelement.semantic_web.setGraphLiteralObj(func, 'http://www.w3.org/2000/xmlns/#script', text );
			
		de.auster_gmbh.semanticelement.semantic_web.setGraphLiteralObj(func,'http://www.w3.org/2000/01/rdf-schema#label',functionName);
		
		for(var i = 0;pedl_class.bag.length > i;i++)
		{
			if(pedl_class.bag[i].getName() == 'http://www.auster-gmbh.de/2006/05/pedl-lib#hasFunction')
			{
			relation = pedl_class.bag[i];
			break;
			}
		}
		
		if(relation == undefined)
		{
			relation = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz(
			'http://www.auster-gmbh.de/2006/05/pedl-lib#hasFunction');
			pedl_class.add(relation);
		}

		for(i = 0;relation.bag.length > i;i++)
		{
			
			if(relation.bag[i].getName() == 'http://www.auster-gmbh.de/2006/05/pedl-lib#Functions')
			{
			
			container = relation.bag[i];
			break;
			}
		}
		
		if(container == undefined)
		{
			container = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz(
			'http://www.auster-gmbh.de/2006/05/pedl-lib#Functions');
			relation.add(container);
		}
		
		container.add(func);
		
		
	}
	
de.auster_gmbh.library.pedl.process = {};

de.auster_gmbh.library.pedl.process.addProcess = function( node ){}

de.auster_gmbh.library.pedl.process.process = function( name, node, param, start, intervall)
{

}
de.auster_gmbh.library.pedl.process.processListener = function( processObject ){}


de.auster_gmbh.library.access.AjaxListener = function()
{
	this.conectEvent = function(event, result)
	{
		
	};
}

/**
* load: 
* send:
* receive:
* abort:
* request:
*/
de.auster_gmbh.library.access.ajaxConnection = {
 
 	http: null,
 	id: null,
 	url: 'index.php',
 	pos: 0,
 	workstack: null,
 	xmltree: null,
 	mode: 'ONTOLOGY_STRUCTUR',
 	Observer: new Array()
 	,

 	
 	setMode: function(mymode)
 	{
 		this.mode = mymode;
 	},
 	
 	setContent: function(mycontent)
 	{
 		this.workstack = mycontent;
 	},
 	addContent: function(mycontent)
 	{
 		this.workstack.push(mycontent);
 	},
 	insertContent: function(mycontent)
 	{
 		var idx = this.request_index['workstack'] || 0;
 		this.workstack.splice(idx, 0, mycontent);
 	},
 	getObserver: function(myObserver)
 	{
 		//console.error(myObserver);
 	//alert('observer ' + myObserver);
 		this.Observer.push( myObserver );
 	}
 	,
 	removeObserver: function(myObserver)
 	{
 		var tmp = null;
 		var len = this.Observer.length;
 		for(var i = 0;i < len;i++)
 		{	
 			tmp = this.Observer.shift();			
 			if(tmp !== myObserver)
 				this.Observer.push(tmp);
 			
 		}
 		
 	}
 	,
 	
 	event: function(type , message)
 	{

 	}
 	,
 	toString: function(){return 'ajaxConnection';}
 	,
 	failcount: 0
 	,
 	status: {wait: 4, fail: 3, build_up: 2, in_progress: 1, ready: 0} /*Enums*/
 	,
 	loadprocess: null /*setInterval process */
	,
	current_status: 0 /*requeststatus*/
 	,
 	request_index: new Array()
 	,
 	xmlList : new Array()
 	,
 	load: function()
 	{

	
	if(de.auster_gmbh.library.access.ajaxConnection.current_status == this.status.fail)
	{
	
	 	if(this.failcount >= 10)
 	 	{
 	 	alert("abort on URI:" + this.workstack[this.request_index['workstack']] + ' (' + this.request_index['workstack'] + ')');
 	 	window.clearInterval(de.auster_gmbh.library.access.ajaxConnection.loadprocess);
		de.auster_gmbh.library.access.ajaxConnection.loadprocess = undefined;
 	 	this.request_index['workstack'] = this.workstack.length ;
 	 	}
 	 	  
 	 	
 
		
		/* einfach nur eingeschoben, Braucht Ueberarbeitung */
		
		//alert(' workstack ' + this.request_index['workstack'] + '(' + this.workstack.length + ') [Zeile 762]');
		if (this.workstack.length > this.request_index['workstack'])
		{
		//alert( this.workstack[this.request_index['workstack']] + " " + this.request_index['workstack'] + ' [Zeile 768}');
		var help = new Array();
		if(typeof(this.workstack[this.request_index['workstack']]) == 'string')
		{
		help['modus']= 'ONTOLOGY';
		help['URI'] = this.workstack[this.request_index['workstack']];
		}
/*
Inhalt unklar, die Methode gehoert zu einem Object qPComObject
*/



		if( Object.prototype.toString.call( this.workstack[this.request_index['workstack']] ) === '[object Array]' ) 
		{
				//	alert( "Zeile 781 wird ausgefuehrt -> " );
		help = this.workstack[this.request_index['workstack']];
		}



		if( this.workstack[this.request_index['workstack']] instanceof Object)		
		  help = this.workstack[this.request_index['workstack']].getConfigArray();
		
		de.auster_gmbh.library.access.ajaxConnection.current_status = this.status.in_progress;
		
		this.send(help);
		}
	


	

		
	
	
	}
	
	if(de.auster_gmbh.library.access.ajaxConnection.current_status == this.status.ready)
	{
	
		if(this.request_index['workstack'] == undefined) this.request_index['workstack'] = 0;
	
		if(this.workstack.length <= this.request_index['workstack'])
		{
			
			this.workstack.length = this.request_index['workstack'];
			window.clearInterval(de.auster_gmbh.library.access.ajaxConnection.loadprocess);
			de.auster_gmbh.library.access.ajaxConnection.loadprocess = undefined;
			
		}

		if (this.workstack.length > this.request_index['workstack'])
		{
		//alert( this.workstack[this.request_index['workstack']] + " " + this.request_index['workstack'] + ' [Zeile 768}');
		var help = new Array();
		if(typeof(this.workstack[this.request_index['workstack']]) == 'string')
		{
		help['modus']= 'ONTOLOGY';
		help['URI'] = this.workstack[this.request_index['workstack']];
		bag_for_uri.add(
			de.auster_gmbh.semanticelement.semantic_web.createLiteralObj(this.workstack[this.request_index['workstack']])
			);
		}
/*
Inhalt unklar, die Methode gehoert zu einem Object qPComObject
*/

		if( Object.prototype.toString.call( this.workstack[this.request_index['workstack']] ) === '[object Array]' ) 
		{
					//alert( "Zeile 781 wird ausgefuehrt -> " );
		help = this.workstack[this.request_index['workstack']];
		}

				//alert( "Zeile 786 wird ausgefuehrt -> " );

		if( this.workstack[this.request_index['workstack']] instanceof Object)		
		  help = this.workstack[this.request_index['workstack']].getConfigArray();


		this.send(help);
		
		
		
		
		if(!de.auster_gmbh.library.access.ajaxConnection.loadprocess)de.auster_gmbh.library.access.ajaxConnection.loadprocess = window.setInterval("de.auster_gmbh.library.access.ajaxConnection.load()", 3000);

		de.auster_gmbh.library.access.ajaxConnection.current_status = this.status.in_progress;
		return 0;
		}

		window.clearInterval(de.auster_gmbh.library.access.ajaxConnection.loadprocess);
		de.auster_gmbh.library.access.ajaxConnection.loadprocess = undefined;
		
		
		
		

		
	}
	
	if(de.auster_gmbh.library.access.ajaxConnection.current_status == this.status.build_up)
	{
			
			if(de.auster_gmbh.library.access.ajaxobj != undefined)
 	 		de.auster_gmbh.library.access.ajaxobj.build_structure();
			else
			de.auster_gmbh.library.access.ajaxConnection.build_structure();
		
		//de.auster_gmbh.library.access.ajaxConnection.current_status = this.status.ready;
	}
	

 	},
 	
 	build_structure: function()
 	{
 	 var dataevent = new de.auster_gmbh.library.tools.eventObject('de.auster_gmbh.library.access.ajaxConnection.request',  this.http ,this.xmlList[this.xmlList.length - 1]);

 	 	try {
 	 		for( var k in this.Observer ){
 	 			this.Observer[k].fireEvent('Controlcenter.buildUp',dataevent);
 	 		}
 	 	} catch(e) {
 	 		console.error('[build_structure] processing error:', e.errorText || e.message || e);
 	 	}

		de.auster_gmbh.library.access.ajaxConnection.current_status = this.status.ready;
 	}
 	,
 	send: function( post )
 		{
 		
 		
 		
 		
 			de.auster_gmbh.library.access.ajaxConnection.current_status = this.status.wait;
 			if (window.XMLHttpRequest) {
				this.http = new XMLHttpRequest();
				
			} else if (window.ActiveXObject) {
				this.http = new ActiveXObject("Microsoft.XMLHTTP");
			}

			if (this.http != null) {
				//alert(post);
				var param = '';
				var delimiter = '';
				for (var key in post)
				{
					param += delimiter + key + '=' + post[key];
					delimiter = '&';
				}
				

				console.log('POST-' + this.url + '?i=__system:' + param);
				this.http.open('POST', this.url + '?i=__system', true);
				this.http.request_obj = this;
				this.http.onreadystatechange = this.receive;
				this.http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

				
				this.http.send(param);
			
				de.auster_gmbh.library.access.ajaxConnection.id = window.setTimeout("de.auster_gmbh.library.access.ajaxConnection.abort()", 5500);
				
				
			}
			else
			{
				alert('technical problems (Zeile 923, funct.lib.js)');
			}
			
 		},
 	
 	 receive: function()
 	 	{
 	 		
 	 		
			if(de.auster_gmbh.library.access.ajaxobj != undefined)
 	 		de.auster_gmbh.library.access.ajaxobj.xmltree = de.auster_gmbh.library.access.ajaxobj.request(this);
			else
			this.xmltree = de.auster_gmbh.library.access.ajaxConnection.request(this);
 	 		

 	 	
 	 	},
 	
 	
 	//function for abort after timeout
 	 abort: function()
 	 {
 	 	if(this.http)
 	 	  this.http.abort();
 	 	  
 	 	  //this.request_index['workstack']--;
 	 	  this.failcount++;

 	 	  
 	 	de.auster_gmbh.library.access.ajaxConnection.current_status = this.status.fail;	
 	 },
 	 
 	 request: function(http)
 	 {
	// 0 - uninitialized
	// 1 - loading
	// 2 - loaded
	// 3 - interactice
	// 4 - complete

   	if (http.readyState == 4) 
   		{
   		
   		clearTimeout(de.auster_gmbh.library.access.ajaxConnection.id);
   		this.request_index['workstack']++;
   		//throw(this.request_index['workstack']);
   		this.failcount = 0;
      		var xmldoc;
      		var text = http.responseText;

      		if(text == "")return null;
      		console.debug(text);



      		if((text.charAt(0) != '<') && false)
      		{

      					xmldoc = new de.auster_gmbh.library.parser.csv(text,';',"\n");
      					alert("ist csv (Zeile 994, funct_lib.js)");


      		}
      		else
      		{
      			// Inject missing xmlns: declarations that qPortal omits for non-factory namespaces
      			text = de.auster_gmbh.library.xml_util.fixMissingNamespaces(text);

      			if( typeof DOMParser != 'undefined' )
      				{
      					//Mozilla, firefox and related browser
      					xmldoc = (new DOMParser()).parseFromString(text, 'application/xml');
      				}
      			else if(typeof ActiveObject != 'undefined')
      				{
      					//internet explorer
      					xmldoc = XML.newDocument();


      				}

      			var root = xmldoc.documentElement;
      			var x = root.childNodes;


      			if(root.nodeName == 'parsererror') throw("Fehler aufgetreten:\n" + root.childNodes[0].nodeValue + ' ' + text);
      			}

			
			this.xmlList[this.xmlList.length] = xmldoc;

			
			de.auster_gmbh.library.access.ajaxConnection.current_status = this.status.build_up; //ready
			
			
			return xmldoc;		
 	 	}
 	 }
 	 };
 	 
de.auster_gmbh.library.access.execute_request = function( qPComObject )
{
	de.auster_gmbh.library.access.ajaxConnection.addContent(qPComObject);
	de.auster_gmbh.library.access.ajaxobj.load();
}
 	 
de.auster_gmbh.library.controlelements = {}

de.auster_gmbh.library.controlelements.elementArray = new Array();

de.auster_gmbh.library.controlelements.controllvis = null;

de.auster_gmbh.library.controlelements.themeArray = new Array();

de.auster_gmbh.library.controlelements.controlbar = function(graphic, width, height)
{
de.auster_gmbh.library.controlelements.elementArray[0] = new Array();
de.auster_gmbh.library.controlelements.elementArray[0][0] = width;
de.auster_gmbh.library.controlelements.elementArray[0][1] = height;

var mysvg = document.getElementsByTagNameNS("http://www.w3.org/2000/svg","svg")[0];

//var mysvg = document.getElementsByTagName("svg")[0];
mysvg.setAttributeNS(null, 'height', height.toString() + "px" );
mysvg.setAttributeNS(null, 'width', width.toString() + "px" );


 graphic.setAttributeNS(null, 'd', 'M 0,167.81876 L 0,0 L 51.912148,0 L 97.681758,0 L 97.681758,21.855674  L 97.681758,28.172795 L  71.161049,39.961704 L 44.640341,51.750586 L 44.640341,185.92478 L 44.640341,363.92478 L 22,385.92478 L 22,405.92478 L 44.640341,427.92478 L 44.640341,' + height + '.0000 L 0,' + height + '.0000 z');
 

}
/**

adds new sizes of the window and take always the biggest one
@param : graphic := primary Pageobject
@param : width := new width 
@param : height := new height
@param : pos := number of element in list

*/
de.auster_gmbh.library.controlelements.controlbaradd = function(graphic, width, height,pos)
{

de.auster_gmbh.library.controlelements.elementArray[pos + 1] = new Array();
de.auster_gmbh.library.controlelements.elementArray[pos + 1][0] = width;
de.auster_gmbh.library.controlelements.elementArray[pos + 1][1] = height;
var max = new Array();
max[0] = 0;
max[1] = 0;
for (i = 0;i < de.auster_gmbh.library.controlelements.elementArray.length;i++)
{
if(max[0] < de.auster_gmbh.library.controlelements.elementArray[i][0])
	max[0] = de.auster_gmbh.library.controlelements.elementArray[i][0];

if(max[1] < de.auster_gmbh.library.controlelements.elementArray[i][1])
	max[1] = de.auster_gmbh.library.controlelements.elementArray[i][1];
}
var x;
for (n in de.auster_gmbh.library.controlelements.themeArray)
{
if(de.auster_gmbh.library.controlelements.themeArray[n] != undefined )
{
if(max[0] < de.auster_gmbh.library.controlelements.themeArray[n][0])
	max[0] = de.auster_gmbh.library.controlelements.themeArray[n][0];

if(max[1] < de.auster_gmbh.library.controlelements.themeArray[n][1])
	max[1] = de.auster_gmbh.library.controlelements.themeArray[n][1];
}
}


var mysvg = document.getElementsByTagNameNS("http://www.w3.org/2000/svg","svg")[0];
mysvg.setAttributeNS(null, 'height', max[1].toString() + "px" );
mysvg.setAttributeNS(null, 'width', max[0].toString() + "px" );

 graphic.setAttributeNS(null, 'd', 'M 0,167.81876 L 0,0 L 51.912148,0 L 97.681758,0 L 97.681758,21.855674  L 97.681758,28.172795 L  71.161049,39.961704 L 44.640341,51.750586 L 44.640341,185.92478 L 44.640341,' + (window.innerHeight - 125) /*363.92478*/ + ' L 22,' 
 + (window.innerHeight - 102) /*385.92478*/ + ' L 22,' + (window.innerHeight - 82) /*405.92478*/ +  'L 44.640341,' + (window.innerHeight - 60) /*427.92478*/ +  ' L 44.640341,' + max[1] + '.0000 L 0,' + max[1] + '.0000 z');
 
//

}

de.auster_gmbh.library.controlelements.controlbarThemeadd = function(graphic, width, height,name)
{

de.auster_gmbh.library.controlelements.themeArray[name] = new Array();
de.auster_gmbh.library.controlelements.themeArray[name][0] = width;
de.auster_gmbh.library.controlelements.themeArray[name][1] = height;
var max = new Array();
max[0] = 0;
max[1] = 0;
for (i = 0;i < de.auster_gmbh.library.controlelements.elementArray.length;i++)
{
if(max[0] < de.auster_gmbh.library.controlelements.elementArray[i][0])
	max[0] = de.auster_gmbh.library.controlelements.elementArray[i][0];

if(max[1] < de.auster_gmbh.library.controlelements.elementArray[i][1])
	max[1] = de.auster_gmbh.library.controlelements.elementArray[i][1];
}
var x;
for (n in de.auster_gmbh.library.controlelements.themeArray)
{
if(de.auster_gmbh.library.controlelements.themeArray[n] != undefined )
{
if(max[0] < de.auster_gmbh.library.controlelements.themeArray[n][0])
	max[0] = de.auster_gmbh.library.controlelements.themeArray[n][0];

if(max[1] < de.auster_gmbh.library.controlelements.themeArray[n][1])
	max[1] = de.auster_gmbh.library.controlelements.themeArray[n][1];
}
}

var mysvg = document.getElementsByTagName("svg")[0];
mysvg.setAttributeNS(null, 'height', max[1].toString() + "px" );
mysvg.setAttributeNS(null, 'width', max[0].toString() + "px" );

 graphic.setAttributeNS(null, 'd', 'M 0,167.81876 L 0,0 L 51.912148,0 L 97.681758,0 L 97.681758,21.855674  L 97.681758,28.172795 L  71.161049,39.961704 L 44.640341,51.750586 L 44.640341,185.92478 L 44.640341,' + (window.innerHeight - 125) /*363.92478*/ + ' L 22,' 
 + (window.innerHeight - 102) /*385.92478*/ + ' L 22,' + (window.innerHeight - 82) /*405.92478*/ +  'L 44.640341,' + (window.innerHeight - 60) /*427.92478*/ +  ' L 44.640341,' + max[1] + '.0000 L 0,' + max[1] + '.0000 z');
 
//

}

de.auster_gmbh.library.controlelements.controlbarThemeremove = function(graphic,name)
{

de.auster_gmbh.library.controlelements.themeArray[name] = undefined;
var max = new Array();
max[0] = 0;
max[1] = 0;
for (i = 0;i < de.auster_gmbh.library.controlelements.elementArray.length;i++)
{
if(max[0] < de.auster_gmbh.library.controlelements.elementArray[i][0])
	max[0] = de.auster_gmbh.library.controlelements.elementArray[i][0];

if(max[1] < de.auster_gmbh.library.controlelements.elementArray[i][1])
	max[1] = de.auster_gmbh.library.controlelements.elementArray[i][1];
}
var x;

for (n in de.auster_gmbh.library.controlelements.themeArray)
{
if(de.auster_gmbh.library.controlelements.themeArray[n] != undefined )
{
if(max[0] < de.auster_gmbh.library.controlelements.themeArray[n][0])
	max[0] = de.auster_gmbh.library.controlelements.themeArray[n][0];

if(max[1] < de.auster_gmbh.library.controlelements.themeArray[n][1])
	max[1] = de.auster_gmbh.library.controlelements.themeArray[n][1];
}
}

var mysvg = document.getElementsByTagName("svg")[0];
mysvg.setAttributeNS(null, 'height', max[1].toString() + "px" );
mysvg.setAttributeNS(null, 'width', max[0].toString() + "px" );

 graphic.setAttributeNS(null, 'd', 'M 0,167.81876 L 0,0 L 51.912148,0 L 97.681758,0 L 97.681758,21.855674  L 97.681758,28.172795 L  71.161049,39.961704 L 44.640341,51.750586 L 44.640341,185.92478 L 44.640341,' + (window.innerHeight - 125) /*363.92478*/ + ' L 22,' 
 + (window.innerHeight - 102) /*385.92478*/ + ' L 22,' + (window.innerHeight - 82) /*405.92478*/ +  'L 44.640341,' + (window.innerHeight - 60) /*427.92478*/ +  ' L 44.640341,' + max[1] + '.0000 L 0,' + max[1] + '.0000 z');
 
//

}

de.auster_gmbh.library.controlelements.createPrimaryPanel =  function( arrayOfFields , headline , parentObj , pfad  )
 	{
 	
 	
 	
 		var full_length = arrayOfFields.length;
 		var color = '#3300ff';
 		var bgcolor = '#264e87';
 		var bg2color;
 		var addTextPadding = 0;
 		var pic = null;
 		var clazz = null;
 
	de.auster_gmbh.library.controlelements.controlbaradd(pfad.mainGraphic, 1000,40 + 53 + (full_length * 60) + 20 , 0);
 		
 		var mycontainer = new de.auster_gmbh.graphicelement.visualElement();
		
		var moveingInPanel = new Array(2);
		moveingInPanel[0] = 0;
		moveingInPanel[1] = 0;
		
		var existInPanel = new Array(3);
		existInPanel[0] = false;
		existInPanel[1] = false;
		existInPanel[2] = false;
		
	
		
		var mysvg = new de.auster_gmbh.graphicelement.svg.SVGPath(parentObj,pfad);
			
		mysvg.transit(45,40);
		mysvg.setWayPoint(0,0);
		mysvg.setWayPoint(300,0);
		mysvg.setWayPoint(320,20);
		mysvg.setWayPoint(320,53 + (full_length * 60));
		mysvg.setWayPoint(0,153 + (full_length * 60));
		mysvg.setWayPoint(0,0);
		mysvg.setStyle('fill:#264e87;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1');
		mysvg.setID('control');
			
		mycontainer.add(mysvg);
		
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGText(parentObj,pfad);
		mysvg.transit(50,40);
		mysvg.setWayPoint(5,30);

		mysvg.setText(headline);
		mysvg.setStyle('font-size:medium;font-family:Bitstream Vera Sans, Arial; font-weight:normal;font-style:normal;stroke:#8794a6;stroke-width:1;fill:#8794a6');
		mysvg.setID('headline1');
		mycontainer.add(mysvg);
		
		//button	
		for(iter = 0;iter < arrayOfFields.length;iter++)
		{
		
		if(arrayOfFields[iter][6].length == 0)
		{
		bg2color = '#002e7a';
 		}
		else
		{
		bg2color = arrayOfFields[iter][6];
		}
		
		
		existInPanel[1] = (arrayOfFields[iter][3].length != 0);
		existInPanel[2] = (arrayOfFields[iter][4].length != 0);
		if(existInPanel[0] = existInPanel[1] || existInPanel[2])moveingInPanel[0] = 10;
		
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGPath(parentObj,pfad);
			

		if(arrayOfFields[iter][1].substr(0, 6) == 'fincre')color = '#00ff00';
		if(arrayOfFields[iter][1].substr(0, 6) == 'create')color = '#000099';
		if(arrayOfFields[iter][1].substr(0, 6) == 'finpos')color = '#ff0000';
		if(arrayOfFields[iter][1].substr(0, 6) == 'posnum')color = '#8794a6';

			
		mysvg.transit(50,90 + (iter * 60));
		mysvg.setWayPoint(0,0);
		mysvg.setWayPoint(300,0);
		mysvg.setWayPoint(300,50);
		mysvg.setWayPoint(0,50);
		mysvg.setWayPoint(0,0);
			
		mysvg.setStyle('fill:' + bg2color + ';stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1');
		mysvg.setID(arrayOfFields[iter][1]);
		mycontainer.add(mysvg);
		
		if(arrayOfFields[iter][7] != undefined)
		{
		pic = arrayOfFields[iter][7].getNewObject(parentObj,pfad);
		pic.setWayPoint(5,15);
		pic.transit(50,87 + (iter * 60)  - moveingInPanel[0]);
		pic.setID(arrayOfFields[iter][1]);
		mycontainer.add(pic);

		addTextPadding = 25;
		}
		else
		{
		addTextPadding = 0;
		}
		
		
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGText(parentObj,pfad);
		mysvg.transit(50  + addTextPadding,90 + (iter * 60) - moveingInPanel[0]);
		mysvg.setWayPoint(5,30);

		mysvg.setText(arrayOfFields[iter][0]);
		mysvg.setStyle('font-size:medium;font-family:Bitstream Vera Sans, Arial; font-weight:normal;font-style:normal;stroke:'+ color + ';stroke-width:1;fill:'+ color);
		mysvg.setID(arrayOfFields[iter][1]);
		mycontainer.add(mysvg);
		
		// has a taxom and a button more
		if( existInPanel[0] && (arrayOfFields[iter][2].length != 0) )
		{
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGImage(parentObj,pfad);
			
		mysvg.transit(50,90 + (iter * 60) - 10);
		mysvg.setWayPoint(5,35);
		mysvg.setDimension(21,21); 
		mysvg.setImage('img/taxom.png');
			

		mysvg.setID(arrayOfFields[iter][2]);
		mycontainer.add(mysvg);
		moveingInPanel[1] += 30;
		}
		
		if( existInPanel[1] )
		{
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGImage(parentObj,pfad);
			
		mysvg.transit(50,90 + (iter * 60) - 10);
		mysvg.setWayPoint(5 + moveingInPanel[1] ,35);
		mysvg.setDimension(21,21); 
		mysvg.setImage('img/sbag.png');
			
		
		mysvg.setID(arrayOfFields[iter][3]);
		mycontainer.add(mysvg);
		moveingInPanel[1] += 30;
		}
		
		if( existInPanel[2] )
		{
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGImage(parentObj,pfad);
			
		mysvg.transit(50,90 + (iter * 60) - 10);
		mysvg.setWayPoint(5 + moveingInPanel[1],35);
		mysvg.setDimension(21,21); 
		mysvg.setImage('img/attrib.png');
			

		mysvg.setID(arrayOfFields[iter][4]);
		mycontainer.add(mysvg);
		moveingInPanel[1] += 30;
		}
		
		if( arrayOfFields[iter][5].length != 0 )
		{
		
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGImage(parentObj,pfad);
			
		mysvg.transit(50,90 + (iter * 60) - 10);
		mysvg.setWayPoint(5 + moveingInPanel[1],35);
		mysvg.setDimension(21,21); 
		mysvg.setImage('img/ontology.png');
			

		mysvg.setID(arrayOfFields[iter][5]);
		mycontainer.add(mysvg);
		}
		
		moveingInPanel[1] = 0;
		moveingInPanel[0] = 0;
	//bottom end
	}
	

		mysvg = new de.auster_gmbh.graphicelement.svg.SVGPath(parentObj,pfad);
			
		mysvg.transit(50,70);
		mysvg.setWayPoint(198.29762 + 90 ,65.860403 - 70);
		mysvg.setWayPoint(190.58577 + 90 ,73.734851 - 70);
		mysvg.setWayPoint(198.29762 + 90 ,82.646873 - 70); 
		mysvg.setWayPoint(198.29762 + 90 ,78.577423 - 70); 
		mysvg.setWayPoint(201.55508 + 90 ,78.577423 - 70); 
		mysvg.setWayPoint(201.55508 + 90 ,82.646873 - 70); 
		mysvg.setWayPoint(209.06784 + 90 ,74.127283 - 70); 
		mysvg.setWayPoint(201.55508 + 90 ,65.860403 - 70); 
		mysvg.setWayPoint(201.55508 + 90 ,69.929853 - 70); 
		mysvg.setWayPoint(198.29762 + 90 ,69.929853 - 70); 
		mysvg.setWayPoint(198.29762 + 90 ,65.860403 - 70);
		
		mysvg.setStyle('fill:#264e87;fill-rule:evenodd;stroke:#ffffff;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1');
		mysvg.setID('foldingbutton');
		mycontainer.add(mysvg);
			


			
		mycontainer.init();
		return mycontainer;
 		
 	};
 	
de.auster_gmbh.library.controlelements.createNPanel =  function( n , arrayOfFields , headline , parentObj , pfad )
 	{


 		
 		var full_length = arrayOfFields.length;
 		var add_x = ((n % 3) * 320) + (Math.floor(n/3) * 10);
 		var add_y = Math.floor(n/3) * 50;
 		var color = '#3300ff';
 		var bgcolor = '#264e87';
 		var addTextPadding = 0;
 		var pic = null;
 		var clazz = null;
 		if((Math.floor(n/3) % 2) == 1)bgcolor = '#174570';
 		
 		de.auster_gmbh.library.controlelements.controlbaradd(pfad.mainGraphic, 1000,40 + add_y + 53 + (full_length * 60) + 20 , n);
 		
 		var moveingInPanel = new Array(2);
		moveingInPanel[0] = 0;
		moveingInPanel[1] = 0;
		
		var existInPanel = new Array(3);
		existInPanel[0] = false;
		existInPanel[1] = false;
		existInPanel[2] = false;
 		
 		var mycontainer = new de.auster_gmbh.graphicelement.visualElement();
			
		var mysvg = new de.auster_gmbh.graphicelement.svg.SVGPath(parentObj,pfad);
			
		mysvg.transit(45 + add_x,40 + add_y);
		mysvg.setWayPoint(0,0);
		mysvg.setWayPoint(300,0);
		mysvg.setWayPoint(320,20);
		mysvg.setWayPoint(320,53 + (full_length * 60));
		mysvg.setWayPoint(0,53 + (full_length * 60));
		mysvg.setWayPoint(0,0);
		mysvg.setStyle('fill:' + bgcolor + ';stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1');
		mysvg.setID('control');
			
		mycontainer.add(mysvg);
		
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGText(parentObj,pfad);
		mysvg.transit(50  + add_x,40 + add_y);
		mysvg.setWayPoint(5,30);

		mysvg.setText(headline);
		mysvg.setStyle('font-size:medium;font-family: Arial; font-weight:normal;font-style:normal;stroke:#8794a6;stroke-width:1;fill:#8794a6');
		mysvg.setID('headline1');
		mycontainer.add(mysvg);
		
		//button	
		for(iter = 0;iter < arrayOfFields.length;iter++)
		{
		
		existInPanel[1] = (arrayOfFields[iter][3].length != 0);
		existInPanel[2] = (arrayOfFields[iter][4].length != 0);
		if(existInPanel[0] = existInPanel[1] || existInPanel[2])moveingInPanel[0] = 10;
		
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGPath(parentObj,pfad);
		//alert(arrayOfFields[iter][1].substr(0, 6));
		if(arrayOfFields[iter][6].length == 0)
		{
		if(arrayOfFields[iter][1].substr(0, 6) == 'fincre')color = '#00ff00';
		if(arrayOfFields[iter][1].substr(0, 6) == 'create')color = '#000099';
		if(arrayOfFields[iter][1].substr(0, 6) == 'finpos')color = '#ff0000';
		if(arrayOfFields[iter][1].substr(0, 6) == 'posnum')color = '#8794a6';
		if(arrayOfFields[iter][1].substr(0, 6) == 'shoall')color = '#8794d6';
		}
		else
		{
			color = arrayOfFields[iter][6];
		}
		
		mysvg.transit(50 + add_x,90 + (iter * 60) + add_y);
		mysvg.setWayPoint(0,0);
		mysvg.setWayPoint(300,0);
		mysvg.setWayPoint(300,50);
		mysvg.setWayPoint(0,50);
		mysvg.setWayPoint(0,0);
			
		mysvg.setStyle('fill:#002e7a;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1');
		mysvg.setID(arrayOfFields[iter][1]);
		mycontainer.add(mysvg);
			
;
		if(arrayOfFields[iter][7] != undefined)
		{
		

		pic = arrayOfFields[iter][7].getNewObject(parentObj,pfad);
		pic.setWayPoint(5,15);
		pic.transit(50 + add_x,90 + (iter * 60) + add_y - moveingInPanel[0]);
		pic.setID(arrayOfFields[iter][1]);
		mycontainer.add(pic);

		addTextPadding = 25;
		}
		else
		{
		addTextPadding = 0;
		}
			
		if(! (typeof arrayOfFields[iter][0] === 'object'))
		{

		
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGText(parentObj,pfad);
		mysvg.transit(50  + addTextPadding + add_x,90 + (iter * 60) + add_y - moveingInPanel[0]);
		mysvg.setWayPoint(5,30);

		mysvg.setText(arrayOfFields[iter][0]);
		mysvg.setStyle('font-size:medium;font-family: Arial; font-weight:normal;font-style:normal;stroke:' + color + ';stroke-width:1;fill:' + color + ';');
		mysvg.setID(arrayOfFields[iter][1]);
		mycontainer.add(mysvg);
		}
		else
		{
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGText(parentObj,pfad);
		mysvg.transit(50  + add_x,90 + (iter * 60) + add_y - moveingInPanel[0]);
		mysvg.setWayPoint(5,30);

		mysvg.setText(arrayOfFields[iter][0]['point']);
		mysvg.setStyle('font-size:medium;font-family: Arial; font-weight:normal;font-style:normal;stroke:' + color + ';stroke-width:1;fill:' + color + ';');
		mysvg.setID(arrayOfFields[iter][1]);
		mycontainer.add(mysvg);
		
			for(iter2 = 0;iter2 < arrayOfFields[iter][0]['line'].length;iter2++)
			{
				mysvg = new de.auster_gmbh.graphicelement.svg.SVGText(parentObj,pfad);
				mysvg.transit(80  + add_x,70 + (iter * 60) + add_y + (iter2 * 20) - moveingInPanel[0]);
				mysvg.setWayPoint(5,30);

				mysvg.setText(arrayOfFields[iter][0]['line'][iter2]);
				mysvg.setStyle('font-size:10px;font-family: Arial; font-weight:normal;font-style:normal;stroke:' + color + ';stroke-width:1;fill:' + color + ';');
				mysvg.setID(arrayOfFields[iter][1]);
				mycontainer.add(mysvg);
			}
		
		}
		
		if( existInPanel[0] && (arrayOfFields[iter][2].length != 0) )
		{
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGImage(parentObj,pfad);
		mysvg.transit(50 + addTextPadding + add_x,90 + (iter * 60) + add_y - moveingInPanel[0]);	
		
		mysvg.setWayPoint(5,35);
		mysvg.setDimension(21,21); 
		mysvg.setImage('img/taxom.png');
			

		mysvg.setID(arrayOfFields[iter][2]);
		mycontainer.add(mysvg);
		moveingInPanel[1] += 30;
		}
		
		if( existInPanel[1] )
		{
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGImage(parentObj,pfad);
			
		mysvg.transit(50 + addTextPadding + add_x,90 + (iter * 60) + add_y - moveingInPanel[0]);
		mysvg.setWayPoint(5 + moveingInPanel[1] ,35);
		mysvg.setDimension(21,21); 
		mysvg.setImage('img/sbag.png');
			

		mysvg.setID(arrayOfFields[iter][3]);
		mycontainer.add(mysvg);
		moveingInPanel[1] += 30;
				
		}
		
		if( existInPanel[2] )
		{
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGImage(parentObj,pfad);
			
		mysvg.transit(50 + addTextPadding + add_x,90 + (iter * 60) + add_y - moveingInPanel[0]);
		mysvg.setWayPoint(5 + moveingInPanel[1] ,35);
		mysvg.setDimension(21,21); 
		mysvg.setImage('img/attrib.png');
			

		mysvg.setID(arrayOfFields[iter][4]);
		mycontainer.add(mysvg);
		moveingInPanel[1] += 30;
		}
		
		if(  arrayOfFields[iter][5].length != 0  )
		{
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGImage(parentObj,pfad);
			
		mysvg.transit(50 + addTextPadding + add_x,90 + (iter * 60) + add_y - moveingInPanel[0]);
		mysvg.setWayPoint(5 + moveingInPanel[1],35);
		mysvg.setDimension(21,21); 
		mysvg.setImage('img/ontology.png');
			

		mysvg.setID(arrayOfFields[iter][5]);
		mycontainer.add(mysvg);
		}
		
		moveingInPanel[1] = 0;
		moveingInPanel[0] = 0;
	//bottom end
	}

			
		mycontainer.init();
		return mycontainer;
 		
 	};
 	
de.auster_gmbh.library.controlelements.create_graph_field =  function( message, semref, container )
	{
		  		var div = message.id.lastIndexOf('_');
  				var num = parseInt(message.id.substr(7, div - 7));
  				var n = parseInt(message.id.substr(div + 1,message.id.length - (div + 1)));
  				var createNPanel = de.auster_gmbh.library.controlelements.createNPanel;
  				
  				
  			semref.findID(1,num);
  				
  				
			var nodemany = semref.childmany(1);
			var help = new Array();
			
			
			
			semref.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,true);
			var headline = semref.curValue(1);
			semref.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,false);
			
			de.auster_gmbh.library.controlelements.functions.listTree(semweb, help,n);

			


  				
					if(container.length > n)
  					for(iter2 = (container.length - 1) ; iter2 >= n ;iter2--)
  					{
  						
  						container[iter2].remove();
  						container.pop();
  					}
  					
 
  				
  				container[n] = createNPanel (n, help , headline , this.mySVGObj , this.pfad);
	}
	
   	de.auster_gmbh.library.controlelements.functions = {};
 		
  	de.auster_gmbh.library.controlelements.functions.listTree =  function( semweb, dataArray , n , graphs)
  	{
  			var nodemany = semweb.childmany(1);
  			//console.error(dataArray);
			var myid = 0;
			var many = 0;
			var secondaryObject = null; 
			
			for(it = 0;it < nodemany; it++)
			{
				semweb.childNode(1,it);
				
				dataArray[it] = new Array();	
				
				myid = semweb.getID(1);
				many = semweb.childmany(1);
				
				secondaryObject = semweb.getRef1();
				
				dataArray[it][2] = '';
				dataArray[it][3] = '';
				dataArray[it][5] = '';
				dataArray[it][6] = '';
				dataArray[it][7] = semweb.givesIcon(1,false);
				

				
				if(many == 0)
				{
				
					if(semweb.manyBagEntry(1) == 0)
					{	
					dataArray[it][1] = 'finpos_' + myid + '_' + (n + 1) ;
					dataArray[it][2] = '' ;
					}
					else
					{
					dataArray[it][1] = 'hasbag_' + myid + '_' + (n + 1) ;
					dataArray[it][2] = '' ;
					}
					
				
				}
				else
				{
				dataArray[it][1] = 'posnum_' + myid + '_' + (n + 1) ;
				dataArray[it][2] = 'posnum_' + myid + '_' + (n + 1) ;
				}
				
				

				if(semweb.manyBagEntry(1) != 0)
				{	
					

					
					dataArray[it][3] = 'hasbag_' + myid + '_' + (n + 1) ;
					dataArray[it][6] = '#8899EE';

				}
				

				
					if( graphs )  
					dataArray[it][4] = 'shogra_' + myid + '_' + (n + 1) ;
					else
					dataArray[it][4] = '';
					
				
				
					
				
					
				semweb.findID(1,myid);
				
				dataArray[it][0] = semweb.givesLabel(1);
				/*
				semweb.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,true);
				dataArray[it][0] = semweb.curValue(1);
				semweb.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,false);
 				*/
				semweb.parentNode(1,0);
				
				 
			}
  	}
  	
  	  	de.auster_gmbh.library.controlelements.functions.listGraphs =  function( semweb, dataArray , n , graphs, forward)
  	{
  			
  			var num = 2;
  			var color = '#3399EE';
  			
  			if(forward)
  			{
  				num = 1;
  				color = '#CC99EE';
  			}
  		
  			var nodemany = semweb.refmany(1,num);
  			var graphArray = semweb.refIndex(1,num);
  			
			var myid = 0;
			var many = 0;
			
			
			var base = semweb.getRef1();
			var curidx = dataArray.length;
			for(it = 0;it < nodemany.length; it++)
			{
				many = graphArray[nodemany[it]];
				
				for(it2 = 0;it2 < many; it2++)
				{
				
				//alert(' ' + it2 + '  ' + many);
				semweb.moveinWeb(1,nodemany[it],it2,forward);
				
				dataArray[curidx] = new Array();	
				
				myid = semweb.getID(1);
				
				
				dataArray[curidx][1] = 'shoall_' + myid + '_' + (n + 1) ;
				dataArray[curidx][2] = '';
				dataArray[curidx][3] = '';
				dataArray[curidx][4] = '';
				dataArray[curidx][5] = '';
				dataArray[curidx][6] = color;
				dataArray[curidx][7] = undefined;
				
				dataArray[curidx][0] = new Array();
				dataArray[curidx][0]['point'] = it2;
				dataArray[curidx][0]['line'] = new Array();
				dataArray[curidx][0]['line'][0] = nodemany[it];
				dataArray[curidx][0]['line'][1] = semweb.curValue(1);
				
				
				//dataArray[curidx][0] = nodemany[it] + " " + it2  + " " + semweb.curValue(1);
				
				//dataArray[curidx][0].context = it2;
				/*
				dataArray[curidx][0].context['point'] = it2;
				dataArray[curidx][0].context['line'] = new Array();
				dataArray[curidx][0].context['line'][0] = nodemany[it];
				dataArray[curidx][0].context['line'][1] = semweb.curValue(1);
				*/
				//alert(dataArray[curidx][0].context);
				curidx++;
				//semweb.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,true);
				//dataArray[it][0] = semweb.curValue(1);
				//semweb.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,false);
 				
				semweb.setRef1(base);
				
				} 
			}
			
  	}
  	
   	de.auster_gmbh.library.controlelements.functions.listBag =  function(  semweb, dataArray, n , graphs)
   	{
   		
   		
   		
   			//-------------------------------------------------------------------------------
			// requirement semweb,help
			// return help
			//-------------------------------------------------------------------------------
			

			var nodemany = semweb.manyBagEntry(1);
			var myid = 0;
			var many = 0;
			var baseElement = semweb.getRef1();
			for(it = 0;it < nodemany; it++)
			{
				semweb.getBagEntryObj(1, it);
				dataArray[it] = new Array();	
				
				myid = semweb.getID(1);
				many = semweb.childmany(1);
				
				
				dataArray[it][2] = '';
				dataArray[it][3] = '';
				dataArray[it][5] = '';
				dataArray[it][6] = '';
				dataArray[it][7] = semweb.givesIcon(1,false);
				
				
				if(many == 0)
				{
				
					if(semweb.manyBagEntry(1) == 0)
					{	
					dataArray[it][1] = 'finpos_' + myid + '_' + (n + 1) ;
					dataArray[it][2] = '' ;
					}
					else
					{
					dataArray[it][1] = 'hasbag_' + myid + '_' + (n + 1) ;
					dataArray[it][2] = '' ;
					}
					
				
				}
				else
				{
				dataArray[it][1] = 'posnum_' + myid + '_' + (n + 1) ;
				dataArray[it][2] = 'posnum_' + myid + '_' + (n + 1) ;
				}
				
				
								
				if(semweb.manyBagEntry(1) != 0)
				{	
					
					dataArray[it][3] = 'hasbag_' + myid + '_' + (n + 1) ;
					dataArray[it][6] = '#8899EE';


					
					
				}
				

				
					if( graphs )  
					dataArray[it][4] = 'shogra_' + myid + '_' + (n + 1) ;
					else
					dataArray[it][4] = '';
					

					
				semweb.findID(1,myid);
				
				
				dataArray[it][0] = semweb.givesLabel(1);
				/*
				semweb.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,true);
				dataArray[it][0] = semweb.curValue(1);
				semweb.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,false);
				*/
				semweb.setRef1( baseElement );
			}
   	}
   	

   	
   	de.auster_gmbh.library.controlelements.functions.listImport =  function(  semweb, dataArray, n, graphs)
 	{
 				
			
 			var nodemany = semweb.propertyMany(1,'http://www.w3.org/2002/07/owl#imports',false);
			var myid = 0;
			var many = 0;
			var obj;
			var ping = 0;
			var base = semweb.getRef1();
			
			//
			//var help2 = new Array();	
			for(it = 0 ;it < nodemany; it++)
			{	
				if(!semweb.moveinWeb(1,'http://www.w3.org/2002/07/owl#imports',it,false))
				alert('error');
				
				dataArray[dataArray.length] = new Array();	
				
				myid = semweb.getID(1);

				
				dataArray[dataArray.length - 1][2] = '';
				dataArray[dataArray.length - 1][3] = '';
				dataArray[dataArray.length - 1][5] = 'posnum_' + myid + '_' + (n + 1);
				dataArray[dataArray.length - 1][6] = '';
				dataArray[dataArray.length - 1][7] = semweb.givesIcon(1,false);				
				
				if(many == 0)
				{
				
					if(semweb.manyBagEntry(1) == 0)
					{	
					dataArray[dataArray.length - 1][1] = 'finpos_' + myid + '_' + (n + 1) ;
					dataArray[dataArray.length - 1][2] = '' ;
					}
					else
					{
					dataArray[dataArray.length - 1][1] = 'hasbag_' + myid + '_' + (n + 1) ;
					dataArray[dataArray.length - 1][2] = '' ;
					}
					
				
				}
				else
				{
				dataArray[dataArray.length - 1][1] = 'posnum_' + myid + '_' + (n + 1) ;
				dataArray[dataArray.length - 1][2] = 'posnum_' + myid + '_' + (n + 1) ;
				}
				
				
				
				if(semweb.manyBagEntry(1) != 0)
				{	
					
					dataArray[dataArray.length - 1][3] = 'hasbag_' + myid + '_' + (n + 1) ;
					dataArray[dataArray.length - 1][6] = '#8899EE';
				}
				

				
					if( graphs )  
					dataArray[dataArray.length - 1][4] = 'shogra_' + myid + '_' + (n + 1) ;
					else
					dataArray[dataArray.length - 1][4] = '';
					
				
				
					
				
					
				//semweb.findID(1,myid);
				
								
				dataArray[dataArray.length - 1][0] = semweb.givesLabel(1);

				semweb.setRef1(base);

			} 
 	
 	}	
 		
 	de.auster_gmbh.library.controlelements.buildPrimaryPanel =  function( semweb, parentnode, pfad , graphs)
 	{

			/*
			* find its name to show it on top
			*/
			semweb.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,true);
			var headline = semweb.curValue(1);
			semweb.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,false);
			
			var help = new Array();
			
			

			de.auster_gmbh.library.controlelements.functions.listTree(semweb, help,0,graphs);
			
			de.auster_gmbh.library.controlelements.functions.listBag(semweb, help,0);
			
			de.auster_gmbh.library.controlelements.functions.listImport(semweb, help,0,graphs);
			
			var container = de.auster_gmbh.library.controlelements.createPrimaryPanel(help , headline , parentnode , pfad);
			


			container.transit(-270,0);
			container.closed = true;
			return container;
		

  			
  		};
  		
 /* 		de.auster_gmbh.library.controlelements.buildPrimaryPanel =  function( semweb, parentnode, pfad )
 		{

			
			semweb.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,true);
			var headline = semweb.curValue(1);
			semweb.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,false);
			
			var help = new Array();
			

			de.auster_gmbh.library.controlelements.functions.listTree(semweb, help,0);
			//de.auster_gmbh.library.controlelements.functions.listBag(semweb, help,0);
			//de.auster_gmbh.library.controlelements.functions.listImport(semweb, help,0);
			
			var container = de.auster_gmbh.library.controlelements.createPrimaryPanel(help , headline , parentnode , pfad);
			


			container.transit(-270,0);
			container.closed = true;
			return container;
		

  			
  		}; */
  		
  		/*
  		0: common tree structure
  		1: Bag entries 
  		2: Graphs 
  		*/
  		
  		/*
  		type : 
  			<lu>
  			  <li> 0 : Inherit / semantic pictogramm  </li>
  			  <li> 1 : Open Box pictogramm </li>
  			  <li> 2 : Graph pictogramm </li>
  			  <li> 3 : egde to node </li>
  			</lu>
  		*/
  		
   		de.auster_gmbh.library.controlelements.buildNPanel =  function( semweb, parentnode, pfad , controllelement , type ,pos ,graphs)
 		{
	
			var nodemany = semweb.childmany(1);
			var help = new Array();
			
			semweb.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,true);
			var headline = semweb.curValue(1);
			semweb.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,false);
			
			
			switch (type)
			{
			case 0 :
			de.auster_gmbh.library.controlelements.functions.listTree(semweb, help, pos,graphs);
			de.auster_gmbh.library.controlelements.functions.listImport(semweb, help,pos,graphs);
			
			break;
			
			case 1 :
			de.auster_gmbh.library.controlelements.functions.listBag(semweb, help, pos,graphs);
			de.auster_gmbh.library.controlelements.functions.listImport(semweb, help,pos,graphs);
			break;
			
			case 2 :
			de.auster_gmbh.library.controlelements.functions.listGraphs(semweb, help, pos,graphs, true);
			de.auster_gmbh.library.controlelements.functions.listGraphs(semweb, help, pos,graphs, false);
			break;
			
			case 3 :
			//alert("geladen");
			de.auster_gmbh.library.controlelements.functions.listTree(semweb, help, pos,graphs);
			de.auster_gmbh.library.controlelements.functions.listBag(semweb, help, pos,graphs);
			de.auster_gmbh.library.controlelements.functions.listImport(semweb, help,pos,graphs);
			de.auster_gmbh.library.controlelements.functions.listGraphs(semweb, help, pos,graphs, true);
			de.auster_gmbh.library.controlelements.functions.listGraphs(semweb, help, pos,graphs, false);
			
			break;
			}

  				
					if(controllelement.container.length > pos)
  					for(iter2 = (controllelement.container.length - 1) ; iter2 >= pos ;iter2--)
  					{
  						
  						controllelement.container[iter2].remove();
  						controllelement.container.pop();
  					}
  					
 
  				
  		controllelement.container[pos] = de.auster_gmbh.library.controlelements.createNPanel (pos, help , headline , controllelement.mySVGObj , controllelement.pfad);

  			
  		};
  		
  		
  	/* Build up icons*/
  	de.auster_gmbh.library.createIcon = function(onTagURI,label, comment, picURL, width, heigh)
  	{
  	
  	var pres = de.auster_gmbh.semanticelement.semantic_web.getRef1();
  		de.auster_gmbh.semanticelement.semantic_web.getObjByRepresentation(onTagURI,1);
	
		de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
		1,
		'http://www.auster-gmbh.de/2010/08/anttree-lib#isDisplayed2DImage',
		undefined,
		'ate:isDisplayed2DImage',
		'common tag to stick images');
		
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/svg#image',
	undefined,
	label,
	comment);
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	var blub2 = de.auster_gmbh.semanticelement.semantic_web.getRef1();
	//alert( blub2.getImage());
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1, 'http://www.w3.org/1999/xlink#href', picURL );
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1, 'http://www.w3.org/2000/svg#width', width.toString() );
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1, 'http://www.w3.org/2000/svg#height', heigh.toString() );
  	de.auster_gmbh.semanticelement.semantic_web.setRef1(pres);
  	}
  	//-----------------------------
  	/* Build up icons*/
  	de.auster_gmbh.library.createIconRef = function(label, comment, picURL, width, heigh)
  	{
  	
  	var pres = de.auster_gmbh.semanticelement.semantic_web.getRef1();
	
		de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
		1,
		'http://www.auster-gmbh.de/2010/08/anttree-lib#isDisplayed2DImage',
		undefined,
		'ate:isDisplayed2DImage',
		'common tag to stick images');
		
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/svg#image',
	undefined,
	label,
	comment);
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	var blub2 = de.auster_gmbh.semanticelement.semantic_web.getRef1();
	//alert( blub2.getImage());
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1, 'http://www.w3.org/1999/xlink#href', picURL );
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1, 'http://www.w3.org/2000/svg#width', width.toString() );
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1, 'http://www.w3.org/2000/svg#height', heigh.toString() );
  	de.auster_gmbh.semanticelement.semantic_web.setRef1(pres);
  	}

  	//-----------------------------

 	de.auster_gmbh.library.visualisations = {};
 	de.auster_gmbh.library.visualisations.OntologyNetClient =  function()
 	{

  			
  	};
 	de.auster_gmbh.library.visualisations.TopNetStructurView =  function( semweb, parentnode, pfad , graphs)
 	{

  			
  	};

  	//-----------------------------
  		
 	de.auster_gmbh.library.error = {};
 	de.auster_gmbh.library.error.DefinitionAllreadyExistsException = function(errordefinition, NodeTypNum)
 	{
 	var errno = 101;
 	this.errorText = "Definition '" + errordefinition + "' (" + NodeTypNum + ") does allready exist!";
 	
 	this.toString = function(){return errno + ':' + this.errorText;}
 	this.ErrNo = function(){errno; }
 	this.ErrorMessage = function(){ return this.errorText; }
 	}
 	
 	de.auster_gmbh.library.error.RepresentationObjectMissedException = function(errordefinition)
 	{
 	var errno = 103;
 	this.errorText = "RepresentationObject in '" + errordefinition + "' is missed!";
 	
 	this.toString = function(){return errno + ':' + this.errorText;}
 	this.ErrNo = function(){errno; }
 	this.ErrorMessage = function(){ return this.errorText; }
 	}
 	
 	de.auster_gmbh.library.error.NoObjectToDefinitionException = function(errordefinition)
 	{
 	var errno = 102;
 	this.errorText = "There is no object to '" + errordefinition + "'!";
 	this.toString = function(){return errno + ':' + this.errorText;}
 	this.ErrNo = function(){ return errno; }
  	this.ErrorMessage = function(){ return this.errorText; }
 	}
 	
 	de.auster_gmbh.library.error.ArgumentIsMissingException = function(errordefinition)
 	{
 	var errno = 105;
 	this.errorText = "missing Argument: '" + errordefinition + "'!";
 	this.toString = function(){return errno + ':' + this.errorText;}
 	this.ErrNo = function(){ return errno; }
  	this.ErrorMessage = function(){ return this.errorText; }
 	}
 	
 	de.auster_gmbh.library.error.RecordsetEOFException = function(errordefinition)
 	{
 	var errno = 200;
 	this.errorText = "position in recordset is not valid: '" + errordefinition + "'!";
 	this.toString = function(){return errno + ':' + this.errorText;}
 	this.ErrNo = function(){ return errno; }
  	this.ErrorMessage = function(){ return this.errorText; }
 	}
 	
 	de.auster_gmbh.library.error.RecordsetWrongKeyException = function(errordefinition)
 	{
 	var errno = 201;
 	this.errorText = "key in recordset is not valid: '" + errordefinition + "'!";
 	this.toString = function(){return errno + ':' + this.errorText;}
 	this.ErrNo = function(){ return errno; }
  	this.ErrorMessage = function(){ return this.errorText; }
 	}
 	
 	de.auster_gmbh.library.error.ViolatesPropertyRestrictionException = function(errordefinition)
 	{
 	var errno = 302;
 	this.errorText = "Deviation from the definition of a property has occurred: '" + errordefinition + "'!";
 	this.toString = function(){return errno + ':' + this.errorText;}
 	this.ErrNo = function(){ return errno; }
  	this.ErrorMessage = function(){ return this.errorText; }
 	}

 	
 	
