

de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#div'] = function(node, caller)
{
	de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#div'].baseConstructor.call(this, "div", caller);

};



   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#div'].prototype = new de.auster_gmbh.graphicelement.xhtml.HTMLElement();
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#div'].prototype.constructor = 
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#div'];
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#div'].baseConstructor = de.auster_gmbh.graphicelement.xhtml.div;
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#div'].superClass = de.auster_gmbh.graphicelement.xhtml.div.prototype;
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#div'].prototype.name='http://www.w3.org/1999/xhtml#div';
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#div'].prototype.type = de.auster_gmbh.semanticelement.const.VISUALISATION_TREE;
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#div'].prototype.handling = de.auster_gmbh.semanticelement.XMLELEMENT;
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#div'].prototype.baseClazz = 
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];

   
de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#span'] = function(node, caller)
{
	de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#span'].baseConstructor.call(this, "span", caller);

};

   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#span'].prototype = new de.auster_gmbh.graphicelement.xhtml.HTMLElement();
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#span'].prototype.constructor = 
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#span'];
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#span'].baseConstructor = de.auster_gmbh.graphicelement.xhtml.span;
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#span'].superClass = de.auster_gmbh.graphicelement.xhtml.span.prototype;
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#span'].prototype.name='http://www.w3.org/1999/xhtml#span';
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#span'].prototype.type = de.auster_gmbh.semanticelement.const.VISUALISATION_TREE;
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#span'].prototype.handling = de.auster_gmbh.semanticelement.XMLELEMENT;
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#span'].prototype.baseClazz = 
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
   
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea'] = function(node, caller)
{
	de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea'].baseConstructor.call(this, "textarea", caller);
	console.warn(de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea']);

};



   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea'].prototype = new de.auster_gmbh.graphicelement.xhtml.textarea();
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea'].prototype.constructor = 
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea'];
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea'].baseConstructor = de.auster_gmbh.graphicelement.xhtml.textarea;
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea'].superClass = de.auster_gmbh.graphicelement.xhtml.textarea.prototype;
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea'].prototype.name='http://www.w3.org/1999/xhtml#textarea';
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea'].prototype.type = de.auster_gmbh.semanticelement.const.VISUALISATION_TREE;
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea'].prototype.handling = de.auster_gmbh.semanticelement.XMLELEMENT;
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea'].handling = de.auster_gmbh.semanticelement.XMLELEMENT;
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea'].prototype.baseClazz = 
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];

   console.warn("loaded", de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea'],    de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea'].prototype.handling, de.auster_gmbh.semanticelement.XMLELEMENT);
   
   var helpvar = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];

   var uris = ['http://www.w3.org/1999/xhtml#div',
   'http://www.w3.org/1999/xhtml#span',
   'http://www.w3.org/1999/xhtml#textarea'];
   
   de.auster_gmbh.library.tools.addRelevantMethods(uris);
   /*
  for( var prop in helpvar ) 
  {
  
  
  //if(prop != 'name')
  //{
  	  console.debug(de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea'].prototype[prop], helpvar[prop],prop );
  	  
  	 uris.forEach(
  	 	 function(item){
  	  if(!prop in de.auster_gmbh.semanticelement[item])
  	  	  de.auster_gmbh.semanticelement[item].prototype[prop] = helpvar[prop];
  	  });
   //de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#div'].prototype[prop] = helpvar[prop];
   //de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#span'].prototype[prop] = helpvar[prop];
   //de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea'].prototype[prop] = helpvar[prop];
  //}
  }
     console.warn("check", de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea'],    de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea'].prototype.handling, de.auster_gmbh.semanticelement.XMLELEMENT);
  */
    de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#div'].prototype.script_prototype
    var functionForHTML = function(som)
  {
  	  
  	var mysom = som
  	var text = '';
  	
  	mysom.currentObject.getNewPropertyEvent = function( type , message )
  	{
  			

		if(message.getRequester().getName() == 'http://www.w3.org/2000/xmlns/#style')
		{
			mysom.currentObject.setStyle(message.getRequester().successor.toString());
		}

		if(message.getRequester().getName() == 'http://www.w3.org/XML/1998/namespace#id')
			{
				mysom.currentObject.setID(message.getRequester().successor.toString());
			}
		/*
		if(message.getRequester().getName() == 'http://www.w3.org/2000/xmlns/#style')
		{
			mysom.currentObject.setStyle(message.getRequester().successor.toString());
		}
		*/
	}
//.valueOf(); 
	mysom.currentObject.getNewBagEntryEvent = function(type, message)
		{

		
			if(message.getRequester().getName() == 'http://www.w3.org/2000/01/rdf-schema#Literal')
			{
				text += message.getRequester().toString();
				mysom.currentObject.setText(text);
			}
			

		}
		
		
 	//mysom.currentObject.preAccessEvent = null;
 	//mysom.currentObject.pastAccessEvent = null;
 	//mysom.currentObject.onClick = null;
 	//mysom.currentObject.ondblClick = null;
 	//mysom.currentObject.onActivate = null;
 	//mysom.currentObject.onDeactivate = null;
  }
   
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#div'].prototype.script_prototype = functionForHTML;
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#span'].prototype.script_prototype = functionForHTML;
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/xhtml#textarea'].prototype.script_prototype = functionForHTML;
  

	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/2002/07/owl',1);
	var xhtmlOnt = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/2002/07/owl#Ontology' );
	about = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about' );
	about.about(xhtmlOnt,'http://www.w3.org/1999/xhtml');
	de.auster_gmbh.semanticelement.semantic_web.setRef2(xhtmlOnt); 
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','xhtml-Lib');
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#comment','xhtml-based Elements');
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/XML/1998/namespace#node',
	'http://www.w3.org/1999/xhtml#abstact',
	'xhtml:abstact',
	'xhtml:abstact',
	'http://www.w3.org/XML/1998/namespace#node');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#script',
	'http://www.w3.org/1999/xhtml#script',
	'xhtml:script',
	'contains a executable script',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#script');
	
	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.w3.org/1999/xhtml#script', 
	'http://www.w3.org/2000/01/rdf-schema#domain', 
	'http://www.w3.org/1999/xhtml#abstact' );
	
	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.w3.org/1999/xhtml#script', 
	'http://www.w3.org/2000/01/rdf-schema#range', 
	'http://www.w3.org/2000/01/rdf-schema#Literal' );

 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/xhtml#abstact',
	'http://www.w3.org/1999/xhtml#body',
	'xhtml:body',
	'xhtml:body',
	'http://www.w3.org/1999/xhtml#abstact');
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/xhtml#div',
	'http://www.w3.org/1999/xhtml#div',
	'xhtml:div',
	'xhtml:div',
	'http://www.w3.org/1999/xhtml#abstact');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/xhtml#abstact',
	'http://www.w3.org/1999/xhtml#p',
	'xhtml:p',
	'xhtml:p',
	'http://www.w3.org/1999/xhtml#abstact');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/xhtml#span',
	'http://www.w3.org/1999/xhtml#span',
	'xhtml:span',
	'xhtml:span',
	'http://www.w3.org/1999/xhtml#abstact');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag',
	'http://www.w3.org/1999/xhtml#table',
	'xhtml:table',
	'xhtml:table',
	'http://www.w3.org/1999/xhtml#abstact');

  	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag',
	'http://www.w3.org/1999/xhtml#tr',
	'xhtml:tr',
	'xhtml:tr',
	'http://www.w3.org/1999/xhtml#abstact');

  	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag',
	'http://www.w3.org/1999/xhtml#td',
	'xhtml:td',
	'xhtml:td',
	'http://www.w3.org/1999/xhtml#abstact');

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag',
	'http://www.w3.org/1999/xhtml#td',
	'xhtml:td',
	'xhtml:td',
	'http://www.w3.org/1999/xhtml#abstact');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/xhtml#textarea',
	'http://www.w3.org/1999/xhtml#textarea',
	'xhtml:textarea',
	'xhtml:textarea',
	'http://www.w3.org/1999/xhtml#abstact');
	
	

/*
    a
    abbr
    acronym
    address
    applet
    area
    article
    aside
    audio
    b
    base
    basefont
    bdo
    big
    blockquote
    body X
    br
    button
    canvas
    caption
    center
    cite
    code
    col
    colgroup
    command
    datalist
    dd
    del
    details
    dfn
    dir
    div X
    dl
    dt
    em
    embed
    fieldset
    figure
    font
    footer
    form
    frame
    frameset
    h1, h2, h3, h4, h5, h6
    head
    header
    hgroup
    hr
    html
    i
    iframe
    img
    input
    ins
    isindex
    kbd
    keygen
    (Kommentare)
    label
    legend
    li
    link
    map
    mark
    menu
    meta
    meter
    nav
    noembed
    noframes
    noscript
    object
    ol
    optgroup
    option
    output
    p
    param
    pre
    progress
    q
    rp
    rt
    ruby
    s
    samp
    script X
    section
    select
    small
    source
    span
    strike
    strong
    style
    sub
    sup
    table
    tbody
    td X
    textarea
    tfoot
    th 
    thead
    time
    title
    tr X
    tt
    u
    ul
    var
    video
    */
	
	
	de.auster_gmbh.semanticelement.semantic_web.rootNode(1);
/*
  <pedl:Object_Class rdf:about="http://www.w3.org/1999/xhtml#abstact">
  <rdfs:isDefinedBy rdf:resource="http://www.w3.org/1999/xhtml"/>
  <rdfs:label>xhtml:abstact</rdfs:label>
  <rdfs:comment>xhtml:abstact</rdfs:comment>
  </pedl:Object_Class>
  
  <pedl:script rdf:about="http://www.w3.org/1999/xhtml#script">
  <rdfs:isDefinedBy rdf:resource="http://www.w3.org/1999/xhtml"/>
  <rdfs:subPropertyOf rdf:resource="http://www.w3.org/2000/xmlns/#script" />
  <rdfs:label>xhtml:script</rdfs:label>
  <rdfs:comment>contains a executable script</rdfs:comment>
  <rdfs:domain rdf:resource="http://www.w3.org/1999/xhtml#abstact"/>
  <rdfs:range rdf:resource="http://www.w3.org/2000/01/rdf-schema#Literal"/><!-- -->
  </pedl:script>

  <rdf:Property rdf:about="http://www.w3.org/1999/xhtml#style">
  <rdfs:isDefinedBy rdf:resource="http://www.w3.org/1999/xhtml"/>
  <rdfs:label>xhtml:style</rdfs:label>
  <rdfs:comment>standard xhtml:style</rdfs:comment>
  <rdfs:domain rdf:resource="http://www.w3.org/1999/xhtml#abstact"/>
  <rdfs:range rdf:resource="http://www.w3.org/2000/01/rdf-schema#Literal"/>
  </rdf:Property>
--- 
   <xhtml:abstact rdf:about="http://www.w3.org/1999/xhtml#body">
  <rdfs:isDefinedBy rdf:resource="http://www.w3.org/1999/xhtml"/>
  <rdfs:subClassOf rdf:resource="http://www.w3.org/1999/xhtml#abstact" />
  <pedl:Object_Function  rdf:about="http://www.w3.org/1999/xhtml#body.getNewObject" >
  <pedl:object_parameter rdf:about="http://www.w3.org/1999/xhtml#body.getNewObject.parentObj" />
  <pedl:object_parameter rdf:about="http://www.w3.org/1999/xhtml#body.getNewObject.pfad" />
  </pedl:Object_Function>
  <rdfs:label>xhtml:body</rdfs:label>
  <rdfs:comment>xhtml:body</rdfs:comment>
  <xhtml:script><![CDATA[function(som){
  
  var mysom = som;
  var activateGraph = null;
  var functionToCall = null;
  
  var caller = null;
  var body_class  = de.auster_gmbh.graphicelement.xhtml.HTMLElement;
 	 

  		
  		
  		mysom.currentObject.onClick = function( type , message )
  		{
		}
		
		mysom.currentObject.onDeactivate = function( type , message )
  		{
		}
		
		mysom.currentObject.getNewBagEntryEvent = function(type, message)
		{
		alert(message.getRequester());
		}
		
		mysom.currentObject.getNewPropertyEvent = function(type, message)
		{
		//alert("script/getNewPropertyEvent");
		}
		
		mysom.currentObject.onActivate = function( type , message )
  		{
  		//alert("script/onActivate");
 		}
 		
 		mysom.currentObject.onInitialisation = function( type , message )
  		{
  		//alert("script/init" + this.getName());
 		}
 		
 			
 		mysom.currentObject.getNewObject = function(parentObj,pfad)
		{
		
		var newObj = new p_class(parentObj,pfad);
		
		newObj.setImage(thisImage);
		newObj.setDimension(dimension[0],dimension[1]);
		return newObj;
		
		}
 	 
 	 }]]></xhtml:script>
  </xhtml:abstact>
 
  <xhtml:abstact rdf:about="http://www.w3.org/1999/xhtml#div">
  <rdfs:isDefinedBy rdf:resource="http://www.w3.org/1999/xhtml"/>
  <rdfs:subClassOf rdf:resource="http://www.w3.org/1999/xhtml#abstact" />
  <pedl:Object_Function  rdf:about="http://www.w3.org/1999/xhtml#div.getNewObject" >
  <pedl:object_parameter rdf:about="http://www.w3.org/1999/xhtml#div.getNewObject.parentObj" />
  <pedl:object_parameter rdf:about="http://www.w3.org/1999/xhtml#div.getNewObject.pfad" />
  </pedl:Object_Function>
  <rdfs:label>xhtml:div</rdfs:label>
  <rdfs:comment>xhtml:div</rdfs:comment>
  <xhtml:script><![CDATA[function(som){
  
  var mysom = som;
  var activateGraph = null;
  var functionToCall = null;
  
  var caller = null;
  var div_class  = de.auster_gmbh.graphicelement.xhtml.HTMLElement;
 	 

  		
  		
  		mysom.currentObject.onClick = function( type , message )
  		{
		}
		
		mysom.currentObject.onDeactivate = function( type , message )
  		{
		}
		
		mysom.currentObject.getNewBagEntryEvent = function(type, message)
		{
		alert(message.getRequester());
		}
		
		mysom.currentObject.getNewPropertyEvent = function(type, message)
		{
		//alert("script/getNewPropertyEvent");
		}
		
		mysom.currentObject.onActivate = function( type , message )
  		{
  		//alert("script/onActivate");
 		}
 		
 		mysom.currentObject.onInitialisation = function( type , message )
  		{
  		//alert("script/init" + this.getName());
 		}
 		
 			
 		mysom.currentObject.getNewObject = function(parentObj,pfad)
		{
		
		var newObj = new div_class(pfad);
		
		newObj.setImage(thisImage);
		newObj.setDimension(dimension[0],dimension[1]);
		return newObj;
		
		}
 	 
 	 }]]></xhtml:script>
  </xhtml:abstact>

  <xhtml:abstact rdf:about="http://www.w3.org/1999/xhtml#p">
  <rdfs:isDefinedBy rdf:resource="http://www.w3.org/1999/xhtml"/>
  <rdfs:subClassOf rdf:resource="http://www.w3.org/1999/xhtml#abstact" />
  <pedl:Object_Function  rdf:about="http://www.w3.org/1999/xhtml#p.getNewObject" >
  <pedl:object_parameter rdf:about="http://www.w3.org/1999/xhtml#p.getNewObject.parentObj" />
  <pedl:object_parameter rdf:about="http://www.w3.org/1999/xhtml#p.getNewObject.pfad" />
  </pedl:Object_Function>
  <rdfs:label>xhtml:p</rdfs:label>
  <rdfs:comment>xhtml:p</rdfs:comment>
  <xhtml:script><![CDATA[function(som){ 
  var mysom = som;
  var activateGraph = null;
  var functionToCall = null;
  var bagelements = new Array();
  var caller = null;
  var p_class  = de.auster_gmbh.graphicelement.xhtml.HTMLElement;
  }]]></xhtml:script>
  </xhtml:abstact>


  <rdf:Bag rdf:about="http://www.w3.org/1999/xhtml#table">
  <rdfs:isDefinedBy rdf:resource="http://www.w3.org/1999/xhtml"/>
  <rdfs:subClassOf rdf:resource="http://www.w3.org/1999/xhtml#abstact" />
  <rdfs:label>xhtml:table</rdfs:label>
  <rdfs:comment>xhtml:table</rdfs:comment>
  </rdf:Bag>
  
  
  <rdf:Bag rdf:about="http://www.w3.org/1999/xhtml#tr">
  <rdfs:isDefinedBy rdf:resource="http://www.w3.org/1999/xhtml"/>
  <rdfs:subClassOf rdf:resource="http://www.w3.org/1999/xhtml#abstact" />
  <rdfs:label>xhtml:tr</rdfs:label>
  <rdfs:comment>xhtml:tr</rdfs:comment>
  </rdf:Bag>

  <rdf:Bag rdf:about="http://www.w3.org/1999/xhtml#td">
  <rdfs:isDefinedBy rdf:resource="http://www.w3.org/1999/xhtml"/>
  <rdfs:subClassOf rdf:resource="http://www.w3.org/1999/xhtml#abstact" />
  <rdfs:label>xhtml:td</rdfs:label>
  <rdfs:comment>xhtml:td</rdfs:comment>
  </rdf:Bag>
  
  */
