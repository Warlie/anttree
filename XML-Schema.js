	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/2000/xmlns/',1);
	

	
	
	var onto = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/2002/07/owl#Ontology' );
	about = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about' );
	about.about(onto,'http://www.w3.org/2001/XMLSchema');
	de.auster_gmbh.semanticelement.semantic_web.setRef2(onto);
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
 	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','XML-Schema');

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#schema',
	'xsd:schema',
	'Datatype schema');
	
 	de.auster_gmbh.semanticelement.semantic_web.addBagEntryObj('http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag');
 	
 	de.auster_gmbh.semanticelement.semantic_web.swappointer();
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','simpleDataTyps');

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#string',
	'xsd:string',
	'Datatype string');
	
	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
 	function(som)
 	{
 		
 			
  	
		som.currentObject.onActivate = function( type , message )
  		{
  		

		  return String( message.getContext() );
 		}
		
		
		
	});
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#normalizedString',
	'xsd:normalizedString',
	'Datatype normalizedString');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#token',
	'xsd:token',
	'Datatype token');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#byte',
	'xsd:byte',
	'Datatype byte');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#unsignedByte',
	'xsd:unsignedByte',
	'Datatype unsignedByte');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#base64Binary',
	'xsd:base64Binary',
	'Datatype base64Binary');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#hexBinary',
	'xsd:hexBinary',
	'Datatype hexBinary');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#integer',
	'xsd:integer',
	'Datatype integer');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#positiveInteger',
	'xsd:positiveInteger',
	'Datatype positiveInteger');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#negativeInteger',
	'xsd:negativeInteger',
	'Datatype negativeInteger');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#nonNegativeInteger',
	'xsd:nonNegativeInteger',
	'Datatype nonNegativeInteger');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#nonPositiveInteger',
	'xsd:nonPositiveInteger',
	'Datatype nonPositiveInteger');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#int',
	'xsd:int',
	'Datatype int');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#unsignedInt',
	'xsd:unsignedInt',
	'Datatype unsignedInt');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#long',
	'xsd:long',
	'Datatype long');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#unsignedLong',
	'xsd:unsignedLong',
	'Datatype unsignedLong');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#short',
	'xsd:short',
	'Datatype short');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#unsignedShort',
	'xsd:unsignedShort',
	'Datatype unsignedShort');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#decimal',
	'xsd:decimal',
	'Datatype decimal');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#float',
	'xsd:float',
	'Datatype float');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#double',
	'xsd:double',
	'Datatype double');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#boolean',
	'xsd:boolean',
	'Datatype boolean');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#time',
	'xsd:time',
	'Datatype time');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#dateTime',
	'xsd:dateTime',
	'Datatype dateTime');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#duration',
	'xsd:duration',
	'Datatype duration');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#date',
	'xsd:date',
	'Datatype date');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#gMonth',
	'xsd:gMonth',
	'Datatype gMonth');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#gYear',
	'xsd:gYear',
	'Datatype gYear');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#gYearMonth',
	'xsd:gYearMonth',
	'Datatype gYearMonth');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#gDay',
	'xsd:gDay',
	'Datatype gDay');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#gMonthDay',
	'xsd:gMonthDay',
	'Datatype gMonthDay');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#Name',
	'xsd:Name',
	'Datatype Name');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#QName',
	'xsd:QName',
	'Datatype QName');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#NCName',
	'xsd:NCName',
	'Datatype NCName');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#anyURI',
	'xsd:anyURI',
	'Datatype anyURI');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#language',
	'xsd:language',
	'Datatype language');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#ID',
	'xsd:ID',
	'Datatype ID');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#IDREF',
	'xsd:IDREF',
	'Datatype IDREF');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#IDREFS',
	'xsd:IDREFS',
	'Datatype IDREFS');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#ENTITY',
	'xsd:ENTITY',
	'Datatype ENTITY');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#ENTITIES',
	'xsd:ENTITIES',
	'Datatype ENTITIES');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#NOTATION',
	'xsd:NOTATION',
	'Datatype NOTATION');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#NMTOKEN',
	'xsd:NMTOKEN',
	'Datatype NMTOKEN');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#NMTOKENS',
	'xsd:NMTOKENS',
	'Datatype NMTOKENS');
	de.auster_gmbh.semanticelement.semantic_web.setRef1(onto);

 	de.auster_gmbh.semanticelement.semantic_web.addBagEntryObj('http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag');
 	
 	de.auster_gmbh.semanticelement.semantic_web.swappointer();
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','simpleNodes');

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#simpleType',
	'xsd:simpleType',
	'Node simpleType');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#restriction',
	'xsd:restriction',
	'Node restriction');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#min-inclusive',
	'xsd:min-inclusive',
	'Node min-inclusive');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag',
	'http://www.w3.org/2001/XMLSchema#max-inclusive',
	'xsd:max-inclusive',
	'Node max-inclusive');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#pattern',
	'xsd:pattern',
	'Node pattern');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#enumeratin',
	'xsd:enumeratin',
	'Node enumeratin');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#list',
	'xsd:list',
	'Node list');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#length',
	'xsd:length',
	'Node length');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#union',
	'xsd:union',
	'Node union');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#extension',
	'xsd:extension',
	'Node extension');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#maxExclusive',
	'xsd:maxExclusive',
	'Node maxExclusive');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#minExclusive',
	'xsd:minExclusive',
	'Node minExclusive');


	de.auster_gmbh.semanticelement.semantic_web.setRef1(onto);

 	de.auster_gmbh.semanticelement.semantic_web.addBagEntryObj('http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag');
 	
 	de.auster_gmbh.semanticelement.semantic_web.swappointer();
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','complexNodes');

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#complexType',
	'xsd:complexType',
	'Node complexType');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq',
	'http://www.w3.org/2001/XMLSchema#sequence',
	'xsd:sequence',
	'Node sequence');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#element',
	'xsd:element',
	'Node element');

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#attribute',
	'xsd:attribute',
	'Node attribute');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#complexContent',
	'xsd:complexContent',
	'Node complexContent');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#documentation',
	'xsd:documentation',
	'Node documentation');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#annotation',
	'xsd:annotation',
	'Node annotation');	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#choice',
	'xsd:choice',
	'Node choice');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#group',
	'xsd:group',
	'Node group');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#all',
	'xsd:all',
	'Node all');
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema#redefine',
	'xsd:redefine',
	'Node redefine');

	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/2001/XMLSchema',1);
	onto = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/2002/07/owl#Ontology' );
	about = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about' );
	about.about(onto,'http://www.w3.org/2001/XMLSchema-instance');
	de.auster_gmbh.semanticelement.semantic_web.setRef2(onto);
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
 	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','XML-Schema-instance');

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2001/XMLSchema-instance#nil',
	'xsi:nil',
	'Node nil');

 	de.auster_gmbh.semanticelement.semantic_web.rootNode(1);
