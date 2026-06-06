	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/2000/01/rdf-schema',1);
	var xlinkOnt = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/2002/07/owl#Ontology' );
	about = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about' );
	about.about(xlinkOnt,'http://www.w3.org/1999/xlink');
	de.auster_gmbh.semanticelement.semantic_web.setRef2(xlinkOnt); 
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','xlink');
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#comment','concept for links');
 	
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/1999/02/22-rdf-syntax-ns',2);
 	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/2001/XMLSchema',2);
 	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.auster-gmbh.de/surface-generator-lib',2);
 	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/1999/xlink#href',
	'xlink:href',
	'contains an URI',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
	//'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');

	var xlinkOnt1 = de.auster_gmbh.semanticelement.semantic_web.getRef1(); 
	var xlinkOnt2 = de.auster_gmbh.semanticelement.semantic_web.getRef2(); 

	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	
	de.auster_gmbh.semanticelement.semantic_web.getObjByRepresentation('http://www.w3.org/2000/01/rdf-schema#Resource',2);
	
	de.auster_gmbh.semanticelement.semantic_web.setRef1(
	de.auster_gmbh.semanticelement.semantic_web.setGraphObj('http://www.w3.org/2000/01/rdf-schema#range')
	);
	

	
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/1999/02/22-rdf-syntax-ns#resource','http://www.w3.org/2000/01/rdf-schema#Literal');
	

	de.auster_gmbh.semanticelement.semantic_web.setRef1(xlinkOnt1); 
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/1999/xlink#type',
	'xlink:type',
	'has value "simple, extended, locator, arc"',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/1999/xlink#title',
	'xlink:title',
	'title"',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
	

 	de.auster_gmbh.semanticelement.semantic_web.rootNode(1);
 	

 	
