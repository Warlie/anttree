

/* This script is licensed under the terms of the GNU General Public License. 
 This library is a javascript document and useable for Mozilla Firefox and Opera. It offers a small part of the SVG Framework for direct using in Javascript.
Current shapes are:
- lines
- polygons
- Circles
- rectangles
- textual signs
- images
- embedding for xhtml and several xhtml-tags 
*/ 

 var de;
 if(!de) de = {};
 else if (typeof de != 'object')
 throw new Error('de allready exists and os not an object'); 

 if(!de.auster_gmbh) de.auster_gmbh = {};
 else if (typeof de.auster_gmbh != 'object')
 throw new Error('de.auster_gmbh allready exists and os not an object'); 

 if(!de.auster_gmbh.graphicelement) de.auster_gmbh.graphicelement = {};
 else if (typeof de.auster_gmbh.graphicelement != 'object')
 throw new Error('de.auster_gmbh.graphicelement allready exists and os not an object'); 
 if(!de) de = {};
 else if (typeof de != 'object')
 throw new Error('de allready exists and os not an object'); 




de.auster_gmbh.graphicelement.event = {};

de.auster_gmbh.graphicelement.event.infotextelement = null;

/* needs de.auster_gmbh.semanticelement.semantic_web object, 
displays label and comment of a rdf node on screen */
de.auster_gmbh.graphicelement.event.showinfotext = function( type )
  	{
  	
  	
  		
  		if(!de.auster_gmbh.graphicelement.event.infotext)de.auster_gmbh.graphicelement.event.infotext = document.getElementById('infotext');
  		
		if(de.auster_gmbh.graphicelement.event.infotext)
		{
		
		var label;
		var comment;
		
		if (type.target)
		{
			label = type.target.getAttributeNS('http://www.w3.org/2000/01/rdf-schema#','label');
			comment = type.target.getAttributeNS('http://www.w3.org/2000/01/rdf-schema#','comment');
		}
		else if (type.srcElement)
		{
			label = type.srcElement.getAttributeNS('http://www.w3.org/2000/01/rdf-schema#','label');
			comment = type.srcElement.getAttributeNS('http://www.w3.org/2000/01/rdf-schema#','comment');
		 
		}

		//alert(type); //message.getAttribute('http://www.w3.org/2000/01/rdf-schema#','label')
			this.infotextelement = new de.auster_gmbh.graphicelement.visualElement();
		
			
			var field = new de.auster_gmbh.graphicelement.svg.SVGforeign(de.auster_gmbh.graphicelement.event.infotext);
			field.transit(260,125);
			field.setWayPoint(40,10);
			field.setDimension(292,200);
			field.setID('SVGforeign');

			var myxhtml2 = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('h1', this)
			myxhtml2.setText(label);
			myxhtml2.setStyle( 'font-style:italic; font-size:15px;color:black;' );
			
			myxhtml2.setID('xhtmlText2');
			
			var myxhtml3 = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('span', this)
			myxhtml3.setText(comment);
			myxhtml3.setStyle( 'font-style:italic; font-size:10px;color:black;' );
			
			myxhtml3.setID('xhtmlText3');


			var myxhtml = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('div',this)
			myxhtml.add(myxhtml2);
			myxhtml.add(myxhtml3);
			myxhtml.setID('xhtmldiv');
		
		
		
			field.add( myxhtml );

			
			field.setID('booh');

			
			this.infotextelement.add(field); 
			this.infotextelement.init(); 
			
		}
  	};
  	
  /* remove node info */
de.auster_gmbh.graphicelement.event.removeinfotext = function( type , message )
  	{
		this.infotextelement.remove();
		//this.infotextelement = null;
  	};

 /* is a container for visualElements 
 * add: adds new visualElements
 * setID(string id): get an id, for its indentification. Useful, when it will be used in an other visualBag
 * getID: returns the id
 * toString: returns a string, consist of type and id
 * findID(string id): returns requested object
 * deleteID(string id): deletes requested object
 * transit(int x, int y):allows to set an offset to move the whole graphic
 * manyElements: returns the many of elements in the container. There is no information about all elements, which are contained in deeper levels
 * remove: removes all graphic elements, which are contained in the visualBag, but it needs to call the init method, to refit it.
 * init: draws all elements
 * getTransit: returns an array of the offsetcoordiates
 * getListOfElements: returns all stored elements in an associative array
 */
de.auster_gmbh.graphicelement.visualBag = function visualBag ()
  	{
  	this.bag = new Array();
  	this.id = '';
  	this.curTrans = new Array();

  	this.add=  function(obj)
 		{

 			
 				this.bag[this.bag.length] = obj;
 
 			
 		};
 	
 	this.setID = function(id)
 	{
 		this.id = id;
 	}
 	
 	this.getID = function()
 	{
 		return this.id;
 	}
 	
 	this.toString = function() {return '[visualbag] ' + this.id;}
 	
 	this.findID = function( findID )
 	{
 	var lterbag = 0;
 		for(lterbag = 0 ; this.bag.length > lterbag ; lterbag++ )
 		{
 			
 			if(this.bag[lterbag].getID() == findID)return this.bag[lterbag];
 		}
 	}
 	
 	this.deleteID = function( findID )
 	{
 	var newArray = new Array();
 	var lterbag = 0;
 	var lternew = 0;
 		for(lterbag = 0 ; this.bag.length > lterbag ; lterbag++ )
 		{
 			
 			if(this.bag[lterbag].getID() == findID)
 			{
 			this.bag[lterbag].remove();
 			}
 			else
 			{
 			newArray[lternew++] = this.bag[lterbag];
 			}
 		}
 		
 		delete this.bag;
 		this.bag = newArray;
 	}
 	
 	this.transit =  function( xpoint , ypoint )
 	{
 	this.curTrans[0]= xpoint;
 	this.curTrans[1]= ypoint;
 	var kterbag = 0;
 		for(kterbag = 0 ; this.bag.length > kterbag ; kterbag++ )
 		{
 		//alert(this.bag[i] + ' in Bag');
 			this.bag[kterbag].transit(xpoint, ypoint);
 			
 		}
 		
 		
 	};
 	
 	this.manyElements = function(){return this.bag.length;}
 	
 	this.getTransit =  function()
 	{
 		return this.curTrans;
 	}
 	
 	this.getListOfElements =  function()
 	{
 		return this.bag;
 	}
 	
 	this.remove = function()
	{
		var iterbag = 0;
		for(iterbag = 0 ; this.bag.length > iterbag ; iterbag++ )
 		{
 		
 			this.bag[iterbag].remove();
 		}
	}
 	
 	this.init =  function()
 	{
 		var jter_bag = 0;
  		for(jter_bag = 0 ; this.bag.length > jter_bag ; jter_bag++ )
 		{	
 		
 			this.bag[jter_bag].init();
 		}		
 	}
 	
  	};

 /* is a container for SVGelements
 * add: adds new SVGelements
 * setID(string id): get an id, for its indentification.
 * getID: returns the id
 * toString: returns a string, consist of type and id
 * findID(string id): returns requested object
 * deleteID(string id): deletes requested object
 * transit(int x, int y):allows to set an offset to move the whole graphic
 * manyElements: returns the many of elements in the container. There is no information about all elements, which are contained in deeper levels
 * remove: removes all graphic elements, which are contained in the visualElement, but it needs to call the init method, to refit it.
 * init: draws all elements
 * getTransit: returns an array of the offsetcoordiates
 * getListOfElements: returns all stored elements in an associative array
 */
de.auster_gmbh.graphicelement.visualElement = function visualElement ()
  	{
  	
  	this.bag = new Array();
  	this.curTrans = new Array();
	this.id = '';
  	this.add=  function(obj)
 		{

 			
 				this.bag[this.bag.length] = obj;
 
 			
 		};
 	
 	this.transit =  function( xpoint , ypoint )
 	{
 	this.curTrans[0]= xpoint;
 	this.curTrans[1]= ypoint;
 	var i = 0;
 		for(i = 0 ; this.bag.length > i ; i++ )
 		{
 		//alert(this.bag[i] + ' in Element');
 			this.bag[i].maintransit(xpoint, ypoint);
 			this.bag[i].alter();
 		}
 		
 		
 	};
 	
 	
 	this.setID = function(id)
 	{
 		this.id = id;
 	}
 	
 	this.getID = function()
 	{
 		return this.id;
 	}
 	
 	this.toString = function() {return '[visualElement] ' + this.id ;}
 	
 	this.findID = function( findID )
 	{
 		for(i = 0 ; this.bag.length > i ; i++ )
 		{
 		
 			if(this.bag[i].getID == findID)return this.bag[i];
 		}
 	}
 	
 	this.getTransit =  function()
 	{
 		return this.curTrans;
 	}
 	
 	this.remove = function()
	{
		var i = 0;
		for(i = 0 ; this.bag.length > i ; i++ )
 		{
 		
 			this.bag[i].remove();
 		}
	}
	
 	this.getListOfElements =  function()
 	{
 		return this.bag;
 	}
 	 	
 	this.init =  function()
 	{
 		var j = 0;
 	
  		for(j = 0 ; this.bag.length > j ; j++ )
 		{	
 			this.bag[j].init();
 		}		
 	}
 	
  	};
  	
de.auster_gmbh.graphicelement.svg = {};
  	
 /*
 * draws an object, consisting of lines or a many of lines
 * @param node: is a svg-node, to become a child from.
 * @param caller: an object, which offers the functions "ondbclick_event" and "onclick_event"
 */
de.auster_gmbh.graphicelement.svg.SVGPath =  function SVGPath (node, caller)
 	{
 	var parentElement = node;
 	var svgCaller = caller;
 	var style = '';
 	var wayPoints = new Array();
 	var transit = new Array();
 	var mtransit = new Array();
 	var id = '';
 	

 	
 	transit[0] = 0;
 	transit[1] = 0;
 	
 	this.graphicElement = null;
 	
 	this.setWayPoint =  function( xpoint , ypoint )
 	{
 		wayPoints[wayPoints.length] = new Array();
 		wayPoints[wayPoints.length - 1][0] = xpoint;
 		wayPoints[wayPoints.length - 1][1] = ypoint;
 		
 	}
 	
 	this.setStyle =  function( objstyle )
 	{
 		style = objstyle;
 	}
 	
 	this.setID =  function(myid)
 	{
 		id = myid;
 	}
	
	this.toString = function() {return '[SVGPath] ' + id ;}
 	
 	this.getID = function()
 	{
 		return id;
 	}

 	this.maintransit =  function(xpoint, ypoint)
 	{
 		mtransit[0] = xpoint;
 		mtransit[1] = ypoint;
 	}
  	this.getmaintransit =  function()
 	{
 		return mtransit;
 	}	
 	this.alter =  function()
 	{
 	
 
	//alert(this.graphicElement);
	
		this.graphicElement.setAttributeNS(null, 'transform', 'translate(' + mtransit[0] + ',' +mtransit[1] + ')');

 		
 	}

 	this.transit =  function(xpoint, ypoint)
 	{
 		transit[0] = xpoint;
 		transit[1] = ypoint;
 	}
 	
 		
 	this.init =  function()
	{
	
		var d = 'M ';
		for(i = 0 ; wayPoints.length > i ; i++)
		
			if(i == 0)
			 d += (wayPoints[i][0] + transit[0]) + ',' + (wayPoints[i][1] + transit[1]) + ' ';
			else
			 d += 'L ' +(wayPoints[i][0] + transit[0]) + ',' + (wayPoints[i][1] + transit[1]) + ' ';
			 
		d += 'z';
		
		this.graphicElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		
		this.graphicElement.setAttributeNS(null, 'id', id);
		this.graphicElement.setAttributeNS(null, 'd', d);
		this.graphicElement.setAttributeNS(null, 'style', style);
		
		var eventElem =  function()
		{
			svgCaller.onclick_event(this);
		}
		
		
		this.graphicElement.onclick = eventElem;
		
		var eventdbElem =  function()
		{
			giveOut();
			svgCaller.ondbclick_event(this);
		}
		
		this.graphicElement.ondblclick = eventdbElem;
		
		parentElement.appendChild(this.graphicElement);
		
	}

	this.remove =  function()
	{
		parentElement.removeChild(this.graphicElement);
	}

 	 };
 	 
de.auster_gmbh.graphicelement.svg.SVGLine =  function (node, caller)
 	{
 	var parentElement = node;
 	var svgCaller = caller;
 	var style = '';
 	var wayPoints = new Array();
 	var transit = new Array();
 	var mtransit = new Array();
 	var id = '';
 	

 	
 	transit[0] = 0;
 	transit[1] = 0;
 	
 	this.graphicElement = null;
 	
 	this.setWayPoint =  function( xpoint , ypoint )
 	{
 		wayPoints[wayPoints.length] = new Array();
 		wayPoints[wayPoints.length - 1][0] = xpoint;
 		wayPoints[wayPoints.length - 1][1] = ypoint;
 		
 	}
 	
 	this.getWayPoint =  function( row, col )
 	{
 		
 		return wayPoints[row][col];
 		
 	}
 	
 	this.alterWayPoint =  function( row, col , point )
 	{

 		wayPoints[row][col] = point;
 		var res = '';
 		if(col == 1)
 		{
 			res = 'y';
 		}
 		else
 		{
 			res = 'x';
 		}
 		
 		res +=  row + 1;
 		
 		this.graphicElement.setAttributeNS(null, res, (wayPoints[row][col] + transit[col]));
 		
 	}
 	
 	this.setStyle =  function( objstyle )
 	{
 		style = objstyle;
 	}
 	
 	this.setID =  function(myid)
 	{
 		id = myid;
 	}
	
	this.toString = function() {return '[SVGLine] ' + id ;}
 	
 	this.getID = function()
 	{
 		return id;
 	}

 	this.maintransit =  function(xpoint, ypoint)
 	{
 		mtransit[0] = xpoint;
 		mtransit[1] = ypoint;
 	}
 	
 	this.getmaintransit =  function()
 	{
 		return mtransit;
 	}
 	
 	this.alter =  function()
 	{
 	
 
	//alert(this.graphicElement);
	
		this.graphicElement.setAttributeNS(null, 'transform', 'translate(' + mtransit[0] + ',' +mtransit[1] + ')');

 		
 	}

 	this.transit =  function(xpoint, ypoint)
 	{
 		transit[0] = xpoint;
 		transit[1] = ypoint;
 	}
 	
 		
 	this.init =  function()
	{
	
		
		this.graphicElement = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		
		this.graphicElement.setAttributeNS(null, 'id', id);
		this.graphicElement.setAttributeNS(null, 'x1', (wayPoints[0][0] + transit[0]));
		this.graphicElement.setAttributeNS(null, 'y1', (wayPoints[0][1] + transit[1]));
		this.graphicElement.setAttributeNS(null, 'x2', (wayPoints[1][0] + transit[0]));
		this.graphicElement.setAttributeNS(null, 'y2', (wayPoints[1][1] + transit[1]));
		this.graphicElement.setAttributeNS(null, 'style', style);
		
		var eventElem =  function()
		{
			svgCaller.onclick_event(this);
		}
		
		
		this.graphicElement.onclick = eventElem;
		
				
		var eventdbElem =  function()
		{
			
			svgCaller.ondbclick_event(this);
		}
		
		this.graphicElement.ondblclick = eventdbElem;
		
		
		parentElement.appendChild(this.graphicElement);
		
	}

	this.remove =  function()
	{
		parentElement.removeChild(this.graphicElement);
	}

 	 };
 	 
de.auster_gmbh.graphicelement.svg.SVGCircle =  function(node, caller)
 	{
 	var parentElement = node;
 	var svgCaller = caller;
 	var style = '';
 	var radiant = 1;
 	var wayPoints = new Array();
 	var transit = new Array();
 	var mtransit = new Array();
 	var id = '';
 	var label = '';
 	var comment = '';
 	

 	
 	transit[0] = 0;
 	transit[1] = 0;
 	
 	this.graphicElement = null;
 	
 	this.setWayPoint =  function( xpoint , ypoint )
 	{
 		wayPoints[wayPoints.length] = new Array();
 		wayPoints[wayPoints.length - 1][0] = xpoint;
 		wayPoints[wayPoints.length - 1][1] = ypoint;
 		
 	}
 	
 	this.getWayPoint =  function( rowidx , colidx )
 	{
 		
 		
 		return wayPoints[rowidx][colidx];
 		
 	}
 	
 	this.setradiant = function(rad)
 	{
 		radiant = rad;
 	}
 	
 	this.setStyle =  function( objstyle )
 	{
 		style = objstyle;
 	}
 	
 	this.setID =  function(myid)
 	{
 		id = myid;
 	}

	this.toString = function() {return '[SVGCircle] ' + id ;}

 	this.getID = function()
 	{
 		return id;
 	}

 	this.maintransit =  function(xpoint, ypoint)
 	{
 		mtransit[0] = xpoint;
 		mtransit[1] = ypoint;
 	}
 	
 	this.getmaintransit =  function()
 	{
 		
 		return mtransit;
 	}
 	
 	this.alter =  function()
 	{
 	
 
	//alert(this.graphicElement);
	
		this.graphicElement.setAttributeNS(null, 'transform', 'translate(' + mtransit[0] + ',' +mtransit[1] + ')');

 		
 	}

	this.setLabel = function(mylabel,mycomment)
	{
		label = mylabel;
		comment = mycomment;

	}

 	this.transit =  function(xpoint, ypoint)
 	{
 		transit[0] = xpoint;
 		transit[1] = ypoint;
 	}
 	
 		
 	this.init =  function()
	{
	
		
		for(i = 0 ; wayPoints.length > i ; i++)
		
			if(i == 0)
			{
			x_elem = (wayPoints[i][0] + transit[0]);
			y_elem = (wayPoints[i][1] + transit[1]);
			}
			else
			{
			x_elem = ' ' + (wayPoints[i][0] + transit[0]);
			y_elem = ' ' + (wayPoints[i][1] + transit[1]);
			}
		
		this.graphicElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
		
		this.graphicElement.setAttributeNS(null, 'id', id);
		this.graphicElement.setAttributeNS(null, 'cx', x_elem);
		this.graphicElement.setAttributeNS(null, 'cy', y_elem);
		this.graphicElement.setAttributeNS(null, 'r', radiant);
		
		this.graphicElement.setAttributeNS(null, 'style', style);
		
		if(label != '')this.graphicElement.setAttributeNS( 'http://www.w3.org/2000/01/rdf-schema#' , 'label', label);
		if(comment != '')this.graphicElement.setAttributeNS( 'http://www.w3.org/2000/01/rdf-schema#' , 'comment', comment);
		
		this.graphicElement.onmouseover = de.auster_gmbh.graphicelement.event.showinfotext;
		this.graphicElement.onmouseout = de.auster_gmbh.graphicelement.event.removeinfotext;
		
		var eventElem =  function()
		{
			
			svgCaller.onclick_event(this);
		}
		
		this.graphicElement.onclick = eventElem;
		
		var eventdbElem =  function()
		{
			
			svgCaller.ondbclick_event(this);
		}
		
		this.graphicElement.ondblclick = eventdbElem;
		
		
		parentElement.appendChild(this.graphicElement);
		
	}

	this.remove =  function()
	{
		parentElement.removeChild(this.graphicElement);
	}

 	 };
 	 
de.auster_gmbh.graphicelement.svg.SVGText =  function(node, caller)
 	{
 	var parentElement = node;
 	var svgCaller = caller;
 	var style = '';
 	var wayPoints = new Array();
 	var transit = new Array();
 	var mtransit = new Array();
 	var text = '';
 	var id = '';
 	transit[0] = 0;
 	transit[1] = 0;
 	
 	this.graphicElement = null;
 	
 	this.setText =  function(mytext){text = mytext;}
 	
 	this.setWayPoint =  function( xpoint , ypoint )
 	{
 		wayPoints[wayPoints.length] = new Array();
 		wayPoints[wayPoints.length - 1][0] = xpoint;
 		wayPoints[wayPoints.length - 1][1] = ypoint;
 		
 	}
 	
 	this.setStyle =  function( objstyle )
 	{
 		style = objstyle;
 	}
 	
 	this.setID =  function(myid)
 	{
 		id = myid;
 	}

	this.toString = function() {return '[SVGText] ' + id ;}

 	this.getID = function()
 	{
 		return id;
 	}
 	
 	this.maintransit =  function(xpoint, ypoint)
 	{
 		mtransit[0] = xpoint;
 		mtransit[1] = ypoint;
 	}
 
  	this.alter =  function()
 	{
 	
 
	//alert(this.graphicElement);
	
		this.graphicElement.setAttributeNS(null, 'transform', 'translate(' + mtransit[0] + ',' +mtransit[1] + ')');

 		
 	}
 
 	this.transit =  function(xpoint, ypoint)
 	{
 		transit[0] = xpoint;
 		transit[1] = ypoint;
 	}
 	
 	this.init =  function()
	{
	
		var x_elem = '';
		var y_elem = '';
		for(i = 0 ; wayPoints.length > i ; i++)
		{
			if(i == 0)
			{
			x_elem = (wayPoints[i][0] + transit[0]);
			y_elem = (wayPoints[i][1] + transit[1]);
			}
			else
			{
			x_elem = ' ' + (wayPoints[i][0] + transit[0]);
			y_elem = ' ' + (wayPoints[i][1] + transit[1]);
			}
		}
		

		
		this.graphicElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
		
		this.graphicElement.setAttributeNS(null, 'id', id);
		this.graphicElement.setAttributeNS(null, 'x', x_elem);
		this.graphicElement.setAttributeNS(null, 'y', y_elem);
		this.graphicElement.setAttributeNS(null, 'style', style);
		this.graphicElement.appendChild(document.createTextNode(text));
		var eventElem =  function()
		{
			svgCaller.onclick_event(this);
		}
		
		
		this.graphicElement.onclick = eventElem;
		
		var eventdbElem =  function()
		{
			
			svgCaller.ondbclick_event(this);
		}
		
		this.graphicElement.ondblclick = eventdbElem;
		
		parentElement.appendChild(this.graphicElement);
		
	}

	this.remove =  function()
	{
		parentElement.removeChild(this.graphicElement);
	}

 	 };
 	 
de.auster_gmbh.graphicelement.svg.SVGImage  =  function(node, caller)
  	{
 	var parentElement = node;
 	var svgCaller = caller;
 	var style = '';
 	var wayPoints = new Array();
 	var dimension = new Array();
 	var transit = new Array();
 	var mtransit = new Array();
 	var thisImage = '';
 	var id = '';
 	transit[0] = 0;
 	transit[1] = 0;
 	
 	this.graphicElement = null;
 	
 	this.setImage =  function(myimage){thisImage = myimage;}
 	
 	this.setWayPoint =  function( xpoint , ypoint )
 	{
 		wayPoints[wayPoints.length] = new Array();
 		wayPoints[wayPoints.length - 1][0] = xpoint;
 		wayPoints[wayPoints.length - 1][1] = ypoint;
 		
 	}
 	
 	this.setDimension = function( width , height )
 	{
 	
 		dimension[0] = width;
 		dimension[1] = height;
 		
 	}
 	
 	
 	this.setID = function(myid)
 	{
 		id = myid;
 	}
 
	this.toString = function() {return '[SVGImage] ' + id ;}
 
 	this.getID = function()
 	{
 		return id;
 	} 
 	
 	this.maintransit = function(xpoint, ypoint)
 	{
 		mtransit[0] = xpoint;
 		mtransit[1] = ypoint;
 	}
 
  	this.alter = function()
 	{
 	
 
		this.graphicElement.setAttributeNS(null, 'transform', 'translate(' + mtransit[0] + ',' +mtransit[1] + ')');

 		
 	}
 
 	this.transit = function(xpoint, ypoint)
 	{
 		transit[0] = xpoint;
 		transit[1] = ypoint;
 	}
 	
 	this.init = function()
	{
	
		var x_elem = '';
		var y_elem = '';
		for(i = 0 ; wayPoints.length > i ; i++)
		{
			if(i == 0)
			{
			x_elem = (wayPoints[i][0] + transit[0]);
			y_elem = (wayPoints[i][1] + transit[1]);
			}
			else
			{
			x_elem = ' ' + (wayPoints[i][0] + transit[0]);
			y_elem = ' ' + (wayPoints[i][1] + transit[1]);
			}
		}
		

		
		this.graphicElement = document.createElementNS('http://www.w3.org/2000/svg', 'image');
		
		this.graphicElement.setAttributeNS(null, 'id', id);
		this.graphicElement.setAttributeNS(null, 'x', x_elem);
		this.graphicElement.setAttributeNS(null, 'y', y_elem);
		this.graphicElement.setAttributeNS(null, 'height', dimension[1]);
		this.graphicElement.setAttributeNS(null, 'width', dimension[0]);
		this.graphicElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', thisImage );
		
		var eventElem = function()
		{
			svgCaller.onclick_event(this);
		}
		
		
		this.graphicElement.onclick = eventElem;
				
		var eventdbElem =  function()
		{
			
			svgCaller.ondbclick_event(this);
		}
		
		this.graphicElement.ondblclick = eventdbElem;
		
		parentElement.appendChild(this.graphicElement);
		
	}

	this.remove = function()
	{
		parentElement.removeChild(this.graphicElement);
	}

 	 };
 	  
 //container for foreign elements
de.auster_gmbh.graphicelement.svg.SVGforeign  = function(node)
  	{
  	this.bag = new Array();
 	var parentElement = node;
 	var wayPoints = new Array();
 	var style = '';
 	var attributes = new Array();
 	var dimension = new Array();
 	var transit = new Array();
 	var mtransit = new Array();
 	var thisImage = '';
 	var id = '';
 	transit[0] = 0;
 	transit[1] = 0;
 	
 	this.graphicElement = null;
 	
 	this.switchElement = null;
 	
 	this.setImage = function(myimage){thisImage = myimage;}

 	this.setWayPoint =  function( xpoint , ypoint )
 	{
 		wayPoints[wayPoints.length] = new Array();
 		wayPoints[wayPoints.length - 1][0] = xpoint;
 		wayPoints[wayPoints.length - 1][1] = ypoint;
 		
 	}
 	
 	this.setDimension = function( width , height )
 	{
 	
 		dimension[0] = width;
 		dimension[1] = height;
 		
 	}
 	
 	
 	this.setID = function(myid)
 	{
 		id = myid;
 	}

	this.toString = function() {return '[SVGforeign] ' + id ;}

 	this.getID = function()
 	{
 		return id;
 	} 
 	 	
 	this.maintransit = function(xpoint, ypoint)
 	{
 		mtransit[0] = xpoint;
 		mtransit[1] = ypoint;
 	}
 
  	this.alter = function()
 	{
 	
 
		this.graphicElement.setAttributeNS(null, 'transform', 'translate(' + mtransit[0] + ',' + mtransit[1] + ')');

 		
 	}
 
 	this.transit = function(xpoint, ypoint)
 	{
 		transit[0] = xpoint;
 		transit[1] = ypoint;
 	}
 	

  	this.add = function(obj)
 		{

 			
 				this.bag[this.bag.length] = obj;
 
 			
 		};
 	
 	this.init = function()
	{
	
		var x_elem = '';
		var y_elem = '';
		for(i = 0 ; wayPoints.length > i ; i++)
		{
			if(i == 0)
			{
			x_elem = (wayPoints[i][0] + transit[0]);
			y_elem = (wayPoints[i][1] + transit[1]);
			}
			else
			{
			x_elem = ' ' + (wayPoints[i][0] + transit[0]);
			y_elem = ' ' + (wayPoints[i][1] + transit[1]);
			}
		}
		

		
		this.switchElement = document.createElementNS('http://www.w3.org/2000/svg', 'switch');
		
		
		
		this.graphicElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
		
		this.graphicElement.setAttributeNS(null, 'id', id);
		this.graphicElement.setAttributeNS(null, 'x', x_elem);
		this.graphicElement.setAttributeNS(null, 'y', y_elem);
		this.graphicElement.setAttributeNS(null, 'height', dimension[1]);
		this.graphicElement.setAttributeNS(null, 'width', dimension[0]);
		
		
		
		for(jter = 0 ; this.bag.length > jter ; jter++ )
 		{	
 			this.bag[jter].setParentElement(this.graphicElement);
 			this.bag[jter].init();
 		}		
		
		
		this.switchElement.appendChild(this.graphicElement);
	
		parentElement.appendChild(this.switchElement);
		
	}

	this.remove = function()
	{
	
		var i = 0;
		for(i = 0 ; this.bag.length > i ; i++ )
 		{
 		
 			this.bag[i].remove();
 		}
 		
		this.switchElement.removeChild(this.graphicElement);
		parentElement.removeChild(this.switchElement);
	}

 	 };
 	 
//XHTML elements
de.auster_gmbh.graphicelement.xhtml = {};
de.auster_gmbh.graphicelement.xhtml.p  = function( caller)
  	{
  	this.bag = new Array();
 	var parentElement = null;
 	var xhtmlCaller = caller;
 	var style = '';
 	var wayPoints = new Array();
 	var text = new Array();
 	var attributes = new Array();
 	var dimension = new Array();
 	var transit = new Array();
 	var mtransit = new Array();
 	
 	var id = '';
 	transit[0] = 0;
 	transit[1] = 0;
 	
 	this.setParentElement = function(node)
 	{
 		parentElement = node;
 	}
 	
 	this.graphicElement = null;
 	
 	this.setAttribute = function( key , value )
 	{
 		attributes[attributes.length] = new Array();
 		attributes[attributes.length - 1][0] = key;
 		attributes[attributes.length - 1][1] = value;
 		
 	}
 	
 	this.setText = function( mytext )
 	{
 		text[text.length] = mytext;
  	}
 	
 	this.setWayPoint = function( xpoint , ypoint )
 	{
 		wayPoints[wayPoints.length] = new Array();
 		wayPoints[wayPoints.length - 1][0] = xpoint;
 		wayPoints[wayPoints.length - 1][1] = ypoint;
 		
 	}
 	
 	this.setDimension = function( width , height )
 	{
 	
 		dimension[0] = width;
 		dimension[1] = height;
 		
 	}
 	
 	
 	this.setID = function(myid)
 	{
 		id = myid;
 	}
 	
 	this.maintransit = function(xpoint, ypoint)
 	{
 		mtransit[0] = xpoint;
 		mtransit[1] = ypoint;
 	}
 
  	this.alter = function()
 	{
 	
 
		this.graphicElement.setAttributeNS(null, 'transform', 'translate(' + mtransit[0] + ',' + mtransit[1] + ')');

 		
 	}
 
 	this.transit = function(xpoint, ypoint)
 	{
 		transit[0] = xpoint;
 		transit[1] = ypoint;
 	}
 	
 	this.setStyle =  function( objstyle )
 	{
 		style = objstyle;
 	}

  	this.add = function(obj)
 		{

 			
 				this.bag[this.bag.length] = obj;
 
 			
 		};
 	
 	this.init = function()
	{
	
		//var x_elem = '';
		//var y_elem = '';
		//for(i = 0 ; wayPoints.length > i ; i++)
		//{
		//	if(i == 0)
		//	{
		//	x_elem = (wayPoints[i][0] + transit[0]);
		//	y_elem = (wayPoints[i][1] + transit[1]);
		//	}
		//	else
		//	{
		//	x_elem = ' ' + (wayPoints[i][0] + transit[0]);
		//	y_elem = ' ' + (wayPoints[i][1] + transit[1]);
		//	}
		//}
		

		
		this.graphicElement = document.createElementNS('http://www.w3.org/1999/xhtml', 'p');
		
		
		
		//var childNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'p');
		
		
		for(iterforTextNode = 0 ; Math.max(text.length,this.bag.length) > iterforTextNode ; iterforTextNode++)
		{
		
		if(text.length > iterforTextNode)this.graphicElement.appendChild(document.createTextNode(text[iterforTextNode]));
		
		if(this.bag.length > iterforTextNode)
		{
		
		this.bag[iterforTextNode].setParentElement(this.graphicElement);
		this.bag[iterforTextNode].init();
		
		}
		
		}

		if(id != '')
		{
		this.graphicElement.setAttributeNS(null, 'id', id);
			var eventElem =  function()
			{
			xhtmlCaller.onclick_event(this);
			}
		
		}		
		
		this.graphicElement.onclick = eventElem;
		
		//this.graphicElement.setAttributeNS(null, 'x', x_elem);
		//childNode.setAttributeNS(null, 'y', y_elem);
		//childNode.setAttributeNS(null, 'height', dimension[1]);
		//childNode.setAttributeNS(null, 'width', dimension[0]);
		if(style != '')
		{
		
		this.graphicElement.setAttributeNS(null, 'style', style);
		}
	
		parentElement.appendChild(this.graphicElement);
		
	}

	this.remove = function()
	{
			var i = 0;
		for(i = 0 ; this.bag.length > i ; i++ )
 		{
 		
 			this.bag[i].remove();
 		}
		parentElement.removeChild(this.graphicElement);
	}

 	 };

de.auster_gmbh.graphicelement.xhtml.span  = function( caller)
  	{
  	this.bag = new Array();
 	var parentElement = null;
 	var xhtmlCaller = caller;
 	var style = '';
 	var wayPoints = new Array();
 	var text = new Array();
 	var attributes = new Array();
 	var dimension = new Array();
 	var transit = new Array();
 	var mtransit = new Array();
 	
 	var id = '';
 	transit[0] = 0;
 	transit[1] = 0;
 	
 	this.setParentElement = function(node)
 	{
 		parentElement = node;
 	}
 	
 	this.graphicElement = null;
 	
 	this.setAttribute = function( key , value )
 	{
 		attributes[attributes.length] = new Array();
 		attributes[attributes.length - 1][0] = key;
 		attributes[attributes.length - 1][1] = value;
 		
 	}
 	
 	this.setText = function( mytext )
 	{
 		text[text.length] = mytext;
  	}
 	
 	this.setWayPoint = function( xpoint , ypoint )
 	{
 		wayPoints[wayPoints.length] = new Array();
 		wayPoints[wayPoints.length - 1][0] = xpoint;
 		wayPoints[wayPoints.length - 1][1] = ypoint;
 		
 	}
 	
 	this.setDimension = function( width , height )
 	{
 	
 		dimension[0] = width;
 		dimension[1] = height;
 		
 	}
 	
 	
 	this.setID = function(myid)
 	{
 		id = myid;
 	}
 	
 	this.maintransit = function(xpoint, ypoint)
 	{
 		mtransit[0] = xpoint;
 		mtransit[1] = ypoint;
 	}
 
  	this.alter = function()
 	{
 	
 
		this.graphicElement.setAttributeNS(null, 'transform', 'translate(' + mtransit[0] + ',' + mtransit[1] + ')');

 		
 	}
 
 	this.transit = function(xpoint, ypoint)
 	{
 		transit[0] = xpoint;
 		transit[1] = ypoint;
 	}
 	
 	this.setStyle =  function( objstyle )
 	{
 		style = objstyle;
 	}

  	this.add = function(obj)
 		{

 			
 				this.bag[this.bag.length] = obj;
 
 			
 		};
 	
 	this.init = function()
	{
	
		//var x_elem = '';
		//var y_elem = '';
		//for(i = 0 ; wayPoints.length > i ; i++)
		//{
		//	if(i == 0)
		//	{
		//	x_elem = (wayPoints[i][0] + transit[0]);
		//	y_elem = (wayPoints[i][1] + transit[1]);
		//	}
		//	else
		//	{
		//	x_elem = ' ' + (wayPoints[i][0] + transit[0]);
		//	y_elem = ' ' + (wayPoints[i][1] + transit[1]);
		//	}
		//}
		

		
		this.graphicElement = document.createElementNS('http://www.w3.org/1999/xhtml', 'span');
		
		
		
		//var childNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'p');
		
		
		for(iterforTextNode = 0 ; Math.max(text.length,this.bag.length) > iterforTextNode ; iterforTextNode++)
		{
		
		if(text.length > iterforTextNode)this.graphicElement.appendChild(document.createTextNode(text[iterforTextNode]));
		
		if(this.bag.length > iterforTextNode)
		{
		
		this.bag[iterforTextNode].setParentElement(this.graphicElement);
		this.bag[iterforTextNode].init();
		
		}
		
		}

		if(id != '')
		{
		this.graphicElement.setAttributeNS(null, 'id', id);
			var eventElem =  function()
			{
			xhtmlCaller.onclick_event(this);
			}
		
		}		
		
		this.graphicElement.onclick = eventElem;
		//this.graphicElement.setAttributeNS(null, 'x', x_elem);
		//childNode.setAttributeNS(null, 'y', y_elem);
		//childNode.setAttributeNS(null, 'height', dimension[1]);
		//childNode.setAttributeNS(null, 'width', dimension[0]);
		if(style != '')
		{
		
		this.graphicElement.setAttributeNS(null, 'style', style);
		}
	
		parentElement.appendChild(this.graphicElement);
		
	}

	this.remove = function()
	{
				var i = 0;
		for(i = 0 ; this.bag.length > i ; i++ )
 		{
 		
 			this.bag[i].remove();
 		}
		parentElement.removeChild(this.graphicElement);
	}

 	 };


de.auster_gmbh.graphicelement.xhtml.div  = function( caller)
  	{
  	this.bag = new Array();
 	var parentElement = null;
 	var xhtmlCaller = caller;
 	var style = '';
 	var wayPoints = new Array();
 	var text = new Array();
 	var attributes = new Array();
 	var dimension = new Array();
 	var transit = new Array();
 	var mtransit = new Array();
 	
 	var id = '';
 	transit[0] = 0;
 	transit[1] = 0;
 	
 	this.setParentElement = function(node)
 	{
 		parentElement = node;
 	}
 	
 	this.graphicElement = null;
 	
 	this.setAttribute = function( key , value )
 	{
 		attributes[attributes.length] = new Array();
 		attributes[attributes.length - 1][0] = key;
 		attributes[attributes.length - 1][1] = value;
 		
 	}
 	
 	this.setText = function( mytext )
 	{
 		text[text.length] = mytext;
  	}
 	
 	this.setWayPoint = function( xpoint , ypoint )
 	{
 		wayPoints[wayPoints.length] = new Array();
 		wayPoints[wayPoints.length - 1][0] = xpoint;
 		wayPoints[wayPoints.length - 1][1] = ypoint;
 		
 	}
 	
 	this.setDimension = function( width , height )
 	{
 	
 		dimension[0] = width;
 		dimension[1] = height;
 		
 	}
 	
 	
 	this.setID = function(myid)
 	{
 		id = myid;
 	}
 	
 	this.maintransit = function(xpoint, ypoint)
 	{
 		mtransit[0] = xpoint;
 		mtransit[1] = ypoint;
 	}
 
  	this.alter = function()
 	{
 	
 
		this.graphicElement.setAttributeNS(null, 'transform', 'translate(' + mtransit[0] + ',' + mtransit[1] + ')');

 		
 	}
 
 	this.transit = function(xpoint, ypoint)
 	{
 		transit[0] = xpoint;
 		transit[1] = ypoint;
 	}
 	
 	this.setStyle =  function( objstyle )
 	{
 		style = objstyle;
 	}

  	this.add = function(obj)
 		{

 			
 				this.bag[this.bag.length] = obj;
 
 			
 		};
 	
 	this.init = function()
	{
	
		//var x_elem = '';
		//var y_elem = '';
		//for(i = 0 ; wayPoints.length > i ; i++)
		//{
		//	if(i == 0)
		//	{
		//	x_elem = (wayPoints[i][0] + transit[0]);
		//	y_elem = (wayPoints[i][1] + transit[1]);
		//	}
		//	else
		//	{
		//	x_elem = ' ' + (wayPoints[i][0] + transit[0]);
		//	y_elem = ' ' + (wayPoints[i][1] + transit[1]);
		//	}
		//}
		

		
		this.graphicElement = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
		
		
		
		//var childNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'p');
		
		
		for(iterforTextNode = 0 ; Math.max(text.length,this.bag.length) > iterforTextNode ; iterforTextNode++)
		{
		
		if(text.length > iterforTextNode)this.graphicElement.appendChild(document.createTextNode(text[iterforTextNode]));
		
		if(this.bag.length > iterforTextNode)
		{
		
		this.bag[iterforTextNode].setParentElement(this.graphicElement);
		this.bag[iterforTextNode].init();
		
		}
		
		}

		if(id != '')
		{
		this.graphicElement.setAttributeNS(null, 'id', id);
			var eventElem =  function()
			{
			xhtmlCaller.onclick_event(this);
			}
		
		}		
		
		this.graphicElement.onclick = eventElem;
		//this.graphicElement.setAttributeNS(null, 'x', x_elem);
		//childNode.setAttributeNS(null, 'y', y_elem);
		//childNode.setAttributeNS(null, 'height', dimension[1]);
		//childNode.setAttributeNS(null, 'width', dimension[0]);
		if(style != '')
		{
		
		this.graphicElement.setAttributeNS(null, 'style', style);
		}
	
		parentElement.appendChild(this.graphicElement);
		
	}

	this.remove = function()
	{
		var i = 0;
		for(i = 0 ; this.bag.length > i ; i++ )
 		{
 		
 			this.bag[i].remove();
 		}
		parentElement.removeChild(this.graphicElement);
	}

 	 };

de.auster_gmbh.graphicelement.xhtml.HTMLElement  = function( myname , caller)
  	{
  	this.bag = new Array();
 	var parentElement = null;
 	var xhtmlCaller = caller;
 	var style = '';
 	var wayPoints = new Array();
 	var text = new Array();
 	var attributes = new Array();
 	var dimension = new Array();
 	var transit = new Array();
 	var mtransit = new Array();
 	var name = myname;
 	var id = '';
 	transit[0] = 0;
 	transit[1] = 0;
 	
 	this.setParentElement = function(node)
 	{
 		parentElement = node;
 	}
 	
 	this.graphicElement = null;
 	
 	this.setAttribute = function( key , value )
 	{
 		attributes[attributes.length] = new Array();
 		attributes[attributes.length - 1][0] = key;
 		attributes[attributes.length - 1][1] = value;
 		
 	}
 	
 	this.setText = function( mytext )
 	{
 		text[text.length] = mytext;
  	}
 	
 	this.setWayPoint = function( xpoint , ypoint )
 	{
 		wayPoints[wayPoints.length] = new Array();
 		wayPoints[wayPoints.length - 1][0] = xpoint;
 		wayPoints[wayPoints.length - 1][1] = ypoint;
 		
 	}
 	
 	this.setDimension = function( width , height )
 	{
 	
 		dimension[0] = width;
 		dimension[1] = height;
 		
 	}
 	
 	
 	this.setID = function(myid)
 	{
 		id = myid;
 	}
 	
 	this.maintransit = function(xpoint, ypoint)
 	{
 		mtransit[0] = xpoint;
 		mtransit[1] = ypoint;
 	}
 
  	this.alter = function()
 	{
 	
 
		this.graphicElement.setAttributeNS(null, 'transform', 'translate(' + mtransit[0] + ',' + mtransit[1] + ')');

 		
 	}
 
 	this.transit = function(xpoint, ypoint)
 	{
 		transit[0] = xpoint;
 		transit[1] = ypoint;
 	}
 	
 	this.setStyle =  function( objstyle )
 	{
 		style = objstyle;
 	}

  	this.add = function(obj)
 		{

 			
 				this.bag[this.bag.length] = obj;
 
 			
 		};
 	
 	this.init = function()
	{
	
		//var x_elem = '';
		//var y_elem = '';
		//for(i = 0 ; wayPoints.length > i ; i++)
		//{
		//	if(i == 0)
		//	{
		//	x_elem = (wayPoints[i][0] + transit[0]);
		//	y_elem = (wayPoints[i][1] + transit[1]);
		//	}
		//	else
		//	{
		//	x_elem = ' ' + (wayPoints[i][0] + transit[0]);
		//	y_elem = ' ' + (wayPoints[i][1] + transit[1]);
		//	}
		//}
		

		
		this.graphicElement = document.createElementNS('http://www.w3.org/1999/xhtml', name);
		
		
		
		//var childNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'p');
		
		var iterforTextNode = 0;
		
		for(iterforTextNode = 0 ; Math.max(text.length,this.bag.length) > iterforTextNode ; iterforTextNode++)
		{
		
		if(text.length > iterforTextNode)this.graphicElement.appendChild(document.createTextNode(text[iterforTextNode]));
		
		if(this.bag.length > iterforTextNode)
		{
		
		this.bag[iterforTextNode].setParentElement(this.graphicElement);
		this.bag[iterforTextNode].init();
		
		}
		
		}

		if(id != '')
		{
		this.graphicElement.setAttributeNS(null, 'id', id);
			var eventElem =  function()
			{
			xhtmlCaller.onclick_event(this);
			}
		
		}		
		
		this.graphicElement.onclick = eventElem;
		//this.graphicElement.setAttributeNS(null, 'x', x_elem);
		//childNode.setAttributeNS(null, 'y', y_elem);
		//childNode.setAttributeNS(null, 'height', dimension[1]);
		//childNode.setAttributeNS(null, 'width', dimension[0]);
		if(style != '')
		{
		
		this.graphicElement.setAttributeNS(null, 'style', style);
		}
	
		parentElement.appendChild(this.graphicElement);
		
	}

	this.remove = function()
	{
	
		
		var i = 0;
		for(i = 0 ; this.bag.length > i ; i++ )
 		{
 		
 			this.bag[i].remove();
 		}
		parentElement.removeChild(this.graphicElement);
	}

 	 };

de.auster_gmbh.graphicelement.xhtml.input  = function( caller)
  	{
  	this.bag = new Array();
 	var parentElement = null;
 	var xhtmlCaller = caller;
 	var style = '';
 	var wayPoints = new Array();
 	var text = new Array();
 	var attributes = new Array();
 	var dimension = new Array();
 	var transit = new Array();
 	var mtransit = new Array();
 	
 	var id = '';
 	transit[0] = 0;
 	transit[1] = 0;
 	
 	this.setParentElement = function(node)
 	{
 		parentElement = node;
 	}
 	
 	this.graphicElement = null;
 	
 	this.setAttribute = function( key , value )
 	{
 		attributes[attributes.length] = new Array();
 		attributes[attributes.length - 1][0] = key;
 		attributes[attributes.length - 1][1] = value;
 		
 	}
 	
 	this.setText = function( mytext )
 	{
 		text[text.length] = mytext;
  	}
 	
 	this.getText = function()
 	{
 		return this.graphicElement.value;
 	}
 	
 	this.alterText = function(text)
 	{
 		this.graphicElement.value = text;
 	}
 	
 	this.setWayPoint = function( xpoint , ypoint )
 	{
 		wayPoints[wayPoints.length] = new Array();
 		wayPoints[wayPoints.length - 1][0] = xpoint;
 		wayPoints[wayPoints.length - 1][1] = ypoint;
 		
 	}
 	
 	this.setDimension = function( width , height )
 	{
 	
 		dimension[0] = width;
 		dimension[1] = height;
 		
 	}
 	
 	
 	this.setID = function(myid)
 	{
 		id = myid;
 	}
 	
 	this.maintransit = function(xpoint, ypoint)
 	{
 		mtransit[0] = xpoint;
 		mtransit[1] = ypoint;
 	}
 
  	this.alter = function()
 	{
 	
 
		//this.graphicElement.setAttributeNS(null, 'transform', 'translate(' + mtransit[0] + ',' + mtransit[1] + ')');

 		
 	}
 
 	this.transit = function(xpoint, ypoint)
 	{
 		transit[0] = xpoint;
 		transit[1] = ypoint;
 	}
 	
 	this.setStyle =  function( objstyle )
 	{
 		style = objstyle;
 	}

  	this.add = function(obj)
 		{

 			
 				this.bag[this.bag.length] = obj;
 
 			
 		};
 	
 	this.init = function()
	{
	
		//var x_elem = '';
		//var y_elem = '';
		//for(i = 0 ; wayPoints.length > i ; i++)
		//{
		//	if(i == 0)
		//	{
		//	x_elem = (wayPoints[i][0] + transit[0]);
		//	y_elem = (wayPoints[i][1] + transit[1]);
		//	}
		//	else
		//	{
		//	x_elem = ' ' + (wayPoints[i][0] + transit[0]);
		//	y_elem = ' ' + (wayPoints[i][1] + transit[1]);
		//	}
		//}
		

		
		this.graphicElement = document.createElementNS('http://www.w3.org/1999/xhtml', 'input');
		
		
		
		//var childNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'p');
		
		
		for(iterattrib = 0 ; attributes.length > iterattrib ; iterattrib++)
		{
		
		this.graphicElement.setAttributeNS(null, attributes[iterattrib][0] , attributes[iterattrib][1] );
		
		}
		

		if(id != '')
		{
		this.graphicElement.setAttributeNS(null, 'id', id);
			var eventElem =  function()
			{
			xhtmlCaller.onclick_event(this);
			}
		
		}		
		
		this.graphicElement.onclick = eventElem;
		//this.graphicElement.setAttributeNS(null, 'x', x_elem);
		//childNode.setAttributeNS(null, 'y', y_elem);
		//childNode.setAttributeNS(null, 'height', dimension[1]);
		//childNode.setAttributeNS(null, 'width', dimension[0]);
		if(style != '')
		{
		
		this.graphicElement.setAttributeNS(null, 'style', style);
		}
		if(text.length != 0)this.graphicElement.setAttributeNS(null, 'value', text[0]);
		parentElement.appendChild(this.graphicElement);
		
	}

	this.remove = function()
	{
		var i = 0;
		for(i = 0 ; this.bag.length > i ; i++ )
 		{
 		
 			this.bag[i].remove();
 		}
		parentElement.removeChild(this.graphicElement);
	}

 	 };
 	 
de.auster_gmbh.graphicelement.xhtml.textarea  = function( caller)
  	{
  	this.bag = new Array();
 	var parentElement = null;
 	var xhtmlCaller = caller;
 	var style = '';
 	var wayPoints = new Array();
 	var text = '';
 	var attributes = new Array();
 	var dimension = new Array();
 	var transit = new Array();
 	var mtransit = new Array();
 	
 	var id = '';
 	transit[0] = 0;
 	transit[1] = 0;
 	
 	this.setParentElement = function(node)
 	{
 		parentElement = node;
 	}
 	
 	this.graphicElement = null;
 	
 	this.setAttribute = function( key , value )
 	{
 		attributes[attributes.length] = new Array();
 		attributes[attributes.length - 1][0] = key;
 		attributes[attributes.length - 1][1] = value;
 		
 	}
 	
 	this.setText = function( mytext )
 	{
 		text = mytext;
  	}
 	
 	this.getText = function()
 	{
 		return this.graphicElement.value;
 	}
 	
 	this.alterText = function(text)
 	{
 		this.graphicElement.value = text;
 	}
 	
 	this.setWayPoint = function( xpoint , ypoint )
 	{
 		wayPoints[wayPoints.length] = new Array();
 		wayPoints[wayPoints.length - 1][0] = xpoint;
 		wayPoints[wayPoints.length - 1][1] = ypoint;
 		
 	}
 	
 	this.setDimension = function( width , height )
 	{
 	
 		dimension[0] = width;
 		dimension[1] = height;
 		
 	}
 	
 	
 	this.setID = function(myid)
 	{
 		id = myid;
 	}
 	
 	this.maintransit = function(xpoint, ypoint)
 	{
 		mtransit[0] = xpoint;
 		mtransit[1] = ypoint;
 	}
 
  	this.alter = function()
 	{
 	
 
		//this.graphicElement.setAttributeNS(null, 'transform', 'translate(' + mtransit[0] + ',' + mtransit[1] + ')');

 		
 	}
 
 	this.transit = function(xpoint, ypoint)
 	{
 		transit[0] = xpoint;
 		transit[1] = ypoint;
 	}
 	
 	this.setStyle =  function( objstyle )
 	{
 		style = objstyle;
 	}

  	this.add = function(obj)
 		{

 			
 				this.bag[this.bag.length] = obj;
 
 			
 		};
 	
 	this.init = function()
	{
	
		//var x_elem = '';
		//var y_elem = '';
		//for(i = 0 ; wayPoints.length > i ; i++)
		//{
		//	if(i == 0)
		//	{
		//	x_elem = (wayPoints[i][0] + transit[0]);
		//	y_elem = (wayPoints[i][1] + transit[1]);
		//	}
		//	else
		//	{
		//	x_elem = ' ' + (wayPoints[i][0] + transit[0]);
		//	y_elem = ' ' + (wayPoints[i][1] + transit[1]);
		//	}
		//}
		

		
		this.graphicElement = document.createElementNS('http://www.w3.org/1999/xhtml', 'textarea');
		
		
		
		//var childNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'p');
		
		
		for(iterattrib = 0 ; attributes.length > iterattrib ; iterattrib++)
		{
		
		this.graphicElement.setAttributeNS(null, attributes[iterattrib][0] , attributes[iterattrib][1] );
		
		}
		

		if(id != '')
		{
		this.graphicElement.setAttributeNS(null, 'id', id);
			var eventElem =  function()
			{
			xhtmlCaller.onclick_event(this);
			}
		
		}		
		
		this.graphicElement.onclick = eventElem;
		//this.graphicElement.setAttributeNS(null, 'x', x_elem);
		//childNode.setAttributeNS(null, 'y', y_elem);
		//childNode.setAttributeNS(null, 'height', dimension[1]);
		//childNode.setAttributeNS(null, 'width', dimension[0]);
		
		this.graphicElement.appendChild(document.createTextNode(text));
		
		
		if(style != '')
		{
		
		this.graphicElement.setAttributeNS(null, 'style', style);
		}
	
		parentElement.appendChild(this.graphicElement);
		
	}

	this.remove = function()
	{
		var i = 0;
		for(i = 0 ; this.bag.length > i ; i++ )
 		{
 		
 			this.bag[i].remove();
 		}
		parentElement.removeChild(this.graphicElement);
	}

 	 };

 	 
de.auster_gmbh.graphicelement.funcArray = new Array(); 
de.auster_gmbh.graphicelement.intervalElement = new Array();
de.auster_gmbh.graphicelement.intervalElement['complete'] = true;	
de.auster_gmbh.graphicelement.lock = false; 
de.auster_gmbh.graphicelement.sequenceMoveToPoint = function(myfunctArray)
	{
		
		assert('new array in list:' + myfunctArray[0][0].toString() + ' is first Element');
		
		if(this.funcArray.length == 0 &&  this.intervalElement['complete'])
		{
		this.funcArray = myfunctArray;
		var myfunct = this.funcArray.pop();
		
		this.movetToPoint(myfunct[0],myfunct[1],myfunct[2]);
		}
		else
		{
			var tmp = new Array();
			var iter;
			var counter = 0;
			
			for(iter = 0;iter < myfunctArray.length;iter++)
			{
				tmp[iter] = myfunctArray[iter]
			}
			
			for(iter = iter;iter < (this.funcArray.length + myfunctArray.length);iter++)
			{
				tmp[iter] = this.funcArray[counter++];
			}
			
			
		}
		

		//alert(myfunct[3]);
		
	}
	
	
	/*init move to point event */
de.auster_gmbh.graphicelement.movetToPoint = function(graphicElement , xpos, ypos)
	{
		//avoid runntime errors
		//if(de.auster_gmbh.graphicelement.lock)return false;
		//de.auster_gmbh.graphicelement.lock = true;
	assert(graphicElement.toString() + ' in progress');
		this.intervalElement['graphic'] = graphicElement;
		this.intervalElement['x'] = xpos;
		this.intervalElement['y'] = ypos;
		
		
		this.intervalElement['startpos'] = new Array();
		this.intervalElement['startpos'][0] = graphicElement.getTransit()[0];
		this.intervalElement['startpos'][1] = graphicElement.getTransit()[1];
		this.intervalElement['vector'] = new Array();
		this.intervalElement['vector']['x'] = xpos - this.intervalElement['startpos'][0];
		this.intervalElement['vector']['y'] = ypos - this.intervalElement['startpos'][1];
		this.intervalElement['lenght'] = Math.sqrt(Math.pow(this.intervalElement['vector']['x'],2) + Math.pow(this.intervalElement['vector']['y'],2));
		this.intervalElement['steps'] =  Math.round( this.intervalElement['lenght'] / 30 );
		this.intervalElement['curstep'] = 0;
		
		this.intervalElement['interval'] = window.setInterval('de.auster_gmbh.graphicelement.intervalevent()', 10);
		this.intervalElement['complete'] = false;
	}

de.auster_gmbh.graphicelement.intervalevent = function()
	{
	

this.intervalElement['graphic'].transit(
this.intervalElement['startpos'][0] + ( (this.intervalElement['curstep'] / this.intervalElement['steps']) * this.intervalElement['vector']['x'])
,this.intervalElement['startpos'][1] + ( (this.intervalElement['curstep'] / this.intervalElement['steps']) * this.intervalElement['vector']['y']));
	assert(this.intervalElement['curstep'].toString() + ':' + this.intervalElement['steps']);
	if(this.intervalElement['curstep']++ >= this.intervalElement['steps'] || isNaN(this.intervalElement['steps']))
	{
		//throw "Sperrung aufgehoben";
		this.intervalElement['complete'] = true;
		window.clearInterval(this.intervalElement['interval']);
		assert(this.intervalElement['interval'].toString() + ':deactivated');
		if(this.funcArray.length > 0 )
		{
			var funct = this.funcArray.pop();
			this.movetToPoint(funct[0],funct[1],funct[2]);
			assert(funct[0].toString() + ':new Element to run');
		}
		//else
		//{
		
		assert('graphic element moved complete');
		//de.auster_gmbh.graphicelement.lock = false;
		
		//}
	}
	}

var textBuffer = new Array();
function assert(text)
{
textBuffer.push(text);
}

function giveOut()
{
	var res = '';
	for(var it = 0;it < textBuffer.length;it++)
	{
		res += textBuffer[it] + "\n";
	}
	textBuffer = new Array();
	throw res;
}


