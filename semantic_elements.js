

 /**con
 *	list of methods
 * (de.auster_gmbh.semanticelement.semantic_web)
 * addNewClazz(newClazzname,parentClazzname) :create new clazz of an existent
 * getClazz(clazzName) :gives clazzobject
 * getObjecttoClazz(clazzName) :gives object to clazz
 * moveinWeb(pointerNum,graphName,indexOfGraph,foreward) :walks through semweb by using graphs
 * nodeIndex(pointerNum) :gives array of propertynames
 * graphIndex(pointerNum,forward) :gives array of graphnames
 * inheritObj( clazzName ) :inherit object of uri(saves on cur2) to current Object, binding by a isSubClassof or isSubPropertyof, depending on its handling
 * parentNode(pointerNum) :goes to branch in direction to root or the root itself
 * childNode(pointerNum,pos) :goes to branch in direction to leaves or the leaves itself
 * childmany(pointerNum) :many of branches
 * curNode(pointerNum) :shows identifier
 * swappointer() : swap pointer 1 and 2 
 * set2to1(): set pointer 2 on 1
 * setRef(pointerNum,ref) :set ref to curelement1/2
 * getRef(pointerNum) :get ref of curelement1/2
 * addXML(doc) :expand Semweb with rdfdocument
 */


de.auster_gmbh.semanticelement = new Array();
de.auster_gmbh.semanticelement.stdclass = function(){};
//de.auster_gmbh.semanticelement.stdGraphicClass = 
de.auster_gmbh.semanticelement.VALUE = 0;
de.auster_gmbh.semanticelement.NODE = 1;
de.auster_gmbh.semanticelement.GRAPH = 2;
de.auster_gmbh.semanticelement.DEFINITION = 3;
de.auster_gmbh.semanticelement.TAG = 4;
de.auster_gmbh.semanticelement.REF = 5;
de.auster_gmbh.semanticelement.XMLELEMENT = 6;
de.auster_gmbh.semanticelement.XMLGRAPH = 7;
de.auster_gmbh.semanticelement.tools = {};
de.auster_gmbh.semanticelement.tools.onLoadListener = new function()
{
	var list_of_listeners = [];
	/** add to listener
	* @param : object with onLoadEvent()
	*/
	this.add = function(listener){list_of_listeners.push(listener);}
	this.call_listener = function()
	{
	 		if(list_of_listeners)
 			list_of_listeners.forEach(function(item){if("onLoadEvent" in item)item.onLoadEvent();});
 	}
	
}
de.auster_gmbh.semanticelement.tools.in_array = function( myArray, value)
	{
		
	 	var n = myArray.length;
	 	for(var i = 0; i < n ; i++ )
	 	{
	 		if(myArray[i] == value ) return true;
	 	}
	 	
	 	return false;
	};
	
	
de.auster_gmbh.semanticelement.tools.check_unset = function()
{
	console.log("List of find");
	for (var key in de.auster_gmbh.semanticelement)console.log("contains " + key);
		console.log("-------------------");
}
	
	 		/**
 			* sort_ontologies
      			* @param arg: xml-document
      			* @return Ontologydescription:
      			*	{ 0:
      			*		{'name' => localTagName
      			*		,'type' => nodeType
      			*		,'namespace' => Namespace
      			*		,'about' => "about"-identification
      			*		}
      			*	, n: 	{'name' => localTagName
      			*		,'type' => nodeType
      			*		,'namespace' => Namespace
      			*		,'value' => cdata-value
      			*		,'resource:value' => resource-reference}
      			*		}
      			*		
      			* 
      			*/
de.auster_gmbh.semanticelement.tools.find_ontology = function (arg)
      	{
      		var root = arg;
      		var first_node = root.getAttributeNS('http://www.auster-gmbh.de/surface-generator-lib','p');
      		var x = root.childNodes;
      		var y, about, k;
      		var res = new Array();
      		/* walk trought first level in tree */
      		for (i=0;i<x.length;i++)
			{
				if((x[i].namespaceURI + '#' + x[i].localName) == 'http://www.w3.org/2002/07/owl#Ontology')
				{
					//console.error(x[i].getAttributeNS('http://www.w3.org/1999/02/22-rdf-syntax-ns','about'));
					res[0] = new Array();
					res[0]['name'] = x[i].localName;
					res[0]['type'] = x[i].nodeType;
					res[0]['namespace'] = x[i].namespaceURI;
					res[0]['about'] = x[i].getAttributeNS('http://www.w3.org/1999/02/22-rdf-syntax-ns','about');
					y = x[i].childNodes;
					k = 1;
					
					
					res[k] = new Array();
					res[k]['name'] = 'p';
					res[k]['type'] = x[i].nodeType;
					res[k]['namespace'] = 'http://www.auster-gmbh.de/surface-generator-lib';
					res[k]['import'] = 0;
					res[k++]['value'] = first_node;
					
					
					for (var j=0;j<y.length;j++)
					{	
						
						if(y[j].localName)
						{
						if(y[j].localName == "imports")res[1]['import']++;
						res[k] = new Array();
						res[k]['name'] = y[j].localName;
						res[k]['type'] = y[j].nodeType;
						res[k]['namespace'] = y[j].namespaceURI;
						if(y[j].hasChildNodes())
						res[k]['value'] = y[j].firstChild.nodeValue;
						else
						res[k]['value'] = '';
						res[k++]['resource:value'] = 
						y[j].getAttributeNS('http://www.w3.org/1999/02/22-rdf-syntax-ns','resource');
						}
					}
						 
      				return res;
      				}
      				
      			}
      			return false;
      			};
	
de.auster_gmbh.semanticelement.tools.find_important_txtnode = function (node)
			{
			//10 32
			
			var res = false;
			for(var i = 0; i < node.length; i++)
			{
			if(!res && (node.charCodeAt(i) != 8) && (node.charCodeAt(i) != 9) && (node.charCodeAt(i) != 10) && (node.charCodeAt(i) != 32))res = true;
			}
			/*
			for(i = 0; (i < node.length) && res; i++)
			{
			console.error(node  + '(' + i + ')=' + node.charCodeAt(i) )
			}
			*/			
			return res;
			}
      			
de.auster_gmbh.semanticelement.tools.analyseNode = function (node)
			{
				//console.debug("chooses:");
			//console.debug(node.namespaceURI + '#' +  node.localName);
			var res = null;
							switch (node.nodeType) {  //[j].
							case 1:
							case 2: // Element & Attribute
								//console.info("Element " + node.namespaceURI + '#' +  node.localName);
								return de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz(node.namespaceURI + '#' +  node.localName);
								
								break;
							case 3:
								// text node
								if(de.auster_gmbh.semanticelement.tools.find_important_txtnode(node.data))
								{
									console.info("Literal" + node.data);
									return de.auster_gmbh.semanticelement.semantic_web.createLiteralObj(node.data);
								}
								else
								{
									return null;
								}
								break;
							default :
							console.error(node.nodeType + " will be needed, but is not implemented");
							}
			
			}			
			
de.auster_gmbh.semanticelement.tools.showHandlingToURI = function (uri)
			{ 
				if(uri in de.auster_gmbh.semanticelement)
					if(de.auster_gmbh.semanticelement[uri].representation)
					  return de.auster_gmbh.semanticelement[uri].representation.handling;
				  	else
				  		if(de.auster_gmbh.semanticelement[uri].prototype)
				  	  return de.auster_gmbh.semanticelement[uri].prototype.handling;
				return -1;
			}
			
de.auster_gmbh.semanticelement.ns = new Array();
de.auster_gmbh.semanticelement.const = {};
de.auster_gmbh.semanticelement.const.TREE = 0x10;
de.auster_gmbh.semanticelement.const.SEMANTIC = 0x11;
de.auster_gmbh.semanticelement.const.SEMANTIC_ATTRIB = 0x12;
de.auster_gmbh.semanticelement.const.METAINFOMATION = 0x13;
de.auster_gmbh.semanticelement.const.DATATYPE = 0x14;
de.auster_gmbh.semanticelement.const.VISUALISATION_TREE = 0x15;
de.auster_gmbh.semanticelement.const.VISUALISATION_ATTRIB = 0x16;
de.auster_gmbh.semanticelement.const.CONTROL_SYSTEM = 0x17;
de.auster_gmbh.semanticelement.const.GENERIC_TREE = 0x30;
de.auster_gmbh.semanticelement.const.GENERIC_SEMANTIC = 0x31;
de.auster_gmbh.semanticelement.const.GENERIC_SEMANTIC_ATTRIB = 0x32;
de.auster_gmbh.semanticelement.const.GENERIC_METAINFOMATION = 0x33;
de.auster_gmbh.semanticelement.const.GENERIC_DATATYPE = 0x34;
de.auster_gmbh.semanticelement.const.GENERIC_VISUALISATION_TREE = 0x35;
de.auster_gmbh.semanticelement.const.GENERIC_VISUALISATION_ATTRIB = 0x36;
de.auster_gmbh.semanticelement.const.GENERIC_CONTROL_SYSTEM = 0x37;
de.auster_gmbh.semanticelement.const.GENERIC_PROZESS_FLOW = 0x38;
//de.auster_gmbh.semanticelement.ns['http://www.w3.org/1999/02/22-rdf-syntax-ns'] = de.auster_gmbh.semanticelement.ns.SEMANTIC;
//de.auster_gmbh.semanticelement.ns['http://www.w3.org/2000/01/rdf-schema'] = de.auster_gmbh.semanticelement.ns.SEMANTIC;
//de.auster_gmbh.semanticelement.ns['http://www.w3.org/2002/07/owl'] = de.auster_gmbh.semanticelement.ns.SEMANTIC;
//de.auster_gmbh.semanticelement.ns['http://www.w3.org/2006/12/owl11'] = de.auster_gmbh.semanticelement.ns.SEMANTIC;
//de.auster_gmbh.semanticelement.ns['http://www.w3.org/2006/12/owl11-xml'] = de.auster_gmbh.semanticelement.ns.SEMANTIC;
de.auster_gmbh.semanticelement.ontology = new Array();
de.auster_gmbh.semanticelement.elementIndex = new Array();
de.auster_gmbh.semanticelement.themeOverview = new Array();
de.auster_gmbh.semanticelement.history = new Array('begin');
de.auster_gmbh.semanticelement.global = new Array();
de.auster_gmbh.semanticelement.global.trigger = false;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'] =  function()
 	{
 	var list_of_listeners = [];
 	var list_of_events = [];
 	this.name='http://www.w3.org/2000/01/rdf-schema#Resource';
 	this.func=null; 		//has behavior
 	this.clazz=null;		//is classrepesentation 
 	this.toString = function(){return this.name;}
 	this.getName = function(){return this.name;}
//TODO create missing functions
 	this.replaceWith = function(other_node){}
 	this.deleteThis = function(){}
 	
 	this.addEvent = function(event_name){ list_of_events[event_name] = [];}
 	this.removeEvent = function(event_name){ delete list_of_events[event_name];}
 	/*
 	*	{ 8 Bit generel event }{8 Bit detail }
 	*	bag: 1, Property: 2, Init: 3
 	*	aproved
 	*/
 	this.addRule = function(event_name, rule)
 	{ 
 		
 		var rule_number = 0;
 		if(rule.search(/bag/i))rule_number = 0x02 << 24;
 		if(rule.search(/property/i))rule_number = 0x04 << 24;
		if(rule.search(/node/i))rule_number = 0x01 << 24;
 		
 		if(rule.search(/init/i))rule_number = rule_number | 0x01 << 16;
 		if(rule.search(/insert/i))rule_number = rule_number | 0x02 << 16;
 		if(rule.search(/removed/i))rule_number = rule_number | 0x04 << 16;
 		if(rule.search(/checked/i))rule_number = rule_number | 0x08 << 16;
 		
 		//console.debug("boooh");
//console.debug(0x0F << 24);
//console.debug(rule_number  );
 		//console.debug(rule_number & 0x0F << 24  ); //& 0x0F << 24
 		//list_of_events[event_name]
 	}
 	this.addRule("test","bag insert");
 	this.addListener = function(listener){list_of_listeners.push(listener);}
 	this.removeListener = function(listener)
 		{
 			list_of_listeners = list_of_listeners.filter( el => el !== listener );
 		}
 		
 	/**
 	* call function for every listener in the list_of_lsiteners
 	* with all additional arguments
 	* @param call_event : calls a function 
 	*/
 	this.fireToListeners = function(call_event)
 	{ 
 		//console.log(call_event + " aufruf");
 		var args = Array.from(arguments);
 		var event = args.shift();
 		args.unshift(this);
 		//console.debug(args);
 		if(list_of_listeners)
 			list_of_listeners.forEach(function(item){if(call_event in item)item[event](...args);});
 			
 	}
 	
 	/**
 	*	@param node : xml node (from a parentnode)
 	*/
 	
 	this.nurtureTree = function(node, document)
 	{
 		
 		let init_about = function(array_of_node_elements)
 		{
 			
 		}
 		console.debug(node,document);
 		
 		//This part creates all definitions first
 		
 		try { // func_lib.js  simpel xpath
 			xpathRequest(document, "//@*[local-name() = 'about']", document).forEach((element) => 
 				{
 					if(element.nodeValue.includes("#"))
 					{ 
 					de.auster_gmbh.semanticelement.tools.analyseNode(element).about(
 					de.auster_gmbh.semanticelement.tools.analyseNode(element.ownerElement)
 					,element.nodeValue);
 					}
 				});
        } catch (err) {
        	console.warn('[semantic] xpathRequest error:', err.message || err);
        }

 		
 				//
 				
 				//de.auster_gmbh.semanticelement.tools.analyseNode
 		
 		//de.auster_gmbh.semanticelement.tools.analyseNode
 		
 		var first_element = this;
		var child = node.childNodes;
 		var resultlist = [];
 		let obj;
 		for (var i=0;i< child.length;i++)
 		{
 			obj = new de.auster_gmbh.library.tools.xmlToTriple(child[i]);
 			if(obj.valid)resultlist.push( obj );


 		}
 		
 		 		//console.error(resultlist);

 		resultlist.forEach(function (item) { de.auster_gmbh.library.tools.triplesToGrid(item, first_element); });


 		
 		//$(node).xpath("//*[@about]");
 		// set all definitions
 		//
 	}
 	
 	this.isSubObjectOf = function(uri)
 	{
 		var help = 0;
		var element = this;
 		while(element.superObj != undefined && help < 200)
 		{			
 			if(element.name == uri)return true;
 			help++;
 			element = element.superObj;
 		}
 		return false;
 	}
 	
	 this.isSubClassOf = function(uri)
	 {
	 	var SUBCLASSOF = 'http://www.w3.org/2000/01/rdf-schema#subClassOf';
	 	var visited = new Set();
	 	var queue = [];

	 	var start = this;
	 	if (start.clazz && start.clazz.representation != undefined)
	 		start = start.clazz.representation;
	 	queue.push(start);

	 	while (queue.length > 0) {
	 		var element = queue.shift();
	 		if (!element || visited.has(element)) continue;
	 		visited.add(element);

	 		if (element.name == uri) return true;

	 		if (element.output && element.output[SUBCLASSOF] &&
	 			element.output[SUBCLASSOF].length > 0)
	 		{
	 			for (var i = 0; i < element.output[SUBCLASSOF].length; i++) {
	 				var succ = element.output[SUBCLASSOF][i].successor;
	 				if (succ && !visited.has(succ)) queue.push(succ);
	 			}
	 		}

	 		if (element.superObj && !visited.has(element.superObj))
	 			queue.push(element.superObj);
	 	}
	 	return false;
	 }
 	
 	this.output = new Array();	//restrictions and property array
 	this.input = new Array();	//restrictionobjects
 	this.innerID = 0;		//id
 	this.bag = new Array();		//bag of the instance
 	this.container = new Array();	//backref to the containerowner
 	this.index_in = new Array();
 	this.index_out = new Array();
 	this.type = de.auster_gmbh.semanticelement.const.SEMANTIC;
 	this.handling = de.auster_gmbh.semanticelement.NODE;
 	this.superObj = undefined;	//inherit_Obj
 	//this.inherited = new Array();
 	this.givesSymbol = function()	//symbolmethod
 	{
 				//console.error(this);
 		var result = null;
 		var scan = function(myelement)
 		{
 			var result = new Array();
 			
 			
 			
 			if(myelement != undefined)
 			{
 				if((nextel = myelement.getBagElementbyName('http://www.auster-gmbh.de/2010/08/anttree-lib#isDisplayed2DImage')) != null)
 				{
 					
 				  if((result[1] = nextel.getBagElementbyName('http://www.w3.org/2000/svg#image')) != null)
 				  {
					result[0] = true;
					
				 	return result;
				  }
				}
				  
				  if(nextel = myelement.output['http://www.auster-gmbh.de/2010/08/anttree-lib#isDisplayed2DImage'] )
				  {
				  	  
				  	  if(nextel[0] && nextel[0]['successor'])
				  	  {

				  	  	  result[1] = nextel[0]['successor'];
				  	  	  result[0] = true;
				  	  	  return result;
				  	  }
				  }
			}
			result[0] = false;
			return result;
 		}
 		

			result = scan(this);
 			if(result[0]){
 				
 			return result[1];}

		var element = this;
		var help = 0;
// !!! Was tut es !!!
		if(element.clazz.representation != undefined)
		{
			element = element.clazz.representation;
		}


 		while(element.superObj != undefined && help < 30)
 		{
 		
			result = scan(element);
 			if(result[0])
 			return result[1];
 			
 			element = element.superObj;
 			help++;
 		}
 		
 	return undefined;
 		
 	}
 	
 	this.behaviour = function(code_string)
 	{

 		this.script_prototype = new Function('return ' + code_string)();
 		this.script = new this.script_prototype(de.auster_gmbh.semanticelement.SOM(this));


 	}
 	
  	this.add= function(obj)
 	{
 		
 		if(this.bag instanceof Array)
 		{
 		
 			this.bag[this.bag.length] = obj;
	
 		}
 		else
 		{
 			this.bag = new Array();
 			this.bag[0] = obj;

 		}

 			obj.container[obj.container.length] = this;


 	};
 	
 	this.bag_many= function()
 	{
 		return this.bag.length;
 	};
 	
 	this.getBagElement = function(pos)
 	{
 	
 		if(this.bag.length >= pos)
 		{
 		return this.bag[pos];
 		}
 		else
 		{
 		return false;
 		}
 	};
 	
 	this.getBagElementbyName = function(name)
 	{
 	
 		for(pos = 0;pos < this.bag.length;pos++)
 		{
	 		if(this.bag[pos].getName() == name)
	 		{
	 		return this.bag[pos];
	 		}
 		}
 		return null;
 	};
 	
 	this.container_many = function()
 	{
 		return this.container.length;
 	}
 	
 	this.getContainerOwner = function(pos)
 	{
 	
 		if(this.container.length >= pos)
 		{
 		return this.container[pos];
 		}
 		else
 		{
 		return false;
 		}
 	};
 	
 	this.add_index = function( graphname , graph, type)
 	{
 		if(type == 1)
 		{
 		
 			if(this.output[graphname] == undefined )
 			{
 			this.output[graphname] = new Array();
 			}
 		
 			this.output[graphname][this.output[ graphname].length] = graph;

 			if(!de.auster_gmbh.semanticelement.tools.in_array( this.index_out , this.getName()))
 			
 			if(this.index_out[graphname] == undefined )
 			{
 			this.index_out[ graphname ] = 1;
 			}
 			else
 			{
 			this.index_out[ graphname ] += 1;
 			} 
 		
 		}
 		else
 		{
 		
 			if(this.input[graphname] == undefined )
 			{
 			this.input[graphname] = new Array();
 			}
 		
 			this.input[graphname][this.input[ graphname].length] = graph;

 			if(!de.auster_gmbh.semanticelement.tools.in_array( this.index_in , this.getName()))
 			//this.index_in[ this.index_in.length ] = graphname; 
 			if(this.index_in[graphname] == undefined )
 			{
 			this.index_in[ graphname ] = 1;
 			}
 			else
 			{
 			this.index_in[ graphname ] += 1;
 			} 
 		}
 	};
 	
 	this.get_index = function(type)
 	{
 		if(type == 1)
 		return this.index_out;
 		else
 		return this.index_in;
 	};
 	
 	this.test_get_index = function(type)
 	{
 		if(type == 1)
 		return this.index_out;
 		else
 		return this.index_in;
 	};
 	
 	/* Events */
 	this.script = null;
 	this.script_prototype = null;
 	this.getNewPropertyEvent = null;
 	this.getNewBagEntryEvent = null;
 	this.preAccessEvent = null;
 	this.pastAccessEvent = null;
 	this.onClick = null;
 	this.ondblClick = null;
 	this.onActivate = null;
 	this.onDeactivate = null;
 	
 	};

de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Class'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Class'].prototype = 
new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Class'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Class'].baseConstructor = 
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Class'].superClass = 
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'].prototype;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Class'].prototype.name='http://www.w3.org/2000/01/rdf-schema#Class';
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Class'].prototype.type = de.auster_gmbh.semanticelement.const.SEMANTIC;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Class'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
	
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#List'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#List'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#List'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#List'].prototype.name='http://www.w3.org/1999/02/22-rdf-syntax-ns#List';
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#List'].prototype.type = de.auster_gmbh.semanticelement.const.SEMANTIC;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#List'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];

de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement'].prototype.name='http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement';
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement'].prototype.type = de.auster_gmbh.semanticelement.const.SEMANTIC;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];


de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Description'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Description'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Description'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Description'].prototype.name='http://www.w3.org/1999/02/22-rdf-syntax-ns#Description';
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Description'].prototype.type = de.auster_gmbh.semanticelement.const.SEMANTIC;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Description'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];

//-------------------------------------------------------about----------------------------------------------------------------------------
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'].prototype.name='http://www.w3.org/1999/02/22-rdf-syntax-ns#about';
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'].prototype.handling = de.auster_gmbh.semanticelement.DEFINITION;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'].prototype.type = de.auster_gmbh.semanticelement.const.SEMANTIC_ATTRIB;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'].prototype.me = null;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'].prototype.clazz = null; 	
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'].prototype.about = function(antecessor,successor)
{

  	if(successor == Object)return false;
  	
  	antecessor.output['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'] = new Array();
  	
  	this.antecessor = antecessor;
 	antecessor.output['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'][0] = this;

  	/* except behavior in cause of an ontology-definition */
  	if(this.antecessor.name == 'http://www.w3.org/2002/07/owl#Ontology')
  	{
  	
  		
  	de.auster_gmbh.semanticelement.ns[successor] = this.antecessor;//de.auster_gmbh.semanticelement.ns.SEMANTIC;
  	}
  	else
  	{
  		try
  		{
  			//TODO something was given back, but has no use.
  		this.me.addNewClazz(antecessor,successor);
  		}
 	 	catch (e) 
 	 	{
		throw e;

	 	}
  	}
  	 	
 	
 	
 	
  	this.clazz = this.me.getClazz(successor);
  	
  	this.successor = new String(successor);
 
 			
  }
  de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'].prototype.connect = 
  de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'].prototype.about;
  de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
//---------------------------------------------------------------------------------------------------------------------------------------

   var helpvar = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];

   var uris = ['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'];
   
  for( var prop in helpvar ) 
  {
    	  
  	 uris.forEach(
  	 	 function(item){
  	  if(!(prop in de.auster_gmbh.semanticelement[item]))
  	  	  de.auster_gmbh.semanticelement[item].prototype[prop] = helpvar[prop];
  	  });

  }


	
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'] = function(string){var str = string; this.toString = function(){return str;}};

de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.name='http://www.w3.org/2000/01/rdf-schema#Literal';

de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.func=null;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.clazz=null;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.type = de.auster_gmbh.semanticelement.const.TREE;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.handling = de.auster_gmbh.semanticelement.VALUE;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.superObj = undefined;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.getName = function(){return this.name;}
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.output = new Array();
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.input = new Array();
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.bag = new Array();
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.container = new Array();


de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.innerID = 0;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.index_in = new Array();
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.index_out = new Array();
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.add_index = function( graphname , graph, type)
 	{
 		
 	/*
 	* TODO check need for index_in and index_out
 	*/
 		
 		if(type == 1)
 		{
 		
 			if(this.output[graphname] == undefined )
 			{
 			this.output[graphname] = new Array();
 			}
 		
 			this.output[graphname][this.output[ graphname].length] = graph;

 			if(!de.auster_gmbh.semanticelement.tools.in_array( this.index_out , this.getName()))
 			this.index_out[ this.index_out.length ] = graphname; 
 		
 		}
 		else
 		{
 		
 			if(this.input[graphname] == undefined )
 			{
 			this.input[graphname] = new Array();
 			}
 		
 			this.input[graphname][this.input[ graphname].length] = graph;

 			if(!de.auster_gmbh.semanticelement.tools.in_array( this.index_in , this.getName()))
 			this.index_in[ this.index_in.length ] = graphname; 
 		}
 	};
 	
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.get_index = function(type)
 	{
 		if(type == 1)
 		return this.index_out;
 		else
 		return this.index_in;
 	};
 	
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.bag_many= function()
 	{
 		return this.bag.length;
 	};
 	
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.getBagElement = function(pos)
 	{
 	
 		if(this.bag.length >= pos)
 		{
 		return this.bag[pos];
 		}
 		else
 		{
 		return false;
 		}
 	};
 	
 	/*
 	* TODO in Literal muss isSubClassOf gescheit eingefuegt werden
 	*/
 	
	de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.isSubClassOf = function(uri)
	 {
	 	var SUBCLASSOF = 'http://www.w3.org/2000/01/rdf-schema#subClassOf';
	 	var visited = new Set();
	 	var queue = [];

	 	var start = this;
	 	if (start.clazz && start.clazz.representation != undefined)
	 		start = start.clazz.representation;
	 	queue.push(start);

	 	while (queue.length > 0) {
	 		var element = queue.shift();
	 		if (!element || visited.has(element)) continue;
	 		visited.add(element);

	 		if (element.name == uri) return true;

	 		if (element.output && element.output[SUBCLASSOF] &&
	 			element.output[SUBCLASSOF].length > 0)
	 		{
	 			for (var i = 0; i < element.output[SUBCLASSOF].length; i++) {
	 				var succ = element.output[SUBCLASSOF][i].successor;
	 				if (succ && !visited.has(succ)) queue.push(succ);
	 			}
	 		}

	 		if (element.superObj && !visited.has(element.superObj))
	 			queue.push(element.superObj);
	 	}
	 	return false;
	 };
 	
 de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.clazz=null;
  de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
	
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Container'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Container'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Container'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Container'].prototype.name='http://www.w3.org/2000/01/rdf-schema#Container';
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Container'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
 

de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Container'].prototype.onActivate = function( type , message )
  		{
  		console.error("script/onActivate in Container");
  		};

de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Container']();
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag'].prototype.name = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag';
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Container'];

de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Container']();
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt'].prototype.name = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt';
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Container'];

de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Container']();
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq'].prototype.name = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq';
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Container'];
  	
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'].prototype.name='http://www.w3.org/1999/02/22-rdf-syntax-ns#Property';
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'].prototype.handling=de.auster_gmbh.semanticelement.GRAPH;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'].prototype.type = de.auster_gmbh.semanticelement.const.SEMANTIC_ATTRIB; //.SEMANTIC

/**
* de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'].connect
* @param antecessor : rdf:Resource element
* @param successor : rdf:Resource element
* @throws ViolatesPropertyRestrictionException
*
* creates an edge between these two elements
* consists of two parts:
* 1) checks rdfs:domain and rdfs:range constrains for this property 
* 
* 2) establishes this property as an edge between these two elements
*/
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'].prototype.connect= function(antecessor,successor)
 	{
 		var element = this;
 		var valid = false;
 		var hasDefinition = false;
 		var help = 0;
 		var domain;
 		var range;
 		
 	 	while(help < 30)
 		{			
/*
* TODO maybe remove help
*/
 			
 			
 			help++;
 			
 
  			if((element.output['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'] != undefined) &&
  				(element.output['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'].length > 0))
  			{
 					element = element.output['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'][0].successor;
  			}
  			else if(element.superObj != undefined)
  				element = element.superObj;
  			else
  				break;


  			if(
  			(domain = element.output['http://www.w3.org/2000/01/rdf-schema#domain']) &&
  			(range = element.output['http://www.w3.org/2000/01/rdf-schema#range']))
  			{
  				hasDefinition = true;
  				
  				for (const domElement of domain) valid ||= antecessor.isSubClassOf(domElement.successor.getName());
  				
  				if(valid)
  					for (const ranElement of range) valid ||= successor.isSubClassOf(ranElement.successor.getName());

  			}
  			
  			// escape conditions
  			if(valid)break;
  			if(element.getName() == 'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property')break;
  			if(element.getName() == 'http://www.w3.org/2000/01/rdf-schema#Resource')break;
 		}
 		
 	/* Throws exception for property validation */
 	if(!valid && hasDefinition) throw new de.auster_gmbh.library.error.ViolatesPropertyRestrictionException(this.getName() + "does not match for " + antecessor.getName() + " or " + successor.getName());

 	/*
 	* TODO fix all definitions to implement this
 	*if(!hasDefinition)console.warn("Not recommended:" + this.getName() + " has no restrictions"); // warn for missing definition
 	*/
	
 	/* connects antecessor */
 	this.antecessor = antecessor;

 	
 	if(this.antecessor['add_index'] == undefined)
 	console.error('Antecessor:' + this.antecessor + ' needs add_index Successor is ' + this.successor);
 	
 	this.antecessor.add_index(this.getName(),this,1);

 	/* connects successor */
 	this.successor = successor;
 	
 	if(this.successor['add_index'] == undefined)
 	console.error("Successor:" + this.successor + ' needs add_index Antecessor is ' + this.successor);
 	
 	this.successor.add_index(this.getName(),this,2);

 	 };
 	 
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
 	
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#resource'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#resource'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property']();
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#resource'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#resource'].prototype.name = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#resource';
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#resource'].prototype.type = de.auster_gmbh.semanticelement.const.SEMANTIC;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#resource'].prototype.handling = de.auster_gmbh.semanticelement.REF;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#resource'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'];
//--------------------------------------------------------------
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#resource'].prototype.getOwnedInstanceEvent = function(name, obj){}

de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#resource'].prototype.getNewBagEntryEvent = function(name, obj)
{
	this.connection = obj.getRequester().toString();
};

de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#resource'].prototype.getNewPropertyEvent = function(name, obj)
{
	//console.error("1043 in semantic_el.. mit " + this.connection );
	if(this.connection)
		if(!this.createLink())de.auster_gmbh.library.access.ajaxConnection.getObserver(this) ; //TODO change name
};


de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#resource'].prototype.fireEvent = function(name,obj)
{
	if(this.createLink()) de.auster_gmbh.library.access.ajaxConnection.removeObserver(this) ;
}

de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#resource'].prototype.createLink = function()
{
	
	
	var pos = this.connection.search(/#/);
	if( pos == -1 || pos == this.connection.length - 1 ) 
		if(de.auster_gmbh.semanticelement.semantic_web.isNameSpace( this.connection ))
		{
			
			var ownref = de.auster_gmbh.semanticelement.ns[this.connection];
			var tmp = null;
			var last = 0;
			
			//console.error(this.connection);
			//console.error(ownref.name );
			for( tmp in this.input)
				for(var i = 0; i < this.input[tmp].length;i++)
				{
					this.input[tmp][i].successor = ownref;
					
					ownref.add_index(tmp,this.input[tmp][i],2);
					
					if(this.input[tmp][i].antecessor.create)
						this.input[tmp][i].antecessor.create();
					
				}
				
			return true;
		}
		else
		{
			
			de.auster_gmbh.library.access.ajaxConnection.insertContent(this.connection);
			return false;
		}
		else
			console.error(this.connection.search(/#/) + " found # in '" + this.connection + "'");
}


de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#comment'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#comment'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property']();
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#comment'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#comment'].prototype.name = 'http://www.w3.org/2000/01/rdf-schema#comment';
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#comment'].prototype.type = de.auster_gmbh.semanticelement.const.SEMANTIC_ATTRIB;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#comment'].prototype.handling = de.auster_gmbh.semanticelement.TAG;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#comment'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'];	
 
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#label'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#label'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property']();
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#label'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#label'].prototype.name = 'http://www.w3.org/2000/01/rdf-schema#label';
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#label'].prototype.type = de.auster_gmbh.semanticelement.const.SEMANTIC_ATTRIB;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#label'].prototype.handling = de.auster_gmbh.semanticelement.TAG;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#label'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'];

de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property']();
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'].prototype.name = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type';
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'].prototype.type = de.auster_gmbh.semanticelement.const.SEMANTIC_ATTRIB;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'].prototype.handling = de.auster_gmbh.semanticelement.GRAPH;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'];
	
	
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#seeAlso'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#seeAlso'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property']();
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#seeAlso'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#seeAlso'].prototype.name = 'http://www.w3.org/2000/01/rdf-schema#seeAlso';
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#seeAlso'].prototype.type = de.auster_gmbh.semanticelement.const.SEMANTIC_ATTRIB;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#seeAlso'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'];
 	
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#isDefinedBy'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#isDefinedBy'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#seeAlso']();
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#isDefinedBy'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#isDefinedBy'].prototype.name = 'http://www.w3.org/2000/01/rdf-schema#isDefinedBy';
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#isDefinedBy'].prototype.type = de.auster_gmbh.semanticelement.const.SEMANTIC_ATTRIB;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#isDefinedBy'].prototype.handling = de.auster_gmbh.semanticelement.GRAPH;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#isDefinedBy'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'];

de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#member'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#member'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property']();
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#member'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#member'].prototype.name = 'http://www.w3.org/2000/01/rdf-schema#member';
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#member'].prototype.type = de.auster_gmbh.semanticelement.const.SEMANTIC_ATTRIB;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#member'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'];

de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#value'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#value'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property']();
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#value'].prototype.constructor = 
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#value'];
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#value'].baseConstructor = de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'];
   de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#value'].superClass = de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'].prototype;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#value'].prototype.name = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#value';
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#value'].prototype.type = de.auster_gmbh.semanticelement.const.SEMANTIC_ATTRIB;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#value'].prototype.handling = de.auster_gmbh.semanticelement.TAG;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#value'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'];

 	
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#first'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#first'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property']();
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#first'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#first'].prototype.name = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#first';
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#first'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'];
 	
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#rest'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#rest'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property']();
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#rest'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#rest'].prototype.name = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#rest';
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#rest'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'];

de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#subject'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#subject'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property']();
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#subject'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#subject'].prototype.name = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#subject';
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#subject'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'];
 	
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property']();
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate'].prototype.name = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate';
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'];

de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#object'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#object'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property']();
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#object'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#object'].prototype.name = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#object';
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#object'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'];

de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#subClassOf'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#subClassOf'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property']();
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#subClassOf'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#subClassOf'].prototype.name = 'http://www.w3.org/2000/01/rdf-schema#subClassOf';
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#subClassOf'].prototype.type = de.auster_gmbh.semanticelement.const.SEMANTIC_ATTRIB;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#subClassOf'].prototype.handling = de.auster_gmbh.semanticelement.GRAPH;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#subClassOf'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'];

de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property']();
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'].prototype.name = 'http://www.w3.org/2000/01/rdf-schema#subPropertyOf';
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'].prototype.type = de.auster_gmbh.semanticelement.const.SEMANTIC_ATTRIB;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'].prototype.handling = de.auster_gmbh.semanticelement.GRAPH;
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'];



de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#Ontology'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#Ontology'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource']();
de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#Ontology'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#Ontology'].prototype.name = 'http://www.w3.org/2002/07/owl#Ontology';
de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#Ontology'].prototype.type = de.auster_gmbh.semanticelement.const.SEMANTIC;
de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#Ontology'].prototype.xmldoc = null;
de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#Ontology'].prototype.import_many = 0;
de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#Ontology'].prototype.setDoc = function(doc,import_many)
	{
	this.xmldoc = doc;
	this.import_many = import_many;
	};
	
de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#Ontology'].prototype.create = function()
{
	this.import_many--;
	if(this.import_many == 0)
	{
		
		var node = this.xmldoc.childNodes[0];
		var x = node.childNodes;
		//Wrapper over ducktyping
		var obj = {
			attributes:
			{
				length: 0
			},
			childNodes: new Array()
		
		};
		
		
		
		for(var i = 0;i < x.length;i++)
			if("http://www.w3.org/2002/07/owl#Ontology" != (x[i].namespaceURI + '#' +  x[i].localName))
			//this.nurtureTree(x[i],i);
			obj.childNodes.push(x[i]);
		
		this.nurtureTree(obj, this.xmldoc);
		

		
	}
}
	
de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#Ontology'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];

de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#imports'] = function(){};
de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#imports'].prototype = new de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property']();
de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#imports'].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#imports'].prototype.name = 'http://www.w3.org/2002/07/owl#imports';
de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#imports'].prototype.type = de.auster_gmbh.semanticelement.const.SEMANTIC;
de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#imports'].prototype.baseClazz = 
de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'];


de.auster_gmbh.library.tools.addRelevantMethods(
	[]
	);

de.auster_gmbh.semanticelement.semantic_web = {};
de.auster_gmbh.semanticelement.semantic_web.clazz = function()
 	{
	
	var value = 0;
	var graph = 1;
 	var stdInnerID = 1;
 	
 	
 	 	//core of definition
	this.root = new de.auster_gmbh.semanticelement['http://www.w3.org/2002/07/owl#Ontology']();
	
	var curelement = this.root;
	var curelement2 = this.root;




/*-----------------------------------------------------
* addNewClazz(parentClazzname,newClazzname) :
* ------------------------------------------------------
*/ 
 	this.addNewClazz = function(parentClazzObj,newClazzname)
 	{
 	
 	/*  */
 	
 	/* checks type*/
 	/*

 	
 	  	// needs to verify the existence
 	*/
 	
 	var test = parentClazzObj;
 	var mode = 0; //0:empty arrayindex, 1:not free, but not generic
 	/*
 	If a classname still exists, it was defined previously by hand or is a misstake.
 	To differ both, type will increased, when altered
 	TODO check correctness, for type meaning and fullbag generated definitions
 	*/
 	if( de.auster_gmbh.semanticelement[newClazzname] != undefined )
	{
		//console.log(newClazzname + "(" + test.type + ")");


		if( test.type < 0x30 )
		{
			mode = 1;
			test.type += 0x30;
			test.clazz = de.auster_gmbh.semanticelement[newClazzname];
			de.auster_gmbh.semanticelement[newClazzname].representation = test;
			
			if(parentClazzObj.getName() !='http://www.w3.org/2000/01/rdf-schema#Resource')
			{
				if(!parentClazzObj.baseClazz)console.error("There is no base class for this Objekct", parentClazzObj);
			de.auster_gmbh.semanticelement[newClazzname].prototype.superObj = parentClazzObj.baseClazz.representation;
			}
			return de.auster_gmbh.semanticelement[newClazzname];
			
			
		}
		else
		{
			
			throw new de.auster_gmbh.library.error.DefinitionAllreadyExistsException(newClazzname, test.type);
		}
	}

	

  	de.auster_gmbh.semanticelement[newClazzname] = function(){};//console.error('ich lebe');
   	de.auster_gmbh.semanticelement[newClazzname].prototype = test;
   	de.auster_gmbh.semanticelement[newClazzname].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
 	de.auster_gmbh.semanticelement[newClazzname].prototype.name = newClazzname;
 	de.auster_gmbh.semanticelement[newClazzname].prototype.superObj = parentClazzObj.clazz.representation;
 	de.auster_gmbh.semanticelement[newClazzname].prototype.output = new Array();
 	de.auster_gmbh.semanticelement[newClazzname].prototype.input = new Array();
 	de.auster_gmbh.semanticelement[newClazzname].representation = test;
 	de.auster_gmbh.semanticelement[newClazzname].inherited = new Array();
 	test.clazz = de.auster_gmbh.semanticelement[newClazzname]; 	
 	return de.auster_gmbh.semanticelement[newClazzname];
 	}

/*-----------------------------------------------------
* clazztype(Clazzname) :
* ------------------------------------------------------
*/ 
 	this.clazztype = function(Clazzname)
 	{
 	 if( de.auster_gmbh.semanticelement[Clazzname] != undefined )
	 {
	 	if( de.auster_gmbh.semanticelement[Clazzname].prototype.type != undefined )
	 	return de.auster_gmbh.semanticelement[Clazzname].prototype.type;
	 	else
	 	return Clazzname;
	 }
	 return 0;
 	}
 	
/*-----------------------------------------------------
* setClazztype(Clazzname) :
* ------------------------------------------------------
*/ 
 	this.setClazztype = function(Clazzname,type)
 	{
 	 if( de.auster_gmbh.semanticelement[Clazzname] != undefined )
	 {
	 	if( de.auster_gmbh.semanticelement[Clazzname].prototype != undefined )
	 	{
	 	de.auster_gmbh.semanticelement[Clazzname].prototype.type = type;
	 	return true;
	 	}
	 	else
	 	return false;
	 }
	 return false;
 	}
 	
/*-----------------------------------------------------
* clazzhandling(Clazzname) :
* ------------------------------------------------------
*/ 
 	this.clazzhandling = function(Clazzname)
 	{
 		console.warn(de.auster_gmbh.semanticelement[Clazzname]);
 	 if( de.auster_gmbh.semanticelement[Clazzname] != undefined )
	 {
	 	if( de.auster_gmbh.semanticelement[Clazzname].handling != undefined )
	 	return de.auster_gmbh.semanticelement[Clazzname].handling;
	 	else
	 	throw new Error('There is no proper handle to ' + Clazzname + "!");
	 }
	 return 0;
 	}


	/* isNamespace */
	this.isNameSpace = function( prefix)
	{
	  return (de.auster_gmbh.semanticelement.ns[prefix] !== undefined);
	}
	
	/* getNamespaceObj */
	this.getNameSpaceObj = function( prefix, pointerNum)
	{
		if(de.auster_gmbh.semanticelement.ns[prefix] == undefined)
		{
			return false;
		}
		else
		{

		
		if(pointerNum != undefined)
		if(pointerNum == 1)
 		curelement = de.auster_gmbh.semanticelement.ns[prefix];
 		else
 		curelement2 = de.auster_gmbh.semanticelement.ns[prefix];
		
		return de.auster_gmbh.semanticelement.ns[prefix];
		}
	}
/*-----------------------------------------------------
* getClazz(clazzName) : 
* ------------------------------------------------------
*/ 
	//ok
 	this.getClazz = function(clazzName)
 	{
 		return de.auster_gmbh.semanticelement[clazzName];
 	}
 	
 	var objIndex = new Array();
 	var objid = new Array(); 
 	
 /*------------------------------------------------------
 * addObjectToClass(name,obj)
 * ------------------------------------------------------
 */
 
 	this.addObjectToAccessable = function(name,obj,type,baseclass, ont)
 	{

		var basic = de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'].representation;
		for (var funct in basic)
		{
			if(obj[funct] == undefined)
			obj[funct] = basic[funct];
			
			de.auster_gmbh.semanticelement[name] = obj;
			obj.type = type;
			obj.name = name;
			
			
		
		}
		


 		de.auster_gmbh.semanticelement[name] = function(){};
		de.auster_gmbh.semanticelement[name].prototype = obj;
		de.auster_gmbh.semanticelement[name].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
		de.auster_gmbh.semanticelement[name].prototype.name = name;
		de.auster_gmbh.semanticelement[name].prototype.type = type;
		de.auster_gmbh.semanticelement[name].prototype.baseClazz = de.auster_gmbh.semanticelement[baseclass];
		de.auster_gmbh.semanticelement[name].prototype.superObj = de.auster_gmbh.semanticelement[baseclass].representation;
		de.auster_gmbh.semanticelement[name].representation = obj;
		de.auster_gmbh.semanticelement[name].inherited = new Array();
		
		obj.output = new Array();
 		obj.input = new Array();
 		obj.index_in = new Array();
 		obj.index_out = new Array();
 		obj.bag = new Array();
 		obj.container = new Array();
 		obj.clazz =  de.auster_gmbh.semanticelement[name];
 		obj.innerID = stdInnerID++;
 		de.auster_gmbh.semanticelement[name].inherited.push(obj);
 		objid[obj.innerID] = obj;
 		
 		if(obj.script_prototype != null)
 		{
 			obj.script = new obj.script_prototype(
 			de.auster_gmbh.semanticelement.SOM(obj));
 		}
 		
 		if(objIndex[name] == undefined )
 		{
 			objIndex[name] = new Array();
 			objIndex[name][0] = obj;
 			  
 		}
 		else
 		{
 			
 			objIndex[name][objIndex[name].length] = obj;
 		}
 		
 	
	de.auster_gmbh.semanticelement.ns[ont].add(obj);
	
	return obj;

 	}
 	
 	
 /*------------------------------------------------------
 * getObjecttoClazz(clazzName)
 * ------------------------------------------------------
 * create a new object, which is an other representation
 * of its type
 *
 * @param className : uri of a specific type of object
 */
 	
 	this.getObjecttoClazz = function(clazzName)
 	{	

 		// gives out missing Object
 		// TODO throw could be usefull
 		if(de.auster_gmbh.semanticelement[clazzName] == undefined )
 		{
 			throw new Error(clazzName + " has no blueprint");
 			console.error(clazzName + " has no blueprint");
 		return false;
 		}
 		
 		// creates a new element out of the identifed class
 		var newElement = new de.auster_gmbh.semanticelement[clazzName]();

 		// if there is no handling, it will inform TODO Exception
 		if(newElement.handling == undefined)console.error("no handling for " + clazzName );
 		
 		// it creates the array inherited, if missing
 		if( de.auster_gmbh.semanticelement[clazzName].inherited == undefined)
 		  de.auster_gmbh.semanticelement[clazzName].inherited = new Array();
 		  
 	    // the class knows all his objects
 	    de.auster_gmbh.semanticelement[clazzName].inherited.push(newElement);
 	    
 	    // add new arrays to the Object
 		newElement.output = new Array();
 		newElement.input = new Array();
 		newElement.index_in = new Array();
 		newElement.index_out = new Array();
 		newElement.bag = new Array();
 		newElement.container = new Array();
 		
 		newElement.clazz =  de.auster_gmbh.semanticelement[clazzName];
 		newElement.superObj =  de.auster_gmbh.semanticelement[clazzName].representation;
 		
 		newElement.innerID = stdInnerID++;
 		objid[newElement.innerID] = newElement;
 		

 		if(newElement.script_prototype != null)
 		{
 			newElement.script = new newElement.script_prototype(
 			de.auster_gmbh.semanticelement.SOM(newElement));
 		}
 		
 		// Makes an entry into an index
 		
 		if(objIndex[clazzName] == undefined )
 		{
 			objIndex[clazzName] = new Array();
 			objIndex[clazzName][0] = newElement;
 			  
 		}
 		else
 		{
 			
 			objIndex[clazzName][objIndex[clazzName].length] = newElement;
 		}
 		
 		var help = 0;
 		var element = newElement;
 		//if(element.innerID == 3597){console.debug(element);if(element.isSubClassOf('http://www.auster-gmbh.de/2010/08/anttree-lib#Theme'))console.debug("ja")}
 		 	if(!("getName" in element)) throw new Error("getName is missing in " + element.innerID);
 		 	if(!("isSubClassOf" in element)) throw new Error("isSubClassOf is missing in " + element.getName());
 		 	if(typeof element.isSubClassOf === 'function' && element.isSubClassOf('http://www.auster-gmbh.de/2010/08/anttree-lib#Theme'))
 		 		{
 		 			de.auster_gmbh.semanticelement.themeOverview.push(newElement);
 		 		}

 		
 		return newElement;
 	}

/*-----------------------------------------------------
* newObjectFromObject(objName) : 
* ------------------------------------------------------
*/ 
 	this.newObjectFromObject = function(objName)
 	{
 		

 		var newElement = new de.auster_gmbh.semanticelement[clazzName]();

 		newElement.output = new Array();
 		newElement.input = new Array();
 		newElement.index_in = new Array();
 		newElement.index_out = new Array();
 		newElement.bag = new Array();
		newElement.container = new Array();

 		if(newElement.script_prototype != null)
 		{

 		 	newElement.script = new newElement.script_prototype();
 			
 		}
 		
 		newElement.innerID = stdInnerID++;
 		objid[newElement.innerID] = newElement;
 		if(objIndex[clazzName] == undefined )
 		{
 			objIndex[clazzName] = new Array();
 			objIndex[clazzName][0] = newElement;
 			  
 		}
 		else
 		{
 			
 			objIndex[clazzName][objIndex[clazzName].length] = newElement;
 		}
 		
 		
 		return newElement;
 	}
/*-----------------------------------------------------
* propertyMany(pointerNum,graphName,foreward) : 
* ------------------------------------------------------
*/ 
  	this.propertyMany = function(pointerNum,graphName,foreward)
 	{
 		if(pointerNum < 1 || pointerNum > 2)console.error('update \"moveinWeb\" ');
 		
 		var point = null;
 		if(pointerNum == 1) 
 			point = curelement;
 		else 
 			point = curelement2;

 		
 		
 		if(foreward)
 		{
 			if(point.output[graphName] == undefined)return false;
 			if(pointerNum == 1) 
 				return point.output[graphName].length;
 			else 
 				return point.output[graphName].length;
 			
 		}
 		else
 		{
 			if(point.input[graphName] == undefined)return false;
 			if(pointerNum == 1) 
 				return point.input[graphName].length;
 			else 
 				return point.input[graphName].length;
 		 
 		}
 		
 				
		
 	}

/*-----------------------------------------------------
* showCurrentElements()
* -----------------------------------------------------
*/
  	this.showCurrentElements = function()
 	{
 	
 		var data = '             *//' + curelement.getName() + "\\\\*\n";
 			
 		if(this.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,true))
 		{
			data += "                (" + this.curValue(1) + ")\n"; 
			this.moveinWeb(1,'http://www.w3.org/2000/01/rdf-schema#label',0,false);
 		}
 		
 		data += "             -------------------------output-------------------------\n";
 		for (var Eigenschaft in curelement.output)
 			for(var i = 0; i < curelement.output[Eigenschaft].length; i++)
 			{
 			data += Eigenschaft + ' ' + i.toString() + ' ' + curelement.output[Eigenschaft][i].successor + "\n";	
 			}
 		data += "             -------------------------input-------------------------\n";
 		for (var Eigenschaft in curelement.input)
 			for(var i = 0; i < curelement.input[Eigenschaft].length; i++)
 			{
 			data += Eigenschaft + ' ' + i.toString() + ' ' + curelement.input[Eigenschaft][i].antecessor + "\n";	
 			}

 		data += "             -------------------------bag-------------------------\n";

		for(var i = 0; i < curelement.bag.length; i++)
 			{
 			data +=  curelement.bag[i] + "\n";	
 			}
 		
 		
 		
 		data += "             -----------------------------------------------------\n";
 		data += "\n";
 		data += '             ---' + curelement2.getName() + "---\n";
 		
 		if(this.moveinWeb(2,'http://www.w3.org/2000/01/rdf-schema#label',0,true))
 		{
			data += "                (" + this.curValue(2) + ")\n"; 
			this.moveinWeb(2,'http://www.w3.org/2000/01/rdf-schema#label',0,false);
 		}
 		
 		data += "             ------------output------------\n";
 		for (var Eigenschaft in curelement2.output)
 			for(var i = 0; i < curelement2.output[Eigenschaft].length; i++)
 			{
 			data += Eigenschaft + ' ' + i.toString() + ' ' + curelement2.output[Eigenschaft][i].successor + "\n";	
 			}
 		data += "             ------------input------------\n";
 		for (var Eigenschaft in curelement2.input)
 			for(var i = 0; i < curelement2.input[Eigenschaft].length; i++)
 			{
 			data += Eigenschaft + ' ' + i.toString() + ' ' + curelement2.input[Eigenschaft][i].antecessor + "\n";	
 			}
 		data += "             -------------------------bag-------------------------\n";

		for(var i = 0; i < curelement2.bag.length; i++)
 			{
 			data +=  curelement2.bag[i] + "\n";	
 			}
 		
 		
 		
 		data += "             -----------------------------------------------------\n";
 		console.error(data);
 		//console.error(curelement.toString());
		//console.error(curelement2.toString());
		
		//point.output[graphName]
		
 	}
 /*-----------------------------------------------------
* showOverviewofElements()
* -----------------------------------------------------
*/
  	this.showOverviewofElements = function()
 	{
 	
 	var data = new Array();
	var pos = 0;
	var count = 0;
	data[0] = '';
 	for (var Eigenschaft in de.auster_gmbh.semanticelement)
	{
	data[pos] += Eigenschaft + '   ('; 
	
	 
	if( de.auster_gmbh.semanticelement[Eigenschaft].representation != null)
	data[pos] +=  "has representation";
	else
	data[pos] +=  "has no representation";
	 
	data[pos] +=  ")\n"; 
	if(count++ > 30)
		{
			data[++pos] = '';
			count = 0;
		}
	}
	for(count = 0;data.length > count; count++)
	
	console.error(data[count]);
		
 	}

/*-----------------------------------------------------
* getBag(pointerNum) : 
* ------------------------------------------------------
*/ 
	this.getBag = function(pointerNum)
	{
		var el = (pointerNum == 1) ? curelement : curelement2;
		var res = new Array();
		var iter = 0;
 		for(var i = 0; i < el.bag.length; i++)
 			{
 			res[iter] = new Array();
 			res[iter++] = el.bag[i]

 			}
 		return res;
	}

/*-----------------------------------------------------
* getContainer(pointerNum) :
* ------------------------------------------------------
*/
	this.getContainer = function(pointerNum)
	{
		var el = (pointerNum == 1) ? curelement : curelement2;
		var res = new Array();
		var iter = 0;
 		for(var i = 0; i < el.container.length; i++)
 			{
 			res[iter] = new Array();
 			res[iter++] = el.container[i]

 			}
 		return res;
	}


/*-----------------------------------------------------
* getinGraphs(pointerNum) :
* ------------------------------------------------------
*/
	this.getinGraphs = function(pointerNum)
	{
		var el = (pointerNum == 1) ? curelement : curelement2;
		var res = new Array();
		var iter = 0;
 		for (var Eigenschaft in el.input)
 			for(var i = 0; i < el.input[Eigenschaft].length; i++)
 			{
 			res[iter] = new Array();
 			res[iter][0] = Eigenschaft;
 			res[iter][1] = i.toString();
 			res[iter++][2] = el.input[Eigenschaft][i].antecessor.toString();
 			}
 		return res;
	}

/*-----------------------------------------------------
* getoutGraphs(pointerNum) :
* ------------------------------------------------------
*/
	this.getoutGraphs = function(pointerNum)
	{
		var el = (pointerNum == 1) ? curelement : curelement2;
		var res = new Array();
		var iter = 0;
 		for (var Eigenschaft in el.output)
 			for(var i = 0; i < el.output[Eigenschaft].length; i++)
 			{
 			res[iter] = new Array();
 			res[iter][0] = Eigenschaft;
 			res[iter][1] = i.toString();
 			res[iter++][2] = el.output[Eigenschaft][i].successor.toString();
 			}
 		return res;
	}
/*-----------------------------------------------------
* getLabel(pointerNum) : 
* ------------------------------------------------------
*/ 
	this.getLabel = function(pointerNum)
	{
		var res = '';
	 	if(this.moveinWeb(pointerNum,'http://www.w3.org/2000/01/rdf-schema#label',0,true))
 		{
			res += this.curValue(pointerNum); 
			this.moveinWeb(pointerNum,'http://www.w3.org/2000/01/rdf-schema#label',0,false);
 		}
 		return res;
	}
	
	/*-----------------------------------------------------
* getComment(pointerNum) : 
* ------------------------------------------------------
*/ 
	this.getComment = function(pointerNum)
	{
		var res = '';
	 	if(this.moveinWeb(pointerNum,'http://www.w3.org/2000/01/rdf-schema#comment',0,true))
 		{
			res += this.curValue(pointerNum); 
			this.moveinWeb(pointerNum,'http://www.w3.org/2000/01/rdf-schema#comment',0,false);
 		}
 		return res;
	}

/*-----------------------------------------------------
 * getLabelOf(obj) : 
 * -----------------------------------------------------
 * Gibt das Label eines Objekts zurück.
 * Sucht zuerst im Objekt selbst, dann in der Vererbungskette.
 *
 * @param obj: Das zu prüfende Objekt/Instanz
 * @return String: Das gefundene Label oder die URI/ID als Fallback
 */
this.getLabelOf = function(obj) {
    if (!obj) return "undefined/null";
    
    var current = obj;
    var help = 0;

    while (current && help < 30) {
        // 1. Gibt es ein direktes rdfs:label in den output-Graphs?
        var labelProp = current.output?.['http://www.w3.org/2000/01/rdf-schema#label'];
        
        if (labelProp && labelProp[0] && labelProp[0].successor) {
            return labelProp[0].successor.toString();
        }

        // 2. Weitermarschieren in der Kette (erst Repräsentation, dann superObj)
        if (current.clazz?.representation && current !== current.clazz.representation) {
            current = current.clazz.representation;
        } else {
            current = current.superObj;
        }
        help++;
    }

    // Fallback: Wenn kein Label gefunden wurde, gib die URI oder die innerID zurück
    return typeof obj.getName === "function" ? obj.getName() : `[ID: ${obj.innerID}]`;
};
	
/*-----------------------------------------------------
* moveinWeb(pointerNum,graphName,indexOfGraph,foreward) : 
* ------------------------------------------------------
*/ 
  	this.moveinWeb = function(pointerNum,graphName,indexOfGraph,foreward)
 	{
 		if(pointerNum < 1 || pointerNum > 2)console.error('update \"moveinWeb\" ');
 		
 		 		
 		
 		var point = null;
 		if(pointerNum == 1) 
 		{
 			//if('http://www.w3.org/2000/01/rdf-schema#Literal' == curelement.getName())
 			//console.error('http://www.w3.org/2000/01/rdf-schema#Literal is an not useable Element');
 			
 			point = curelement;
 		}
 		else
 		{ 
 			point = curelement2;
		}
 		
 		
 		if(foreward)
 		{
 			if(point == undefined)
 			{
 			console.error('point is undefined (' + pointerNum + ')');
 			console.error( 'element1:' + curelement.getName() + ' element2:' +  curelement2.getName());
 			return false;
 			}
 			if(point.output[graphName] == undefined)
 			{
 			//console.error('point.output[' + graphName + '] is undefined (' + pointerNum + ')' );
 			return false;
 			}
 			
 			//console.error(point);
 			//console.error(point.output[graphName]);
 			
 			if(point.output[graphName].length <= indexOfGraph)return false;
 			if(pointerNum == 1) 
 				curelement = point.output[graphName][indexOfGraph].successor;
 			else 
 				curelement2 = point.output[graphName][indexOfGraph].successor;
 			
 		}
 		else
 		{
 			if(point.input[graphName] == undefined)return false;
 			if(point.input[graphName].length <= indexOfGraph)return false;
 			
 			if(pointerNum == 1) 
 				curelement = point.input[graphName][indexOfGraph].antecessor;
 			else 
 				curelement2 = point.input[graphName][indexOfGraph].antecessor;
 		 
 		}
 		return true;
 				
		
 	}
 	
 	this.moveinNet2 = function(clazzName)
 	{

 	}
 	
 	this.nodeIndex = function()
 	{
 		var res = new Array();
 		for(propertyelem in curelement)
 		{
 		
 			res[res.length] = propertyelem.toString();//curelement[propertyelem];
 		}
 		
		
 		return res;
 	}
 	
 	this.refmany = function(pointerNum, in_out )
 	{
 		 var element = null;
 		
 		
 		if(pointerNum == 1)
 		element = curelement;
 		else
 		element = curelement2;
 	
 		var res = new Array();
 		var i = 0;
 		var fullArray = element.get_index(in_out);
 		var nameatt;
 		for(nameatt in fullArray)
 		{
 			res[i++] = nameatt;
 			
 		}
 		
		return res;
 	}
 	
 	 	
  	this.refIndex = function(pointerNum, in_out )
 	{
 	
 		var element = null;
 		
 		if(pointerNum == 1)
 		element = curelement;
 		else
 		element = curelement2;

 		return element.get_index(in_out);
 		
 
 		
 	}
 	
 	//concret taxom fvnction
 	this.inheritObj = function( clazzName )
 	{
 		var graph = null;
 		curelement2 = this.getObjecttoClazz( clazzName );

 		if(curelement.handling <= de.auster_gmbh.semanticelement.NODE )
 		{
 			graph = this.getObjecttoClazz( 'http://www.w3.org/2000/01/rdf-schema#subClassOf' );
 		}
 		else
 		{
 			graph = this.getObjecttoClazz( 'http://www.w3.org/2000/01/rdf-schema#subPropertyOf' );
 		}
 		
 		graph.connect(curelement2,curelement);
 		
 		 
 		
 
 		
 	}
 	
 	//concret taxom fvnction
 	this.inherit = function( obj, clazzObjName )
 	{
 		var graph = null;
 		var firstEl = null;
 		var secEl = null;
		
		

 		if(clazzObjName == undefined)
 		{
 				firstEl = curelement;
 		 		curelement2 = obj;
 		 		secEl = curelement2;
 		}
 		else
 		{
 				if(de.auster_gmbh.semanticelement[clazzObjName] == undefined)
 				throw new de.auster_gmbh.library.error.NoObjectToDefinitionException(clazzObjName);
 				if(de.auster_gmbh.semanticelement[clazzObjName].representation == undefined)
 				throw new de.auster_gmbh.library.error.RepresentationObjectMissedException(clazzObjName);
 				
 			 	firstEl = de.auster_gmbh.semanticelement[clazzObjName].representation;
 		 		
 		 		secEl = obj;
 		}
 		
 		
 		
 		if(firstEl.handling <= de.auster_gmbh.semanticelement.NODE)
 		{
 			graph = this.getObjecttoClazz( 'http://www.w3.org/2000/01/rdf-schema#subClassOf' );
 		}
 		else
 		{
 			graph = this.getObjecttoClazz( 'http://www.w3.org/2000/01/rdf-schema#subPropertyOf' );
 		}

 		
 		// If an object of this type has no real history, it become a subsomething of the second element
 		if(!secEl.superObj)secEl.superObj = firstEl;
 		graph.connect(secEl,firstEl);
 		
 		 
 		
 
 		
 	}
 	
 	this.definitionTag = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about';
 	
 	//concret taxom fvnction
 	this.aboutObj = function( pointerNum , clazzName )
 	{
 	
 	 	var element = null;
 		
 		if(pointerNum == 1)
 		element = curelement;
 		else
 		element = curelement2;
 		var graph = this.getObjecttoClazz( this.definitionTag );
 		graph.about(element,clazzName);
 		
 	}
 	
/*-----------------------------------------------------
* setGraphObj( graphName ) : 
* ------------------------------------------------------
*/ 
 	this.setGraphObj = function( graphName )
 	{
 	


 		var graph = this.getObjecttoClazz( graphName );
 		graph.connect(curelement,curelement2);
 		if(curelement.getNewPropertyEvent != null)
 		curelement.getNewPropertyEvent( '*' , new de.auster_gmbh.library.tools.eventObject('setGraphObj',graph,null) ); 
 		if(curelement2.getNewPropertyEvent != null)
 		curelement2.getNewPropertyEvent( '*' , new de.auster_gmbh.library.tools.eventObject('setGraphObj',graph,null) ); 
		return graph;
 		


 		
 	}

/*-----------------------------------------------------
* setIDGraph(firstObject, graphName, secondaryObject ) : 
* ------------------------------------------------------
*/ 
 	this.setIDGraph = function(firstObject, graphName, secondaryObject )
 	{
 	
 		var pre1 = this.getRef1(); 
 		var pre2 = this.getRef2(); 

		this.getObjByRepresentation(firstObject ,1);
		this.getObjByRepresentation(secondaryObject ,2);

 		var graph = this.getObjecttoClazz( graphName );
 		graph.connect(curelement,curelement2);
  		if(curelement.getNewPropertyEvent != null)
 		curelement.getNewPropertyEvent( '*' , new de.auster_gmbh.library.tools.eventObject('setIDGraph',graph,null) ); 
  		if(curelement2.getNewPropertyEvent != null)
 		curelement2.getNewPropertyEvent( '*' , new de.auster_gmbh.library.tools.eventObject('setIDGraph',graph,null) ); 
 		this.setRef1(pre1); 
 		this.setRef2(pre2); 
 
		return graph;	
 	}
/*-----------------------------------------------------
* setManuallyGraph(Object1, graph, Object2 ) : 
* ------------------------------------------------------
*/ 
 	this.setManuallyGraph = function(Object1, graph, Object2 )
 	{
 	
 		if(graph.localName == 'script')console.warn(graph);
 		graph.connect(Object1,Object2 );
  		if(Object1.getNewPropertyEvent != null)
 		Object1.getNewPropertyEvent( '*' , new de.auster_gmbh.library.tools.eventObject('setIDGraph',graph,null) ); 
  		if(Object2.getNewPropertyEvent != null)
 		Object2.getNewPropertyEvent( '*' , new de.auster_gmbh.library.tools.eventObject('setIDGraph',graph,null) ); 
		if(graph.getOwnedInstanceEvent != null)
			graph.getOwnedInstanceEvent( '*' , new de.auster_gmbh.library.tools.eventObject('addToInstance',Object2,null) ); 	

 	
 
		return graph;	
 	}

/*-----------------------------------------------------
* setGraphLiteral(pointerNum, graphName, literal ) : 
* -----------------------------------------------------
*/ 
 	this.setGraphLiteral = function(pointerNum, graphName, literal )
 	{
 	
 		if(pointerNum == 1)
 		var mainElement = curelement;
 		else
 		var mainElement = curelement2;
 	
 	var element = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'](literal);
 	element.output = new Array();
 	element.input = new Array();
 	
 	
 	element.innerID = stdInnerID++;
 	objid[element.innerID] = element;
 	var graph = this.getObjecttoClazz( graphName );
 	graph.connect(mainElement,element);
  	if(mainElement.getNewPropertyEvent != null)
 	mainElement.getNewPropertyEvent( '*' , new de.auster_gmbh.library.tools.eventObject('setGraphLiteral',graph,null) ); 
 	if(graph.getOwnedInstanceEvent != null)
 	graph.getOwnedInstanceEvent( '*' , new de.auster_gmbh.library.tools.eventObject('addToInstance', literal ,null) ); 	

 		
 	}
 /*-----------------------------------------------------
* setGraphLiteralObj(obj, graphName, literal ) : 
* -----------------------------------------------------
*/ 
 	this.setGraphLiteralObj = function(obj, graphName, literal )
 	{
 	 	
 	var element =  literal;
 		
 	if(typeof element !== 'object' )
 	{
 		element = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'](element);
 	
 		element.output = new Array();
 		element.input = new Array();
 	
 		element.innerID = stdInnerID++;
 		objid[element.innerID] = element;
 	}
 	var graph = graphName;
 	if(typeof graph !== 'object' )
 		graph = this.getObjecttoClazz( graphName );
 	
 	graph.connect(obj,element);
  	if(obj.getNewPropertyEvent != null)
 	obj.getNewPropertyEvent( '*' , new de.auster_gmbh.library.tools.eventObject('setGraphLiteral',graph,null) ); 

 	if(graph.getOwnedInstanceEvent != null)
 	graph.getOwnedInstanceEvent( '*' , new de.auster_gmbh.library.tools.eventObject('addToInstance',obj,null) ); 

	return obj;
 		
 	}

 /*-----------------------------------------------------
* createLiteralObj(txt ) : 
* -----------------------------------------------------
*/ 
 	this.createLiteralObj = function( literal )
 	{
 	 	
 	var element =  literal;
 		
 	if(typeof element !== 'object' )
 	{
 		element = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'](element);
 	
 		element.output = new Array();
 		element.input = new Array();
 	
 		element.innerID = stdInnerID++;
 		objid[element.innerID] = element;
 	}

	return element;
 		
 	}
 	
 /*-----------------------------------------------------
* definePropertyVicinity(domain, property, range) : 
* -----------------------------------------------------
*/ 	
 	
 	this.definePropertyVicinity = function(domain, property, range )
 	{
 		this.setIDGraph(property, 'http://www.w3.org/2000/01/rdf-schema#domain', domain );
  		this.setIDGraph(property, 'http://www.w3.org/2000/01/rdf-schema#range', range );
 	} 	
 	
/*-----------------------------------------------------
* setBagLiteral(pointerNum, literal ) : 
* -----------------------------------------------------
*/ 
 	this.setBagLiteral = function(pointerNum, literal )
 	{
 	
 		if(pointerNum == 1)
 		var mainElement = curelement;
 		else
 		var mainElement = curelement2;
 	
 	var element = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'](literal);
 	element.output = new Array();
 	element.input = new Array();
 	
 	element.innerID = stdInnerID++;
 	objid[element.innerID] = element;
 	mainElement.add(element);
  	if(mainElement.getNewBagEntryEvent != null)
 	mainElement.getNewBagEntryEvent( '*' , new de.auster_gmbh.library.tools.eventObject('setBagLiteral',element,null) ); 
 

 		
 	}
 	
/*-----------------------------------------------------
* setBagLiteralObj(Obj, literal ) : 
* -----------------------------------------------------
*/ 
 	this.setBagLiteralObj = function(Obj, literal )
 	{
 	 	
 	var element = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Literal'](literal);
 	element.output = new Array();
 	element.input = new Array();
 	
 	element.innerID = stdInnerID++;
 	objid[element.innerID] = element;
 	Obj.add(element);
  	if(Obj.getNewBagEntryEvent != null)
 	Obj.getNewBagEntryEvent( '*' , new de.auster_gmbh.library.tools.eventObject('setBagLiteral',element,null) ); 
 

 		
 	}

/*-----------------------------------------------------
* curNode(pointerNum) : 
* -----------------------------------------------------
*/ 	
 	this.curNode = function(pointerNum)
 	{
 	 	if(pointerNum == 1)
 		return curelement.getName();
 		else
 		return curelement2.getName();
 		
 	}
 	
/*-----------------------------------------------------
* curValue(pointerNum) : 
* -----------------------------------------------------
*/
  	this.curValue = function(pointerNum)
 	{
 	 	if(pointerNum == 1)
 		return curelement.toString();
 		else
 		return curelement2.toString();
 		
 	} 
 	
/*-----------------------------------------------------
* addBagEntry(pointerNum, add) : 
* -----------------------------------------------------
*/
  	this.addBagEntry = function(pointerNum, add)
 	{
 	
 	 	if(pointerNum == 1)
 	 	{
 		curelement.add(add);
 		if(curelement.getNewBagEntryEvent != null)
 		curelement.getNewBagEntryEvent( '*' , new de.auster_gmbh.library.tools.eventObject('addBagEntry',add,null) );
 		if(add.getNewContainerEntryEvent != null)
 		add.getNewContainerEntryEvent( '*' , new de.auster_gmbh.library.tools.eventObject('addContainerEntry',curelement,null) ); 
 		
 		}
 		else
 		{
 		curelement2.add(add);
 		if(curelement2.getNewBagEntryEvent != null)
 		curelement2.getNewBagEntryEvent( '*' , new de.auster_gmbh.library.tools.eventObject('addBagEntry',add,null) ); 
 		if(add.getNewContainerEntryEvent != null)
 		add.getNewContainerEntryEvent( '*' , new de.auster_gmbh.library.tools.eventObject('addContainerEntry',curelement2,null) ); 

 		}
 	} 
/*-----------------------------------------------------
* addBag(obj, add) : 
* -----------------------------------------------------
*/
  	this.addBag = function(obj, add)
 	{
 		obj.add(add);
 		if(obj.getNewBagEntryEvent != null)
 		obj.getNewBagEntryEvent( '*' , new de.auster_gmbh.library.tools.eventObject('addBagEntry',add,null) ); 
 		if(add.getNewContainerEntryEvent != null)
 		add.getNewContainerEntryEvent( '*' , new de.auster_gmbh.library.tools.eventObject('addContainerEntry',obj,null) ); 

 	} 
/*-----------------------------------------------------
* addBagEntryObj(URI) : 
* @param uri: uri of a semantic element
* An object created from uri will be added to the bag of the first pointer element and fires an addBagEntryObj Event
* -----------------------------------------------------
*/
  	this.addBagEntryObj = function(uri)
 	{
 		var graph = null;
 		curelement2 = this.getObjecttoClazz( uri );
 		
 		curelement.add(curelement2);
 		if(curelement.getNewBagEntryEvent != null)
 		curelement.getNewBagEntryEvent( '*' , new de.auster_gmbh.library.tools.eventObject('addBagEntryObj',curelement2,null) ); 

 		
 	} 
 	
/*-----------------------------------------------------
* getBagEntry(pointerNum, pos) : 
* -----------------------------------------------------
*/
  	this.getBagEntry = function(pointerNum, pos)
 	{
 	 	if(pointerNum == 1)
 	 	{
 		return curelement.getBagElement(pos);
 		}
 		else
 		{
 		return curelement2.getBagElement(pos);
 		}
 	} 
 	

/*-----------------------------------------------------
* getContainerOwner(pointerNum, pos) : 
* -----------------------------------------------------
*/
  	this.getContainerOwner = function(pointerNum, pos)
 	{
 	 	if(pointerNum == 1)
 	 	{
 		return curelement.getContainerOwner(pos);
 		}
 		else
 		{
 		return curelement2.getContainerOwner(pos);
 		}
 	} 

/*-----------------------------------------------------
* getContainerOwnerObj(pointerNum, pos) : 
* -----------------------------------------------------
*/
  	this.getContainerOwnerObj = function(pointerNum, pos)
 	{
 		
 		
 	 	if(pointerNum == 1)
 	 	{
 	 	if(curelement.container.length > pos)
 	 	{
 		curelement =  curelement.getContainerOwner(pos);
 		}
 		else
 		{
 		return false;
 		}}
 		else
 		{
 		if(curelement2.container.length > pos)
 		{
 		curelement2 = curelement2.getContainerOwner(pos);
 		}
 		else
 		{
 		return false;
 		}}
 		return true;
 	} 	

/*-----------------------------------------------------
* getBagEntryObj(pointerNum, pos) : 
* -----------------------------------------------------
*/
  	this.getBagEntryObj = function(pointerNum, pos)
 	{
 	 	if(pointerNum == 1)
 		curelement =  curelement.getBagElement(pos);
 		else
 		curelement2 = curelement2.getBagElement(pos);
 		
 	} 
 	
 	
 	
/*-----------------------------------------------------
* manyBagEntry(pointerNum) : 
* -----------------------------------------------------
*/
  	this.manyBagEntry = function(pointerNum)
 	{
 	 	if(pointerNum == 1)
 		return curelement.bag_many();
 		else
 		return curelement2.bag_many();
 		
 	} 
/*-----------------------------------------------------
* getObjByRepresentation(clazzObjName, pointerNum) : 
* -----------------------------------------------------
*/
  	this.getObjByRepresentation = function(clazzObjName, pointerNum)
 	{
 		 if(de.auster_gmbh.semanticelement[clazzObjName] == undefined)
 		 {
 		 
 		 	
 		 	if(de.auster_gmbh.semanticelement.ns[clazzObjName] != undefined)
 		 	{
 		 	
 		 	if(pointerNum == 1)
 			curelement = de.auster_gmbh.semanticelement.ns[clazzObjName];
 			else
 			curelement2 = de.auster_gmbh.semanticelement.ns[clazzObjName];
 			
 			return de.auster_gmbh.semanticelement.ns[clazzObjName];
 			}
 			
 			 			
 			throw new de.auster_gmbh.library.error.NoObjectToDefinitionException(clazzObjName);
 		 }
 		 
 		 if(de.auster_gmbh.semanticelement[clazzObjName].representation == undefined)
 		 throw new de.auster_gmbh.library.error.RepresentationObjectMissedException(clazzObjName);
 	
 	 	if(pointerNum == 1)
 		curelement = de.auster_gmbh.semanticelement[clazzObjName].representation;
 		else
 		curelement2 = de.auster_gmbh.semanticelement[clazzObjName].representation;
 		
 	} 
/*-----------------------------------------------------
* getObjByRepresentationObj(clazzObjName) : 
* -----------------------------------------------------
*/
  	this.getObjByRepresentationObj = function(clazzObjName)
 	{
 		 if(de.auster_gmbh.semanticelement[clazzObjName] == undefined)
 		 {
 		 
 		 	
 		 	if(de.auster_gmbh.semanticelement.ns[clazzObjName] != undefined)
				return de.auster_gmbh.semanticelement.ns[clazzObjName];
 			 			
 			throw new de.auster_gmbh.library.error.NoObjectToDefinitionException(clazzObjName);
 		 }
 		 
 		 if(de.auster_gmbh.semanticelement[clazzObjName].representation == undefined)
 		 throw new de.auster_gmbh.library.error.RepresentationObjectMissedException(clazzObjName);
 	
 
 		return de.auster_gmbh.semanticelement[clazzObjName].representation;
	
 	} 
//representation

/*-----------------------------------------------------
* swappointer() : 
* -----------------------------------------------------
*/	
 	this.swappointer = function()
 	{
 		var swap = curelement;
 		curelement = curelement2;
 		curelement2 = swap;
 	} 
 	
/*-----------------------------------------------------
* set2to1() : 
* -----------------------------------------------------
*/
 	this.set2to1 = function()
 	{
 		 curelement2 = curelement;
 	}
 	
/*-----------------------------------------------------
* setRef1(ref) : 
* -----------------------------------------------------
*/
 	this.setRef1 = function(ref)
	{
 		 curelement = ref;
 	}
 	
/*-----------------------------------------------------
* setRef2(ref) : 
* -----------------------------------------------------
*/
 	this.setRef2 = function(ref)
 	{
 		 curelement2 = ref;
 	}
 	
/*-----------------------------------------------------
* getRef1() : 
* -----------------------------------------------------
*/
 	this.getRef1 = function()
  	{
 		 return curelement;
 	}
 	
 /*-----------------------------------------------------
* getRef2() : 
* -----------------------------------------------------
*/
 	this.getRef2 = function()
  	{
 		 return curelement2;
 	}


/*-----------------------------------------------------
* parentNode(pointerNum, pos) : 
* -----------------------------------------------------
*/

 	this.parentNode = function(pointerNum, pos)
  	{
  	
  		var res = new Array();
 		var i = 0;
 		var element = null;
 		
 		if(pointerNum == 1)
 		element = curelement;
 		else
 		element = curelement2;
//console.error(element);
  		if(element.handling <= de.auster_gmbh.semanticelement.NODE)
  		{
  			if(element.output['http://www.w3.org/2000/01/rdf-schema#subClassOf'] == undefined)return false;
  		
  			if(element.output['http://www.w3.org/2000/01/rdf-schema#subClassOf'].length > pos)
  			{
  			  	
  				if(pointerNum == 1)
 					curelement = element.output['http://www.w3.org/2000/01/rdf-schema#subClassOf'][pos].successor;
 				else
 					curelement2 = element.output['http://www.w3.org/2000/01/rdf-schema#subClassOf'][pos].successor;
 				
 			return true;
  			}
  			return false;
  			
  			
  		}
 		else
  		{
  			if(element.output['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'] == undefined)
  			{
  			if(element.output['http://www.w3.org/2000/01/rdf-schema#subClassOf'] == undefined)return false;
  			if(pointerNum == 1)
 					curelement = element.output['http://www.w3.org/2000/01/rdf-schema#subClassOf'][pos].successor;
 				else
 					curelement2 = element.output['http://www.w3.org/2000/01/rdf-schema#subClassOf'][pos].successor;
 			return true;
  			}
  		
  			if(element.output['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'].length > pos)
  			{
  				if(pointerNum == 1)
 					curelement = element.output['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'][pos].successor;
 				else
 					curelement2 = element.output['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'][pos].successor;
 				
 			return true;
  			}
  			return false;
  			
  			
  		}
 	}
//-----------------------------------------------------
 
/*-----------------------------------------------------
* childNodeList(pointerNum) : 
* -----------------------------------------------------
*/
 	this.childNodeList = function(pointerNum)
  	{
  	
  		var res = new Array();
 		var i = 0;
 		var element = null;
 		
 		if(pointerNum == 1)
 		element = curelement;
 		else
 		element = curelement2;
  	
  		if(element.handling <= de.auster_gmbh.semanticelement.NODE)
  		{
  			if(element.output['http://www.w3.org/2000/01/rdf-schema#subClassOf'] == undefined)return res;
			for(iter1 = 0; iter1 < element.output['http://www.w3.org/2000/01/rdf-schema#subClassOf'].length ; iter1++)
 			{
 				res[i++] = element.output['http://www.w3.org/2000/01/rdf-schema#subClassOf'][iter1].successor.getName();
 			}
 		}
 		else
 		{
 			if(element.output['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'] == undefined)return res;
			for(iter1 = 0; iter1 < element.output['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'].length ; iter1++)
 			{
 				res[i++] = element.output['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'][iter1].successor.getName();
 			}
 		}
 		
		return res;

 	}

//-----------------------------------------------------
 
/*-----------------------------------------------------
* childNode(pointerNum) : 
* -----------------------------------------------------
*/
 	this.childNode = function(pointerNum, pos )
  	{
  	
  		var res = new Array();
 		var i = 0;
 		var element = null;
 		
 		if(pointerNum == 1)
 		element = curelement;
 		else
 		element = curelement2;

  		if(element.handling <= de.auster_gmbh.semanticelement.NODE)
  		{
  			if(element.input['http://www.w3.org/2000/01/rdf-schema#subClassOf'] == undefined)return false;
  		
  			if(element.input['http://www.w3.org/2000/01/rdf-schema#subClassOf'].length > pos)
  			{
  			  	
  				if(pointerNum == 1)
 					curelement = element.input['http://www.w3.org/2000/01/rdf-schema#subClassOf'][pos].antecessor;
 				else
 					curelement2 = element.input['http://www.w3.org/2000/01/rdf-schema#subClassOf'][pos].antecessor;
 				
 			return true;
  			}
  			return false;
  			
  			
  		}
 		else
  		{
  			if(element.input['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'] == undefined)return false;
  		
  			if(element.input['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'].length > pos)
  			{
  				if(pointerNum == 1)
 					curelement = element.input['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'][pos].antecessor;
 				else
 					curelement2 = element.input['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'][pos].antecessor;
 				
 			return true;
  			}
  			return false;
  			
  			
  		}
 
 	}
 	
//-----------------------------------------------------
 
/*-----------------------------------------------------
* childmany(pointerNum) : 
* -----------------------------------------------------
*/
 	this.childmany = function(pointerNum)
  	{

 		var element = null;
 		
 		if(pointerNum == 1)
 		element = curelement;
 		else
 		element = curelement2;
 		
 		//console.error(element.getName() + ' in childmany')
 		
 		if(element.handling <= de.auster_gmbh.semanticelement.NODE)
 		{
 		if(element.input['http://www.w3.org/2000/01/rdf-schema#subClassOf'] != undefined)
 		return element.input['http://www.w3.org/2000/01/rdf-schema#subClassOf'].length;
 		}
 		else
 		{
 		if(element.input['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'] != undefined)
 		return element.input['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'].length;
 		}
 		return 0;
 	}
//-----------------------------------------------------
 
/*-----------------------------------------------------
* rootNode(pointerNum) : 
* -----------------------------------------------------
*/
 	this.rootNode = function(pointerNum)
  	{

 		if(pointerNum == 1)
 		curelement = this.root;
 		else
 		curelement2 = this.root;
 	}
//-----------------------------------------------------
 
/*-----------------------------------------------------
* getID(pointerNum) : 
* -----------------------------------------------------
*/ 	
 	this.getID = function(pointerNum)
 	{
 		if(pointerNum == 1)
 		return curelement.innerID;
 		else
 		return curelement2.innerID;
 		
 	}
//-----------------------------------------------------

/*-----------------------------------------------------
* getTrace(pointerNum) : 
* -----------------------------------------------------
*/ 	
 	this.getTrace = function(pointerNum)
 	{
 	 var element;
	 var res = "";
 		if(pointerNum != 2)
 		element = curelement;
 
 		else
 		element = curelement2;

		

 		if(element.output['http://www.auster-gmbh.de/surface-generator-lib#p'])
 		if(element.output['http://www.auster-gmbh.de/surface-generator-lib#p'][0])
 		{
 		res = element.output['http://www.auster-gmbh.de/surface-generator-lib#p'][0].successor.toString();
 
		return res;
		}
	return false;
 		
 	}

 	
/*-----------------------------------------------------
* getOntology(pointerNum) : 
* -----------------------------------------------------
*/ 	
 	this.getOntology = function(pointerNum)
 	{
 	 var element;
 	 var find_about = function(elem)
 	 {
 	  	if(elem.output['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'])
 		if(elem.output['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'][0])
 		
 		return elem.output['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'][0].successor.toString();
 		return false;
 	 }
 	 
	 var res = "";
 		if(pointerNum != 2)
 		element = curelement;
 
 		else
 		element = curelement2;

		
		if(element.getName() == 'http://www.w3.org/2002/07/owl#Ontology')return find_about(element);

		while(element.container_many() > 0)
		{
		
		element = element.getContainerOwner(0);
		
				if(element.getName() == 'http://www.w3.org/2002/07/owl#Ontology')return find_about(element);
				
		
		}
		
	return false;
 		
 	}
 	
//-----------------------------------------------------
 
/*-----------------------------------------------------
* findID(pointerNum.id) : 
* -----------------------------------------------------
*/ 	
 	this.findID = function(pointerNum,id)
 	{
 	
 		if(undefined == objid[id])return false;
 		if(pointerNum == 1)
 		curelement = objid[id];
 		else
 		curelement2 = objid[id];
 		return true;
 		
 	} 
/*-----------------------------------------------------
* findIDobj(id) : 
* -----------------------------------------------------
*/ 	
 	this.findIDobj = function(id)
 	{
 		return objid[id]; 		
 	}  	
 	
 /*-----------------------------------------------------
* manyID(id) : 
* -----------------------------------------------------
*/ 	
 	this.manyID = function()
 	{
 		return objid.length; 		
 	}  	
 	
 /*-----------------------------------------------------
* showID() : 
* -----------------------------------------------------
*/ 	
 	this.showID = function()
 	{
 	var res = '';
 		for(var i = 0; i < objid.length;i++)
 		{
 			res += "(" + i + ")" +  objid[i]  + ";\n"; //+ objid[i].getName()
 		
 		if(((i + 1) % 30) == 0)
 		{
 			console.error(res);
 			res = '';
 		}
 		
 		}
 		 		
 	}  	

 /*-----------------------------------------------------
* showID() : 
* -----------------------------------------------------
*/ 	
 	this.showListofIDs = function(characters)
 	{
 	var res = new Array();
 	var i = 0;
 	var test = '';
 	var select = false;
 	
 		for (var name in de.auster_gmbh.semanticelement)
 		  if(de.auster_gmbh.library.tools.findInString(characters,name))  //characters,name
 		  {
 		    res[i++] =  name ;
 		  }
 		
 		
		res.sort();

 		return res; 		
 	}  	


/*-----------------------------------------------------
* findIDX(pointerNum,clazzName,idx) : 
* -----------------------------------------------------
*/ 	
 	this.findIDX = function(pointerNum,clazzName,idx)
 	{
 		if(pointerNum == 1)
 		curelement = objIndex[clazzName][idx];
 		else
 		curelement2 = objIndex[clazzName][idx];
 		
 	}
 	
/*-----------------------------------------------------
* findIDXObj(clazzName,idx) : 
* -----------------------------------------------------
*/ 	
 	this.findIDXObj = function(clazzName,idx)
 	{
 		if(objIndex[clazzName])
 		return objIndex[clazzName][idx];
 		else
 		return false;
 		
 	}
 	
/*-----------------------------------------------------
* manyIDXObj(clazzName,idx) : 
* -----------------------------------------------------
*/ 	
 	this.manyIDXObj = function(clazzName)
 	{
 		if(objIndex[clazzName])
 		return objIndex[clazzName].length;
 		else
 		return false;
 		
 	}
//-----------------------------------------------------
 	
/*-----------------------------------------------------
* createFullBagEntry(pointerNum,nodeType,about,label,comment,inherit) : 
* @param pointerNum: [1,2] pointer
* @param nodeType: 
* @param about: defines a new URI
* @param label:
* @param comment:
* @param inherit:
* -----------------------------------------------------
*/ 	
this.createFullBagEntry = function(pointerNum,nodeType,about,label,comment,inherit)
{
	var myid = 0;
	
	// selects the content of one pointer
	var element = null;
 		if(pointerNum == 1)
 		element = curelement;
 		else
 		element = curelement2;
 
 	// 
 	de.auster_gmbh.semanticelement.semantic_web.addBagEntryObj(nodeType);
 	
 			if(nodeType == 'http://www.w3.org/1999/xhtml#textarea')
 			console.debug(de.auster_gmbh.semanticelement.semantic_web.getRef2());
 	
 	
 	de.auster_gmbh.semanticelement.semantic_web.swappointer();
 	 	
 	 	if(about != undefined)
 	 	{
 	 	try
  		{
  		 	de.auster_gmbh.semanticelement.semantic_web.aboutObj(1,about);
  		 	
  		 	
  		 	// is interim used
  		 	
  		 	if(objIndex[about] == undefined )
 			{
 			
 			
 			objIndex[about] = new Array();
 			objIndex[about][0] = curelement;
 			  
 			}
 			else
 			{
 			
 			objIndex[about][objIndex[about].length] = curelement;
 			
 			}
 			
  		 	
  		}
 	 	catch (e) 
 	 	{
			console.error(e + "(" + de.auster_gmbh.semanticelement.semantic_web.getRef2().getName() + ")");

	 	}
		}
	myid = de.auster_gmbh.semanticelement.semantic_web.getID(1);
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label',label);
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#comment',comment);
 	if(inherit != undefined)
 	{
 	 try 
 	 {
 		de.auster_gmbh.semanticelement.semantic_web.inherit(de.auster_gmbh.semanticelement.semantic_web.getRef1(),inherit);
 	 } 
 	 catch (e) 
 	 {
		console.error(e.ErrorMessage());

	 }


 	

 	}
 	
 	de.auster_gmbh.semanticelement.semantic_web.swappointer(); 	
 	return myid;
}		

//----------------------------------------------------- 	
/*-----------------------------------------------------
* setPropertyDataEntry(pri,graph,sec,label,comment) : 
* -----------------------------------------------------
*/ 	

this.setPropertyDataEntry = function(pri,graph,sec,label,comment)
{
	var myid = 0;
	var Ref1 = de.auster_gmbh.semanticelement.semantic_web.getRef1();
 	var Ref2 = de.auster_gmbh.semanticelement.semantic_web.getRef2();	
 	
	de.auster_gmbh.semanticelement.semantic_web.getObjByRepresentation(pri, 1);
 	de.auster_gmbh.semanticelement.semantic_web.addBagEntryObj(graph);

 	de.auster_gmbh.semanticelement.semantic_web.swappointer();
 	
 	if(label != undefined)de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label',label);
 	if(comment != undefined)de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#comment',comment);
 	//console.error(sec);
	de.auster_gmbh.semanticelement.semantic_web.getObjByRepresentation(sec, 2);
	
	de.auster_gmbh.semanticelement.semantic_web.addBagEntry(1,de.auster_gmbh.semanticelement.semantic_web.getRef2());

 	de.auster_gmbh.semanticelement.semantic_web.setRef1(Ref1);
 	de.auster_gmbh.semanticelement.semantic_web.setRef2(Ref2);


}		

//----------------------------------------------------- 	

//-----------------------------------------------------
/*-----------------------------------------------------
* showAllThemes() : 
* -----------------------------------------------------
*/ 	
 	this.showAllThemes = function()
 	{
	return de.auster_gmbh.semanticelement.themeOverview;
 		
 	}

/*-----------------------------------------------------
* isSubObjectOf(pointerNum, uri) : 
* -----------------------------------------------------
*/ 	
 	this.isSubObjectOf = function(pointerNum, uri)
 	{
 		var help = 0;
		var element = null;
 		if(pointerNum == 1)
 		element = curelement;
 		else
 		element = curelement2;
 		while(element.superObj != undefined && help < 30)
 		{			
 			if(element.name == uri)return true;
 			help++;
 			element = element.superObj;
 		}
 		return false;
 		
 		
 	}
 
/*-----------------------------------------------------
* isSubClassOf(pointerNum, uri) :
* -----------------------------------------------------
*/	
 	this.isSubClassOf = function(pointerNum, uri)
 	{
 		var SUBCLASSOF = 'http://www.w3.org/2000/01/rdf-schema#subClassOf';
 		var visited = new Set();
 		var queue = [];

 		var start = (pointerNum == 1) ? curelement : curelement2;
 		queue.push(start);

 		while (queue.length > 0) {
 			var element = queue.shift();
 			if (!element || visited.has(element)) continue;
 			visited.add(element);

 			if (element.name == uri) return true;

 			if (element.output && element.output[SUBCLASSOF] &&
 				element.output[SUBCLASSOF].length > 0)
 			{
 				for (var i = 0; i < element.output[SUBCLASSOF].length; i++) {
 					var succ = element.output[SUBCLASSOF][i].successor;
 					if (succ && !visited.has(succ)) queue.push(succ);
 				}
 			}

 			if (element.superObj && !visited.has(element.superObj))
 				queue.push(element.superObj);
 		}
 		return false;
 	}
 	
//-----------------------------------------------------
/*-----------------------------------------------------
* givesIcon(pointerNum, uri) : 
* -----------------------------------------------------
*/ 	
 	this.givesIcon = function(pointerNum, voidDefinition)
 	{

 		var result = null;
		var element = null;
		var help = 0;
 		if(pointerNum == 1)
 		element = curelement;
 		else
 		element = curelement2;
 		
 		//console.error(element.getName() + ' start');
 		if(voidDefinition)element = element.superObj;
 		if(element == undefined)return undefined;
 		if(!('givesSymbol' in element))return undefined;
 		return element.givesSymbol();
 		
 	}
 	
/*-----------------------------------------------------
* givesLabel(pointerNum) : 
* -----------------------------------------------------
*/ 	
 	this.givesLabel = function(pointerNum)
 	{
 		var scan = function(myelement)
 		{
 			
 			
				 		
					if(element.output['http://www.w3.org/2000/01/rdf-schema#label'] != 
					undefined)
					{
						
						return element.output['http://www.w3.org/2000/01/rdf-schema#label'][0].successor.toString();	

					}
			
			return false;
 		}
 		var result = null;
		var element = null;
		var help = 0;
 		if(pointerNum == 1)
 		element = curelement;
 		else
 		element = curelement2;
 		
 		//console.error(element.getName() + ' start');
 		
 		if(element == undefined)return undefined;
 		//if(element.clazz == null && element.superObj == undefined)return undefined;
		if(element instanceof String)return element.toString();
		//if(element.superObj == undefined)
		//{
			result = scan(element);
 			if(result)
 			return result;
 			//else
 			//return undefined;
		
		//}
		if(element.clazz != null)
		if(element.clazz.representation != undefined)
		{
			element = element.clazz.representation;
		}

 		while(element.superObj != undefined && help < 30)
 		{
 		
			result = scan(element);
 			if(result)
 			return result;
 			
 			element = element.superObj;
 			help++;
 		}

 		if(pointerNum == 1)
 		return curelement.getName();
 		else
 		return curelement2.getName();
 		
 		
 		
 	}
 	
//-----------------------------------------------------
/*-----------------------------------------------------
* setBehavior(pointerNum, myfunction) : 
* -----------------------------------------------------
*/ 	
 	this.setBehavior = function(pointerNum, myfunction)
 	{
 		var help = 0;
		var element = null;
 		if(pointerNum == 1)
 		element = curelement;
 		else
 		element = curelement2;
		
		element.clazz.prototype.script_prototype = myfunction;
		
		element.script = new element.script_prototype(
 			de.auster_gmbh.semanticelement.SOM(element));
		
		

 		
 		
 	}
 	

/*-----------------------------------------------------
* allocatorService(xmlnode) : 
* -----------------------------------------------------
*/ 	
this.allocatorService = function(xmlnode)
{
		var res = 'Nodename: ' + xmlnode.nodeName;
		res += ' (nodetype: ' + xmlnode.nodeType + ') '; //
		res += ' (namespace: ' + xmlnode.namespaceURI + ') '; //
		console.error(res);
}

/*-----------------------------------------------------
* SPARQL(Statement) : 
* -----------------------------------------------------
*/ 	
this.SPARQL = function(Statement)
{
	de.auster_gmbh.sparql.setStatment(Statement);
	de.auster_gmbh.sparql.runTransaction();
	var result = new Array();
	result[0] = de.auster_gmbh.sparql.result();
	result[1] = de.auster_gmbh.sparql.resultObjList();	
}

/*-----------------------------------------------------
* convertRDF_RDFS_OWL(pointerNum.id) : 
* -----------------------------------------------------
*/ 	

 	}
de.auster_gmbh.semanticelement.semantic_web = new de.auster_gmbh.semanticelement.semantic_web.clazz();


/**
* Semantic Object Model
* Will be used, to reach all important functions more easier.
*/
de.auster_gmbh.semanticelement.SOM = {};
de.auster_gmbh.semanticelement.SOM.tagInDoc = null;
de.auster_gmbh.semanticelement.SOM.callRef = null;
de.auster_gmbh.semanticelement.SOM = function(curObj)
{
	var SOM = {};
	SOM.currentObject = curObj;
	SOM.semantic_web = de.auster_gmbh.semanticelement.semantic_web;
	SOM.graphic_lib = de.auster_gmbh.graphicelement;
	SOM.tagInDoc = de.auster_gmbh.semanticelement.SOM.tagInDoc;
	SOM.callRef = de.auster_gmbh.semanticelement.SOM.callRef;
	return SOM;
}

de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#about'].prototype.me = de.auster_gmbh.semanticelement.semantic_web;


 	
 	var about = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about' );
 	
 	//about.about(de.auster_gmbh.semanticelement.semantic_web.root  ,'http://www.w3.org/2000/xmlns/');
 	about.about(de.auster_gmbh.semanticelement.semantic_web.root  ,'http://www.w3.org/XML/1998/namespace');
 	
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','xml-Namespace');
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/XML/1998/namespace#attributes',
	'attributes',
	'folder for attributes');
 
 	de.auster_gmbh.semanticelement.semantic_web.swappointer();
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/XML/1998/namespace#lang',
	'xml:lang',
	'spezifies language of entry');
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/XML/1998/namespace#space',
	'xml:space',
	'spezifies treatment of spaces');
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/XML/1998/namespace#base',
	'xml:base',
	'Base URL for relativistic links');
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/XML/1998/namespace#id',
	'xml:id',
	'id of a tag');
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/XML/1998/namespace#style',
	'xml:style',
	'style of a tag');	
	
 	de.auster_gmbh.semanticelement.semantic_web.rootNode(1);
 	
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Resource',
	'http://www.w3.org/XML/1998/namespace#node',
	'node',
	'folder for nodes');
 
	de.auster_gmbh.semanticelement.semantic_web.getRef2().handling 
		= de.auster_gmbh.semanticelement.XMLELEMENT ;
	

	
 	de.auster_gmbh.semanticelement.semantic_web.swappointer();
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/XML/1998/namespace#textNode',
	'#textNode',
	'a textNodeGraph');

	 de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Resource',
	'http://www.w3.org/XML/1998/namespace#hasChildren',
	'classic childen element',
	'folder for nodes');
 
	de.auster_gmbh.semanticelement.semantic_web.getRef2().handling 
		= de.auster_gmbh.semanticelement.XMLGRAPH;
	
 	de.auster_gmbh.semanticelement.semantic_web.rootNode(1);

 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Class',
	'http://www.w3.org/XML/1998/namespace#behavior',
	'behaviors',
	'folder for behavior-tags');
	
 	de.auster_gmbh.semanticelement.semantic_web.swappointer();

 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/XML/1998/namespace#script',
	'xml:script',
	'tag for behavior');
	


/*	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.w3.org/XML/1998/namespace#type',
	'xml:type',
	'attribute for typespezification');
*/	

	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2000/01/rdf-schema#Literal',
	'http://www.w3.org/2000/01/rdf-schema#Literal',
	'rdfs:Literal',
	'attribute for typespezification');
	
	
	
var _svgProp = de.auster_gmbh.semanticelement['http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'];
var _svgProps = [
	'http://www.w3.org/2000/svg#x',
	'http://www.w3.org/2000/svg#y',
	'http://www.w3.org/2000/svg#width',
	'http://www.w3.org/2000/svg#height',
	'http://www.w3.org/2000/svg#display'
];
for (var _i = 0; _i < _svgProps.length; _i++) {
	de.auster_gmbh.semanticelement[_svgProps[_i]] = function(){};
	de.auster_gmbh.semanticelement[_svgProps[_i]].prototype = new _svgProp();
	de.auster_gmbh.semanticelement[_svgProps[_i]].prototype.constructor = de.auster_gmbh.semanticelement.stdclass;
	de.auster_gmbh.semanticelement[_svgProps[_i]].prototype.name = _svgProps[_i];
	de.auster_gmbh.semanticelement[_svgProps[_i]].prototype.type = de.auster_gmbh.semanticelement.const.SEMANTIC_ATTRIB;
	de.auster_gmbh.semanticelement[_svgProps[_i]].prototype.handling = de.auster_gmbh.semanticelement.TAG;
	de.auster_gmbh.semanticelement[_svgProps[_i]].prototype.baseClazz = _svgProp;
}
/* */

 	

 	

