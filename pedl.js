	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/2002/07/owl',1);
	var pedlOnt = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/2002/07/owl#Ontology' );
	about = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about' );
	about.about(pedlOnt,'http://www.auster-gmbh.de/2006/05/pedl-lib');
	de.auster_gmbh.semanticelement.semantic_web.setRef2(pedlOnt); 
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','PEDL-Lib');
 de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#comment','Program Element Device Language');
 	
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/1999/xlink',2);
 	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2002/07/owl#Class',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Instance-Function',
	'Instance-Function',
	'Class, which is direct a function',
	'http://www.w3.org/2002/07/owl#Class');
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2002/07/owl#Class',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Functional-Class',
	'pedl:Functional-Class',
	'Class, which is direct a function',
	'http://www.w3.org/2002/07/owl#Class');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2002/07/owl#Class',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Class',
	'pedl:Object_Class',
	'signs an object with functions to call',
	'http://www.w3.org/2002/07/owl#Class');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2002/07/owl#Class',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function',
	'pedl:Object_Function',
	'function of a Object Class',
	'http://www.w3.org/2002/07/owl#Class');
	
	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
 	function(som)
 	{
 		
 	  	var mysom = som;
 	  	var arg = new Array();
 	  	var pedl_type = null;

 	  	var activateGraph = null;
 	  	var functionToCall = null;
  		
  		
  		mysom.currentObject.onClick = function( type , message )
  		{
		}
		
		mysom.currentObject.onDeactivate = function( type , message )
  		{
		}
		
		mysom.currentObject.onActivate = function( type , message )
  		{
  		  var arguments = new Array();

  		  for(var i = 0; arg.length > i;i++)
  		  {

  		  if(arg[i].successor != undefined)
  	  		{
  	  			arguments[arguments.length] = arg[i].successor;
  	  			//console.error(arg[i].successor.toString());
  	  		}
  	  		else if(arg[i]['valueOf'] != undefined)
  	  			arguments[arguments.length] = arg[i].valueOf(); 

  		  
  		  }
  		  
  		  
  		 
  		  

  		  
  		  var coll = this.getName().split(".");

		  if(coll.length > 0)
  		  if (this.container.length >  0)
 	  	  {

 	  	    if(this.getContainerOwner(0)[coll[coll.length - 1]] != undefined)
 	  	    this.getContainerOwner(0)[coll[coll.length - 1]].apply(this.getContainerOwner(0)[coll[coll.length - 1]],arguments);
 	  	  
 	  	  } 

  		  
 		}
		
		mysom.currentObject.getDatatype = function()
		{
			return pedl_type || 'http://www.w3.org/2000/01/rdf-schema#Resource';
		}

		mysom.currentObject.getNewPropertyEvent = function(type, message)
		{
			var name = message.getRequester().getName();
			if(message.getRequester().isSubObjectOf('http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter'))
				arg[arg.length] = message.getRequester();
			if(name == 'http://www.auster-gmbh.de/2006/05/pedl-lib#datatype')
				pedl_type = message.getRequester().successor
				          ? message.getRequester().successor.getName()
				          : message.getRequester().toString();
		}
 		
		mysom.currentObject.getNewBagEntryEvent = function(type, message)
		{
			

		  if(message.getRequester().isSubObjectOf('http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter'))
		  	  arg[arg.length] = message.getRequester();

	  
		  //alert("getit");
		  
		  
		  //if(message.getRequester().isSubObjectOf('http://www.auster-gmbh.de/2006/05/pedl-lib#call_function'))
		  //{
		//  var URI =  this;
		  //
		// while (URI.container.length > 0)
 	  	//{
 	  	//  URI = URI.getContainerOwner(0);
 	  	  
 	  	//} 
 	  	//alert(URI);
		    //alert(message.getRequester());
		    //signURI()
		  //}
		  //alert("getit");
		  //dataGraph = message.getRequester();
		
		}
	});
	
	// rdfs:Datatype must be registered before it can be used as a parent class
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2002/07/owl#Class',
	'http://www.w3.org/2000/01/rdf-schema#Datatype',
	'rdfs:Datatype',
	'W3C datatype base class',
	'http://www.w3.org/2002/07/owl#Class');

	// pedl:Datatype — extends rdfs:Datatype beyond literals to arbitrary PEDL objects
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Datatype',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Datatype',
	'pedl:Datatype',
	'Superclass for all PEDL data types (extends rdfs:Datatype beyond literals)',
	'http://www.w3.org/2000/01/rdf-schema#Datatype');

	// pedl:datatype — property to declare the data type of a parameter or function result
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#datatype',
	'pedl:datatype',
	'Declares the pedl:Datatype of a parameter or function result',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');

	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2006/05/pedl-lib#datatype',
	'http://www.w3.org/2000/01/rdf-schema#range',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Datatype' );

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter',
	'pedl:Object_Parameter',
	'Parameter of a function',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');

	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
 	function(som)
 	{

 	  	var mysom = som;
 	  	var arg;
 	  	var parse_xsd  = null;
 	  	var pedl_type  = null;   // pedl:datatype — defaults to rdfs:Resource



  		mysom.currentObject.valueOf = function()
  		{

  		if(parse_xsd)
  		  if(parse_xsd['onActivate'] != undefined)
  		    return parse_xsd.onActivate( '*' , new de.auster_gmbh.library.tools.eventObject('onActivate',this,arg));
  		return arg;
		}

		mysom.currentObject.getDatatype = function()
		{
			return pedl_type || 'http://www.w3.org/2000/01/rdf-schema#Resource';
		}


		mysom.currentObject.getNewBagEntryEvent = function(type, message)
		{
		if(message.getRequest() == 'setBagLiteral')arg = message.getRequester();
		}

		mysom.currentObject.getNewPropertyEvent = function(type, message)
		{
		  var name = message.getRequester().getName();
		  if(name == 'http://www.w3.org/1999/02/22-rdf-syntax-ns#datatype')
		    parse_xsd = message.getRequester();
		  if(name == 'http://www.auster-gmbh.de/2006/05/pedl-lib#datatype')
		    pedl_type = message.getRequester().successor
		              ? message.getRequester().successor.getName()
		              : message.getRequester().toString();
		}

	});

	// Default datatype for object_parameter and Object_Function is rdfs:Resource
	// (specialised per class when building concrete objects like ate:SPARQL)
	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#datatype',
	'http://www.w3.org/2000/01/rdf-schema#Resource' );

	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#datatype',
	'http://www.w3.org/2000/01/rdf-schema#Resource' );

 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#hasFunction',
	'pedl:hasFunction',
	'relation between pedl:class and its functions',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Functions',
	'pedl:Functions',
	'contains functions',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq');
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2002/07/owl#Class',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class',
	'pedl:Class',
	'Class, which offers special behaviors',
	'http://www.w3.org/2002/07/owl#Class');

	// Object_Class is a pedl:Class (can carry hasFunction declarations)
	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Class',
	'http://www.w3.org/2000/01/rdf-schema#subClassOf',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class' );
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2002/07/owl#Class',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Result',
	'pedl:Result',
	'result of function',
	'http://www.w3.org/2002/07/owl#Class');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#script',
	'pedl:script',
	'groundproperty for script extensions',
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
		if(message.getRequest() == 'setBagLiteral')
		{
		//alert(this.container[0].getName() + " \n" + message.getRequester());
		
		if(message.getRequester().toString().substring(0,13) == 'function(som)')
		{
			//try {
			var tmp = new Function("som",message.getRequester().toString().substring(14,message.getRequester().toString().length - 1));
			this.container[0].clazz.prototype.script_prototype = tmp;
			//}catch (error) {alert(error);}
		}
		else
		{
			//try {

			eval(message.getRequester().toString());
			//}catch (error) {alert(error);}

			
			
		}
		
		}
		
		
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
 	}
 	);
 	
 	de.auster_gmbh.semanticelement.semantic_web.setManuallyGraph(
 	 de.auster_gmbh.semanticelement.semantic_web.getObjByRepresentationObj('http://www.auster-gmbh.de/2006/05/pedl-lib#hasFunction'),
 	 de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/2000/01/rdf-schema#range' ),
 	 de.auster_gmbh.library.owl.createUnionOf(
 	  undefined,
 	  de.auster_gmbh.semanticelement.semantic_web.getObjByRepresentationObj('http://www.auster-gmbh.de/2006/05/pedl-lib#Instance-Function'),
 	  de.auster_gmbh.semanticelement.semantic_web.getObjByRepresentationObj('http://www.auster-gmbh.de/2006/05/pedl-lib#Functions')));
 	 
 	 

 	
 	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
 	'http://www.auster-gmbh.de/2006/05/pedl-lib#hasFunction',
 	'http://www.w3.org/2000/01/rdf-schema#domain',
 	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class' )

	// object_parameter: domain = Object_Function (functions have parameters),
	//                   range  = rdfs:Resource   (parameter values are resources)
	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter',
	'http://www.w3.org/2000/01/rdf-schema#domain',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function' );

	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter',
	'http://www.w3.org/2000/01/rdf-schema#range',
	'http://www.w3.org/2000/01/rdf-schema#Resource' );

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#pipe_in',
	'pedl:pipe_in',
	'transports a dataset to domain',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
 	function(som)
 	{
 	  	var mysom = som;
 	  	var eventNames = [];
 	  	var container = null;
 	  	var pendingDOMEvents = [];

 	  	var semanticEventNames = ['onActivate','onDeactivate','onInitialisation','onClick','ondblClick','onFinish'];

 	  	var bindDOMEvents = function() {
 	  		//console.debug('[pipe_in] bindDOMEvents container=', container, 'graphicElement=', container && container.graphicElement, 'pending=', pendingDOMEvents);
 	  		if(!container || !container.graphicElement || pendingDOMEvents.length === 0) return;
 	  		pendingDOMEvents.forEach(function(domEvent) {
 	  			//console.debug('[pipe_in] addEventListener', domEvent, 'on', container.graphicElement);
 	  			container.graphicElement.addEventListener(domEvent, function(e) {
 	  				mysom.currentObject.onActivate('*',
 	  					new de.auster_gmbh.library.tools.eventObject('onActivate', mysom.currentObject, e.target.value));
 	  			});
 	  		});
 	  		pendingDOMEvents = [];
 	  	};

 	  	var registerEvents = function() {
 	  		//console.debug('[pipe_in] registerEvents container=', container, 'eventNames=', eventNames);
 	  		if(!container || eventNames.length === 0) {
 	  			console.warn('[pipe_in] registerEvents ABORT: container=', container, 'eventNames=', eventNames);
 	  			return;
 	  		}
 	  		eventNames.forEach(function(eventName) {
 	  			// onLoaded = fire once when DOM element is ready
 	  			var targetEvent = (eventName === 'onLoaded') ? 'onInitialisation' : eventName;
 	  			//console.debug('[pipe_in] wiring', eventName, '->', targetEvent, 'on container');
 	  			if(semanticEventNames.indexOf(targetEvent) >= 0) {
 	  				var prev = container[targetEvent] || null;
 	  				container[targetEvent] = function(type, message) {
 	  					if(prev) prev.call(this, type, message);
 	  					var ctx = (message && message.getContext) ? message.getContext() : null;
 	  					if (ctx === null || ctx === undefined)
 	  						ctx = (this.graphicElement) ? this.graphicElement.value :
 	  						      (container && container.graphicElement) ? container.graphicElement.value : null;
 	  					mysom.currentObject.onActivate('*',
 	  						new de.auster_gmbh.library.tools.eventObject('onActivate', mysom.currentObject, ctx));
 	  				};
 	  			} else {
 	  				pendingDOMEvents.push(eventName.replace(/^on/i, '').toLowerCase());
 	  			}
 	  		});
 	  		if(pendingDOMEvents.length > 0) {
 	  			//console.debug('[pipe_in] deferring DOM events to onInitialisation:', pendingDOMEvents);
 	  			var prevInit = container.onInitialisation || null;
 	  			container.onInitialisation = function(type, message) {
 	  				if(prevInit) prevInit.call(this, type, message);
 	  				bindDOMEvents();
 	  			};
 	  			container._pipeInPatched = true;
 	  			//console.debug('[pipe_in] onInitialisation patched on container._pipeInPatched=', container._pipeInPatched, 'innerID=', container.innerID);
 	  		}
 	  	};

		mysom.currentObject.getNewPropertyEvent = function(type, message) {
			if(message.getRequester().getName() == 'http://www.auster-gmbh.de/2006/05/pedl-lib#event') {
				eventNames = message.getRequester().successor.toString()
					.split(',').map(function(s){ return s.trim(); });
				//console.debug('[pipe_in] getNewPropertyEvent: eventNames=', eventNames, 'antecessor=', mysom.currentObject.antecessor);
				// antecessor is set by connect() before this fires
				if(!container && mysom.currentObject.antecessor)
					container = mysom.currentObject.antecessor;
				registerEvents();
			}
		};

		mysom.currentObject.getNewContainerEntryEvent = function(type, message) {
			container = message.getRequester();
			//console.debug('[pipe_in] getNewContainerEntryEvent: container=', container);
			registerEvents();
		};

		mysom.currentObject.onActivate = function(type, message) {
			var succ = mysom.currentObject.successor;
			var val = (message && message.getContext) ? message.getContext() : null;
			if(val === null || val === undefined) {
				val = (container && container.graphicElement) ? container.graphicElement.value : null;
			}
			//console.debug('[pipe_in] onActivate succ=', succ, 'val=', val);
			if(succ && succ.onActivate) {
				succ.onActivate('*',
					new de.auster_gmbh.library.tools.eventObject('onActivate', mysom.currentObject, val));
			} else {
				console.warn('[pipe_in] onActivate BLOCKED: succ=', succ);
			}
		};
 	}
 	);

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#pipe',
	'pedl:pipe',
	'a data-pipe',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class');
	
	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
 	function(som)
 	{
 	  	var mysom = som;
 	  	var outlets    = []; // [{outlet, targetType}]
 	  	var converters = {}; // 'fromType:toType' → fn(data) → convertedData

		mysom.currentObject.getNewPropertyEvent = function(type, message)
		{
			var prop = message.getRequester();
			if(prop.getName() == 'http://www.auster-gmbh.de/2006/05/pedl-lib#pipe_out' && prop.antecessor) {
				var already = outlets.some(function(e){ return e.outlet === prop.antecessor; });
				if(!already) {
					var targetType = (prop.antecessor.getDatatype)
						? prop.antecessor.getDatatype()
						: null;
					outlets.push({ outlet: prop.antecessor, targetType: targetType });
				}
			}
		}

		mysom.currentObject.registerConverter = function(fromType, toType, fn)
		{
			converters[fromType + ':' + toType] = fn;
		}

		mysom.currentObject.getNewBagEntryEvent = function(type, message)
		{
			var child = message.getRequester();
			if(child.convert && child.getFromType && child.getToType) {
				var from = child.getFromType();
				var to   = child.getToType();
				if(from && to)
					mysom.currentObject.registerConverter(from, to, function(data) {
						return child.convert(data);
					});
			}
		}

		mysom.currentObject.onActivate = function( type , message )
  		{
  			var sourceType = (message && message.getRequester && message.getRequester().getDatatype)
  				? message.getRequester().getDatatype()
  				: null;

  			outlets.forEach(function(entry) {
  				var outlet     = entry.outlet;
  				var targetType = entry.targetType;

  				if(sourceType && targetType && sourceType !== targetType) {
  					var key = sourceType + ':' + targetType;
  					if(converters[key]) {
  						var converted = converters[key](message.getContext ? message.getContext() : null);
  						var msg = new de.auster_gmbh.library.tools.eventObject('onActivate', mysom.currentObject, converted);
  						if(outlet.onActivate) outlet.onActivate('*', msg);
  					} else {
  						console.warn('[pipe] no converter for', sourceType, '→', targetType, '— forwarding raw');
  						if(outlet.onActivate) outlet.onActivate('*', message);
  					}
  				} else {
  					if(outlet.onActivate) outlet.onActivate('*', message);
  					else console.warn('[pipe] outlet has no onActivate:', outlet.getName ? outlet.getName() : outlet);
  				}
  			});
 		}
 	}
 	);

	// pipe_in and pipe_out range = pedl:pipe — set here because pedl:pipe must exist first
	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2006/05/pedl-lib#pipe_in',
	'http://www.w3.org/2000/01/rdf-schema#range',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#pipe' );

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Class',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#setValue',
	'pedl:setValue',
	'element to save a value to start a process',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Class');
	
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
 	}
 	);
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#call_function',
	'pedl:call_function',
	'element to start a process',
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
		}
		/*
		i cant remember this concept. Need to be recordnized.
		*/
		mysom.currentObject.getNewContainerEntryEvent = function(type, message)
		{
		
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
 		  
 		  
 		  if (this.container.length > 0)
 	  	  {
 	  	    if(this.getContainerOwner(0)['onActivate'] != undefined)
 	  	    this.getContainerOwner(0).onActivate( '*' , new de.auster_gmbh.library.tools.eventObject('onActivate',this,null));
 	  	  
 	  	  } 
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
 	}
 	);


	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#pipe_out',
	'pedl:pipe_out',
	'transports a dataset to range',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');

	// pipe_out: range = pedl:pipe (pipe_out connects an outlet to a pipe)
	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2006/05/pedl-lib#pipe_out',
	'http://www.w3.org/2000/01/rdf-schema#range',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#pipe' );

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#event',
	'pedl:event',
	'event listener name that triggers a pipeline element',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2006/05/pedl-lib#event'].prototype.handling = de.auster_gmbh.semanticelement.TAG;

 	//de.auster_gmbh.semanticelement.semantic_web.addBagEntryObj('http://www.w3.org/2000/01/rdf-schema#Resource');
 	
 	//de.auster_gmbh.semanticelement.semantic_web.swappointer();
 	//de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','rdfs:Resource');
 	
 	

 	
 	de.auster_gmbh.semanticelement.semantic_web.rootNode(1);
 	
 	
