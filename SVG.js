	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/2002/07/owl',1);

	//alert(de.auster_gmbh.semanticelement.semantic_web.getRef1());


	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/2002/07/owl',1);
	var pedlOnt = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/2002/07/owl#Ontology' );
	about = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about' );
	about.about(pedlOnt,'http://www.w3.org/2000/svg');
	de.auster_gmbh.semanticelement.semantic_web.setRef2(pedlOnt); 
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','Scalable Vector Graphic');
 	
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/1999/xlink',2);
 	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	//de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#comment','Program Element Definition Language');
 	
 	//de.auster_gmbh.semanticelement.semantic_web.inheritObj('http://www.w3.org/2000/svg#image');
	//de.auster_gmbh.semanticelement.semantic_web.aboutObj(2,'http://www.w3.org/2000/svg#image');
	
	//de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#label','svg:image');
	//de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2,'http://www.w3.org/2000/01/rdf-schema#comment','shows a picture');
 	//alert('booh');
 	//alert(de.auster_gmbh.semanticelement.semantic_web.getRef2());
 	
 	var parentContainer = de.auster_gmbh.semanticelement.semantic_web.getRef1();
 	var pedl_function = null;

/*x-----------------------------------------------------------------------------------------------------------------------------------------------
  |                                                    Declaration Area
  |
  x-----------------------------------------------------------------------------------------------------------------------------------------------
*/

 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2000/svg#std_visual',
	'(svg:std_visual)',
	'superclass to mark subclasses as std graphic SVG',
	'http://www.w3.org/2000/01/rdf-schema#Resource');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2000/svg#container',
	'(svg:container)',
	'superclass to mark subclasses as container SVG',
	'http://www.w3.org/2000/01/rdf-schema#Resource');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/2000/svg#converter',
	'(svg:converter)',
	'superclass to mark subclasses for bind to other notations SVG',
	'http://www.w3.org/2000/01/rdf-schema#Resource');

/*x-----------------------------------------------------------------------------------------------------------------------------------------------
  |                                                    Definition of classes directly
  |
  x-----------------------------------------------------------------------------------------------------------------------------------------------
*/

de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#image'] = function(node, caller)
{
	de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#image'].baseConstructor.call(this, node, caller);

};



   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#image'].prototype = new de.auster_gmbh.graphicelement.svg.SVGImage();
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#image'].prototype.constructor = 
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#image'];
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#image'].baseConstructor = de.auster_gmbh.graphicelement.svg.SVGImage;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#image'].superClass = de.auster_gmbh.graphicelement.svg.SVGImage.prototype;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#image'].prototype.name='http://www.w3.org/2000/svg#image';
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#image'].prototype.type = de.auster_gmbh.semanticelement.const.VISUALISATION_TREE;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#image'].prototype.handling = de.auster_gmbh.semanticelement.NODE;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#image'].prototype.baseClazz = 
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
   
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#text'] = function(node, caller)
	{
	de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#text'].baseConstructor.call(this, node, caller);

	};
   
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#text'].prototype = new de.auster_gmbh.graphicelement.svg.SVGText();
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#text'].prototype.constructor = 
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#text'];
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#text'].baseConstructor = de.auster_gmbh.graphicelement.svg.SVGText;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#text'].superClass = de.auster_gmbh.graphicelement.svg.SVGText.prototype;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#text'].prototype.name='http://www.w3.org/2000/svg#text';
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#text'].prototype.type = de.auster_gmbh.semanticelement.const.VISUALISATION_TREE;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#text'].prototype.handling = de.auster_gmbh.semanticelement.NODE;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#text'].prototype.baseClazz = 
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
   
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#circle'] = function(node, caller)
	{
	de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#circle'].baseConstructor.call(this, node, caller);

	};
   
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#circle'].prototype = new de.auster_gmbh.graphicelement.svg.SVGCircle();
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#circle'].prototype.constructor = 
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#circle'];
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#circle'].baseConstructor = de.auster_gmbh.graphicelement.svg.SVGCircle;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#circle'].superClass = de.auster_gmbh.graphicelement.svg.SVGCircle.prototype;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#circle'].prototype.name='http://www.w3.org/2000/svg#circle';
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#circle'].prototype.type = de.auster_gmbh.semanticelement.const.VISUALISATION_TREE;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#circle'].prototype.handling = de.auster_gmbh.semanticelement.NODE;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#circle'].prototype.baseClazz = 
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
   
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#foreignObject'] = function(node, caller)
	{
	de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#foreignObject'].baseConstructor.call(this, node, caller);

	};
   
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#foreignObject'].prototype = new de.auster_gmbh.graphicelement.svg.SVGforeignObject();
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#foreignObject'].prototype.constructor = 
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#foreignObject'];
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#foreignObject'].baseConstructor = de.auster_gmbh.graphicelement.svg.SVGforeignObject;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#foreignObject'].superClass = de.auster_gmbh.graphicelement.svg.SVGforeignObject.prototype;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#foreignObject'].prototype.name='http://www.w3.org/2000/svg#foreignObject';
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#foreignObject'].prototype.type = de.auster_gmbh.semanticelement.const.VISUALISATION_TREE;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#foreignObject'].prototype.handling = de.auster_gmbh.semanticelement.NODE;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#foreignObject'].prototype.baseClazz = 
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];

   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#switch'] = function(node, caller)
	{
	de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#switch'].baseConstructor.call(this, node, caller);

	};

   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#switch'].prototype = new de.auster_gmbh.graphicelement.svg.SVGswitch();
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#switch'].prototype.constructor = 
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#switch'];
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#switch'].baseConstructor = de.auster_gmbh.graphicelement.svg.SVGswitch;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#switch'].superClass = de.auster_gmbh.graphicelement.svg.SVGswitch.prototype;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#switch'].prototype.name='http://www.w3.org/2000/svg#switch';
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#switch'].prototype.type = de.auster_gmbh.semanticelement.const.VISUALISATION_TREE;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#switch'].prototype.handling = de.auster_gmbh.semanticelement.NODE;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#switch'].prototype.baseClazz = 
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];


   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#line'] = function(node, caller)
	{
	de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#line'].baseConstructor.call(this, node, caller);

	};
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#line'].prototype = new de.auster_gmbh.graphicelement.svg.SVGLine();
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#line'].prototype.constructor = 
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#line'];
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#line'].baseConstructor = de.auster_gmbh.graphicelement.svg.SVGLine;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#line'].superClass = de.auster_gmbh.graphicelement.svg.SVGLine.prototype;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#line'].prototype.name='http://www.w3.org/2000/svg#line';
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#line'].prototype.type = de.auster_gmbh.semanticelement.const.VISUALISATION_TREE;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#line'].prototype.handling = de.auster_gmbh.semanticelement.NODE;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#line'].prototype.baseClazz = 
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];

   
   
    de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#g'] = function(node, caller)
	{
	de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#g'].baseConstructor.call(this, node, caller);

	};  
//de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#g'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#g'].prototype = new de.auster_gmbh.graphicelement.visualElement();
de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#g'].prototype.constructor =
de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#g']
de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#g'].baseConstructor = de.auster_gmbh.graphicelement.visualElement;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#g'].superClass = de.auster_gmbh.graphicelement.visualElement.prototype;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#g'].prototype.name='http://www.w3.org/2000/svg#g';
de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#g'].prototype.type = de.auster_gmbh.semanticelement.const.VISUALISATION_TREE;
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#g'].prototype.handling = de.auster_gmbh.semanticelement.NODE;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#g'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];

var helpvar = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];

   
/*
	graphic elements has a seperate object with its own bag. They need to be pushed as well.
*/
helpvar.getNewContainerEntryEvent = function(event)
	{
		//console.debug(this.getName() +  " gets a Containerevent");
	}


/*
	graphic elements has a seperate object with its own bag. They need to be pushed as well.
*/
helpvar.getNewBagEntryEvent  = function(event)
	{
		//console.debug(this.getName() +  " gets a Bagevent");
	}


  for( var prop in helpvar ) 
  {
  
  
  if(prop != 'name')
  {
    if(!de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#image'].prototype[prop])
    {
    	de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#image'].prototype[prop] = helpvar[prop];
  de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#g'].prototype[prop] = helpvar[prop];
  de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#text'].prototype[prop] = helpvar[prop];
  de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#circle'].prototype[prop] = helpvar[prop];
  de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#line'].prototype[prop] = helpvar[prop];
  de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#foreignObject'].prototype[prop] = helpvar[prop];
  de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#switch'].prototype[prop] = helpvar[prop];
  	}
  }
  }

  de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#image'].prototype.script_prototype = function(som)
  {
  	var mysom = som
  	
  	mysom.currentObject.getNewPropertyEvent = function( type , message )
  	{
  	
		if(message.getRequester().getName() == 'http://www.w3.org/1999/xlink#href')
		{
					//console.log(message.getRequester().successor.toString());
			mysom.currentObject.setImage(message.getRequester().successor.toString());
		}
		
		if(message.getRequester().getName() == 'http://www.w3.org/2000/svg#width')
		{
			mysom.currentObject.setDimension(message.getRequester().successor.toString());
		}
		
		if(message.getRequester().getName() == 'http://www.w3.org/2000/svg#height')
		{
			mysom.currentObject.setDimension(undefined,message.getRequester().successor.toString());
		}
				
		if(message.getRequester().getName() == 'http://www.w3.org/2000/svg#x')
		{
			mysom.currentObject.setX(message.getRequester().successor.toString());
		}
		
		if(message.getRequester().getName() == 'http://www.w3.org/2000/svg#y')
		{
			mysom.currentObject.setY(message.getRequester().successor.toString());
		}
		if(message.getRequester().getName() == 'http://www.w3.org/2000/xmlns/#style')
		{
			mysom.currentObject.setStyle(message.getRequester().successor.toString());
		}
		
		
	}
	
		
 	//mysom.currentObject.preAccessEvent = null;
 	//mysom.currentObject.pastAccessEvent = null;
 	mysom.currentObject.onClick_event = function( type , message )
 	{
 	 	console.debug(this.output);
 	console.debug(this.input);
 	console.debug(this.bag);
 	}
 	//mysom.currentObject.ondbClick_event = null;
 	//mysom.currentObject.onActivate = null;
 	//mysom.currentObject.onDeactivate = null;
  }

  de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#text'].prototype.script_prototype = function(som)
  {
  	var mysom = som
  	var text = '';
  	
  	
  	mysom.currentObject.getNewPropertyEvent = function( type , message )
  	{
  			
		if(message.getRequester().getName() == 'http://www.w3.org/2000/svg#x')
		{
			mysom.currentObject.setWayPoint(message.getRequester().successor.toString());
		}
		
		if(message.getRequester().getName() == 'http://www.w3.org/2000/svg#y')
		{
			mysom.currentObject.setWayPoint(undefined,message.getRequester().successor.toString());
		}
		if(message.getRequester().getName() == 'http://www.w3.org/2000/xmlns/#style')
		{
			mysom.currentObject.setStyle(message.getRequester().successor.toString());
		}
	}

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

  de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#line'].prototype.script_prototype = function(som)
  {
  	var mysom = som
  	var text = '';
  	
  	
  	mysom.currentObject.getNewPropertyEvent = function( type , message )
  	{
  			
		if(message.getRequester().getName() == 'http://www.w3.org/2000/svg#x1')
		{
			mysom.currentObject.setPoints('x1',message.getRequester().successor.toString());
		}
		
		if(message.getRequester().getName() == 'http://www.w3.org/2000/svg#y1')
		{
			mysom.currentObject.setPoints('y1',message.getRequester().successor.toString());
		}
				
		if(message.getRequester().getName() == 'http://www.w3.org/2000/svg#x2')
		{
			mysom.currentObject.setPoints('x2',message.getRequester().successor.toString());
		}
				
		if(message.getRequester().getName() == 'http://www.w3.org/2000/svg#y2')
		{
			mysom.currentObject.setPoints('y2',message.getRequester().successor.toString());
		}
		if(message.getRequester().getName() == 'http://www.w3.org/2000/xmlns/#style')
		{
			mysom.currentObject.setStyle(message.getRequester().successor.toString());
		}
	}

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

  de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#foreignObject'].prototype.script_prototype = function(som)
  {
  	var mysom = som
  	
  	mysom.currentObject.getNewPropertyEvent = function( type , message )
  	{
  	
		//if(message.getRequester().getName() == 'http://www.w3.org/1999/xlink#href')
		//{
		//	mysom.currentObject.setImage(message.getRequester().successor.toString());
		//}
		
		if(message.getRequester().getName() == 'http://www.w3.org/2000/svg#width')
		{
			mysom.currentObject.setDimension(message.getRequester().successor.toString());
		}
		
		if(message.getRequester().getName() == 'http://www.w3.org/2000/svg#height')
		{
			mysom.currentObject.setDimension(undefined,message.getRequester().successor.toString());
		}
				
		if(message.getRequester().getName() == 'http://www.w3.org/2000/svg#x')
		{			
			mysom.currentObject.setX(message.getRequester().successor.toString());
		}
		
		if(message.getRequester().getName() == 'http://www.w3.org/2000/svg#y')
		{
			mysom.currentObject.setY(message.getRequester().successor.toString());
		}
	}
}


/*x-----------------------------------------------------------------------------------------------------------------------------------------------
  |                                                    Definition of objects for these classes
  |
  x-----------------------------------------------------------------------------------------------------------------------------------------------
*/

 	

 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/svg#image',
	'http://www.w3.org/2000/svg#image',
	'svg:image',
	'shows a picture',
	'http://www.w3.org/2000/svg#std_visual');
	
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function',
	'http://www.w3.org/2000/svg#image.getNewObject',
	'image.getnewObject',
	'Object_Function',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function');
	
	pedl_function = de.auster_gmbh.semanticelement.semantic_web.getRef2();
	
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter',
	'http://www.w3.org/2000/svg#image.getNewObject.parentObj',
	'image.getnewObject.parentObj',
	'object_parameter',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter',
	'http://www.w3.org/2000/svg#image.getNewObject.pfad',
	'image.getnewObject.pfad',
	'object_parameter',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter');
	
	de.auster_gmbh.semanticelement.semantic_web.setRef1(parentContainer);
		
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/svg#g',
	'http://www.w3.org/2000/svg#g',
	'svg:g',
	'container',
	'http://www.w3.org/2000/svg#container');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/svg#text',
	'http://www.w3.org/2000/svg#text',
	'svg:text',
	'Textfield',
	'http://www.w3.org/2000/svg#std_visual');
	
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/svg#circle',
	'http://www.w3.org/2000/svg#circle',
	'svg:circle',
	'circle in svg',
	'http://www.w3.org/2000/svg#std_visual');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/svg#line',
	'http://www.w3.org/2000/svg#line',
	'svg:line',
	'line in svg',
	'http://www.w3.org/2000/svg#std_visual');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/svg#foreignObject',
	'http://www.w3.org/2000/svg#foreignObject',
	'svg:foreignObject',
	'Embeding for other notation in svg',
	'http://www.w3.org/2000/svg#converter');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/svg#switch',
	'http://www.w3.org/2000/svg#switch',
	'svg:switch',
	'selectionelement in svg',
	'http://www.w3.org/2000/svg#converter');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/2000/svg#x',
	'svg:x',
	'property for x coordinate',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/2000/svg#y',
	'svg:y',
	'property for y coordinate',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/2000/svg#x1',
	'svg:x1',
	'property for x coordinate',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/2000/svg#y1',
	'svg:y1',
	'property for y coordinate',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/2000/svg#x2',
	'svg:x2',
	'property for x2 coordinate',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/2000/svg#y2',
	'svg:y2',
	'property for y2 coordinate',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/2000/svg#width',
	'svg:width',
	'property for width coordinate',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/2000/svg#height',
	'svg:height',
	'property for height coordinate',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/2000/svg#requiredExtensions',
	'svg:requiredExtensions',
	'property for URI',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.w3.org/2000/svg#onclick',
	'svg:onclick',
	'classic event property',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
 	function(som)
 	{
 	  	var mysom = som;
 	  	var activateGraph = null;
 	  	var functionToCall = null;
  		
  		
  		mysom.currentObject.onClick = function( type , message )
  		{
  			
		}
		
		mysom.currentObject.onDeactivate = function( type , message )
  		{
		}
		
		mysom.currentObject.getNewBagEntryEvent = function(type, message)
		{		
			alert("wuhu");
		}
		/*
		i cant remember this concept. Need to be recordnized.
		*/
		mysom.currentObject.getNewContainerEntryEvent = function(type, message)
		{
		alert("wuhu");
		var URI =  this;
		 
		while (URI.container.length > 0)
 	  	{
 	  		//alert(URI + " mit der container ");
 	  	URI = URI.getContainerOwner(0);
 	  	  
 	  	} 
 	  	
 	  	if(URI.output['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'] == undefined)
 	  		{
 	  	//		alert(URI);
 	  	//alert("wrong use of callfunction, try to list URI:" + URI);
 	  		return;
 	  		}
 	  	URI = URI.output['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'][0].successor;
 	  	//alert(URI);
		//alert("script/getContainerEvent");		
		
		try
 		{
 		
 		mysom.semantic_web.getObjByRepresentationObj('http://www.auster-gmbh.de/2010/08/anttree-lib#Controlcenter').signURI(URI
 		, this);

 		}
 		catch(err2)
 		{
 		alert('mist' + err2);
 		}
		
		}
		
		mysom.currentObject.onInterval_event = function(element)
 		{
 		  alert("wuhu");
 		  
 		  if (this.container.length > 0)
 	  	  {
 	  	    if(this.getContainerOwner(0)['onActivate'] != undefined)
 	  	    this.getContainerOwner(0).onActivate( '*' , new de.auster_gmbh.library.tools.eventObject('onActivate',this,null));
 	  	  
 	  	  } 
 		}
		
		mysom.currentObject.getNewPropertyEvent = function(type, message)
		{alert("wuhu");
		//alert("script/getNewPropertyEvent");
		}
		
		mysom.currentObject.onActivate = function( type , message )
  		{alert("wuhu");
  		//alert("script/onActivate");
 		}
 		
 		mysom.currentObject.onInitialisation = function( type , message )
  		{
  		//alert("script/init" + this.getName());
 		}
 	}
 	);

 	de.auster_gmbh.semanticelement.semantic_web.rootNode(1);
 	
 	
