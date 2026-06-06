	//defines a startobject for a Theme
	de.auster_gmbh.library.createIcon('http://www.w3.org/2000/01/rdf-schema#Resource', 'pic', 'container','img/BasicSymbol.png', 20, 20);
	de.auster_gmbh.library.createIcon('http://www.w3.org/2000/01/rdf-schema#Class', 'pic', 'container','img/ClassSymbol.png', 20, 20);
	de.auster_gmbh.library.createIcon('http://www.w3.org/2000/01/rdf-schema#Container', 'pic', 'container','img/ContainerSymbol.png', 20, 20);
	de.auster_gmbh.library.createIcon('http://www.w3.org/1999/02/22-rdf-syntax-ns#Property', 'pic', 'container','img/Property.png', 20, 20);
	de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2010/08/anttree-lib', 'pic', 'container','img/Anttree.png', 20, 20);
	de.auster_gmbh.library.createIcon('http://www.w3.org/2000/01/rdf-schema', 'pic', 'container','img/rdf_w3c_icon.gif', 20, 20);
	de.auster_gmbh.library.createIcon('http://www.w3.org/2000/svg', 'pic', 'container','img/svg.png', 30, 30);
	//de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2010/08/anttree-Theme-lib#Netstructure', 'pic', 'container','img/deactivate.png', 20, 20);
	de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2010/08/anttree-Theme-lib#Browser', 'pic', 'container','img/deactivate.png', 20, 20);	
	de.auster_gmbh.library.createIcon('http://www.w3.org/2002/07/owl', 'pic', 'container','img/owl.png', 20, 20);		
	de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2010/08/anttree-lib#client', 'pic', 'container','img/client.png', 20, 20);	
	de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2010/08/anttree-lib#Visualization_panel', 'pic', 'container','img/visualisierung.png', 20, 20);
	de.auster_gmbh.library.createIcon('http://www.w3.org/1999/02/22-rdf-syntax-ns#datatype', 'pic', 'container','img/datatype.png', 20, 20);
	de.auster_gmbh.library.createIcon('http://www.w3.org/2002/07/owl#DatatypeProperty', 'pic', 'container','img/DatatypeProperty.png', 20, 20);
	de.auster_gmbh.library.createIcon('http://www.w3.org/2002/07/owl#Class', 'pic', 'container','img/ClassSymbol.png', 20, 20);
	de.auster_gmbh.library.createIcon('http://www.w3.org/2002/07/owl#ObjectProperty', 'pic', 'container','img/Property.png', 20, 20);
		
	de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2006/05/pedl-lib#Class', 'pic', 'container','img/zinken_Frau_weiches_Herz.png', 35, 37);
	de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2006/05/pedl-lib#Instance-Function', 'pic', 'container','img/zinken_Essen_gegen_arbeit.png', 41, 15);		
	
	de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2006/05/pedl-lib#Functions', 'pic', 'container','img/zinken_fette_Beute.png', 30, 24);	
	de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function', 'pic', 'container','img/zinken_Essen_gegen_arbeit.png', 41, 15);
	
	de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter', 'pic', 'container','img/zinken_fette_Beute.png', 30, 24);	
	
	de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2006/05/pedl-lib#hasFunction', 'pic', 'container','img/zinken_wegweiser.png', 30, 8);	
	de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2006/05/pedl-lib', 'pic', 'container','img/zinken_bettler.png', 44, 38);

        de.auster_gmbh.library.createIcon('http://www.w3.org/1998/Math/MathML', 'pic', 'container','img/mathml.png', 30, 30);
	
	de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2006/05/pedl-lib#pipe_out', 'pic', 'container','img/zinken_wegweiser.png', 30, 8);	
	de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2006/05/pedl-lib#pipe_in', 'pic', 'container','img/zinken_wegweiser_rev.png', 30, 8);
	
	de.auster_gmbh.semanticelement.semantic_web.findID(1,ontoIDnum);
		
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
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1, 'http://www.w3.org/1999/xlink#href', 'img/ontology_logo.png' );
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1, 'http://www.w3.org/2000/svg#width', 20 );
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1, 'http://www.w3.org/2000/svg#height', 20 );
		
 	de.auster_gmbh.semanticelement.semantic_web.rootNode(1);
 	//
 	
 	//var parser = new de.auster_gmbh.library.parser.csv("test1;test2;test3\n1;;3\n4asdfaweasdddfasdccc   d;;6",';',"\n"); 

      	//	alert(parser.toString());
	//if(parser instanceof de.auster_gmbh.library.parser.csv)alert("genau das nicht");
				
 	
 	
