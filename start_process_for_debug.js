 de.auster_gmbh.accesselement.clazz = function JSEngine (){
 	
 	this.controlElement =  null;  /*visual element*/
 	this.mainGraphic;
 	this.NodeId = 'display';
 	this.main_tag_id = 'mainelement'; //Festes 
 	this.curheight ;
 	this.listURLs = new Array(); /*list of urls to load on start*/
 	
 	this.listURLs[0] = 'http://www.auster-gmbh.de/ontologies/System_Primer';
 	this.listURLs[1] = 'http://www.auster-gmbh.de/ontologies/System';
 	this.listURLs[2] = 'http://www.auster-gmbh.de/ontologies/Alpha_taxonomy';
 	this.listURLs[3] = 'http://www.auster-gmbh.de/ontologies/Life';
 	this.listURLs[4] = 'http://www.auster-gmbh.de/biology/taxonomic_theme';
 	this.listURLs[5] = 'http://www.auster-gmbh.de/ontologies/Life/viecher';
 	this.listURLs[6] = 'http://www.auster-gmbh.de/ontologies/realestate/individuals';
 	
 	
 	//this.listURLs[0] = 'http://www.auster-gmbh.de/biology/taxonomic_theme';
 	
 	
 	
 	this.toString = function(){return 'JSEngine';}
 	
 	//---------------------------------------------------------------------------------------
 	// grafik element
 	//---------------------------------------------------------------------------------------
 	this.setControlElement = function(control) /*func-tion to initial element in svg-tree*/
 	{
 	this.controlElement = control;
 	this.controlElement.setAttributeNS(null, 'y', 0.0);
  	this.controlElement.setAttributeNS(null, 'width', 5.0);
 	
 	
 	}
 	//---------------------------------------------------------------------------------------


 	this.onDoLoad = function() /*start function */
 	{
 	var obj = document.getElementById(this.main_tag_id);
 	
 	this.semantic_web(); /* creates basic semantic structur */
 	

 	
 	var myclazz = function(){};
 	var ajax_clazz = function AjaxObject(){};
 	ajax_clazz.prototype = this.ajaxConnection;
 	//ajax_clazz.prototype.constructor = function(){};
 	de.auster_gmbh.library.access.ajaxobj = new ajax_clazz();
 	de.auster_gmbh.library.access.ajaxobj.getObserver(this);
 	
 	de.auster_gmbh.library.access.ajaxobj.setMode('ONTOLOGY_STRUCTUR');
	var self = this;
	new de.auster_gmbh.OntologyLoader(function(sorted, cache) {
		var ajaxobj = de.auster_gmbh.library.access.ajaxobj;
		console.debug('[onDoLoad] processing', sorted.length, 'ontologies (cached:', cache.size, ')');
		sorted.forEach(function(uri) {
			var doc = cache.get(uri);
			if (doc) {
				ajaxobj.xmlList[ajaxobj.xmlList.length] = doc;
				ajaxobj.http = null;
				ajaxobj.build_structure();
			} else {
				ajaxobj.workstack.push(uri);
			}
		});
		if (ajaxobj.workstack.length > 0) {
			console.debug('[onDoLoad] workstack fallback for', ajaxobj.workstack.length, 'uncached URIs');
			ajaxobj.load();
		}
	}).resolve(self.listURLs);
// TODO Error handling

	/* add the Controlcenter to the semantic web */ 
	var coce = de.auster_gmbh.semanticelement.semantic_web.setGraphLiteralObj(
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteralObj(
  	de.auster_gmbh.semanticelement.semantic_web.addObjectToAccessable(
  		'http://www.auster-gmbh.de/2010/08/anttree-lib#Controlcenter'
  		,new de.auster_gmbh.Controlcenter(de.auster_gmbh.semanticelement.semantic_web,this)
  		,de.auster_gmbh.semanticelement.const.GENERIC_SEMANTIC
  		,'http://www.auster-gmbh.de/2006/05/pedl-lib#Class'
  		,'http://www.auster-gmbh.de/2010/08/anttree-lib')
  	,'http://www.w3.org/2000/01/rdf-schema#label'
  	,'ate:Controlcenter')
  	,'http://www.w3.org/2000/01/rdf-schema#comment'
  	,'offers an access to the visuall system');
  	
  	de.auster_gmbh.semanticelement.semantic_web.setManuallyGraph(
  	coce
  	, de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz('http://www.w3.org/2000/01/rdf-schema#subClassOf')
  	, de.auster_gmbh.semanticelement.semantic_web.getObjByRepresentationObj('http://www.auster-gmbh.de/2006/05/pedl-lib#Class')
  	);
  	
  	
  	de.auster_gmbh.semanticelement.semantic_web.setManuallyGraph(
  	coce
  	, de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz('http://www.w3.org/2000/01/rdf-schema#subClassOf')
  	, de.auster_gmbh.semanticelement.semantic_web.getObjByRepresentationObj('http://www.auster-gmbh.de/2006/05/pedl-lib#Class')
  	);
  	
  	
  	de.auster_gmbh.library.pedl.createfunction(coce, 
  	'http://www.auster-gmbh.de/2010/08/anttree-lib#Controlcenter.buildUp',
  	new Array('http://www.auster-gmbh.de/2010/08/anttree-lib#Controlcenter.buildUp.arg'),
  	'ate:Controlcenter.buildUp',
  	new Array('ate:Controlcenter.buildUp.arg'),
  	'function to create a new document');
  	//de.auster_gmbh.semanticelement.semantic_web.addBag(coce, add);
 	
 	
 	this.mainGraphic = obj;
 	this.curheight = window.innerHeight;
 	
 	de.auster_gmbh.library.controlelements.controllvis = obj;
 	
 	de.auster_gmbh.library.controlelements.controlbar(obj,window.innerWidth,this.curheight);
	

 	
 	this.fireEvent('init',obj);
 	
 	};
 	
 	//---------------------------------------------------------------------------------------------

 	this.VALUE = 0;
 	
 	this.GRAPH = 1;
 	
 	this.workstack = new Array();
	
 	
 	this.onDoEvent = function(obj,typ)
 	{
 	//alert(this.controlElement);
 	this.controlElement.setAttributeNS(null, 'y', 0.0);

  	this.parent = this.controlElement.parentNode;
        var g = null;
        var text = null;
        g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        parent.appendChild(g);
        
        text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        var textNode = document.createTextNode('foobar');

	//text.insertData(0, ' Fragt der Barkeeper:');


 	}
 	
 	this.listeners = new Array();
 	

 	

 	this.addListener = function(addObj)
 	{

	
	this.listeners[this.listeners.length] = addObj; 
 	

 		
 	}
 	/*makes a list of commands*/
 	var divides = function(mytype)
 	{	var pos = 0;
 		var num = 0;
 		var mytypestr = mytype.toString();
 		num = mytype.indexOf('&');
 		var commandArray = new Array();
 		while(-1 != (num = mytypestr.indexOf('&')))
 		{
 			commandArray[pos++] = mytypestr.substring(0,num);
 			mytypestr = mytypestr.substring(num + 1,mytypestr.length);
 		}	
 		commandArray[pos++] = mytypestr.substring(0,mytypestr.length);
 		
 	 return commandArray;
 	}
 	
 	/*funct to check access */
 	var has_Sharing = function(mytype,obj)
 	{
 	
 		if('init' == mytype)return true;
 		var num = 0;
 		var mytypestr = mytype.toString();
 		var commandArray = new Array();
 		var allow;
 		var prohib;
 		var listofAllowed = new Array();
 		var listofProhibited = new Array();
 		//alert(mytype.indexOf('&'));
 		var pos = 0;
 		var pos2 = 0;
 		var res = new Array();


			
 			if(-1 != (num = mytypestr.indexOf('.')))
 			{
 				mytypestr = mytypestr.substring(0,num);
 				 
 			}
 			
 			if(num == -1)return true;
 			
 			if(-1 != (num = mytypestr.indexOf(']')))
 			{
 				mytypestr = mytypestr.substring(mytypestr.indexOf('[') + 1,num);
 			}
 			
 			if(-1 != (num = mytypestr.indexOf('/')))
 			{
 				
 				allow = mytypestr.substring(0,num);
 				prohib = mytypestr.substring(num + 1,mytypestr.length);
 			}
 			else
 			{
 				allow = mytypestr.toString();
 				prohib = '';
 			}
 			 
 			 while(-1 != (num = allow.indexOf(',')))
 			 {
 			 listofAllowed[pos2++] = allow.substring(0,num - 1);
 			 allow = allow.substring(num + 1,allow.length);
 			 }
 			 listofAllowed[pos2] = allow;
 			 
 			 pos2 = 0;
 			 while(-1 != (num = prohib.indexOf(',')))
 			 {
 			 listofProhibited[pos2++] = prohib.substring(0,num - 1);
 			 prohib = prohib.substring(num + 1,prohib.length);
 			 }
 			 listofProhibited[pos2] = prohib;
 			 
 			 
 			 for(pos2 = 0;pos2 < listofProhibited.length;pos2++)
 			 {
 			 	if(listofProhibited[pos2] == obj.toString())return false;
 			 }
 			 
 			 for(pos2 = 0;pos2 <  listofAllowed.length;pos2++)
 			 {
 			 	if( listofAllowed[pos2] == obj.toString() || listofAllowed[pos2] == '*')return true;
 			 }
 			
 		return false;
 	};
 	
 	this.fireEvent = function(type, message)
 	{
 		
 	 var commands = divides(type);
 	 var i;
 	 
 	 for(i = 0;commands.length > i ;i++)
 	 {
 		
 		for( aaaji = 0 ; this.listeners.length > aaaji; aaaji++)
 		{
 		
 			if(has_Sharing(commands[i],this.listeners[aaaji]))
 			{
 			this.listeners[aaaji].event( commands[i] , message );
 			}
 		}
 	 }
 	}

 	//ajax connection
 	this.ajaxConnection = de.auster_gmbh.library.access.ajaxConnection;
 	this.ajaxConnection.workstack = this.workstack;
 	
 	// workstack is populated by OntologyLoader in onDoLoad()
 	
 	this.onclick_event = function(eventObject)
 	{
 		
 	 	for( aaaji = 0 ; this.listeners.length > aaaji; aaaji++)
 		{
 			
 			this.listeners[aaaji].event( 'onClick_event' , eventObject );
 		}
 	
 	
 	}
 	
 	this.ondbclick_event = function(eventObject)
 	{

 	 	for( aaaji = 0 ; this.listeners.length > aaaji; aaaji++)
 		{
 		
 			this.listeners[aaaji].event( 'ondbClick_event' , eventObject );

 			
 		}

 	
 	}
 	
 	this.onmouseover_event = function(eventObject)
 	{
 		
 	 	for( aaaji = 0 ; this.listeners.length > aaaji; aaaji++)
 		{
 		
 			this.listeners[aaaji].event( 'onmouseover_event' , eventObject );
 		}
 	
 	
 	}
 	
 	this.onmouseout_event = function(eventObject)
 	{
 		
 	 	for( aaaji = 0 ; this.listeners.length > aaaji; aaaji++)
 		{
 		
 			this.listeners[aaaji].event( 'onmouseout_event' , eventObject );
 		}
 	
 	
 	}
 	
 	this.onkeyup_event = function(eventObject)
 	{
 		
 	 	for( aaaji = 0 ; this.listeners.length > aaaji; aaaji++)
 		{
 		
 			this.listeners[aaaji].event( 'onkeyup_event' , eventObject );
 		}
 	
 	
 	}
 	
 	this.onblur_event = function(eventObject)
 	{
 		
 	 	for( aaaji = 0 ; this.listeners.length > aaaji; aaaji++)
 		{
 		
 			this.listeners[aaaji].event( 'onblur_event' , eventObject );
 		}
 	
 	
 	}
 	
 	this.event = function(type,message)
 	{
 		this.fireEvent(type,message);
 	}
 	
 	this.semantic_web = de.auster_gmbh.library.access.semantic_web;
 	
 };
 
 de.auster_gmbh.accesselement = new de.auster_gmbh.accesselement.clazz();

 
 if(!de) de = {};
 else if (typeof de != 'object')
 throw new Error('de allready exists and os not an object'); 

 if(!de.auster_gmbh) de.auster_gmbh = {};
 else if (typeof de.auster_gmbh != 'object')
 throw new Error('de.auster_gmbh allready exists and os not an object'); 

 if(!de.auster_gmbh.controlelement) de.auster_gmbh.controlelement = {};
 else if (typeof de.auster_gmbh.controlelement != 'object')
 throw new Error('de.auster_gmbh.controlelement allready exists and os not an object'); 

//-------------------Control Element-----------------------------------
		
  de.auster_gmbh.controlelement.clazz = function(semweb,control)
  {
  	this.pfad = de.auster_gmbh.accesselement;
 	this.toString = function(){return 'Control Element';}
  	this.semref = semweb;
  	this.controlref = control;
  	this.myNodeid = 'control';
  	this.mySVGObj = null;
  	this.controlref.addListener(this);
  	this.container = new Array();
  	this.graphsOn = true;
  	

/*-----------------------------------------------------Kabarett
* createPrimaryPanel( arrayOfFields , headline , parentObj  ):
* -----------------------------------------------------
*/ 	
  	var createPrimaryPanel =  de.auster_gmbh.library.controlelements.createPrimaryPanel;
 
//-----------------------------------------------------
/*-----------------------------------------------------
* createNPanel(pointerNum.id) : 
* -----------------------------------------------------
*/ 	
  	var createNPanel = de.auster_gmbh.library.controlelements.createNPanel;
//-----------------------------------------------------

/*-----------------------------------------------------
* createNGraphPanel(pointerNum.id) : 
* -----------------------------------------------------
*/ 	
  	var createNGraphPanel = de.auster_gmbh.library.controlelements.create_graph_field;
//-----------------------------------------------------

  	
  	var stdclazz = function(){};
  	var clazzSVG = new Array();

  	this.display = new Array();
  	this.root_ns = '';
  	
  	
  	
  	
  	
  	this.event = function( type , message )
  	{

	
	if( !(message instanceof de.auster_gmbh.library.tools.eventObject) )
	{

  		if(type == 'onClick_event' && message.id == 'foldingbutton')
  		{

  			de.auster_gmbh.controllelement_toolbox.tools.openControl(this.container);
  		}
  		
   		if(type == 'onClick_event' && message.id != 'foldingbutton' && message.id != 'control' )
  		{
  		
  			
  		
  			if(this.container[0].closed)return true;
  			//closes field
  			if(message.id.substr(0, 6) == 'fincre')
  			{
  			
  			  	var div = message.id.lastIndexOf('_');
  				var num = parseInt(message.id.substr(7, div - 7));
  				
  				this.semref.findID(1,num);
  				
   			for(var iter = 1;this.container.length > iter;iter++)
  			{
  				this.container[iter].transit(-1300,0);
  			}
  			
  			this.container[0].transit(-270,0);
  			//this.container[0].transit(-270,0);
  			
  			this.container[0].closed = true;
  					
			this.controlref.fireEvent('selected_object',message.id.substr(7, message.id.lastIndexOf('_') - 7));
			
			
			var eventobj = new de.auster_gmbh.library.tools.eventObject('',this,num);
  			this.controlref.fireEvent('[*/JSControl].setID',eventobj);
  			}
  			if(message.id.substr(0, 6) == 'posnum' || message.id.substr(0, 6) == 'hasbag' || message.id.substr(0, 6) == 'shogra' || message.id.substr(0, 6) == 'shoall')
  			{
  			
  			var type;
  			
  			switch (message.id.substr(0, 6)) 
  			{
    				case 'posnum': type = 0;
                   	break;
    				case 'hasbag': type = 1;
                   	break;
                   	    	case 'shogra': type = 2;
                   	break;
                   	        case 'shoall': type = 3;
                   	        alert('jo');
                   	break;
			}
  			
  			/* gets data for panelcreation */
  				var div = message.id.lastIndexOf('_');
  				var num = parseInt(message.id.substr(7, div - 7));
  				var n = parseInt(message.id.substr(div + 1,message.id.length - (div + 1)));
  				
  				
  				this.semref.findID(1,num);
  				
  				
  			de.auster_gmbh.library.controlelements.buildNPanel( this.semref,this.mySVGObj,this.pfad , this , type , n ,this.graphsOn);
  			
  			var eventobj = new de.auster_gmbh.library.tools.eventObject('',this,num);
  			this.controlref.fireEvent('[*/JSControl].setID',eventobj);
  			}

  			
  			/**
  			*
  			*
  			*/
  			
  			if(message.id.substr(0, 6) == 'finpos')
  			{
  				
  			var div = message.id.lastIndexOf('_');
  			var num = parseInt(message.id.substr(7, div - 7));
  			var n = parseInt(message.id.substr(div + 1,message.id.length - (div + 1)));
  			var value;
  			
  				
  				this.semref.findID(1,num);
  			
  			var list = this.semref.refIndex();
  				
			var nodemany = list.length;
			var help = new Array();
			
			var eventobj = new de.auster_gmbh.library.tools.eventObject('',this,num);
			
				this.controlref.fireEvent('[*/JSControl].setID&[*/JSControl].onFocus',eventobj);
  				
  			
  			
  			
  			}
  			

  			
  		}
  
  		if(type == 'init')
  		{
  		
  		
  		/*
  		* get Parentnode for creating Panel
  		*/
  			if(this.myNodeid == '')
  			this.mySVGObj = message.parentNode;
  			else
  			this.mySVGObj = document.getElementById(this.myNodeid);
 
  			

			
			/*
  			* find startindex in semweb and
  			* saves its many of childs
  			* and a variable to save all childnodes 
  			*/
			
			if(this.root_ns != '')this.semref.findIDX(1,this.root_ns,0);
			//this.semref.childNode(1,0);
			//alert(this.semref.getID(1));

			
  		
		this.container[0] = de.auster_gmbh.library.controlelements.buildPrimaryPanel(this.semref,this.mySVGObj,this.pfad, this.graphsOn);
		
  	}

  	}
  	else
  	{
  	  	/*primary funct workbench */
  		var num = 0;
  		var arg = new Array();
  		arg[0] = message;
  		
  		if(-1 != (num = type.indexOf('.')))
  		{
  			var funct = type.substring(num + 1, type.length);
  			
  			if(this[funct] != undefined )
  				this[funct].apply(this,arg);
  		}	
  	}
  	
  	}
  	
  	/* functions of the class Controlelement */
  	
  	
  	/* onFocus */
  	this.onFocus = function()
  	{
  		if(!de.auster_gmbh.controllelement_toolbox.tools.bar_status(this.container))
  		de.auster_gmbh.controllelement_toolbox.tools.openControl(this.container);
  	}
  	
  	 
  	/* onCollapse */
  	this.onCollapse = function()
  	{
  		if(de.auster_gmbh.controllelement_toolbox.tools.bar_status(this.container))
  		de.auster_gmbh.controllelement_toolbox.tools.openControl(this.container);
  	}
  	
  	var fireEvent =  function( type , message )
  	{
  		this.controlref.fireEvent( type , message );
  	}
  	
  }
  
  de.auster_gmbh.controlelement = new de.auster_gmbh.controlelement.clazz(de.auster_gmbh.semanticelement.semantic_web,de.auster_gmbh.accesselement);
   
  //de.auster_gmbh.controlelement(de.auster_gmbh.accesselement);
  //de.auster_gmbh.accesselement.addListener(de.auster_gmbh.controlelement);
  
		
 if(!de) de = {};
 else if (typeof de != 'object')
 throw new Error('de allready exists and os not an object'); 

 if(!de.auster_gmbh) de.auster_gmbh = {};
 else if (typeof de.auster_gmbh != 'object')
 throw new Error('de.auster_gmbh allready exists and os not an object'); 

 if(!de.auster_gmbh.displayelement) de.auster_gmbh.displayelement = {};
 else if (typeof de.auster_gmbh.displayelement != 'object')
 throw new Error('de.auster_gmbh.displayelement allready exists and os not an object'); 

//-------------------Display Element-----------------------------------
		
  de.auster_gmbh.displayelement.clazz = function(control)
  {
  
  this.toString = function(){return 'Display Element';}
   	this.pfad = de.auster_gmbh.accesselement;
  	this.dataref = control;
  	this.myNodeid = 'display';
   	this.myBarNodeid = 'display_bar';
  	this.mySVGObj = null;
  	this.mySVGBarObj = null;
  	this.isActive = 0;
  	this.dataref.addListener(this);
  	this.display = new Array();
  	
  	
  	//elementclazz to display entryelements
  	var visualElement = function()
  	{
  	this.bag = new Array();

  	this.add= function(obj)
 		{

 			
 				this.bag[this.bag.length] = obj;
 
 			
 		};
 	
 	this.transit = function( xpoint , ypoint )
 	{
 		for(i = 0 ; this.bag.length > i ; i++ )
 		{
 			this.bag.transit(xpoint, ypoint);
 		}
 	};
 	
 	
 	
 	this.init = function()
 	{
  		for(j = 0 ; this.bag.length > j ; j++ )
 		{	
 			this.bag[j].init();
 		}		
 	};
 	
  	};
  	
  	var stdclazz = function(){};
  	var clazzSVG = new Array();

	//SVGPath
 	clazzSVG['SVGPath'] =  function(node)
 	{
 	var parentElement = node;
 	var style = '';
 	var wayPoints = new Array();
 	var transit = new Array();
 	var id = '';
 	transit[0] = 0;
 	transit[1] = 0;
 	
 	this.graphicElement = null;
 	
 	this.setWayPoint = function( xpoint , ypoint )
 	{
 		wayPoints[wayPoints.length] = new Array();
 		wayPoints[wayPoints.length - 1][0] = xpoint;
 		wayPoints[wayPoints.length - 1][1] = ypoint;
 		
 	}
 	
 	this.setStyle = function( objstyle )
 	{
 		style = objstyle;
 	}
 	
 	this.setID = function(myid)
 	{
 		id = myid;
 	}
 	
 	this.transit = function(xpoint, ypoint)
 	{
 		transit[0] = xpoint;
 		transit[1] = ypoint;
 	}
 	
 	this.init = function()
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
		
		parentElement.appendChild(this.graphicElement);
		
	}


 	 };
  	
	//SVGPath
 	clazzSVG['SVGText'] =  function(node)
 	{
 	var parentElement = node;
 	var style = '';
 	var wayPoints = new Array();
 	var transit = new Array();
 	var text = '';
 	var id = '';
 	transit[0] = 0;
 	transit[1] = 0;
 	
 	this.graphicElement = null;
 	
 	this.setText = function(mytext){text = mytext;}
 	
 	this.setWayPoint = function( xpoint , ypoint )
 	{
 		wayPoints[wayPoints.length] = new Array();
 		wayPoints[wayPoints.length - 1][0] = xpoint;
 		wayPoints[wayPoints.length - 1][1] = ypoint;
 		
 	}
 	
 	this.setStyle = function( objstyle )
 	{
 		style = objstyle;
 	}
 	
 	this.setID = function(myid)
 	{
 		id = myid;
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
		

		
		this.graphicElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
		
		this.graphicElement.setAttributeNS(null, 'id', id);
		this.graphicElement.setAttributeNS(null, 'x', x_elem);
		this.graphicElement.setAttributeNS(null, 'y', y_elem);
		this.graphicElement.setAttributeNS(null, 'style', style);
		
		this.graphicElement.appendChild(document.createTextNode(text));
		
		parentElement.appendChild(this.graphicElement);
		
	}


 	 };
  	
  	
  	this.display = new Array();
  	
  	this.event = function( type , message )
  	{
  	
	if( !(message instanceof de.auster_gmbh.library.tools.eventObject) )
	{
 		if(type == 'init')
  		{
			this.mySVGObj = document.getElementById(this.myNodeid);
			this.mySVGBarObj = document.getElementById(this.myBarNodeid);
			de.auster_gmbh.library.commonrefs.STDNODE = this.mySVGBarObj;
			de.auster_gmbh.library.commonrefs.STDLISTENER = this.pfad;
			
			de.auster_gmbh.semanticelement.SOM.tagInDoc = this.mySVGObj;
			de.auster_gmbh.semanticelement.SOM.callRef = this.pfad;
			 	
			var viscont = new de.auster_gmbh.graphicelement.visualBag();
			var symbolBag = new de.auster_gmbh.graphicelement.visualBag();					
			var visEl = new de.auster_gmbh.graphicelement.visualElement();
			//wall
			var svg = new de.auster_gmbh.graphicelement.svg.SVGPath(this.mySVGBarObj,this.pfad);
			
			svg.transit((- window.innerWidth + 44),window.innerHeight - 120); //-156,350 window.innerHeight - 120
			
			svg.setWayPoint(0,0);
			svg.setWayPoint(window.innerWidth - 30,0);
			svg.setWayPoint(window.innerWidth,30);
			svg.setWayPoint(window.innerWidth,100);
			

			
			svg.setWayPoint(0,100);
			svg.setWayPoint(0,0);
			
			svg.setStyle('fill:#bac04f;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1');
			svg.setID('ThemeOverview');
			visEl.add(svg);
			
			var svg = new de.auster_gmbh.graphicelement.svg.SVGPath(this.mySVGBarObj,this.pfad);
			
			svg.transit((- window.innerWidth + 44),window.innerHeight - 120); //-156,350 window.innerHeight - 120
			
			svg.setWayPoint(60,10);
			svg.setWayPoint(window.innerWidth - 60,10);
			svg.setWayPoint(window.innerWidth - 30,40);
			svg.setWayPoint(window.innerWidth - 30,90);
			
			svg.setWayPoint(20,90);
			
			svg.setWayPoint(20,60);
			
			
			svg.setStyle('fill:#ffffff;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1');
			svg.setID('ThemeOverview');
			visEl.add(svg);

			svg = new de.auster_gmbh.graphicelement.svg.SVGPath(this.mySVGBarObj,this.pfad);
			
			//svg.transit(300,300);
			svg.transit(23, (window.innerHeight - 90)); // (window.innerHeight - 90)
			//svg.setWayPoint(8 ,0); //0
			//svg.setWayPoint(0 ,8); //8
			//svg.setWayPoint(8 ,17);  //17
			svg.setWayPoint(8 ,13);  //13
			svg.setWayPoint(11 ,13); //13
			svg.setWayPoint(11 ,17); //17
			svg.setWayPoint(19 ,9); //9
			svg.setWayPoint(11 ,0); //0
			svg.setWayPoint(11 ,4); //4
			svg.setWayPoint(8 ,4); //4
			//svg.setWayPoint(8 ,0);//0
		
			svg.setStyle('fill:#264e87;fill-rule:evenodd;stroke:#ffffff;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1');
			svg.setID('foldingbutton_display');
			visEl.add(svg);
			
			svg = new de.auster_gmbh.graphicelement.svg.SVGPath(this.mySVGBarObj,this.pfad);
			
			//svg.transit(300,300);
			svg.transit((- window.innerWidth + 70), (window.innerHeight - 100)); // (window.innerHeight - 90)
			svg.setWayPoint(8 ,0); //0
			svg.setWayPoint(0 ,8); //8
			svg.setWayPoint(8 ,17);  //17
			svg.setWayPoint(8 ,13);  //13
			svg.setWayPoint(11 ,13); //13
			//svg.setWayPoint(11 ,17); //17
			//svg.setWayPoint(19 ,9); //9
			//svg.setWayPoint(11 ,0); //0
			svg.setWayPoint(11 ,4); //4
			svg.setWayPoint(8 ,4); //4
			svg.setWayPoint(8 ,0);//0
		
			svg.setStyle('fill:#264e87;fill-rule:evenodd;stroke:#ffffff;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1');
			svg.setID('foldingbutton_display');
			visEl.add(svg);
			

			symbolBag.setID('symbols');
			viscont.add(visEl);
			viscont.add(symbolBag);
			
			viscont.init();
			viscont.transit(0,0);
			viscont.closed = true;
			viscont.top = (window.innerHeight - 120);
			viscont.left = (- window.innerWidth + 44);
			viscont.width = ( window.innerWidth - 44);
			viscont.hight = 100;
			
			
			
			this.display[0] = viscont;
			this.display[1] = symbolBag;
			
		}
		
		if(type == 'onClick_event' && message.id == 'foldingbutton_display')
  		{
  		
  			var listGE = new Array();
			listGE[0] = new Array();
			
  			if(this.display[0].closed)
  			{
  			
  			de.auster_gmbh.library.tools.displayElements.assembleThemeBar(
  			this.display[1],
			this.display[0].top,
			this.display[0].left,
			this.display[0].width,
			this.display[0].hight,
  			this.mySVGBarObj,
  			this.pfad);
  			 			
  			listGE[0][0] = this.display[0];
  			listGE[0][1] = this.display[0].width;
  			listGE[0][2] = 0;
  			
  			de.auster_gmbh.graphicelement.sequenceMoveToPoint(listGE);
  			//this.container[0].transit(0,0);
  			this.display[0].closed = false;
  			

  			
  			}
  			else
  			{
  			
  			
  			listGE[0][0] = this.display[0];
  			listGE[0][1] = 0;
  			listGE[0][2] = 0;
  			
  			de.auster_gmbh.graphicelement.sequenceMoveToPoint(listGE);
  			//this.container[0].transit(-270,0);
  			this.display[0].closed = true;
  		}
  		}
  		
		if(type == 'onClick_event' && message.id.substring(0, 6) == 'theme_')
  		{
  			var id_num = message.id.substring(6, message.id.lastIndexOf('_'));
			var command = message.id.substring( message.id.lastIndexOf('_') + 1);
   			var listGE = new Array();
   			var eventobj = null;
			listGE[0] = new Array();
			if(this.isActive != 0)
			{
				eventobj = new de.auster_gmbh.library.tools.eventObject('onDeactivate',message,this.isActive);
  				this.dataref.fireEvent('Controlcenter.sendToSemWeb',eventobj); //Controlcenter
  				this.isActive = id_num;
			}
			else
			{
				this.isActive = id_num;
			} 
  			
  			listGE[0][0] = this.display[0];
  			listGE[0][1] = 0;
  			listGE[0][2] = 0;
  			
  			de.auster_gmbh.graphicelement.sequenceMoveToPoint(listGE);
  			//this.container[0].transit(-270,0);
  			this.display[0].closed = true;
  			
  			eventobj = new de.auster_gmbh.library.tools.eventObject(command,message,id_num);
  			this.dataref.fireEvent('Controlcenter.sendToSemWeb',eventobj); //Controlcenter
   			eventobj = new de.auster_gmbh.library.tools.eventObject('',this,id_num);
  			this.dataref.fireEvent('[*/JSControl].setID',eventobj);
  		}

		//
		if(type == 'onClick_event' && message.id.substring(0, 5) == 'OBJID')
  		{
  		
  			//alert(message.id.substring(5));
  			var idObj = de.auster_gmbh.semanticelement.semantic_web.findIDobj(message.id.substring(5));
  			if(idObj)
  			{
  				if(idObj.onActivate)
  				{
  				 
  					idObj.onClick(type,message);
  				}
  			}
  		}
  		
  	}
  	else
  	{
  	  	/*primary funct workbench */
  		var num = 0;
  		var arg = new Array();
  		arg[0] = message;
  		
  		if(-1 != (num = type.indexOf('.')))
  		{
  			var funct = type.substring(num + 1, type.length);
  			
  			if(this[funct] != undefined )
  				this[funct].apply(this,arg);
  		}	
  	}

  		
  	}
  	
  	/* functions of the class Controlelement */
  	
  	
  	/* onFocus */
  	this.onFocus = function()
  	{
  		if(!de.auster_gmbh.controllelement_toolbox.tools.bar_status(this.container))
  		de.auster_gmbh.controllelement_toolbox.tools.openControl(this.container);
  	}
  	
  	 
  	/* onCollapse */
  	this.onCollapse = function()
  	{
  		if(de.auster_gmbh.controllelement_toolbox.tools.bar_status(this.container))
  		de.auster_gmbh.controllelement_toolbox.tools.openControl(this.container);
  	}

  	/* setID */
  	this.setID = function(myid)
  	{
  		
  	}
  	
  	var fireEvent =  function( type , message )
  	{
  		this.dataref.fireEvent( type , message );
  	}
  	
  } 
  
  de.auster_gmbh.displayelement = new de.auster_gmbh.displayelement.clazz(de.auster_gmbh.accesselement);
  //de.auster_gmbh.displayelement(de.auster_gmbh.accesselement);
  
  //de.auster_gmbh.accesselement.addListener(de.auster_gmbh.displayelement);

  
		
 if(!de) de = {};
 else if (typeof de != 'object')
 throw new Error('de allready exists and os not an object'); 

 if(!de.auster_gmbh) de.auster_gmbh = {};
 else if (typeof de.auster_gmbh != 'object')
 throw new Error('de.auster_gmbh allready exists and os not an object'); 

 if(!de.auster_gmbh.objectelement) de.auster_gmbh.objectelement = {};
 else if (typeof de.auster_gmbh.objectelement != 'object')
 throw new Error('de.auster_gmbh.objectelement allready exists and os not an object'); 

//-------------------Object Element-----------------------------------
		
  de.auster_gmbh.objectelement.clazz = function(semweb,control)
  {
  
  this.toString = function(){return 'Display Element';}
    	this.semref = semweb;
  	this.controlref = control;
  	this.dataref = control;
  	this.myNodeid = 'object'; 
  	this.myToolBar = 'topbar';
  	this.mySVGObj = null;
  	this.controlref.addListener(this);
   	this.container = new Array();
  	var intervalElement = new Array();
	
	/* contains an object, which is the actual one */
	var currentNode = undefined;
	var currentid = new Array();
	currentid[0] = 0;
	currentid[1] = 0;
	
	var funcArray = new Array();
	var functpoint = 0;

	this.Web = new de.auster_gmbh.objectelement_toolbox.Web(this);
	this.Info = new de.auster_gmbh.objectelement_toolbox.Info(this);
	
	
	this.initrotateMenue = function(graphicElement)
	{
		if(intervalElement['graphic'] == undefined)
		{
			intervalElement['graphic'] = this.container[1]['NodeWeb'].findID(  'workbench'  ).getListOfElements();
			intervalElement['cur_x/n'] = 0;
			intervalElement['prozess'] = 'rotate';
			intervalElement['steps'] = 180;
			intervalElement['main'] = null;
			intervalElement['x_line'] = 0;
			intervalElement['x_pos'] = 0;
			intervalElement['y_pos'] = 0;
			intervalElement['expand'] = 0;
			intervalElement['name'] = '';
			
			
		}
		
	}
	
	this.rotateMenue = function( pos )
	{
			intervalElement['name'] = pos;
			
			var div = pos.indexOf('_');
			var div2 = pos.indexOf('_', div + 1);

			var breaker = pos.substr(div + 1, div2 - div - 1);
			var middle = breaker.indexOf('/');
			var counter = parseFloat(breaker.substr(0, middle ));
			var caller = parseFloat( breaker.substr(middle + 1, div2 - middle - 1 ));
			//alert(caller);
			//alert( breaker +  ' ' + intervalElement['cur_x/n'] + ' ' +  ( caller - counter)  );
			intervalElement['cur_x/n'] =  Math.abs( intervalElement['cur_x/n'] - ( caller - counter)  );
			
			//Math.abs( intervalElement['cur_x/n'] - (( caller - counter) % caller) )
			
			
			// (counter + intervalElement['cur_x/n'] + counter ) % caller;
			
			//var num = parseInt(message.id.substr(7, div - 7);
			//alert(intervalElement['cur_x/n']);
			
		//alert(pos);
			//intervalElement['graphic']		

			intervalElement['curstep'] = 0;
			
			intervalElement['stopstep'] =  Math.round(  (intervalElement['cur_x/n']  / caller) * (intervalElement['steps'] ));	
			
			intervalElement['interval'] = window.setInterval('de.auster_gmbh.objectelement.intervalevent()', 20);

			
		


	}
	this.intervalevent = function()
	{
	
	
	if(intervalElement['x_pos'] != 0)
	{
	
		window.clearInterval(intervalElement['interval']);
		intervalElement['stopstep'] = 40;
		intervalElement['curstep'] = 40;
		intervalElement['interval'] = window.setInterval('de.auster_gmbh.objectelement.intervalsubsidence()', 20);
		return false;
		
	
	}
	


		
			var elements = null;
			var mtrans = null;
			var mynull_x = 0;
			var mynull_y = 0;
			for (testme = 0 ; intervalElement['graphic'].length > testme; testme++)
			{
				
				if(intervalElement['graphic'][testme].getID() == 'ObjectsOfCircle')
					{
						
					
		
						elements = intervalElement['graphic'][testme].getListOfElements();
						mtrans = elements[1];
						
						if(intervalElement['main'] == null && mtrans.getID() == intervalElement['name'])
						{
							intervalElement['main'] = elements;
						}
						
						if(mynull_x == 0)
						{
						 mynull_x = mtrans.getWayPoint(0,0);
						 mynull_y = mtrans.getWayPoint(0,1);
						}
						
						elements[1].maintransit((-1 * (Math.cos((Math.PI * 2 * (((mtrans.startcounter) / mtrans.caller) + (intervalElement['curstep'] /intervalElement['steps']))))) * 170) + 170 -  (mtrans.getWayPoint(0,0) - mynull_x) , (Math.sin((Math.PI * 2 *  (((mtrans.startcounter) / mtrans.caller) + (intervalElement['curstep'] /intervalElement['steps'])))) * 170)  -  (mtrans.getWayPoint(0,1) - mynull_y)   )  ;
						
					elements[0].alterWayPoint(1,0,(-1 * (Math.cos((Math.PI * 2 * (((mtrans.startcounter) / mtrans.caller) + (intervalElement['curstep'] /intervalElement['steps']))))) * 170) + 170 +  mynull_x );
					elements[0].alterWayPoint(1,1,(Math.sin((Math.PI * 2 *  (((mtrans.startcounter) / mtrans.caller) + (intervalElement['curstep'] /intervalElement['steps'])))) * 170) +  mynull_y   );
					
					
					//elements[0].alterWayPoint(1,0,0);
					
					elements[1].alter();
					
//- elements[1].getWayPoint(0,0)
		

					}
			}
	
	
	
	if( intervalElement['curstep']++ >= (intervalElement['stopstep'] % intervalElement['steps']))
	{
		
		window.clearInterval(intervalElement['interval']);
		
		if(intervalElement['main'] != null)
		{
		
		intervalElement['curstep'] = 0;
			
		intervalElement['stopstep'] =  40;	
		
		intervalElement['interval'] = window.setInterval('de.auster_gmbh.objectelement.intervalexpand()', 20);
		
		
		}
		

	}
	
	intervalElement['curstep'] = intervalElement['curstep'] % intervalElement['steps'];
	

	
	}
	
	//---------------------------------------------------------------------------------
	this.intervalexpand = function()
	{
	
	if(intervalElement['x_pos'] == 0)
	{
	var elem = intervalElement['main'][1].getmaintransit();
	
	intervalElement['x_pos'] = elem[0];
	intervalElement['y_pos'] = elem[1];
	
	intervalElement['x_line'] = intervalElement['main'][0].getWayPoint(1,0);
	
	}
	
	
	
	intervalElement['main'][1].maintransit( 
		intervalElement['x_pos'] - ((window.innerWidth/5) * ( intervalElement['curstep'] / intervalElement['stopstep'] )) 
		,intervalElement['y_pos']);
	
	
	intervalElement['main'][0].alterWayPoint(1,0
		, intervalElement['x_line'] - ((window.innerWidth/5) * ( intervalElement['curstep'] / intervalElement['stopstep'] )) );
	
	intervalElement['main'][1].alter();
	

	
	if(intervalElement['curstep']++ >= intervalElement['stopstep'])
	{
	window.clearInterval(intervalElement['interval']);
	
	// oeffnet die Graphen  !!!!!!!!!!!!!!!aufgehoert!!!!!!!!!!!!!!!!!!
	//concatcontrol(this.mySVGObj,intervalElement['main'][1],)
	
	}
	
	
	
	}
	
	//---------------------------------------------------------------------------------
	this.intervalsubsidence = function()
	{
	
	
	
	
	intervalElement['main'][1].maintransit( 
		intervalElement['x_pos'] - ((window.innerWidth/5) * ( intervalElement['curstep'] / intervalElement['stopstep'] )) 
		,intervalElement['y_pos']);
	
	
	intervalElement['main'][0].alterWayPoint(1,0
		, intervalElement['x_line'] - ((window.innerWidth/5) * ( intervalElement['curstep'] / intervalElement['stopstep'] )) );
	
	intervalElement['main'][1].alter();
	
	
	
	if(intervalElement['curstep']-- == 0)
	{
	window.clearInterval(intervalElement['interval']);
	
	
	intervalElement['main'] = null;
	intervalElement['x_pos'] = 0;
	intervalElement['y_pos'] = 0;
	
	intervalElement['x_line'] = 0;
	
	this.rotateMenue(intervalElement['name']);
	}

	
	}

 /*-----------------------------------------------------
* createPrimaryPanel(  add , parentObj  ):
* -----------------------------------------------------
*/ 	
  	var createPrimaryPanel =  function( add , parentObj  )
 	{
 		
 		
 		var mycontainer = new de.auster_gmbh.graphicelement.visualElement();
		var mybag =  new de.auster_gmbh.graphicelement.visualBag();
		var mysvg = new de.auster_gmbh.graphicelement.svg.SVGPath(parentObj,de.auster_gmbh.accesselement);
			
		mysvg.transit(0,0);
		mysvg.setWayPoint(0,0);
		mysvg.setWayPoint(window.innerWidth,0);
		mysvg.setWayPoint(window.innerWidth,28);
		mysvg.setWayPoint(625,28);
		mysvg.setWayPoint(610,18);
		mysvg.setWayPoint(340,18);
		mysvg.setWayPoint(310,38);
		mysvg.setWayPoint(145,38);
		mysvg.setWayPoint(130,28);
		mysvg.setWayPoint(0,28);
		mysvg.setWayPoint(0,0);
		mysvg.setStyle('fill:#002e7a;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1');
		mysvg.setID('objectHeadUp');
			
		mycontainer.add(mysvg);
		
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGText(parentObj,de.auster_gmbh.accesselement);
		mysvg.transit(window.innerWidth - 180,0);
		mysvg.setWayPoint(5,20);

		mysvg.setText('Objektkontrolle');
		mysvg.setStyle('font-size:16px;font-family:Bitstream Vera Sans, Arial; font-weight:normal;font-style:normal;stroke:#8794a6;stroke-width:1;fill:#8794a6');
		mysvg.setID('headline1');
		mycontainer.add(mysvg);
		

		mysvg = new de.auster_gmbh.graphicelement.svg.SVGPath(parentObj,de.auster_gmbh.accesselement);
			
		mysvg.transit(window.innerWidth - 300,10);
		//mysvg.setWayPoint(198.29762 + 90 ,65.860403 - 70);
		//mysvg.setWayPoint(190.58577 + 90 ,73.734851 - 70);
		//mysvg.setWayPoint(198.29762 + 90 ,82.646873 - 70); 
		mysvg.setWayPoint(188.29762 + 90 ,78.577423 - 70); 
		mysvg.setWayPoint(201.55508 + 90 ,78.577423 - 70); 
		mysvg.setWayPoint(201.55508 + 90 ,82.646873 - 70); 
		mysvg.setWayPoint(209.06784 + 90 ,74.127283 - 70); 
		mysvg.setWayPoint(201.55508 + 90 ,65.860403 - 70); 
		mysvg.setWayPoint(201.55508 + 90 ,69.929853 - 70); 
		mysvg.setWayPoint(188.29762 + 90 ,69.929853 - 70); 
		//mysvg.setWayPoint(208.29762 + 90 ,65.860403 - 70);
		
		mysvg.setStyle('fill:#002e7a;fill-rule:evenodd;stroke:#ffffff;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1');
		mysvg.setID('foldingbutton_object');
		mycontainer.add(mysvg);
		
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGPath(parentObj,de.auster_gmbh.accesselement);
			
		mysvg.transit(-175,10);
		mysvg.setWayPoint(198.29762 + 90 ,65.860403 - 70);
		mysvg.setWayPoint(190.58577 + 90 ,73.734851 - 70);
		mysvg.setWayPoint(198.29762 + 90 ,82.646873 - 70); 
		mysvg.setWayPoint(198.29762 + 90 ,78.577423 - 70); 
		mysvg.setWayPoint(211.55508 + 90 ,78.577423 - 70); 
		mysvg.setWayPoint(211.55508 + 90 ,69.929853 - 70); 
		mysvg.setWayPoint(198.29762 + 90 ,69.929853 - 70); 
		mysvg.setWayPoint(198.29762 + 90 ,65.860403 - 70);
		
		mysvg.setStyle('fill:#002e7a;fill-rule:evenodd;stroke:#ffffff;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1');
		mysvg.setID('foldingbutton_object');
		mycontainer.add(mysvg);

		mysvg = new de.auster_gmbh.graphicelement.svg.SVGImage(parentObj,de.auster_gmbh.accesselement);
			
		mysvg.transit(140,6);
		mysvg.setWayPoint(5,2);
		mysvg.setDimension(26,23); 
		mysvg.setImage('img/objectaddsymbol.png');
			

		mysvg.setID('objectadd');
		mycontainer.add(mysvg);
			

		mysvg = new de.auster_gmbh.graphicelement.svg.SVGImage(parentObj,de.auster_gmbh.accesselement);
			
		mysvg.transit(190,6);
		mysvg.setWayPoint(5,2);
		mysvg.setDimension(55,25); 
		mysvg.setImage('img/objectnetsymbol.png');
			

		mysvg.setID('objectedit');
		mycontainer.add(mysvg);


		mysvg = new de.auster_gmbh.graphicelement.svg.SVGImage(parentObj,de.auster_gmbh.accesselement);
			
		mysvg.transit(270,6);
		mysvg.setWayPoint(5,2);
		mysvg.setDimension(28,27); 
		mysvg.setImage('img/objectinfosymbol.png');
			
//'objectadd'
//'objectedit'
//'objectinfo'
		mysvg.setID('objectinfo');
		mycontainer.add(mysvg);
			
		mybag.add(mycontainer);
			
		mybag.init();
		return mybag;
 		
 	}
 	
  	var createOverviewPanel =  de.auster_gmbh.objectelement_toolbox.tools.Datapanel; 
 	/*
 	* 
 	*/
 	var alterOverviewPanel =  function( parentObj , svgBag, semobj  )
 	{
 		var mycontainer = svgBag;
 		var myelement = null;	
		var mysvg = null;
		var labelvar = '';
		var commentvar = '';
		
	
		
		var max = semobj.childmany(1);
		
					
			//this.semref.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,true);
			//var headline = this.semref.curValue(1);
			//this.semref.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,false);
		
		for(aopiter = 0;aopiter < max; aopiter++ )
		{
		myelement = new de.auster_gmbh.graphicelement.visualElement();	
		
		semobj.childNode(1,aopiter);
		
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGLine(parentObj,de.auster_gmbh.accesselement);
		
 		mysvg.transit(150,28);
		mysvg.setWayPoint(((window.innerWidth- 320)/2) + ((window.innerWidth)/5) ,(window.innerHeight -80)/2);
		mysvg.setWayPoint( (-1 * (Math.cos((Math.PI * 2 * aopiter) / max) * 170)) + ((window.innerWidth- 320)/2) + ((window.innerWidth)/5) , (Math.sin((Math.PI * 2  * aopiter) / max) * 170) + ((window.innerHeight -80)/2) );
		mysvg.setStyle('stroke:black;stroke-width:3;');
		mysvg.setID('lineto');
		mysvg.init();	
		myelement.add(mysvg);		
		
		
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGCircle(parentObj,de.auster_gmbh.accesselement);
		
			if(!semobj.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,true)
			)
			labelvar = '';
			else
			labelvar = semobj.curValue(1);
			
			semobj.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,false);
			
			if(
			!semobj.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#comment',0,true)
			)
			commentvar = '';
			else
			commentvar = semobj.curValue(1);
			
			semobj.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#comment',0,false);
			
		mysvg.setLabel(labelvar,commentvar);
		mysvg.caller = max;
		mysvg.startcounter = aopiter;
		mysvg.curcounter = aopiter;
 		mysvg.transit(150,28);
		mysvg.setWayPoint( (-1 * (Math.cos((Math.PI * 2 * aopiter) / max) * 170)) + ((window.innerWidth- 320)/2) + ((window.innerWidth)/5) , (Math.sin((Math.PI * 2  * aopiter) / max) * 170) + ((window.innerHeight -80)/2) );
		mysvg.setradiant( 20 );
		mysvg.setStyle('opacity:1;fill:#055555;fill-opacity:1;fill-rule:nonzero');
		
		mysvg.setID('ObjectsOfCircle_' + aopiter + '/' + max + '_0');
		mysvg.init();	
		myelement.add(mysvg);

		myelement.setID( 'ObjectsOfCircle' );
		
		mycontainer.add(myelement);
		
		semobj.parentNode(1, 0);
		
		}
		
		
		
		myelement = new de.auster_gmbh.graphicelement.visualElement();	
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGCircle(parentObj,de.auster_gmbh.accesselement);
		
			if(!semobj.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,true)
			)
			labelvar = '';
			else
			labelvar = semobj.curValue(1);
			
			semobj.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,false);
			
			if(
			!semobj.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#comment',0,true)
			)
			commentvar = '';
			else
			commentvar = semobj.curValue(1);
			
			semobj.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#comment',0,false);
		
		mysvg.setLabel(labelvar,commentvar);
 		mysvg.transit(150,28);
		mysvg.setWayPoint((window.innerWidth- 320)/2 + ((window.innerWidth)/5) ,(window.innerHeight -80)/2);
		mysvg.setradiant( 30 );
		mysvg.setStyle('opacity:1;fill:#c71712;fill-opacity:1;fill-rule:nonzero');
		mysvg.setID('center');
		mysvg.init();	
		myelement.add(mysvg);
		myelement.setID('center');
		//myelement.setID( 'container_of_a_model' );
		mycontainer.add(myelement);
		
		
 	}
 	
 	
 	/*
 	* 
 	*/
 	var concatcontrol =  function( parentObj , graphicObj , svgBag, semobj  )
 	{
 		var mycontainer = svgBag;
 		var myelement = null;	
		var mysvg = null;
		var labelvar = '';
		var commentvar = '';
		
	return true;
		
		var max = semobj.childmany(1);
		
					
			//this.semref.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,true);
			//var headline = this.semref.curValue(1);
			//this.semref.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,false);
		
		for(aopiter = 0;aopiter < max; aopiter++ )
		{
		myelement = new de.auster_gmbh.graphicelement.visualElement();	
		
		semobj.childNode(1,aopiter);
		
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGLine(parentObj,de.auster_gmbh.accesselement);
		
 		mysvg.transit(150,28);
		mysvg.setWayPoint(((window.innerWidth- 320)/2) + ((window.innerWidth)/5) ,(window.innerHeight -80)/2);
		mysvg.setWayPoint( (-1 * (Math.cos((Math.PI * 2 * aopiter) / max) * 170)) + ((window.innerWidth- 320)/2) + ((window.innerWidth)/5) , (Math.sin((Math.PI * 2  * aopiter) / max) * 170) + ((window.innerHeight -80)/2) );
		mysvg.setStyle('stroke:black;stroke-width:3;');
		mysvg.setID('lineto');
		mysvg.init();	
		myelement.add(mysvg);		
		
		
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGCircle(parentObj,de.auster_gmbh.accesselement);
		
			if(!semobj.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,true)
			)
			labelvar = '';
			else
			labelvar = semobj.curValue(1);
			
			semobj.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,false);
			
			if(
			!semobj.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#comment',0,true)
			)
			commentvar = '';
			else
			commentvar = semobj.curValue(1);
			
			semobj.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#comment',0,false);
			
		mysvg.setLabel(labelvar,commentvar);
		mysvg.caller = max;
		mysvg.startcounter = aopiter;
		mysvg.curcounter = aopiter;
 		mysvg.transit(150,28);
		mysvg.setWayPoint( (-1 * (Math.cos((Math.PI * 2 * aopiter) / max) * 170)) + ((window.innerWidth- 320)/2) + ((window.innerWidth)/5) , (Math.sin((Math.PI * 2  * aopiter) / max) * 170) + ((window.innerHeight -80)/2) );
		mysvg.setradiant( 20 );
		mysvg.setStyle('opacity:1;fill:#055555;fill-opacity:1;fill-rule:nonzero');
		
		mysvg.setID('ObjectsOfCircle_' + aopiter + '/' + max + '_0');
		mysvg.init();	
		myelement.add(mysvg);

		myelement.setID( 'ObjectsOfCircle' );
		
		mycontainer.add(myelement);
		
		semobj.parentNode(1, 0);
		
		}
		
		
		
		myelement = new de.auster_gmbh.graphicelement.visualElement();	
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGCircle(parentObj,de.auster_gmbh.accesselement);
		
			if(!semobj.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,true)
			)
			labelvar = '';
			else
			labelvar = semobj.curValue(1);
			
			semobj.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,false);
			
			if(
			!semobj.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#comment',0,true)
			)
			commentvar = '';
			else
			commentvar = semobj.curValue(1);
			
			semobj.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#comment',0,false);
		
		mysvg.setLabel(labelvar,commentvar);
 		mysvg.transit(150,28);
		mysvg.setWayPoint((window.innerWidth- 320)/2 + ((window.innerWidth)/5) ,(window.innerHeight -80)/2);
		mysvg.setradiant( 30 );
		mysvg.setStyle('opacity:1;fill:#c71712;fill-opacity:1;fill-rule:nonzero');
		mysvg.setID('center');
		mysvg.init();	
		myelement.add(mysvg);
		myelement.setID('center');
		//myelement.setID( 'container_of_a_model' );
		mycontainer.add(myelement);
		
		

 	}
 	
 	//var textInsertElement = null;
 	//var textAreaElement = null;
 	
  	var createInsertPanel =  de.auster_gmbh.objectelement_toolbox.tools.Insertpanel;

//-----------------------------------------------------
  	

  	
  	var stdclazz = function(){};

  	
  	this.display = new Array();
  	
  	var treeid = -1; 
  	
  	this.setBasicElement = function(idOfElement)
  	{
  		
  	}
  	/*
  	this.setBasicElement = function(idOfElement)
  	{
  		
  	}
  	*/
  	this.getBasicElement = function()
  	{
  		
  	}
  	
  	/* onFocus */
  	this.onFocus = function()
  	{
  		if(!de.auster_gmbh.objectelement_toolbox.tools.bar_status(this.container))
  		de.auster_gmbh.objectelement_toolbox.tools.open_bar(this.container);
  	}
  	
  	 
  	/* onCollapse */
  	this.onCollapse = function()
  	{
  		if(de.auster_gmbh.objectelement_toolbox.tools.bar_status(this.container))
  		de.auster_gmbh.objectelement_toolbox.tools.open_bar(this.container);
  	}
  	
  	
  	/* setID */
  	this.setID = function(myid)
  	{
  	
  	
  		currentid[0] = myid.getContext();
  		//alert(myid.getContext());
  		//currentNode = this.semref.getRef1()
  		
  		if(!this.container[1]['NodeInfo'].closed)
  		{
  		
  		this.container[1]['NodeInfo'].deleteID('entry');
  		var fake = new Array();
  		fake[0] = new Array();
  		fake[1] = 1;
  		fake[0][0] = this.container[1]['NodeInfo'];
  		de.auster_gmbh.objectelement_toolbox.tools.functions.info(this.container[1]['NodeInfo'],this.semref,this.mySVGObj,
			de.auster_gmbh.accesselement);
  		}
  		
  	}
  	
  	this.event = function( type , message )
  	{
	
	
	
		/*-----------------------------------------------------
		*	foldingbutton_event
		* -----------------------------------------------------
		*/
  	  	if(type == 'onClick_event' && message.id == 'foldingbutton_object')
  		{
  			
  			
  			de.auster_gmbh.objectelement_toolbox.tools.open_bar(this.container);

  		}
  		//
//'objectedit'
//'objectinfo'
//
		if(type == 'onClick_event' && message.id.substr(0, 15) == 'ObjectsOfCircle' )
		{
		
			var div = message.id.indexOf('_');
			var div2 = message.id.indexOf('_', div + 1);

			var breaker = message.id.substr(div + 1, div2 - div - 1);
			var middle = breaker.indexOf('/');
			var counter = parseFloat(breaker.substr(0, middle ));
			var caller = parseFloat( breaker.substr(middle + 1, div2 - middle - 1 ));
			
			this.initrotateMenue( this.container[1]['NodeWeb'].findID(  'workbench'  ));
			
			this.rotateMenue( message.id );
			
			
			/*
			var listofelements = this.container[1]['NodeWeb'].findID(  'workbench'  ).getListOfElements();
			
			for (testme = 0 ; listofelements.length > testme; testme++)
			{
			
				alert(listofelements[testme].getID() );
			}
			*/
		}

		/*-----------------------------------------------------
		*	add_event
		* -----------------------------------------------------
		*/
   	  	if(type == 'onClick_event' && message.id == 'objectadd')
  		{
  			de.auster_gmbh.objectelement_toolbox.tools.open_NewNode(this.container);  			
  		}
  		
  		
		/*-----------------------------------------------------
		*	edit_event
		* -----------------------------------------------------
		*/
   	  	if(type == 'onClick_event' && message.id == 'objectedit')
  		{
  		
  		
  		  		//var eventobj = new de.auster_gmbh.library.tools.eventObject('',this,null);
			
				//this.controlref.fireEvent('[*/JSObject].onCollapse',eventobj);
  		
			de.auster_gmbh.objectelement_toolbox.tools.open_Node(
			this.container,
			'NodeWeb',
			de.auster_gmbh.objectelement_toolbox.tools.functions.neutral,
  			this.semref,
			this.mySVGObj,
			de.auster_gmbh.accesselement
			);  
  			//de.auster_gmbh.objectelement_toolbox.tools.functs.neutral
  			
  		}


  		
  		
		/*-----------------------------------------------------
		*	add_info
		* -----------------------------------------------------
		*/

   	  	if(type == 'onClick_event' && message.id == 'objectinfo')
  		{
  		

  			this.semref.findID(0, currentid[0]);
  			
  			de.auster_gmbh.objectelement_toolbox.tools.open_Node(
  			this.container,
  			'NodeInfo',
  			de.auster_gmbh.objectelement_toolbox.tools.functions.info,
  			this.semref,
			this.mySVGObj,
			de.auster_gmbh.accesselement);  

  			
  			
  			
  			
  		}
  	
  	
  		/*-----------------------------------------------------
		*	valid_entry_event
		* -----------------------------------------------------
		*/
   	  	if(type == 'onblur_event' && message.id == 'URI')
  		{
  		
  		var arr = de.auster_gmbh.semanticelement.semantic_web.showListofIDs(message.value);
  		if(arr.length > 0)
  		message.value = arr[0];
  		else
  		message.value = '';
  		}

  		
  	
  	  	if(type == 'onClick_event' && message.id == 'okField')
  		{
  			var curnode = this.semref.getRef1();
			var stamp = ''; 
			var doc = '';
			
			if(false === (stamp = this.semref.getTrace()) )return false;
			if(false === (doc = this.semref.getOntology()) )return false;
			
			var request = new de.auster_gmbh.library.tools.qPComObject();
			//request.setAttribute('http://www.w3.org/1999/02/22-rdf-syntax-ns', 'about', 'boho');
			cur_id = request.setNewNode(doc, stamp, this.container[1]['InsertNode'].uri.getText());

			if(!(this.container[1]['InsertNode'].label == 'label' || this.container[1]['InsertNode'].label == ''))
			{
				request.setAttribute('data', '0', this.container[1]['InsertNode'].label.getText());
				request.setNewNode(doc, stamp, 'http://www.w3.org/2000/01/rdf-schema#label' ,cur_id);	
				// http://www.w3.org/2000/01/rdf-schema
				//label		
			}
			

			
			de.auster_gmbh.library.access.execute_request(request);

  		} 
  	
		if( type == 'selected_object' ) 
		{
			this.setBasicElement(message);
			
			var args_array = new Array();
  			var it = 0;
  			  			
  			
  			args_array[it] = new Array();
  			args_array[it][0] = this.container[1]['InsertNode'];
  			args_array[it][1] = 0;
  			args_array[it][2] = 0;
  			args_array[it++][3] = 'my1';
  			this.container[1]['InsertNode'].closed = false;

  			args_array[it] = new Array();
  			args_array[it][0] = this.container[0];
  			args_array[it][1] = 0;
  			args_array[it][2] = 0;
  			args_array[it++][3] = 'my1';
  			
  			
			this.container[0].closed = false;
			de.auster_gmbh.graphicelement.sequenceMoveToPoint( args_array );
  			
			
		}
  	
  		if(type == 'init')
  		{
   			
   			if(this.myNodeid == '')
  			this.mySVGObj = message.parentNode;
  			else
  			this.mySVGObj = document.getElementById(this.myNodeid);
  			
  			
  			if(this.myToolBar == '')
  			this.mySVGToolBar = message.parentNode;
  			else
  			this.mySVGToolBar = document.getElementById(this.myToolBar);
  			
  			
  			


			this.container[1] = new Array();
			this.container[1]['NodeWeb'] = createOverviewPanel(this.mySVGObj,'Overview',de.auster_gmbh.accesselement, '#002e7a');
			this.container[1]['NodeWeb'].transit(0,-1 * (window.innerHeight - 20));
			this.container[1]['NodeWeb'].closed = true;
			this.container[1]['NodeInfo'] = createOverviewPanel(this.mySVGObj,'Info',de.auster_gmbh.accesselement, '#00ee7a');
			this.container[1]['NodeInfo'].transit(0,-1 * (window.innerHeight - 20));
			this.container[1]['NodeInfo'].closed = true;
			this.container[1]['InsertNode'] = createInsertPanel(this.mySVGObj,de.auster_gmbh.accesselement);
			this.container[1]['InsertNode'].transit(0,-1 * 400);
			this.container[1]['InsertNode'].closed = true;
			
			this.container[0] = createPrimaryPanel(0 , this.mySVGToolBar );


			this.container[0].transit((-1 * (window.innerWidth)) + 120,0);
			this.container[0].closed = true;
			
	
  			
  		}
  		
  		/*primary funct workbench */
  		var num = 0;
  		var arg = new Array();
  		arg[0] = message;
  		
  		if(-1 != (num = type.indexOf('.')))
  		{
  			var funct = type.substring(num + 1, type.length);
  			
  			if(this[funct] != undefined )
  				this[funct].apply(this,arg);
  		}
  	}
  	
  	var fireEvent =  function( type , message )
  	{
  		this.dataref.fireEvent( type , message );
  	}
  	
  } 
  
  de.auster_gmbh.objectelement = new de.auster_gmbh.objectelement.clazz(de.auster_gmbh.semanticelement.semantic_web,de.auster_gmbh.accesselement);