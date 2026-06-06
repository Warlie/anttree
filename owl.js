
	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/2001/XMLSchema-instance',1);
	var owlOnt = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/2002/07/owl#Ontology' );
	about = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about' );
	about.about(owlOnt,'http://www.w3.org/2002/07/owl');
	de.auster_gmbh.semanticelement.semantic_web.setRef2(owlOnt);
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
 	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','OWL-Ontology');
 	
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/1999/02/22-rdf-syntax-ns',2);
 	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/2000/01/rdf-schema',2);
 	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.auster-gmbh.de/surface-generator-lib',2);
 	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#about',
	'http://www.w3.org/2002/07/owl#ID',
	'owl:ID',
	'Equivalent to about');
	
	de.auster_gmbh.semanticelement.semantic_web.definitionTag = 'http://www.w3.org/2002/07/owl#ID';
 	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#AllDifferent',
	'owl:AllDifferent',
	'AllDifferent Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#allValuesFrom',
	'owl:allValuesFrom',
	'allValuesFrom Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#AnnotationProperty',
	'owl:AnnotationProperty',
	'AnnotationProperty Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#backwardCompatibleWith',
	'owl:backwardCompatibleWith',
	'backwardCompatibleWith Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#cardinality',
	'owl:cardinality',
	'cardinality Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#Class',
	'owl:Class',
	'Classobject in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#complementOf',
	'owl:complementOf',
	'complementOf Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#DataRange',
	'owl:DataRange',
	'DatatypeProperty Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.w3.org/2002/07/owl#DatatypeProperty',
	'owl:DatatypeProperty',
	'DatatypeProperty Container in OWL',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#DeprecatedClass',
	'owl:DeprecatedClass',
	'DeprecatedClass Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.w3.org/2002/07/owl#DeprechatedProperty',
	'owl:DeprechatedProperty',
	'DeprechatedProperty Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#differentFrom',
	'owl:differentFrom',
	'differentFrom Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#distinctMembers',
	'owl:distinctMembers',
	'distinctMembers Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.w3.org/2002/07/owl#equivalentClass',
	'owl:equivalentClass',
	'equivalentClass Container in OWL',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.w3.org/2002/07/owl#equivalentProperty',
	'owl:equivalentProperty',
	'equivalentProperty Container in OWL',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.w3.org/2002/07/owl#FunctionalProperty',
	'owl:FunctionalProperty',
	'FunctionalProperty Container in OWL',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#hasValue',
	'owl:hasValue',
	'hasValue Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry( //!!!!!!!!
	1,
	'http://www.w3.org/2002/07/owl#imports',
	'http://www.w3.org/2002/07/owl#imports',
	'owl:imports',
	'imports Container in OWL',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');

		
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#incompatibleWith',
	'owl:incompatibleWith',
	'incompatibleWith Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#intersectionOf',
	'owl:intersectionOf',
	'intersectionOf Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#InverseFunctionalProperty',
	'owl:InverseFunctionalProperty',
	'InverseFunctionalProperty Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#inverseOf',
	'owl:inverseOf',
	'inverseOf Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#maxCardinality',
	'owl:maxCardinality',
	'maxCardinality Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#minCardinality',
	'owl:minCardinality',
	'minCardinality Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#Nothing',
	'owl:Nothing',
	'Nothing Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#ObjectProperty',
	'owl:ObjectProperty',
	'ObjectProperty Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#oneOf',
	'owl:oneOf',
	'oneOf Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#onProperty',
	'owl:onProperty',
	'onProperty Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	var ontoIDnum = de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2002/07/owl#Ontology',
	'http://www.w3.org/2002/07/owl#Ontology',
	'owl:Ontology',
	'Ontology Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Resource',
	'http://www.w3.org/2002/07/owl#NamedIndividual',
	'owl:NamedIndividual',
	'Named individual',
	'http://www.w3.org/2000/01/rdf-schema#Resource');
	
	//
	
	//de.auster_gmbh.library.createIcon('http://www.w3.org/2002/07/owl#Ontology', 'pic', 'container','img/om_yoga_symbol.png', 20, 20);
	
	var secOntoRef = de.auster_gmbh.semanticelement.semantic_web.getID(1);
	/*
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
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
	'pic',
	'pic');
	de.auster_gmbh.semanticelement.semantic_web.swappointer();

	//alert( blub2.getImage());
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1, 'http://www.w3.org/1999/xlink#href', 'img/om_yoga_symbol.png' );
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1, 'http://www.w3.org/2000/svg#width', '20' );
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1, 'http://www.w3.org/2000/svg#height', '20' );
	*/
	de.auster_gmbh.semanticelement.semantic_web.findID(1,ontoIDnum);
	
	de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#Ontology'].representation 
	= de.auster_gmbh.semanticelement.semantic_web.getRef1(); 
	
	de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#Ontology'].baseClazz = 
	de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Class'];
	
	de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#Ontology'].prototype.superObj =
	de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#Ontology'].baseClazz.representation;
	//de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource']superObj =
	//de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Class'].representation;
	/*
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
	'ontology-logo',
	'');
	
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	var blub2 = de.auster_gmbh.semanticelement.semantic_web.getRef1();
	//alert( blub2.getImage());
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1, 'http://www.w3.org/1999/xlink#href', 'img/dreamsymbol.png' );
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1, 'http://www.w3.org/2000/svg#width', 20 );
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1, 'http://www.w3.org/2000/svg#height', 20 );
	*/
	de.auster_gmbh.semanticelement.semantic_web.findID(1,secOntoRef);
	
	//de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#Ontology']
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#OntologyProperty',
	'owl:OntologyProperty',
	'OntologyProperty Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#priorVersion',
	'owl:priorVersion',
	'priorVersion Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#Restriction',
	'owl:Restriction',
	'Restriction Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#sameAs',
	'owl:sameAs',
	'sameAs Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#someValuesFrom',
	'owl:someValuesFrom',
	'someValuesFrom Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#SymmetricProperty',
	'owl:SymmetricProperty',
	'SymmetricProperty Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#Thing',
	'owl:Thing',
	'Thing Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#TransitiveProperty',
	'owl:TransitiveProperty',
	'TransitiveProperty Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#unionOf',
	'owl:unionOf',
	'unionOf Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2002/07/owl#versionInfo',
	'owl:versionInfo',
	'versionInfo Container in OWL',
	'http://www.w3.org/2000/01/rdf-schema#Class');

	de.auster_gmbh.semanticelement.semantic_web.rootNode(1);
	/*
	var onto2 = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/2002/07/owl#Ontology' );
	about = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about' );
 	about.about(onto2,'http://www.w3.org/2002/07/owl2');
 	de.auster_gmbh.semanticelement.semantic_web.setRef2(onto2);
 	de.auster_gmbh.semanticelement.semantic_web.swappointer();
 	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','pedl:Ontology');
 	
 	de.auster_gmbh.semanticelement.semantic_web.addBagEntryObj('http://www.w3.org/2000/01/rdf-schema#Resource');
 	
 	de.auster_gmbh.semanticelement.semantic_web.swappointer();
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','rdfs:Resource');
 	
 	lastObjInBag = de.auster_gmbh.semanticelement.semantic_web.getRef1();
 	
 	 de.auster_gmbh.semanticelement.semantic_web.rootNode(1);*/

 	 
 	 //de.auster_gmbh.semanticelement.tools.check_unset();
 	 