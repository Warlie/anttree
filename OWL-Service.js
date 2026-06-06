	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/2002/07/owl',1);
	var OWLS = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/2002/07/owl#Ontology' );
	about = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about' );
	about.about(OWLS,'http://www.daml.org/services/owl-s/1.0/');
	de.auster_gmbh.semanticelement.semantic_web.setRef2(OWLS); 
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','OWL-Web Service');
 	//de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#comment','Program Element Definition Language');
 	
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/1999/xlink',2);
 	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	
 	de.auster_gmbh.semanticelement.semantic_web.addBagEntryObj('http://www.w3.org/2000/01/rdf-schema#Resource');
 	
 	de.auster_gmbh.semanticelement.semantic_web.swappointer();
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','rdfs:Resource');
 	
 	de.auster_gmbh.semanticelement.semantic_web.rootNode(1);
 	
 	
