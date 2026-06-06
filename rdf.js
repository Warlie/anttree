 	var lastObjInBag;
 	
 	var onto = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/2002/07/owl#Ontology' );
 	
 	about = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about' );
 	
 	about.about(onto,'http://www.w3.org/1999/02/22-rdf-syntax-ns');
 	
 	de.auster_gmbh.semanticelement.semantic_web.setRef2(onto);
 	de.auster_gmbh.semanticelement.semantic_web.swappointer();
 	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','RDF-Syntax');
 	
 	de.auster_gmbh.semanticelement.semantic_web.setRef1(de.auster_gmbh.semanticelement.semantic_web.root);
 	
 	onto = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/2002/07/owl#Ontology' );
 	
 	about = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about' );
 	
 	about.about(onto,'http://www.w3.org/2000/01/rdf-schema');
 	
 	
 	de.auster_gmbh.semanticelement.semantic_web.setRef2(onto);
 	de.auster_gmbh.semanticelement.semantic_web.swappointer();
 	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	
 	//de.auster_gmbh.semanticelement.semantic_web.swappointer();
 	
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','RDF-Schema');
 	
 	de.auster_gmbh.semanticelement.semantic_web.addBagEntryObj('http://www.w3.org/2000/01/rdf-schema#Resource');
 	
 	
 	
 	de.auster_gmbh.semanticelement.semantic_web.swappointer();
 	de.auster_gmbh.semanticelement.semantic_web.aboutObj(1,'http://www.w3.org/2000/01/rdf-schema#Resource');
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','rdfs:Resource');
 	//de.auster_gmbh.semanticelement.semantic_web.showCurrentElements();
 	
 	lastObjInBag = de.auster_gmbh.semanticelement.semantic_web.getRef1();
 	//de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/2002/07/owl#Ontology');
	
	//de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','owl:Ontology');
 	
 	//parentNode(pointerNum, pos)
 	
 	//de.auster_gmbh.semanticelement.semantic_web.rootNode(1);
 	
 	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/2000/01/rdf-schema#Class');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/2000/01/rdf-schema#Class');
	
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdfs:Class');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#comment','basic Class');
	//de.auster_gmbh.semanticelement.semantic_web.showCurrentElements();
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	

	

	
	
	
	
	//de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/2000/01/rdf-schema#ContainerMembershipProperty');
	//de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/2000/01/rdf-schema#ContainerMembershipProperty');
	//de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdfs:ContainerMembershipProperty');
	
	de.auster_gmbh.semanticelement.semantic_web.setRef1(lastObjInBag);
	//de.auster_gmbh.semanticelement.semantic_web.rootNode(1);

	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/1999/02/22-rdf-syntax-ns#List');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/1999/02/22-rdf-syntax-ns#List');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdf:List');
	
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#List',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#nil',
	'rdf:nil',
	'empty list',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#List');
	
	//de.auster_gmbh.semanticelement.semantic_web.rootNode(1);
	de.auster_gmbh.semanticelement.semantic_web.setRef1(lastObjInBag);
	
	//de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/2000/01/rdf-schema#Literal');
 	//de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/2000/01/rdf-schema#Literal');
	//de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdfs:Literal');
	
	
	//de.auster_gmbh.semanticelement.semantic_web.setRef1(lastObjInBag);
 	
 	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement');
 	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdf:Statement');
	
	//de.auster_gmbh.semanticelement.semantic_web.rootNode(1);
	de.auster_gmbh.semanticelement.semantic_web.setRef1(lastObjInBag);
	
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdf:Property');
	
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	//de.auster_gmbh.semanticelement.semantic_web.getObjByRepresentation('http://www.w3.org/2000/01/rdf-schema#Class',2);
	//de.auster_gmbh.semanticelement.semantic_web.setGraphObj('http://www.w3.org/2000/01/rdf-schema#domain');
	//de.auster_gmbh.semanticelement.semantic_web.swappointer();
	
	//de.auster_gmbh.semanticelement.semantic_web.swappointer();
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
	'rdf:type',
	'type',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.w3.org/2000/01/rdf-schema#domain',
	'rdfs:domain',
	'domain',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	de.auster_gmbh.semanticelement.semantic_web.setClazztype('http://www.w3.org/2000/01/rdf-schema#domain'
	,de.auster_gmbh.semanticelement.const.SEMANTIC_ATTRIB);
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.w3.org/2000/01/rdf-schema#range',
	'rdfs:range',
	'domain',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	de.auster_gmbh.semanticelement.semantic_web.setClazztype('http://www.w3.org/2000/01/rdf-schema#range'
	,de.auster_gmbh.semanticelement.const.SEMANTIC_ATTRIB);

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#parseType',
	'rdf:parseType',
	'',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#datatype',
	'rdf:datatype',
	'datatype',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
 	function(som)
 	{
 		
 		var mysom = som;  		
  	
		som.currentObject.onActivate = function( type , message )
  		{
  		
  		  var parse_xsd = null;

  		  if(this.successor != undefined )
  		    try
 		    {
 		
 		    parse_xsd = mysom.semantic_web.getObjByRepresentationObj(String(this.successor));
 		    
 		      if(parse_xsd['onActivate'] != undefined)
 		        return parse_xsd.onActivate( '*' , message);


 		   }
 		   catch(err2)
 		   {
 		   return message.getContext();
 		   }

		  return message.getContext();
 		}
		
		
		
	});

	/*
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.w3.org/2000/01/rdf-schema#seeAlso',
	'rdfs:seeAlso',
	'domain',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.w3.org/2000/01/rdf-schema#isDefinedBy',
	'rdfs:isDefinedBy',
	'domain',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.w3.org/2000/01/rdf-schema#member',
	'rdfs:member',
	'domain',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	*/
	/*
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/1999/02/22-rdf-syntax-ns#type');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/1999/02/22-rdf-syntax-ns#type');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdf:type');
	
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/2000/01/rdf-schema#domain');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/2000/01/rdf-schema#domain');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdfs:domain');
	
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/2000/01/rdf-schema#range');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/2000/01/rdf-schema#domain');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdfs:range');
	*/
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.w3.org/2000/01/rdf-schema#ContainerMembershipProperty',
	'rdfs:ContainerMembershipProperty',
	'ContainerMembershipProperty',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	

	
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/2000/01/rdf-schema#label');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/2000/01/rdf-schema#label');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdfs:label');
	
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/2000/01/rdf-schema#seeAlso');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/2000/01/rdf-schema#seeAlso');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdfs:seeAlso');
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/2000/01/rdf-schema#isDefinedBy');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/2000/01/rdf-schema#isDefinedBy');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdfs:isDefinedBy');
	
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/2000/01/rdf-schema#member');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/2000/01/rdf-schema#member');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdfs:member');
	
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdf:value');
	
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/1999/02/22-rdf-syntax-ns#first');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/1999/02/22-rdf-syntax-ns#first');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdfs:first');
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/1999/02/22-rdf-syntax-ns#rest');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/1999/02/22-rdf-syntax-ns#rest');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdfs:rest');
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/1999/02/22-rdf-syntax-ns#subject');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/1999/02/22-rdf-syntax-ns#subject');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdf:subject');
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdf:predicate');
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/1999/02/22-rdf-syntax-ns#object');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/1999/02/22-rdf-syntax-ns#object');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdf:object');
	
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/2000/01/rdf-schema#subClassOf');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/2000/01/rdf-schema#subClassOf');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdfs:subClassOf');
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/2000/01/rdf-schema#subPropertyOf');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/2000/01/rdf-schema#subPropertyOf');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdfs:subPropertyOf');
	
	//de.auster_gmbh.semanticelement.semantic_web.rootNode(1);
	de.auster_gmbh.semanticelement.semantic_web.setRef1(lastObjInBag);

	
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/1999/02/22-rdf-syntax-ns#Description');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/1999/02/22-rdf-syntax-ns#Description');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdf:Description');
	
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/2000/01/rdf-schema#Container');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/2000/01/rdf-schema#Container');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdfs:Container');
	
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdf:Bag');
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdf:Alt');
	de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq');
	de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq');
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','rdf:Seq');
	

	
	de.auster_gmbh.semanticelement.semantic_web.rootNode(1);

