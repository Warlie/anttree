/**
* Controllcenter
* event: receive an event
* 
*
*/

de.auster_gmbh.Controlcenter = function Controlcenter (semweb,control)
{
 	this.toString = function(){return 'Controlcenter';}
  	this.semref = semweb;
  	this.p_tags = new Array();
  	this.current_uri = '';
  	this.controlref = control;
  	this.controlref.addListener(this);
  	this.event_list = new Array();
  	
  	this.event = function( type , message )
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

		/* for clickevents */  		
  		if( !(message instanceof de.auster_gmbh.library.tools.eventObject) )
  			this.sendToSemWeb(new de.auster_gmbh.library.tools.eventObject(type,message, message.id));
  		
  		
  		
  	};
  	
  	/* sendToSemWeb
  	* 
  	* Method fothis.semrefr xml-tree Integration in Semtree 
  	* 
  	* internal functions:
  	* -find_ontology(arg)
  	* -rekursive_request(semweb, xmlobj, base)
  	*/  	
  	this.sendToSemWeb = function(arg)
  	{	
  		var element = null;
  		if(this.semref.findID(1,arg.getContext()))
  		{
  		/*	
  		console.warn('------------------------');
  			console.warn(arg.getRequest() );
  			console.warn(arg.getRequester());
  		console.warn(arg.getContext());
  		console.warn('------------------------'); */
  		/*
  		if(this.semref.getRef1()[arg.getRequest()] != null)
 		{
  		
  		//console.warn(arg.getRequest() );
  		//console.warn(arg.getRequest(),arg);
  		this.semref.getRef1()[arg.getRequest()](arg.getRequest(),arg);
  		} */
  		element = this.semref.findIDobj(arg.getContext());
  		
  		if(element)
 		{
  		
  		//console.warn(arg.getRequest() );
  		//console.warn(arg.getRequest(),arg);
  		 	console.debug("ask element");
  			console.debug(arg.getRequest());
  		if(element[arg.getRequest()])
  		{
  			element[arg.getRequest()](arg.getRequest(),arg);
  			console.debug("supported");
  			
  		}
  		else
  			console.debug("not supported");
  		
  		}
  		
  		
  		/*
    		if(this.semref.getRef1()[arg.getRequest()] != null)
 		{
  		
  		console.warn(arg.getRequest() );
  		console.warn(arg.getRequest(),arg);
  		this.semref.getRef1()[arg.getRequest()](arg.getRequest(),arg);
  		}*/
  		}
  	}
  	
  	/* callURI
  	* 
  	* Method for Ajax_calling 
  	* 
  	* internal functions:
  	*/
  	this.callURI = function(arg, ref)
 	{
 	
 	if(!this.event_list[arg]) 
 	{
 	this.event_list[arg] = new Array();
 	this.event_list[arg][0] = ref;
 	}
 	//if(ref['onInterval_event'])
 	//ref.onInterval_event(null);
 	 //alert(arg + ' ' + ref);	
 	 var len = de.auster_gmbh.library.access.ajaxobj.workstack.length;
 	 de.auster_gmbh.library.access.ajaxobj.workstack.splice(len, 0, arg);
	 de.auster_gmbh.library.access.ajaxobj.load();
 	 //alert(de.auster_gmbh.library.access.ajaxobj.workstack);
 	 //alert(de.auster_gmbh.library.access.ajaxConnection.request_index['workstack']);
 	 //de.auster_gmbh.library.access.ajaxobj.workstack
 	 	//de.auster_gmbh.library.access.ajaxobj.load();
  	}
  	
  	/* signURI
  	* 
  	* Method for Ajax_calling 
  	* 
  	* internal functions:
  	*/
  	this.signURI = function(arg, ref)
 	{
 	
 	if(!this.event_list[arg])return false; 
 	var j = this.event_list[arg].length;
 	this.event_list[arg][j] = ref;
 	return true;
  	}
  	
  	/* BuildUp
  	* 
  	* Method for xml-tree Integration in Semtree 
  	* 
  	* internal functions:
  	* -sort_ontologies(arg)
  	* -find_ontology(arg)
  	* -rekursive_request(semweb, xmlobj, base)
  	*/
 	this.buildUp = function(arg)
 	{
 	//alert(arg.getName());
 	//var test;
 	//for(var i=0; i < arg.getContext().length; i++ )
 	//{
 	
 	
 	//if(arg.getContext() instanceof de.auster_gmbh.library.parser.csv)alert("csv");
 	//if(test[i] instanceof DOMParser)alert("dom");
 	//if(arg.getContext() instanceof XMLDocument) alert("dom");	
 	//}
 		
 		
 		if(arg.getContext() instanceof de.auster_gmbh.library.parser.csv)this.addNodes(arg);
 		if(arg.getContext() instanceof XMLDocument)this.buildxml(arg);
 		
 		
 	}
 	
   	/* buildxml
  	* 
  	* Method for xml-tree Integration in Semtree 
  	* 
  	* internal functions:
  	* -sort_ontologies(arg)
  	* -find_ontology(arg)
  	* -rekursive_request(semweb, xmlobj, base)
	*
	* !!! "import" builds up all trees in follow !!! 
  	*/
 	this.buildxml = function(arg)
 	{
 		
 		if('de.auster_gmbh.library.access.ajaxConnection.request' == arg.getRequest())
 		{

      			

      			
      			var collection = arg.getContext();
      			      			 
 			var root = collection.documentElement;
 			/* x is a list of childnodes */
      			var x = null;
      			var ont = de.auster_gmbh.semanticelement.tools.find_ontology(root);
       			if(!ont){ alert('ontology was not found!'); return; }

      			console.log("Load " + ont[0]['about']);
      			var newOntology = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz(ont[0]['namespace'] + '#' + ont[0]['name']);
      			var thisID = newOntology.innerID;
      			var property = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz('http://www.w3.org/1999/02/22-rdf-syntax-ns#about');
      			
      			de.auster_gmbh.semanticelement.history = new Array(ont[0]['about']);
      			newOntology.setDoc(collection, ont[1]['import'] + 1);
      			
      			property.about(newOntology  ,ont[0]['about']);
      			if(this.p_tags[ont[0]['about']] == undefined)
      			  {
      			  
      			  this.current_uri = ont[0]['about'];
      			  //this.p_tags[0] = this.current_uri;
      			  this.p_tags[this.current_uri] = 'test';
      			  
      			  }
      			//if(v instanceof Array)
      			/* checks for an import uri */
      			
      			var hasImport = false;
      			var iterimport = 0;
      			
      			var import_array = new Array();

      			for (var i=2;i<ont.length;i++)
			{
				//property = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz(ont[i]['namespace'] + '#' + ont[i]['name']);
				if(ont[i]['resource:value'] == null)
				{
					//console.debug('---' + ont[i]['namespace'] + '#' + ont[i]['name'], ont[i]['value']);
					de.auster_gmbh.semanticelement.semantic_web.setGraphLiteralObj(newOntology, ont[i]['namespace'] + '#' + ont[i]['name'], ont[i]['value'] )
					
				//	import_array[iterimport++] = ont[i]['resource:value'];
				//	hasImport = true;
				}
				else
				{
					var resource = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz('http://www.w3.org/1999/02/22-rdf-syntax-ns#resource');
					var graph = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz(ont[i]['namespace'] + '#' + ont[i]['name']);
					var literal = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'](ont[i]['resource:value']);

					
					de.auster_gmbh.semanticelement.semantic_web.addBag(resource, literal);
					
					de.auster_gmbh.semanticelement.semantic_web.setManuallyGraph(newOntology, graph, resource );
					 		//console.debug(ont[i]['resource:value']);
				}
			}
			
			/* official buildup start */
			newOntology.create();
      			
 
			
 		} 		
 	
 //alert(de.auster_gmbh.semanticelement.history.join('\n'));
 	} 
 	
 	
 		
    	/* addNodes
  	* 
  	* Method to insert nodes in Semtree by CSV 
  	* 
  	* internal functions:
  	*/
 	this.addNodes = function(arg)
 	{
 	  /* block for ajaxConnection */
 	  if('de.auster_gmbh.library.access.ajaxConnection.request' == arg.getRequest())
 	  {
 		var collection = arg.getContext();
 		
 		//value
 		for(var i = 0;i < collection.row_many();i++)
 		{
 		if(collection.colVal(i,'command') == 'create' 
 		&& 
 		collection.colVal(i,'stamp') != '')
 		{
			alert(collection.colVal(i,'ns')); 
			
			//this.p_tags			
 		}

 		if(collection.colVal(i,'command') == 'create' 
 		&& 
 		collection.colVal(i,'stamp') == '')
 		{
 			alert("folgeknoten");
 		}

		
 		}
 		//alert(collection.toString());
 	  }
 	}	

  		
}
