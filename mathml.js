	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/2002/07/owl',1);
	var mathOnt = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/2002/07/owl#Ontology' );
	about = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about' );
	about.about(mathOnt,'http://www.w3.org/1998/Math/MathML');
	de.auster_gmbh.semanticelement.semantic_web.setRef2(mathOnt); 
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','Mathml-Lib');
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#comment','Mathml Lib');
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2002/07/owl#Class',
	'http://www.w3.org/1998/Math/MathML#eq',
	'mathml:eq',
	'equivlence',
	'http://www.w3.org/2002/07/owl#Class');
	
	de.auster_gmbh.semanticelement.semantic_web.rootNode(1);
