	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.daml.org/services/owl-s/1.0/',1);
	var pedlOnt = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/2002/07/owl#Ontology' );
	about = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about' );
	about.about(pedlOnt,'http://www.auster-gmbh.de/2010/08/anttree-lib');
	de.auster_gmbh.semanticelement.semantic_web.setRef2(pedlOnt); 
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','Anttree');
 	//de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#comment','Program Element Definition Language');
 	
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.auster-gmbh.de/2006/05/pedl-lib',2);
 	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/2000/svg',2);
 	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/1999/xhtml',2);
 	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );	
 	
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/1998/Math/MathML',2);
 	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' ); 	
 	
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.auster-gmbh.de/2010/08/anttree-lib',1);
	
        var pedlelementsOnt = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/2002/07/owl#Ontology' );
	about = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about' );
	about.about(pedlelementsOnt,'http://www.auster-gmbh.de/2010/08/anttree-lib/elements');
	de.auster_gmbh.semanticelement.semantic_web.setRef2(pedlelementsOnt); 
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','Anttree.elements');

 	
 	//de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.auster-gmbh.de/2006/05/pedl-lib',2);
 	//de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	
 	//de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.w3.org/2000/svg',2);
 	//de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
	
	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.auster-gmbh.de/2010/08/anttree-lib/elements',1);
        var pedlviselementsOnt = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/2002/07/owl#Ontology' );
	about = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about' );
	about.about(pedlviselementsOnt,'http://www.auster-gmbh.de/2010/08/anttree-lib/elements/visual');
	de.auster_gmbh.semanticelement.semantic_web.setRef2(pedlviselementsOnt); 
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','Anttree.elements.visualisation');
 	
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.auster-gmbh.de/2010/08/anttree-lib/elements',1);
        var pedldataelementsOnt = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/2002/07/owl#Ontology' );
	about = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about' );
	about.about(pedldataelementsOnt,'http://www.auster-gmbh.de/2010/08/anttree-lib/elements/data');
	de.auster_gmbh.semanticelement.semantic_web.setRef2(pedldataelementsOnt); 
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','Anttree.elements.data');
 	
/*x-----------------------------------------------------------------------------------------------------------------------------------------------
  |                                                    Declaration Area
  |
  x-----------------------------------------------------------------------------------------------------------------------------------------------
*/
	// --> http://www.auster-gmbh.de/2010/08/anttree-lib
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.auster-gmbh.de/2010/08/anttree-lib',1);
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2002/07/owl#Class',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Toy',
	'ate:Toy',
	'themeclass descibes a way to display an ontology',
	'http://www.w3.org/2002/07/owl#Class');
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Toy',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#App',
	'ate:App',
	'Application for itself or for theme',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Toy');
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Toy',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Process',
	'ate:Process',
	'Hidden or visible process for itself or for theme',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Toy');

 	
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Toy',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Theme',
	'ate:Theme',
	'themeclass descibes a way to display an ontology',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Toy');
 	
 	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
 	function(som)
 	{
 	  	var mysom = som;
 	  	var activateGraph = null;
 	  	var technicalGraph = null;
 	  	var functionToCall = null;
  	
  		mysom.currentObject.onClick = function( type , message )
  		{
  			

			
			if(activateGraph != null)
			//if(activateGraph.bag_many() > 0)
			{
			
				if(activateGraph.onActivate != null)  //.getBagElement(0)
				{
					//alert("Graph: onActivate");
					var eventobj = new de.auster_gmbh.library.tools.eventObject(functionToCall,mysom.currentObject,null);
					activateGraph.onActivate('*',eventobj);
				}
				else
				{
					console.error(activateGraph.getName() + ':Function "onActivate" is not available');
				}
			}
			
  			if(technicalGraph != null)
			if(technicalGraph.bag_many() > 0)
			{
			
				if(technicalGraph.getBagElement(0).onActivate != null)
				{
					//alert("tech: onActivate");
					var eventobj = new de.auster_gmbh.library.tools.eventObject(functionToCall,mysom.currentObject,null);
					technicalGraph.getBagElement(0).onActivate('*',eventobj);
				}
				else
				{
					console.error(technicalGraph.getBagElement(0).getName() + ':Function "onActivate" is not available');
				}
			}
			else
			{
				console.error(technicalGraph.getName() + ':Graph has no append Node!' + activateGraph.bag_many());
			}
			/*else
			{
				alert(activateGraph.getName() + ':Graph has no append Node!' + activateGraph.bag_many());
			}*/
		
		}
		
		mysom.currentObject.onDeactivate = function( type , message )
  		{
  			
  			if(activateGraph != null)
			//if(activateGraph.bag_many() > 0)
			{
			
				if(activateGraph.onActivate != null)
				{
					
					var eventobj = new de.auster_gmbh.library.tools.eventObject('onDeactivate',mysom.currentObject,null);
					activateGraph.onDeactivate('*',eventobj);
				}
				else
				{
					console.error(activateGraph.getName() + ':Function "onDeactivate" is not available');
				}
			}
			/*else
			{
				alert(activateGraph.getName() + ':Graph has no append Node!' + activateGraph.bag_many());
			}*/
		
		}
		
		mysom.currentObject.getNewBagEntryEvent = function(type, message)
		{
			if(message.getRequester().getName() == 'http://www.auster-gmbh.de/2010/08/anttree-lib#willBeShownBy')
				activateGraph = message.getRequester();
			if(message.getRequester().getName() == 'http://www.auster-gmbh.de/2010/08/anttree-lib#willBeRealizedBy')
				technicalGraph = message.getRequester();
			if(message.getRequester().getName() == 'http://www.auster-gmbh.de/2010/08/anttree-lib#onActivateFires')
				alert("jo (184)");
		}
		
		mysom.currentObject.getNewPropertyEvent = function(type, message)
		{
			if(message.getRequester().getName() == 'http://www.auster-gmbh.de/2010/08/anttree-lib#ThemeBoundVisualisationNode')
				functionToCall = message.getRequester().successor;
			if(message.getRequester().getName() == 'http://www.auster-gmbh.de/2010/08/anttree-lib#willBeShownBy')
				activateGraph = message.getRequester().successor;
			if(message.getRequester().getName() == 'http://www.auster-gmbh.de/2010/08/anttree-lib#willBeRealizedBy')
				technicalGraph = message.getRequester().successor;
			if(message.getRequester().getName() == 'http://www.auster-gmbh.de/2010/08/anttree-lib#onActivateFires')
				alert("jo (196)");
		}
 	}
 	);
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#isDisplayed2DImage',
	'ate:isDisplayed2DImage',
	'displays a repräsentation of the connected Object',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	//TODO check svg:image element
	/*
	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2010/08/anttree-lib#isDisplayed2DImage', 
	'http://www.w3.org/2000/01/rdf-schema#domain', 
	'http://www.w3.org/2000/01/rdf-schema#Resource' );
	
	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2010/08/anttree-lib#isDisplayed2DImage', 
	'http://www.w3.org/2000/01/rdf-schema#range', 
	'http://www.w3.org/2000/svg#image' );
	*/
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#hasToBeDisplayed',
	'ate:hasToBeDisplayed',
	'displays a representation of the connected Object',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2010/08/anttree-lib#hasToBeDisplayed', 
	'http://www.w3.org/2000/01/rdf-schema#domain', 
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Theme' );
	
	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2010/08/anttree-lib#hasToBeDisplayed', 
	'http://www.w3.org/2000/01/rdf-schema#range', 
	'http://www.w3.org/2000/svg#image' );
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#GraphicManager',
	'ate:GraphicManager',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class');
 	
 	var Graphicmanager = de.auster_gmbh.semanticelement.semantic_web.getRef2();
 	
 	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
 	function(som)
 	{
 	  	var mysom = som;
 	  	var activateGraph = null;
 	  	var dataGraph = null;
 	  	var myGraphicBag = new de.auster_gmbh.graphicelement.visualBag();
 	  	var receiveItsDataFrom = null;
 	  	var supportsDatatype = null;
 	  	var hasIllustrations = null;
 	  	var listOfIllustrations = new Array();
 	  	var curelement = null;
 	  	var page = 0;
 	  	var baseTheme = function(semElement,GraphicBag) //never used
 	  	{
 	  		//console.debug("baseTheme");
 	  		for(var j = 0;semElement.bag_many() > j;j++)
 	  		{
				createTheme(semElement.getBagElement(j),GraphicBag);
 	  		}
 	  		
 	  	
 	  	}
 	  	var createTheme = function(semElement, GraphicBag)
 	  	{
 	  		console.debug('[createTheme] element:', semElement && semElement.getName ? semElement.getName() : semElement,
 	  			'bag_many:', semElement && semElement.bag_many ? semElement.bag_many() : '?');

 	  		if(semElement.getName() == 'http://www.w3.org/2000/svg#g')
 	  		{
 	  			console.debug('[createTheme] → svg:g, getNewObject');
 	  			var result = semElement.getNewObject(
 	  				de.auster_gmbh.library.commonrefs.STDNODE,
					de.auster_gmbh.library.commonrefs.STDLISTENER);
				myGraphicBag.add(result);
				for(var k = 0; semElement.bag_many() > k; k++)
					createTheme(semElement.getBagElement(k), result);
 	  		}

 	  		if(semElement.isSubClassOf('http://www.w3.org/2000/svg#std_visual'))
 	  		{
 	  			console.debug('[createTheme] → svg:std_visual, getNewObject');
 	  			if(semElement.setID) semElement.setID(semElement.innerID);
 	  			var result = semElement.getNewObject(
 	  				de.auster_gmbh.library.commonrefs.STDNODE,
					de.auster_gmbh.library.commonrefs.STDLISTENER);
				myGraphicBag.add(result);
 	  		}

	  		if(semElement.isSubClassOf('http://www.w3.org/2000/svg#converter'))
 	  		{
 	  			console.debug('[createTheme] → svg:converter, init on existing element (preserve pipe_in wiring)');
 	  			if(semElement.setGraphicStuff) semElement.setGraphicStuff(
 	  				de.auster_gmbh.library.commonrefs.STDNODE,
 	  				de.auster_gmbh.library.commonrefs.STDLISTENER);
 	  			if(semElement.init) semElement.init();
 	  			myGraphicBag.add(semElement);
 	  		}

 	  		if(semElement.isSubObjectOf('http://www.auster-gmbh.de/2010/08/anttree-lib#Visualization_panel'))
 	  		{
 	  			console.debug('[createTheme] → Visualization_panel:', semElement.getName(),
 	  				'getNewObject?', typeof semElement.getNewObject);
 	  			if(semElement.getNewObject != undefined) {
 	  				var result = semElement.getNewObject(
 	  					de.auster_gmbh.library.commonrefs.STDNODE,
						de.auster_gmbh.library.commonrefs.STDLISTENER);
					myGraphicBag.add(result);
 	  			} else if(semElement.onActivate) {
					var eventobj = new de.auster_gmbh.library.tools.eventObject('onActivate', this, null);
					semElement.onActivate('*', eventobj);
 	  			}
 	  		}
 	  	}
  	
  		mysom.currentObject.setPage = function( num ){ page = num;}
  	
  		mysom.currentObject.onActivate = function( type , message ) // used
  		{

			if(hasIllustrations != null)
			{
				
				
			if(listOfIllustrations.length == 0)
			{
				for(var i = 0; hasIllustrations.bag_many() > i; i++)
					listOfIllustrations[i] = hasIllustrations.getBagElement(i);

				if(listOfIllustrations.length > 0 && page < listOfIllustrations.length)
				{
					console.debug('[GraphicManager] onActivate: illustration=',
						listOfIllustrations[page].getName ? listOfIllustrations[page].getName() : listOfIllustrations[page],
						'bag_many:', listOfIllustrations[page].bag_many ? listOfIllustrations[page].bag_many() : '?');
					myGraphicBag = new de.auster_gmbh.graphicelement.visualBag();
					baseTheme(listOfIllustrations[page], myGraphicBag);
					console.debug('[GraphicManager] createTheme done, bag size:', myGraphicBag.bag ? myGraphicBag.bag.length : '?');
					myGraphicBag.setGraphicStuff(
						de.auster_gmbh.library.commonrefs.STDNODE,
						de.auster_gmbh.library.commonrefs.STDLISTENER);
					myGraphicBag.init();
					(function(ill, bag) {
						ill.hide = function() { bag.hide(); };
						ill.show = function() { bag.show(); };
					})(listOfIllustrations[page], myGraphicBag);
				}
			} else
				listOfIllustrations[0].show();
			}else
			console.warn("There ist no existing list of Illustrations! " + 
				de.auster_gmbh.semanticelement.semantic_web.getLabelOf(mysom.currentObject));
			
		}
		
  		mysom.currentObject.onDeactivate = function( type , message )
  		{
  			listOfIllustrations[0].hide();
			//listOfIllustrations[0].remove();
			//listOfIllustrations[0] = new de.auster_gmbh.graphicelement.visualBag();
		}
		
		mysom.currentObject.getNewBagEntryEvent = function(type, message)
		{
			//alert(type + " total irre, ein BagEntryEvent!");	
			if(message.getRequester().getName() == 'http://www.auster-gmbh.de/2010/08/anttree-lib#receiveItsDataFrom')
			{
			receiveItsDataFrom = message.getRequester();
			}
			if(message.getRequester().getName() == 'http://www.auster-gmbh.de/2010/08/anttree-lib#supportsDatatype')
			{
			supportsDatatype = message.getRequester();
			}
			if(message.getRequester().getName() == 'http://www.auster-gmbh.de/2010/08/anttree-lib#hasIllustrations')
			{
			hasIllustrations = message.getRequester();
			}

		}
		

 	}
 	);
 	
 	de.auster_gmbh.library.pedl.createfunction(Graphicmanager, 
 		'http://www.auster-gmbh.de/2010/08/anttree-lib#findContactApplication', 		
 		['findContactApplication'], 
 	'looks up an useable functional node to maschine requests ', 
 	function(som)
 	{
 	var mysom = som;
 	
 	 	mysom.currentObject.onActivate = function( type , message )
  		{
			alert('http://www.auster-gmbh.de/2010/08/anttree-lib#findContactApplication');
		}
 	
 	});
 	
 	de.auster_gmbh.library.pedl.createfunction(Graphicmanager, 
 		'http://www.auster-gmbh.de/2010/08/anttree-lib#drawIllustration', 		
 		['drawIllustration'], 
 	'Draws a specific illustration ', 
 	function(som)
 	{
 	var mysom = som;
 	
 	 	mysom.currentObject.onActivate = function( type , message )
  		{
			alert('http://www.auster-gmbh.de/2010/08/anttree-lib#findContactApplication');
		}
 	
 	});
	
 	//de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.auster-gmbh.de/2010/08/anttree-lib',1);
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#isDisplayed2DSVG',
	'ate:isDisplayed2DSVG',
	'displays a repräsentation of the connected Object',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#supportedThemes',
	'ate:supportedThemes',
	'displays a repräsentation of the connected Object',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#willBeShownBy',
	'ate:willBeShownBy',
	'',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2002/07/owl#Class',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#abstract_display_element',
	'ate:abstract_display_element',
	'union of a list of several classes');
	
	var mytemp = de.auster_gmbh.semanticelement.semantic_web.getRef1(); 
	
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2002/07/owl#unionOf',
	undefined,
	'owl:unionOf',
	'');

	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2, 'http://www.w3.org/1999/02/22-rdf-syntax-ns#parseType', 'Collection' );

	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	
	de.auster_gmbh.semanticelement.semantic_web.addBagEntry(1, 
	de.auster_gmbh.semanticelement.semantic_web.findIDXObj('http://www.auster-gmbh.de/2010/08/anttree-lib#GraphicManager',0));
	
	//alert(de.auster_gmbh.semanticelement.semantic_web.findIDXObj('http://www.auster-gmbh.de/2010/08/anttree-lib#GraphicManager',0));

	de.auster_gmbh.semanticelement.semantic_web.setRef1(mytemp); 
	
	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2010/08/anttree-lib#willBeShownBy', 
	'http://www.w3.org/2000/01/rdf-schema#domain', 
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Toy' );
	
	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2010/08/anttree-lib#willBeShownBy', 
	'http://www.w3.org/2000/01/rdf-schema#range', 
	'http://www.auster-gmbh.de/2010/08/anttree-lib#abstract_display_element' );
	

/*	

	
	var mytemp = de.auster_gmbh.semanticelement.semantic_web.getRef1(); 
	
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2002/07/owl#unionOf',
	'',
	'owl:unionOf',
	'',
	'');

	//de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2, 'http://www.w3.org/1999/02/22-rdf-syntax-ns#parseType', 'Collection' );

	de.auster_gmbh.semanticelement.semantic_web.setRef1(mytemp); 
*/
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#receiveItsDataFrom',
	'ate:receiveItsData',
	'',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');

 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#takesRespondFrom',
	'ate:takesRespondFrom',
	'',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#willBeRealizedBy',
	'ate:willBeRealizedBy',
	'',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#BagOfTechnicalNodes',
	'ate:BagOfTechnicalNodes',
	'collection of technical nodes',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq');	
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#onActivateFires',
	'ate:onActivateFires',
	'Fires event in append Thing',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#needsVisualisation',
	'ate:needsVisualisation',
	'',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#usesDatatype',
	'ate:usesDatatype',
	'',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#supportsDatatype',
	'ate:supportsDatatype',
	'',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#useRefence',
	'ate:useRefence',
	'indicates the properties to display',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
		
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#ThemeBoundVisualisationNode',
	'ate:ThemeBoundNode',
	'is important to set an objectbond function on the visualisation branch',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#load_new_doc',
	'ate:load_new_doc',
	'loads a new document',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#call_page',
	'ate:call_page',
	'call a page',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');

	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton_Text'] = function(node, caller)
	{
	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton_Text'].baseConstructor.call(this, node, caller);

	};



   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton_Text'].prototype = new de.auster_gmbh.graphicelement.svg.SVGImage();
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton_Text'].prototype.constructor = 
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton_Text'];
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton_Text'].baseConstructor = de.auster_gmbh.graphicelement.svg.SVGText;
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton_Text'].superClass = de.auster_gmbh.graphicelement.svg.SVGImage.prototype;
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton_Text'].prototype.name='http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton_Text';
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton_Text'].prototype.type = de.auster_gmbh.semanticelement.const.VISUALISATION_TREE;
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton_Text'].prototype.baseClazz = 
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#text'];
	
	
  for( var prop in helpvar ) 
  {
  
  
  if(prop != 'name')
  {
  de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton_Text'].prototype[prop] = helpvar[prop];
  }
  }
	
  de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton_Text'].prototype.script_prototype = function(som)
  {
  	var mysom = som
  	var load_doc = '';
  	var call_page = -1;
  	
  	
  	
  	mysom.currentObject.getNewPropertyEvent = function( type , message )
  	{
  	
		if(message.getRequester().getName() == 'http://www.w3.org/1999/xlink#href')
		{
		
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
		if(message.getRequester().getName() == 'http://www.auster-gmbh.de/2010/08/anttree-lib#load_new_doc')
		{
			load_doc = message.getRequester().successor.toString();
						
			//mysom.currentObject.setStyle(message.getRequester().successor.toString());
		}
		if(message.getRequester().getName() == 'http://www.auster-gmbh.de/2010/08/anttree-lib#call_page')
		{
			call_page = parseInt(message.getRequester().successor.toString());
			//mysom.currentObject.setStyle(message.getRequester().successor.toString());
		}
				
		//style="opacity:0.5;"
	}
	
		
 	//mysom.currentObject.preAccessEvent = null;
 	//mysom.currentObject.pastAccessEvent = null;
 	mysom.currentObject.onClick_event = function(element)
 	{
 	
 	var clones = mysom.currentObject.getClones();
 
 	
 	try
 	{
 	mysom.semantic_web.getObjByRepresentationObj(load_doc);
 	}
 	catch(err)
 	{
 		if(err.ErrNo() == 102)
 		{
 		
 		try
 		{
 		
 		mysom.semantic_web.getObjByRepresentationObj('http://www.auster-gmbh.de/2010/08/anttree-lib#Controlcenter').callURI(load_doc
 		, mysom.currentObject);

		for(var i = 0; clones.length > i;i++)
	 	clones[i].graphicElement.setAttributeNS(null, 'style', 'opacity:0.2');


 		//alert('gefunden');
 		}
 		catch(err2)
 		{
 		alert('mist' + err2);
 		}
 		//de.auster_gmbh.Controlcenter.callURI(load_doc);
 		
 		}
 	}
 	


 	}
 	
 	mysom.currentObject.onInterval_event = function(element)
 	{
 		var clones = mysom.currentObject.getClones();
 		var newpage = function(page, container)
 		{
 			if(container.container_many() > 0)
 			
 				if(!container.getContainerOwner(0).isSubObjectOf(
 			'http://www.auster-gmbh.de/2010/08/anttree-lib#GraphicManager'))
 				newpage(call_page, container.getContainerOwner(0));
 				else
 				{
 				container.getContainerOwner(0).onDeactivate('',null);
 				container.getContainerOwner(0).setPage(page);
 				container.getContainerOwner(0).onActivate('',null);
 				}
 		
 		}
 		
 		for(var i = 0; clones.length > i;i++)
 		clones[i].graphicElement.setAttributeNS(null, 'style', 'opacity:0.5');
 		
 		if(call_page != -1)
 		{
 			newpage(call_page, mysom.currentObject);
 		}
 		
 		//mysom.currentObject.setStyle('opacity:0.5');
 	}
 	//mysom.currentObject.onClick = function(arg){alert('ich bin im Spiel');}
 	//mysom.currentObject.ondblClick = null;
 	//mysom.currentObject.onActivate = null;
 	//mysom.currentObject.onDeactivate = null;
  }
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton_Text',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton_Text',
	'ate:SVGButton_Text',
	'Button for illustration',
	'http://www.w3.org/2000/svg#image');
	
//---------------------------------


	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton'] = function(node, caller)
	{
	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton'].baseConstructor.call(this, node, caller);

	};



   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton'].prototype = new de.auster_gmbh.graphicelement.svg.SVGImage();
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton'].prototype.constructor = 
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton'];
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton'].baseConstructor = de.auster_gmbh.graphicelement.svg.SVGImage;
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton'].superClass = de.auster_gmbh.graphicelement.svg.SVGImage.prototype;
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton'].prototype.name='http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton';
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton'].prototype.type = de.auster_gmbh.semanticelement.const.VISUALISATION_TREE;
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton'].prototype.baseClazz = 
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/svg#image'];
	
	
  for( var prop in helpvar ) 
  {
  
  
  if(prop != 'name')
  {
  de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton'].prototype[prop] = helpvar[prop];
  }
  }
	
  de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton'].prototype.script_prototype = function(som)
  {
  	var mysom = som
  	var load_doc = '';
  	var call_page = -1;
  	
  	
  	
  	mysom.currentObject.getNewPropertyEvent = function( type , message )
  	{
  	
		if(message.getRequester().getName() == 'http://www.w3.org/1999/xlink#href')
		{
		
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
		if(message.getRequester().getName() == 'http://www.auster-gmbh.de/2010/08/anttree-lib#load_new_doc')
		{
			load_doc = message.getRequester().successor.toString();
						
			//mysom.currentObject.setStyle(message.getRequester().successor.toString());
		}
		if(message.getRequester().getName() == 'http://www.auster-gmbh.de/2010/08/anttree-lib#call_page')
		{
			call_page = parseInt(message.getRequester().successor.toString());
			//mysom.currentObject.setStyle(message.getRequester().successor.toString());
		}
				
		//style="opacity:0.5;"
	}
	
		
 	//mysom.currentObject.preAccessEvent = null;
 	//mysom.currentObject.pastAccessEvent = null;
 	mysom.currentObject.onClick_event = function(element)
 	{
 	
 	var clones = mysom.currentObject.getClones();
 
 	
 	try
 	{
 	mysom.semantic_web.getObjByRepresentationObj(load_doc);
 	}
 	catch(err)
 	{
 		if(err.ErrNo() == 102)
 		{
 		
 		try
 		{
 		
 		mysom.semantic_web.getObjByRepresentationObj('http://www.auster-gmbh.de/2010/08/anttree-lib#Controlcenter').callURI(load_doc
 		, mysom.currentObject);

		for(var i = 0; clones.length > i;i++)
	 	clones[i].graphicElement.setAttributeNS(null, 'style', 'opacity:0.2');


 		//alert('gefunden');
 		}
 		catch(err2)
 		{
 		alert('mist' + err2);
 		}
 		//de.auster_gmbh.Controlcenter.callURI(load_doc);
 		
 		}
 	}
 	


 	}
 	
 	mysom.currentObject.onInterval_event = function(element)
 	{
 		var clones = mysom.currentObject.getClones();
 		var newpage = function(page, container)
 		{
 			if(container.container_many() > 0)
 			
 				if(!container.getContainerOwner(0).isSubObjectOf(
 			'http://www.auster-gmbh.de/2010/08/anttree-lib#GraphicManager'))
 				newpage(call_page, container.getContainerOwner(0));
 				else
 				{
 				container.getContainerOwner(0).onDeactivate('',null);
 				container.getContainerOwner(0).setPage(page);
 				container.getContainerOwner(0).onActivate('',null);
 				}
 		
 		}
 		
 		for(var i = 0; clones.length > i;i++)
 		clones[i].graphicElement.setAttributeNS(null, 'style', 'opacity:0.5');
 		
 		if(call_page != -1)
 		{
 			newpage(call_page, mysom.currentObject);
 		}
 		
 		//mysom.currentObject.setStyle('opacity:0.5');
 	}
 	//mysom.currentObject.onClick = function(arg){alert('ich bin im Spiel');}
 	//mysom.currentObject.ondblClick = null;
 	//mysom.currentObject.onActivate = null;
 	//mysom.currentObject.onDeactivate = null;
  }
		
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#SVGButton',
	'ate:SVGButton',
	'Button for illustration',
	'http://www.w3.org/2000/svg#image');
	
//---------------------------------

	// ate:SPARQLResult — pedl:Datatype for the result set returned by SPARQL.request
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Datatype',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#SPARQLResult',
	'ate:SPARQLResult',
	'Result set from a SPARQL query — variable map of SemanticResult arrays',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Datatype');

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#SPARQL',
	'ate:SPARQLobject',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class');
 	
 	var Graphicmanager = de.auster_gmbh.semanticelement.semantic_web.getRef2();
 	
 	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
 	function(som)
 	{
 	  	var mysom = som;
 	  	var sparql;
 	  	var request = null;
 	  	var res = null;
 	  		
 	  	
 	  	mysom.currentObject.getNewBagEntryEvent = function(type, message)
		{
			
			if(message.getRequester().isSubObjectOf('http://www.auster-gmbh.de/2010/08/anttree-lib#SPARQL.request')) {
				request = message.getRequester();
			}
			
			if(message.getRequester().isSubObjectOf('http://www.auster-gmbh.de/2010/08/anttree-lib#SPARQL.getResult'))
				res = message.getRequester();
			
			
			
			
		}
 	  	
		mysom.currentObject.onActivate = function( type , message )
  		{
			var queryText = message && message.getContext ? message.getContext() : null;
			mysom.currentObject.request(queryText);
  		}

		mysom.currentObject.request = function(statement)
		{
			var stmtStr = (statement != null && statement !== undefined) ? statement.toString().trim() : '';
			if (stmtStr === '') return;
			sparql = new de.auster_gmbh.library.tools.SPARQLObject(mysom.semantic_web);
			sparql.setRequest(stmtStr);
			var execResult = sparql.execute();
			//console.debug('[SPARQL.execute] result:', execResult);
			//for (var v in execResult)
			//	console.table(execResult[v].toArray().map(function(o){ return { name: o.name, toString: o.toString() }; }));
			if (request && typeof request.onFinish === 'function')
				request.onFinish('*',
					new de.auster_gmbh.library.tools.eventObject('onFinish', request, execResult));
			else if (typeof mysom.currentObject.onFinish === 'function')
				mysom.currentObject.onFinish('*',
					new de.auster_gmbh.library.tools.eventObject('onFinish', mysom.currentObject, execResult));
			else
				console.warn('[SPARQL.request] onFinish NOT patched — weder auf request-Kind noch auf currentObject');
		}
		
		mysom.currentObject.getResult = function()
		{
			

		}



 	}
 	);
 	

	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#SPARQL.request',
	'ate:SPARQL.request',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function');

	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2010/08/anttree-lib#SPARQL.request',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#datatype',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#SPARQLResult' );

	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
	function(som)
	{
		var mysom = som;

		mysom.currentObject.onActivate = function(type, message) {
			var queryText = message && message.getContext ? message.getContext() : null;
			if(mysom.currentObject.container.length > 0) {
				var cont = mysom.currentObject.getContainerOwner(0);
				if(cont && cont.request) cont.request(queryText);
			}
		};
	});

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#SPARQL.request.statement',
	'ate:SPARQL.request.statement',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter');

	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
	function(som)
	{
		var mysom = som;
		console.debug('[SPARQL.request.statement] behavior instantiated');
	});

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#SPARQL.getResult',
	'ate:SPARQL.getResult',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Result',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#SPARQL.request-res',
	'ate:SPARQL.request-res',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Result');
	
//------------------------------------------------------------------------

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#visualisationTheme',
	'ate:visualisationTheme',
	'value for selection of the visualisation',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
		
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#defID',
	'ate:deflink',
	'ID for a definitiontag',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
		
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#working-structure',
	'working-structure',
	'contains a complete Theme and Workbench structure',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag');
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#OperatingCollection',
	'ate:OperatingCollection',
	'offers a collection of datahandlecomponents',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag');
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#TreeContext',
	'ate:TreeContext',
	'Contains a Collection of "branch" objects',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag');
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag',
	'http://www.auster-gmbh.de/2010/08/anttree-lib/Workbench#Semantics',
	'Semantics definition',
	'contains a unsorted many of processes and ontologys, which are useable',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag');
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#crotch',
	'ate:crotch',
	'contains ate:Branches',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag');
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#OperatingCollection',
	'ate:OperatingCollection',
	'contains ate:Visualization_panel Objects',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#hasIllustrations',
	'ate:hasIllustrations',
	'contains several illustrations for a Theme',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq');
 	
	
	//---------------------------------
	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#Illustration'] = function(node, caller)
	{
	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#Illustration'].baseConstructor.call(this, node, caller);

	};



   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#Illustration'].prototype = new de.auster_gmbh.graphicelement.visualBag();
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#Illustration'].prototype.constructor = 
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#Illustration'];
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#Illustration'].baseConstructor = de.auster_gmbh.graphicelement.visualBag;
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#Illustration'].superClass = de.auster_gmbh.graphicelement.visualBag;
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#Illustration'].prototype.name='http://www.auster-gmbh.de/2010/08/anttree-lib#Illustration';
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#Illustration'].prototype.type = de.auster_gmbh.semanticelement.const.VISUALISATION_TREE;
   de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#Illustration'].prototype.baseClazz = 
   de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
	
	
var helpvar = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
   
/*
TODO Delete or use
	graphic elements has a seperate object with its own bag. They need to be pushed as well.
*/
/*
helpvar.getNewContainerEntryEvent = function(event)
	{
		//myGraphicBag.add(result);
		console.debug(this.bag);
	}
*/

/*
	graphic elements has a seperate object with its own bag. They need to be pushed as well.
*/
/*
helpvar.getNewBagEntryEvent  = function(event)
	{
		console.debug(this.getName() +  " gets a Bagevent");
	}
*/


/*
 		curelement.getNewBagEntryEvent( '*' , new de.auster_gmbh.library.tools.eventObject('addBagEntry',add,null) );
 		if(add.getNewContainerEntryEvent != null)
 		add.getNewContainerEntryEvent( '*' , new de.auster_gmbh.library.tools.eventObject('addContainerEntry',curelement,null) ); 
 */		

  for( var prop in helpvar ) 
  {
  
  
  if(prop != 'name' && prop != 'add')
  {
  	  if(!de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#Illustration'].prototype[prop])
  	  	  de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#Illustration'].prototype[prop] = helpvar[prop];
 // 	  else
 // 	  	  console.error(prop);
  }
  }
	

//-------------------------------------------------------------------------	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Illustration',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Illustration',
	'ate:Illustration',
	'contains a illustration for a Theme',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq');
 	
 
/*
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2002/07/owl#Class',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#System_Information_Resource',
	'System_Information_Resource',
	'',
	'http://www.w3.org/2002/07/owl#Class');
*/	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#System_Information_Resource',
	'System_Information_Resource',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class');
	
	
	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.auster-gmbh.de/2010/08/anttree-lib/elements/data',1);
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#System_Information_Resource',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#client',
	'ate:client',
	'',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#System_Information_Resource');
	
 	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
 	function(som)
 	{
 	  	var mysom = som;
 	  	var dataGraph = null;
 	  	var myGraphicBag = new de.auster_gmbh.graphicelement.visualBag();
 	  	 
  	
  		mysom.currentObject.onActivate = function( type , message )
  		{

			

		 
		}
		
  		mysom.currentObject.onDeactivate = function( type , message )
  		{
			myGraphicBag.remove();
			myGraphicBag = new de.auster_gmbh.graphicelement.visualBag();
		}
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		mysom.currentObject.getNewBagEntryEvent = function(type, message)
		{
			if(message.getRequester().getName() == 'http://www.auster-gmbh.de/2010/08/anttree-lib#takesRespondFrom')
				dataGraph = message.getRequester();
			
		}
		

 	}
 	);
 	
	var bottom = de.auster_gmbh.semanticelement.semantic_web.getRef1();
	
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	
	var class_obj = de.auster_gmbh.semanticelement.semantic_web.getRef1();
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#client.result',
	'ate:client.result',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#client.sparql',
	'ate:client.sparql',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function');
	
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#client.sparql.statement',
	'ate:client.sparql.statement',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter');
	
	de.auster_gmbh.semanticelement.semantic_web.setRef1(class_obj);
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#client.many',
	'ate:client.many',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#client.setPos',
	'ate:client.setPos',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function');
	
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#client.setPos.num',
	'ate:client.setPos.num',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter');
	
	de.auster_gmbh.semanticelement.semantic_web.setRef1(class_obj);
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#client.first',
	'ate:client.first',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#client.last',
	'ate:client.last',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#client.next',
	'ate:client.next',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#client.prev',
	'ate:client.prev',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function');
	
	de.auster_gmbh.semanticelement.semantic_web.setRef1(bottom);
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#System_Information_Resource',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#server',
	'ate:server',
	'',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#System_Information_Resource');
 	
 	var server_class = de.auster_gmbh.semanticelement.semantic_web.getRef1();
 	
 	de.auster_gmbh.semanticelement.semantic_web.swappointer();
 	
 	
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#server.datatlink',
	'ate:server.datatlink',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function');

 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#server.result_CSV',
	'ate:server.result_CSV',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function');

 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#server.sparql',
	'ate:server.sparql',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function');

 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#server.many',
	'ate:server.many',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function');

 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#server.order_document',
	'ate:server.order_document',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function');

 	
 	de.auster_gmbh.semanticelement.semantic_web.setRef1(server_class);
 	
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.auster-gmbh.de/2010/08/anttree-lib',1);
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2002/07/owl#Class',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Branch',
	'Branch of a datatree',
	'',
	'http://www.w3.org/2002/07/owl#Class');
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Class',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualization_panel',
	'ate:Visualization_panel',
	'',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Class');

	// ate:setData — Object_Function on ate:Visualization_panel
	// Carries display configuration: which CSV columns to use as label and URI.
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#setData',
	'ate:setData',
	'Configures data display for a Visualization_panel',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Object_Function');

	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualization_panel',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#hasFunction',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#setData' );
	// ate:setData pedl:datatype ate:CSV — deferred to after ate:CSV is registered

	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
	function(som)
	{
		var mysom = som;
		var _labelColumn = null;
		var _uriColumn   = null;

		var ATE_LABEL_COL = 'http://www.auster-gmbh.de/2010/08/anttree-lib#setData.labelColumn';
		var ATE_URI_COL   = 'http://www.auster-gmbh.de/2010/08/anttree-lib#setData.uriColumn';

		mysom.currentObject.getNewPropertyEvent = function(type, message) {
			var name = message.getRequester().getName();
			var val  = message.getRequester().successor;
			if (name === ATE_LABEL_COL && val) _labelColumn = val.toString();
			if (name === ATE_URI_COL   && val) _uriColumn   = val.toString();
		};

		mysom.currentObject.getLabelColumn = function() { return _labelColumn; };
		mysom.currentObject.getURIColumn   = function() { return _uriColumn; };
	});

	// ate:setData.labelColumn — which CSV column to render as the list label
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#setData.labelColumn',
	'ate:setData.labelColumn',
	'SPARQL variable name to use as the display label',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter');

	// ate:setData.uriColumn — which CSV column to use as clickable URI (optional)
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#setData.uriColumn',
	'ate:setData.uriColumn',
	'SPARQL variable name to use as the clickable URI',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#object_parameter');


	// --> http://www.auster-gmbh.de/2010/08/anttree-lib/elements/visual
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.auster-gmbh.de/2010/08/anttree-lib/elements/visual',1);
 	

	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel'] = function(node, caller)
	{
	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel'].baseConstructor.call(this, node, caller);

	};
   
	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel'].prototype = 
	new de.auster_gmbh.graphicelement.special.ClickIt_TopTree_Panel();
	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel'].prototype.constructor = 
	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel'];
	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel'].baseConstructor =	
	de.auster_gmbh.graphicelement.special.ClickIt_TopTree_Panel;
	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel'].superClass = 
	de.auster_gmbh.graphicelement.special.ClickIt_TopTree_Panel.prototype;
	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel'].prototype.name=
	'http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel';
 	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel'].prototype.type = 	
 	de.auster_gmbh.semanticelement.const.VISUALISATION_TREE;
	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel'].prototype.baseClazz = 
	de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];
 	

	var helpvar = new de.auster_gmbh.semanticelement['http://www.w3.org/2000/01/rdf-schema#Resource'];

  	for( var prop in helpvar ) 
  	{
  
  
  	if(prop != 'name')
  	{
  	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel'].prototype[prop] = helpvar[prop];
  	
  	}
  	}
/*
 	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel'].prototype.script_prototype = 
 	function(som)
 	{	
 		var mysom = som;
 	  	var activateGraph = null;
 	  	var dataGraph = null;
 	  	var myGraphicBag = new de.auster_gmbh.graphicelement.visualBag();
 	  	
 	  	mysom.currentObject.onActivate = function( type , message )
  		{

  		alert(mysom);

		}
			
  		mysom.currentObject.onDeactivate = function( type , message )
  		{
			//myGraphicBag.remove();
			//myGraphicBag = new de.auster_gmbh.graphicelement.visualBag();
		}
		
		mysom.currentObject.getNewBagEntryEvent = function(type, message)
		{
		alert(message.getRequester().getName());
			if(message.getRequester().getName() == 'http://www.w3.org/2000/svg#x')
			{
			alert(message.getRequester().successor.toString());
			mysom.currentObject.transit(message.getRequester().successor.toString());
			}
		
			if(message.getRequester().getName() == 'http://www.w3.org/2000/svg#y')
			{
			mysom.currentObject.transit(undefined,message.getRequester().successor.toString());
			}
		}
	};
*/	
	/**
	*	ate:ClickIt_TopTree_Panel
	*
	*/
 	//de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
 	/*
 	de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel'].prototype.script_prototype = 
 	function(som)
 	{	

 	  	
  	
  		mysom.currentObject.onActivate = function( type , message )
  		{

  		
  		*//*
  		*//*
			var symbol = mysom.currentObject.givesSymbol().getNewObject(
			de.auster_gmbh.library.commonrefs.STDNODE,
			de.auster_gmbh.library.commonrefs.STDLISTENER);
			var visel = new de.auster_gmbh.graphicelement.visualElement();
			var vislines = new de.auster_gmbh.graphicelement.visualElement();
			myGraphicBag.add(vislines);
			myGraphicBag.add(visel);
			visel.add(symbol);
			symbol.setWayPoint(100,50);
			symbol.setDimension(40,40);
			var line = null;
			
			for(var i = 0;i < dataGraph.bag_many();i++)
			{
				symbol = dataGraph.getBagElement(i).givesSymbol().getNewObject(
				de.auster_gmbh.library.commonrefs.STDNODE,
				de.auster_gmbh.library.commonrefs.STDLISTENER);
				visel.add(symbol);
				symbol.setWayPoint(200,50 + (i * 50));
				symbol.setDimension(40,40);
				
				line = new de.auster_gmbh.graphicelement.svg.SVGLine(
				de.auster_gmbh.library.commonrefs.STDNODE,
				de.auster_gmbh.library.commonrefs.STDLISTENER);
				vislines.add(line);
				line.setWayPoint(120,70);
				line.setWayPoint(220,70 + (i * 50));
				line.setStyle('stroke:black;stroke-width:1');
				
				
			}
			
			myGraphicBag.init();
	*//*	}
			

		 
		
		
  		mysom.currentObject.onDeactivate = function( type , message )
  		{
			//myGraphicBag.remove();
			//myGraphicBag = new de.auster_gmbh.graphicelement.visualBag();
		}
		
		mysom.currentObject.getNewBagEntryEvent = function(type, message)
		{
		alert("booh");
			if(message.getRequester().getName() == 'http://www.w3.org/2000/svg#x')
			{
			alert(message.getRequester().successor.toString());
			mysom.currentObject.transit(message.getRequester().successor.toString());
			}
		
			if(message.getRequester().getName() == 'http://www.w3.org/2000/svg#y')
			{
			mysom.currentObject.transit(undefined,message.getRequester().successor.toString());
			}
		}
		

 	}; */
 	//alert(de.auster_gmbh.semanticelement['http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel'].prototype.script_prototype);
 	//);
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel',
	'ate:ClickIt_TopTree_Panel',
	'',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualization_panel');
	
	//de.auster_gmbh.semanticelement.semantic_web.showCurrentElements();
	
		
	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
	function(som)
 	{
 		var mysom = som;
 	  	var activateGraph = null;
 	  	var dataGraph = null;
 	  	
 	  	var myGraphicBag = new de.auster_gmbh.graphicelement.visualBag();
 	  	

 	  	mysom.currentObject.onActivate = function( type , message )
 	  	{
 	  	
 	  	
 	  	//Visualisation
 	  	
 	  	
 	  	this.setVisualisation( de.auster_gmbh.graphicelement.special.ClickIt_TopTree_Panel.visualisations.Elektronic);
 	  	this.setDefsID('defs4');
 	  	
 	  	var symbolcontainer = new de.auster_gmbh.graphicelement.visualElement(); 
 	  	var dotContainer = new de.auster_gmbh.graphicelement.visualElement(); 
 	  	var lineContainer = new de.auster_gmbh.graphicelement.visualElement(); 
 	  	
 	  	

 	  	
 	  	
 	  	myGraphicBag.add(symbolcontainer);
 	  	myGraphicBag.add(dotContainer); 
 	  	myGraphicBag.add(lineContainer); 
 	  	
 	  	//de.auster_gmbh.graphicelement.visualBag
 	  	
		var foundNode = de.auster_gmbh.library.tools.FINDSPECIFICNODE(mysom.currentObject
		,'http://www.auster-gmbh.de/2010/08/anttree-lib#GraphicManager');
		
		var datatypeContainer = foundNode.getBagElementbyName('http://www.auster-gmbh.de/2010/08/anttree-lib#TreeContext');

		if(datatypeContainer)
		{
			
			
			for(pos = 0;pos < datatypeContainer.bag.length;pos++)
 			{
	 			if(de.auster_gmbh.library.tools.isSubOf(datatypeContainer.bag[pos], 'http://www.auster-gmbh.de/2010/08/anttree-lib#Branch'))
	 			{
	 				var positions = new Array();
					positions[0] = 200;
					positions[1] = 200;
	 				var symbol = datatypeContainer.bag[pos].givesSymbol().getNewObject(
	 				de.auster_gmbh.library.commonrefs.STDNODE,
					de.auster_gmbh.library.commonrefs.STDLISTENER);
					symbol.setID("OBJID" + this.innerID);
		
				if(this.output != undefined)
				{
					if(this.output['http://www.w3.org/2000/svg#x'] != undefined)
					{
					positions[0] = this.output['http://www.w3.org/2000/svg#x'][0].successor.toString();
					
					}
				
				if(this.output['http://www.w3.org/2000/svg#y'] != undefined)
					{
					positions[1] = this.output['http://www.w3.org/2000/svg#y'][0].successor.toString();
				
					}
					
				
			//var vislines = new de.auster_gmbh.graphicelement.visualElement();
			//myGraphicBag.add(vislines);
			
 	  		var newdot = new de.auster_gmbh.graphicelement.svg.SVGUse(
 	  		de.auster_gmbh.library.commonrefs.STDNODE,
			de.auster_gmbh.library.commonrefs.STDLISTENER);
 	  		
 	  		newdot.setRef('#blue_shining_dot');
 	  		newdot.setWayPoint(positions[0] ,positions[1]);
 	  		dotContainer.add(newdot);
 	  		
 	  		var path = new de.auster_gmbh.graphicelement.svg.SVGLine(
 	  		de.auster_gmbh.library.commonrefs.STDNODE,
			de.auster_gmbh.library.commonrefs.STDLISTENER);
 	  		
 	  		path.setWayPoint(140.0  ,160.0 );
 	  		path.setWayPoint((140.0 + 50.0) ,(160.0));
 	  		path.setStyle('stroke:blue;stroke-width:3px;fill:none');
 	  		lineContainer.add(path);
 	  		
 	  		var path = new de.auster_gmbh.graphicelement.svg.SVGLine(
 	  		de.auster_gmbh.library.commonrefs.STDNODE,
			de.auster_gmbh.library.commonrefs.STDLISTENER);
 	  		
 	  		
 	  		path.setWayPoint((140.0 + 25.0) ,(160.0));
 	  		path.setWayPoint((140.0 + 50.0) ,(160.0 + 25.0));
 	  		path.setStyle('stroke:blue;stroke-width:3px;fill:none');
 	  		lineContainer.add(path);
 	  		
 	  		
 	  		
 	  		newdot = new de.auster_gmbh.graphicelement.svg.SVGUse(
 	  		de.auster_gmbh.library.commonrefs.STDNODE,
			de.auster_gmbh.library.commonrefs.STDLISTENER);
 	  	
 	  		newdot.setRef('#blue_shining_dot');
 	  		
 	  		newdot.setWayPoint((100.0 + 50.0) ,(120.0 + 25.0));
 	  		dotContainer.add(newdot);
 	  		
	  		var path = new de.auster_gmbh.graphicelement.svg.SVGLine(
 	  		de.auster_gmbh.library.commonrefs.STDNODE,
			de.auster_gmbh.library.commonrefs.STDLISTENER);
 	  		
 	  		
 	  		path.setWayPoint((140.0 + 50.0) ,(160.0));
 	  		path.setWayPoint((140.0 + 75.0) ,(160.0 + 25.0));
 	  		path.setStyle('stroke:blue;stroke-width:3px;fill:none');
 	  		lineContainer.add(path);
 	  		
  	  		newdot = new de.auster_gmbh.graphicelement.svg.SVGUse(
 	  		de.auster_gmbh.library.commonrefs.STDNODE,
			de.auster_gmbh.library.commonrefs.STDLISTENER);
 	  	
 	  		newdot.setRef('#blue_shining_dot');
 	  		
 	  		newdot.setWayPoint((100.0 + 75.0) ,(120.0 + 25.0));
 	  		dotContainer.add(newdot);
			
				
				symbolcontainer.add(symbol);
				
				symbol.setWayPoint(positions[0],positions[1]);
				symbol.setDimension(40,40);
				
				myGraphicBag.init();
				}
	 			
	 			}
 			}
			
			/*
			var branch = 
			de.auster_gmbh.library.tools.getBagElementbyClassName( datatypeContainer, 'http://www.auster-gmbh.de/2010/08/anttree-lib#supportsDatatype');
			
			*/
		}
		else
		{
			alert('needs a http://www.auster-gmbh.de/2010/08/anttree-lib#TreeContext ');
		}
		
 	  	}
		
		mysom.currentObject.onClick = function( type , message )
  		{
		alert('jo, klappt noch');
		var foundNode = de.auster_gmbh.library.tools.FINDSPECIFICNODE(mysom.currentObject
		,'http://www.auster-gmbh.de/2010/08/anttree-lib#GraphicManager');
  		
  		var datatypeContainer = foundNode.getBagElementbyName('http://www.auster-gmbh.de/2010/08/anttree-lib#supportsDatatype');

		if(datatypeContainer)
		{
			//datatypeContainer.getBagElementbyName('http://www.auster-gmbh.de/2010/08/anttree-lib#supportsDatatype'));
			
		}
		else
		{
			alert('needs a supportbag ');
		}

		}
 	}
 	);
	
	de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel',
	 'pic', 'container','img/panel_toptree.png', 20, 20);	
	 


	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualization_panel',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_Circle_Panel',
	'ate:ClickIt_Circle_Panel',
	'',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualization_panel');
	
	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
	function(som)
 	{
 		var mysom = som;
 	  	var activateGraph = null;
 	  	var dataGraph = null;
 	  	var service = new Array();
 	  	var myGraphicBag = new de.auster_gmbh.graphicelement.visualBag();
 	  	var deep = 2;
 	  	var index = 0;
 	  	var curElement = null;
 	  	
 	  	mysom.currentObject.eventcontainer = {};
 	  	mysom.currentObject.eventcontainer.master_obj = undefined ;
 	  	mysom.currentObject.eventcontainer.onclick_event = function(element)
		{
			
			index = element.id;
			
			if(this.master_obj != undefined && curElement != undefined)
			{
			myGraphicBag.remove();
			myGraphicBag.delete();

			
			this.master_obj.buildup(curElement
 	  		,new Array((window.innerWidth / 2) - 40, (window.innerHeight / 2) - 40) 
 	  		,new Array(80, 80)
 	  		,new Array(40, 40)
 	  		,new Array(200, 100)
 	  		,new Array(300, 200),2,1);
  			
  			myGraphicBag.init();
  			}	
		}
		
		mysom.currentObject.eventcontainer.number = 0;
 	  	
 	  	
 	  	mysom.currentObject.getNewObject = function(parentObj,pfad)
 	  	{
 	  	return myGraphicBag;
 	  	}
 	  	
 	  	mysom.currentObject.getNewBagEntryEvent = function(type, message)
		{
			
			if(message.getRequester().getName() == 'http://www.auster-gmbh.de/2010/08/anttree-lib#hasVisualisationOptions')
			{
			service[service.length] = message.getRequester();
			}
		}
 	  	
 	  	mysom.currentObject.buildup = function(first_element, pos , size1, size2, rad1, rad2, mode, deep)
 	  	{
 	  	
 	  	
 	  	var symbolcontainer = new de.auster_gmbh.graphicelement.visualElement(); 
 	  	var dotContainer = new de.auster_gmbh.graphicelement.visualElement(); 
 	  	var lineContainer = new de.auster_gmbh.graphicelement.visualElement(); 
 	  	var pos_in_branche = new Array(2);
 	  	var add = 1;
 	  	

 	  	
 	  	myGraphicBag.add(lineContainer);
 	  	myGraphicBag.add(symbolcontainer);
 	  	myGraphicBag.add(dotContainer); 
 	  	 
 	  	 
 
				if(mode == 2)
				{
					add = 2;
					var symbol = null;
					var text = new de.auster_gmbh.graphicelement.svg.SVGText(
						de.auster_gmbh.library.commonrefs.STDNODE,
					this);
					
					if(first_element.givesSymbol() != undefined)
									
 	  		 		symbol = first_element.givesSymbol().getNewObject(
	 				de.auster_gmbh.library.commonrefs.STDNODE,
					this);
					
					else
					{
					
					
					symbol = new de.auster_gmbh.graphicelement.svg.SVGImage(
	 				de.auster_gmbh.library.commonrefs.STDNODE,
					this);
					
					symbol.setImage("img/missingSymbol.png");
					}
					
					//
					symbol.setID( first_element.innerID);
					
					text.setText( first_element.getName());
					
					text.setWayPoint(pos[0] - (size1[0] / 2),pos[1] - (size1[1] / 2));
					
					symbolcontainer.add(text);
					symbolcontainer.add(symbol);
				
				
					symbol.setWayPoint(pos[0] - (size1[0] / 2),pos[1] - (size1[1] / 2));
					symbol.setDimension(size1[0],size1[1]);
				
					this.eventcontainer.master_obj = this;
				
				 	for(var i = 0;i < service.length ;i++)
					{
			
					if(service[i].getBagElement(0) == undefined)continue;
					if(service[i].getBagElement(0).givesSymbol == undefined)continue;
			
					graphical_element = service[i].getBagElement(0).givesSymbol();
			
					if(graphical_element == undefined)continue;
			
					symbol = graphical_element.getNewObject(
	 				de.auster_gmbh.library.commonrefs.STDNODE,
					this.eventcontainer);
			
			
					symbol.setID(i);
					
					symbolcontainer.add(symbol);
								
					symbol.setWayPoint(
					pos[0] - (40 / 2) + Math.sin((Math.PI * 10 * i) / 60) * 60
					,pos[1] - (40 / 2) + Math.cos(((Math.PI * 10 * i) / 60) + Math.PI) * 60);
					symbol.setDimension(30,30);
					}
				
				}
					
		var important = first_element;
		var graphical_element;

		var path;
		
		for(var i = 0;i < service[index].getBagElement(0).next_many(important)  && (mode < 3);i++)
		{
			
			if(service[index].getBagElement(0).next(important,i) == undefined)continue;
			//alert(important.getBagElement(i).givesSymbol);
			if(service[index].getBagElement(0).next(important,i).givesSymbol == undefined)
			{
			continue;
			}
			
			if(service[index].getBagElement(0).next(important,i).givesSymbol() != undefined)
			
			graphical_element = service[index].getBagElement(0).next(important,i).givesSymbol();
			
			else
			{
					
					
					graphical_element = new de.auster_gmbh.graphicelement.svg.SVGImage(
	 				de.auster_gmbh.library.commonrefs.STDNODE,
					this);
					
					graphical_element.setImage("img/missingSymbol.png");
			}
			
			if(graphical_element == undefined)continue;
			
			symbol = graphical_element.getNewObject(
	 				de.auster_gmbh.library.commonrefs.STDNODE,
					this);
			
			
			symbol.setID(service[index].getBagElement(0).next(important,i).innerID);
					
			symbolcontainer.add(symbol);
				
			pos_in_branche[0] = pos[0] - (size2[0] / 2) + (Math.cos((Math.PI * 2 * i) / 
			service[index].getBagElement(0).next_many(important)) * rad1[0]) ;
			pos_in_branche[1] = pos[1] - (size2[1] / 2) + (Math.sin((Math.PI * 2 * i) / 
			service[index].getBagElement(0).next_many(important)) * rad1[1]) ;
			
				
			symbol.setWayPoint(
			pos_in_branche[0],pos_in_branche[1]);
			symbol.setDimension(size2[0],size2[1]);
			
			
			path = new de.auster_gmbh.graphicelement.svg.SVGLine(
 	  		de.auster_gmbh.library.commonrefs.STDNODE,
			this);
 	  		
 	  		
 	  		path.setWayPoint(
 	  		pos[0] + (Math.cos((Math.PI * 2 * i) / 
 	  		service[index].getBagElement(0).next_many(important)
 	  		) * (size2[0] * add))
 	  		,pos[1] + (Math.sin((Math.PI * 2 * i) / 
 	  		service[index].getBagElement(0).next_many(important)
 	  		) * (size2[1] * add))
 	  		);
 	  		path.setWayPoint(
 	  		pos[0]  + (Math.cos((Math.PI * 2 * i) / 
 	  		service[index].getBagElement(0).next_many(important)
 	  		) * (rad1[0] - size2[0]))
 	  		,pos[1] + (Math.sin((Math.PI * 2 * i) / 
 	  		service[index].getBagElement(0).next_many(important)
 	  		) * (rad1[1] - size2[1])));
 	  		path.setStyle('stroke:blue;stroke-width:1px;fill:none');
 	  		path.setID( important.getBagElement(i).innerID);
 	  		
 	  		symbolcontainer.add(path);
			
			if(deep > 0)
			{
			this.buildup( service[index].getBagElement(0).next(important,i) //important.getBagElement(i)
			, new Array(pos_in_branche[0] + (size2[0] / 2),pos_in_branche[1] + (size2[1] / 2))
		     , new Array(size1[0]/2,size1[1]/2)
		     , new Array(size2[0]/2,size2[1]/2)
		     , new Array(rad1[0]/2,rad1[1]/2)
		     	, new Array(rad2[0]/2,rad2[1]/2)
		     	, 1, deep - 1);
			}
		}
		
		for(var i = 0;i < service[index].getBagElement(0).prev_many(important) && (mode > 1);i++)
		{
			
			if(service[index].getBagElement(0).prev(important,i) == undefined)continue;
			
			if(service[index].getBagElement(0).prev(important,i).givesSymbol == undefined)
			{
			continue;
			}
			
			if(service[index].getBagElement(0).prev(important,i).givesSymbol() != undefined)
			
			graphical_element = service[index].getBagElement(0).prev(important,i).givesSymbol();
			
			else
			{
					
					
					graphical_element = new de.auster_gmbh.graphicelement.svg.SVGImage(
	 				de.auster_gmbh.library.commonrefs.STDNODE,
					this);
					
					graphical_element.setImage("img/missingSymbol.png");
			}
			
			if(graphical_element == undefined)continue;
			
			symbol = graphical_element.getNewObject(
	 				de.auster_gmbh.library.commonrefs.STDNODE,
					this);
			
			
			symbol.setID(service[index].getBagElement(0).prev(important,i).innerID);
					
			symbolcontainer.add(symbol);
				
			pos_in_branche[0] = pos[0] - (size2[0]/ 2) + (Math.cos(((Math.PI * 2 * i) / 
			service[index].getBagElement(0).prev_many(important)
			) + (Math.PI / 4)) * rad2[0]) ;
			pos_in_branche[1] = pos[1] - (size2[1] / 2) + (Math.sin(((Math.PI * 2 * i) / 
			service[index].getBagElement(0).prev_many(important)
			) + (Math.PI / 4)) * rad2[1]) ;
				
			symbol.setWayPoint(pos_in_branche[0], pos_in_branche[1]);
			symbol.setDimension(size2[0],size2[1]);
			
			path = new de.auster_gmbh.graphicelement.svg.SVGLine(
 	  		de.auster_gmbh.library.commonrefs.STDNODE,
			this);
 	  		
 	  		path.setWayPoint(
 	  		pos[0]  + (Math.cos(((Math.PI * 2 * i) / 
 	  		service[index].getBagElement(0).prev_many(important)
 	  		) + (Math.PI / 4)) * (size2[0] * add))
 	  		,pos[1]  + (Math.sin(((Math.PI * 2 * i) / 
 	  		service[index].getBagElement(0).prev_many(important)
 	  		) + (Math.PI / 4)) * (size2[1] * add))
 	  		);
 	  		
 	  		path.setWayPoint(
 	  		pos[0]  + (Math.cos(((Math.PI * 2 * i) / 
 	  		service[index].getBagElement(0).prev_many(important)
 	  		) + (Math.PI / 4)) * (rad2[0]))
 	  		,pos[1] + (Math.sin(((Math.PI * 2 * i) / 
 	  		service[index].getBagElement(0).prev_many(important)
 	  		)+ (Math.PI / 4)) * (rad2[1])));
 	  		
 	  		
 	  		path.setStyle('stroke:red;stroke-width:1px;fill:none');
 	  		path.setID( service[index].getBagElement(0).prev(important,i).innerID);
 	  		lineContainer.add(path);
			
			if(deep > 0)
			this.buildup( service[index].getBagElement(0).prev(important,i) // important.getContainerOwner(i)
			, pos_in_branche
		     , new Array(size1[0]/2,size1[1]/2)
		     , new Array(size2[0]/2,size2[1]/2)
		     , new Array(rad1[0]/2,rad1[1]/2)
		     	, new Array(rad2[0]/2,rad2[1]/2)
		     	, 3, deep - 1);
			
		}

 	  	
 	  	}
 	  	
 	  	mysom.currentObject.onActivate = function( type , message )
 	  	{
 	  	
 	  	myGraphicBag.setID('defs5');
 	  	
		curElement = de.auster_gmbh.semanticelement.semantic_web.getRef1();
 	  	
 	  	this.buildup(de.auster_gmbh.semanticelement.semantic_web.getRef1()
 	  	,new Array((window.innerWidth / 2) - 40, (window.innerHeight / 2) - 40) 
 	  	,new Array(80, 80)
 	  	,new Array(40, 40)
 	  	,new Array(200, 100)
 	  	,new Array(300, 200),2,1);
 	  	
 	  	//Visualisation
 	  	
 	  	
 	  	//this.setVisualisation( de.auster_gmbh.graphicelement.special.ClickIt_TopTree_Panel.visualisations.Elektronic);

 	  	/*
 	  	//de.auster_gmbh.graphicelement.visualBag
 	  	
		var foundNode = de.auster_gmbh.library.tools.FINDSPECIFICNODE(mysom.currentObject
		,'http://www.auster-gmbh.de/2010/08/anttree-lib#GraphicManager');
		
		var datatypeContainer = foundNode.getBagElementbyName('http://www.auster-gmbh.de/2010/08/anttree-lib#TreeContext');


			
			


	 				var symbol = datatypeContainer.bag[pos].givesSymbol().getNewObject(
	 				de.auster_gmbh.library.commonrefs.STDNODE,
					de.auster_gmbh.library.commonrefs.STDLISTENER);
					symbol.setID("OBJID" + this.innerID);
		
				if(this.output != undefined)
				
					if(this.output['http://www.w3.org/2000/svg#x'] != undefined)
					{
					positions[0] = this.output['http://www.w3.org/2000/svg#x'][0].successor.toString();
					
					}
				
				if(this.output['http://www.w3.org/2000/svg#y'] != undefined)
					{
					positions[1] = this.output['http://www.w3.org/2000/svg#y'][0].successor.toString();
				
					}
					
				
			//var vislines = new de.auster_gmbh.graphicelement.visualElement();
			//myGraphicBag.add(vislines);
			*/
 	  		/*
 	  		var newdot = new de.auster_gmbh.graphicelement.svg.SVGUse(
 	  		de.auster_gmbh.library.commonrefs.STDNODE,
			de.auster_gmbh.library.commonrefs.STDLISTENER);
 	  		
 	  		newdot.setRef('#blue_shining_dot');
 	  		newdot.setWayPoint(positions[0] ,positions[1]);
 	  		dotContainer.add(newdot);
 	  		
 	  		var path = new de.auster_gmbh.graphicelement.svg.SVGLine(
 	  		de.auster_gmbh.library.commonrefs.STDNODE,
			de.auster_gmbh.library.commonrefs.STDLISTENER);
 	  		
 	  		path.setWayPoint(140.0  ,160.0 );
 	  		path.setWayPoint((140.0 + 50.0) ,(160.0));
 	  		path.setStyle('stroke:blue;stroke-width:3px;fill:none');
 	  		lineContainer.add(path);
 	  		
 	  		var path = new de.auster_gmbh.graphicelement.svg.SVGLine(
 	  		de.auster_gmbh.library.commonrefs.STDNODE,
			de.auster_gmbh.library.commonrefs.STDLISTENER);
 	  		
 	  		
 	  		path.setWayPoint((140.0 + 25.0) ,(160.0));
 	  		path.setWayPoint((140.0 + 50.0) ,(160.0 + 25.0));
 	  		path.setStyle('stroke:blue;stroke-width:3px;fill:none');
 	  		lineContainer.add(path);
 	  		
 	  		
 	  		
 	  		newdot = new de.auster_gmbh.graphicelement.svg.SVGUse(
 	  		de.auster_gmbh.library.commonrefs.STDNODE,
			de.auster_gmbh.library.commonrefs.STDLISTENER);
 	  	
 	  		newdot.setRef('#blue_shining_dot');
 	  		
 	  		newdot.setWayPoint((100.0 + 50.0) ,(120.0 + 25.0));
 	  		dotContainer.add(newdot);
 	  		
	  		var path = new de.auster_gmbh.graphicelement.svg.SVGLine(
 	  		de.auster_gmbh.library.commonrefs.STDNODE,
			de.auster_gmbh.library.commonrefs.STDLISTENER);
 	  		
 	  		
 	  		path.setWayPoint((140.0 + 50.0) ,(160.0));
 	  		path.setWayPoint((140.0 + 75.0) ,(160.0 + 25.0));
 	  		path.setStyle('stroke:blue;stroke-width:3px;fill:none');
 	  		lineContainer.add(path);
 	  		
  	  		newdot = new de.auster_gmbh.graphicelement.svg.SVGUse(
 	  		de.auster_gmbh.library.commonrefs.STDNODE,
			de.auster_gmbh.library.commonrefs.STDLISTENER);
 	  	
 	  		newdot.setRef('#blue_shining_dot');
 	  		
 	  		newdot.setWayPoint((100.0 + 75.0) ,(120.0 + 25.0));
 	  		dotContainer.add(newdot);
			*/
				

				
				//myGraphicBag.init();
				
	 			
	 			
 			
			
			
			//var branch = 
			//de.auster_gmbh.library.tools.getBagElementbyClassName( datatypeContainer, 'http://www.auster-gmbh.de/2010/08/anttree-lib#supportsDatatype');
			
			

		
 	  	}
		
		mysom.currentObject.onclick_event = function(element)
		{
		
			myGraphicBag.remove();
			myGraphicBag.delete();
			  	//de.auster_gmbh.semanticelement.semantic_web.showID();
			  	//alert(element.id + ' ' + de.auster_gmbh.semanticelement.semantic_web.findIDobj(element.id));
		
			curElement = de.auster_gmbh.semanticelement.semantic_web.getRef1();
			
			this.buildup(
			de.auster_gmbh.semanticelement.semantic_web.findIDobj(element.id)
 	  		,new Array((window.innerWidth / 2) - 40, (window.innerHeight / 2) - 40) 
 	  		,new Array(80, 80)
 	  		,new Array(40, 40)
 	  		,new Array(200, 100)
 	  		,new Array(300, 200), 2, 1);
			myGraphicBag.init();
  				
		}
		
		mysom.currentObject.ondbclick_event = function(element){}
		
		mysom.currentObject.onmouseover_event = function(element){}
		
		mysom.currentObject.onmouseout_event = function(element){}
		
		
		
		mysom.currentObject.onClick = function( type , message )
  		{
  		

		//alert('jo, klappt noch');
		//var foundNode = de.auster_gmbh.library.tools.FINDSPECIFICNODE(mysom.currentObject
		//,'http://www.auster-gmbh.de/2010/08/anttree-lib#GraphicManager');
  		
  		//var datatypeContainer = foundNode.getBagElementbyName('http://www.auster-gmbh.de/2010/08/anttree-lib#supportsDatatype');

		//if(datatypeContainer)
		//{
			//datatypeContainer.getBagElementbyName('http://www.auster-gmbh.de/2010/08/anttree-lib#supportsDatatype'));
			
		//}
		//else
		//{
		//	alert('needs a supportbag ');
		//}

		}
 	}
 	);
	
	de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_Circle_Panel',
	 'pic', 'container','img/circle_structur.png', 20, 20);	
	

	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualization_panel',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_Tree_Panel',
	'ate:ClickIt_Tree_Panel',
	'',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualization_panel');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualization_panel',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_NetLine_Panel',
	'ate:ClickIt_NetLine_Panel',
	'',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualization_panel');

	// ate:CSV — pedl:Datatype for row-oriented tabular data (rows keyed by SPARQL variable name)
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Datatype',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#CSV',
	'ate:CSV',
	'Row-oriented tabular data — array of {?var: value} objects keyed by SPARQL variable name',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Datatype');

	// deferred from ate:setData block — ate:CSV must exist first
	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2010/08/anttree-lib#setData',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#datatype',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#CSV' );

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualization_panel',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Simple_List_Panel',
	'ate:Simple_List_Panel',
	'Displays a SemanticResult as a labelled SVG list',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualization_panel');

	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Simple_List_Panel',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#datatype',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#CSV' );

	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
	function(som)
	{
		var mysom = som;
		var myGraphicBag = new de.auster_gmbh.graphicelement.visualBag();
		var myData   = null;
		var myTitle  = 'Results';
		var myActive = true;
		var myX      = 50;
		var myY      = 300;
		var pedl_type    = null;
		var labelColumn  = null;
		var uriColumn    = null;

		var SVG_X = 'http://www.w3.org/2000/svg#x';
		var SVG_Y = 'http://www.w3.org/2000/svg#y';
		var SVG_DISPLAY = 'http://www.w3.org/2000/svg#display';
		var PEDL_DATATYPE = 'http://www.auster-gmbh.de/2006/05/pedl-lib#datatype';
		var ATE_SET_DATA  = 'http://www.auster-gmbh.de/2010/08/anttree-lib#setData';

		var ROW_HEIGHT = 22;
		var COL_URI    = 220;

		var STYLE_TITLE  = 'font-size:16px;font-weight:bold;fill:#333;font-family:sans-serif';
		var STYLE_HEADER = 'font-size:11px;fill:#999;font-family:sans-serif';
		var STYLE_LABEL  = 'font-size:14px;fill:#222;font-family:sans-serif';
		var STYLE_URI    = 'font-size:11px;fill:#777;font-family:monospace';

		var makeText = function(str, x, y, style)
		{
			var t = new de.auster_gmbh.graphicelement.svg.SVGText(null, null);
			t.setText(str);
			t.setWayPoint(x, y);
			t.setStyle(style);
			return t;
		};

		var readSVGProp = function(name)
		{
			var edges = mysom.currentObject.output && mysom.currentObject.output[name];
			if (edges && edges.length > 0 && edges[0].successor)
				return edges[0].successor.toString();
			return null;
		};

		mysom.currentObject.getDatatype = function()
		{
			return pedl_type || 'http://www.auster-gmbh.de/2010/08/anttree-lib#CSV';
		};

		mysom.currentObject.getNewPropertyEvent = function(type, message)
		{
			var name = message.getRequester().getName();
			var val  = message.getRequester().successor;
			if (name === SVG_X && val)        myX       = parseFloat(val.toString());
			if (name === SVG_Y && val)        myY       = parseFloat(val.toString());
			if (name === SVG_DISPLAY && val)  myActive  = (val.toString() !== 'none');
			if (name === PEDL_DATATYPE)       pedl_type = val ? val.getName() : null;
			if (name === ATE_SET_DATA) {
				var fn = message.getRequester();
				if (fn.getLabelColumn) labelColumn = fn.getLabelColumn();
				if (fn.getURIColumn)   uriColumn   = fn.getURIColumn();
			}
		};

		mysom.currentObject.setGraphicStuff = function() {};
		mysom.currentObject.init           = function() {
			mysom.currentObject.onActivate('*',
				new de.auster_gmbh.library.tools.eventObject('onActivate', mysom.currentObject, null));
		};
		mysom.currentObject.getNewObject   = function(parentObj, pfad) {
			return mysom.currentObject;
		};
		mysom.currentObject.remove         = function() { myGraphicBag.remove(); };
		mysom.currentObject.visibility     = function(v) {
			myActive = (v !== 'hidden' && v !== 'collapse');
			myGraphicBag.visibility(v);
		};

		mysom.currentObject.setTitle = function(str)  { myTitle  = str || 'Results'; };
		mysom.currentObject.setData  = function(sr)   { myData   = sr; };
		mysom.currentObject.enable   = function()     { myActive = true; };
		mysom.currentObject.disable  = function()     { myActive = false; myGraphicBag.remove(); };

		mysom.currentObject.onActivate = function(type, message)
		{
			if (!myActive) return;

			var x0 = readSVGProp(SVG_X);  if (x0 !== null) myX = parseFloat(x0);
			var y0 = readSVGProp(SVG_Y);  if (y0 !== null) myY = parseFloat(y0);

			var ctx = (message && message.getContext) ? message.getContext() : null;
			if (Array.isArray(ctx)) {
				// ate:CSV — rows keyed by SPARQL variable name, e.g. {"?vieh": "http://..."}
				myData = ctx;
				if (!labelColumn && ctx.length > 0)
					myTitle = Object.keys(ctx[0])[0].replace(/^\?/, '');
				else if (labelColumn)
					myTitle = labelColumn.replace(/^\?/, '');
			} else if (ctx && typeof ctx === 'object' && !ctx.toArray) {
				// ate:SPARQLResult — variable dict (no converter in pipeline)
				var vars = Object.keys(ctx);
				if (vars.length > 0) {
					myData  = ctx[vars[0]];
					myTitle = vars[0].replace(/^\?/, '');
				}
			}

			var STDNODE     = de.auster_gmbh.library.commonrefs.STDNODE;
			var STDLISTENER = de.auster_gmbh.library.commonrefs.STDLISTENER;

			myGraphicBag.remove();
			myGraphicBag = new de.auster_gmbh.graphicelement.visualBag();
			myGraphicBag.setGraphicStuff(STDNODE, STDLISTENER);

			myGraphicBag.add(makeText(myTitle, myX, myY - ROW_HEIGHT * 2, STYLE_TITLE));

			var rows = myData
				? (Array.isArray(myData) ? myData : myData.toArray())
				: [
					{ label: 'http://example.org/TestEntry1', uri: 'http://example.org/TestEntry1' },
					{ label: 'http://example.org/TestEntry2', uri: 'http://example.org/TestEntry2' },
					{ label: 'http://example.org/TestEntry3', uri: 'http://example.org/TestEntry3' }
				];

			myGraphicBag.add(makeText(rows.length + ' item(s)', myX, myY - ROW_HEIGHT, STYLE_HEADER));

			if (myData) {
				var ri = mysom.semantic_web.getObjByRepresentationObj(
					'http://www.auster-gmbh.de/2010/08/anttree-lib#result_item');
				var dataConfig = { labelColumn: labelColumn, uriColumn: uriColumn };
				for (var i = 0; i < rows.length; i++) {
					var inst = ri.getNewObject(STDNODE, STDLISTENER);
					inst.setData(rows[i], i, myX, myY, dataConfig);
					myGraphicBag.add(inst);
				}
			} else {
				for (var i = 0; i < rows.length; i++) {
					var obj = rows[i];
					myGraphicBag.add(makeText(obj.getName(), myX, myY + i * ROW_HEIGHT, STYLE_LABEL));
				}
			}

			myGraphicBag.init();
		};

		mysom.currentObject.onDeactivate = function(type, message)
		{
			console.debug("exit");
			myGraphicBag.remove();
		};
	});

	de.auster_gmbh.library.createIcon(
		'http://www.auster-gmbh.de/2010/08/anttree-lib#Simple_List_Panel',
		'pic', 'container', 'img/panel_list.png', 20, 20);

	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#result_item',
	'ate:result_item',
	'One result row from a SPARQL query — each instance is independent',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class');

	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
	function(som)
	{
		var mysom = som;
		var ROW_HEIGHT  = 22;
		var COL_URI     = 220;
		var STYLE_LABEL = 'font-size:14px;fill:#222;font-family:sans-serif';
		var STYLE_URI   = 'font-size:11px;fill:#777;font-family:monospace';

		// Factory: every call returns a fresh, independent graphic instance
		mysom.currentObject.getNewObject = function(parentObj, pfad)
		{
			var bag = new de.auster_gmbh.graphicelement.visualBag();
			var sw  = de.auster_gmbh.semanticelement.semantic_web;
			var _row = null, _index = 0, _x = 0, _y = 0;

			var _config = {};
			var inst = {
				setData: function(row, index, x, y, config) {
					_row = row; _index = index; _x = x; _y = y;
					_config = config || {};
				},
				setGraphicStuff: function(node, caller) {
					bag.setGraphicStuff(node, caller);
				},
				init: function() {
					if (!_row) return;
					var lc = _config.labelColumn;
					var uc = _config.uriColumn;
					var keys = (typeof _row === 'object') ? Object.keys(_row) : [];
					var label = (lc && _row[lc] !== undefined)
						? _row[lc]
						: (keys.length > 0)
							? _row[keys[0]]
							: (sw.getLabelOf(_row) || (typeof _row.getName === 'function' ? _row.getName() : ''));
					var uri   = (uc && _row[uc] !== undefined)
						? _row[uc]
						: (keys.length > 1)
							? _row[keys[1]]
							: (typeof _row.getName === 'function' ? _row.getName() : label);
					var ry    = _y + _index * ROW_HEIGHT;
					var t = new de.auster_gmbh.graphicelement.svg.SVGText(null, null);
					t.setText(label);
					t.setWayPoint(_x, ry);
					t.setStyle(STYLE_LABEL);
					bag.add(t);
					if (uri && uri !== label) {
						var u = new de.auster_gmbh.graphicelement.svg.SVGText(null, null);
						u.setText(uri);
						u.setWayPoint(_x + COL_URI, ry);
						u.setStyle(STYLE_URI);
						bag.add(u);
					}
					bag.init();
				},
				remove:     function() { bag.remove(); },
				visibility: function(v) { bag.visibility(v); }
			};
			return inst;
		};
	});

	// ate:SPARQL_to_CSV — converts ate:SPARQLResult to ate:CSV (array of {label,uri})
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#SPARQL_to_CSV',
	'ate:SPARQL_to_CSV',
	'Converter: ate:SPARQLResult → ate:CSV',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class');

	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2010/08/anttree-lib#SPARQL_to_CSV',
	'http://www.w3.org/2000/01/rdf-schema#domain',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#SPARQLResult' );

	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2010/08/anttree-lib#SPARQL_to_CSV',
	'http://www.w3.org/2000/01/rdf-schema#range',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#CSV' );

	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
	function(som)
	{
		var mysom = som;
		var from_type = null;
		var to_type   = null;

		mysom.currentObject.getNewPropertyEvent = function(type, message)
		{
			var name = message.getRequester().getName();
			var succ = message.getRequester().successor;
			if(name == 'http://www.w3.org/2000/01/rdf-schema#domain')
				from_type = succ ? succ.getName() : message.getRequester().toString();
			if(name == 'http://www.w3.org/2000/01/rdf-schema#range')
				to_type   = succ ? succ.getName() : message.getRequester().toString();
		};

		mysom.currentObject.getFromType = function() { return from_type; };
		mysom.currentObject.getToType   = function() { return to_type; };

		mysom.currentObject.convert = function(sparqlResult)
		{
			if(!sparqlResult) return [];
			var rows = [];
			var keys = Object.keys(sparqlResult);
			if(keys.length === 0) return rows;
			var firstCol = sparqlResult[keys[0]].toArray();
			for(var i = 0; i < firstCol.length; i++) {
				var row = {};
				for(var k = 0; k < keys.length; k++) {
					var col = sparqlResult[keys[k]].toArray();
					var val = col[i];
					row[keys[k]] = (typeof val === 'string')
						? val
						: (val && typeof val.getName === 'function' ? val.getName() : String(val));
				}
				rows.push(row);
			}
			return rows;
		};
	});


 	// --> http://www.auster-gmbh.de/2010/08/anttree-lib !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.auster-gmbh.de/2010/08/anttree-lib',1);
 	
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualisaton_Option',
	'ate:Visualisaton_Option',
	'Offers a spezial view of visualisations',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#startSeq',
	'ate:startSeq',
	'Startnode for controlsequences',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class');
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualisaton_Option',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Bag_visualsation',
	'ate:Bag_visualsation',
	'Offers a Bag view of the net',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualisaton_Option');
	
 	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
	function(som)
 	{
 	var mysom = som;
 	
  	  	mysom.currentObject.prev = function(element,pos)
		{
			
  			return element.getContainerOwner(pos);
		}
		
  	  	mysom.currentObject.prev_many = function(element)
		{
			
			return element.container_many();
  				
		}
 	  	
 	  	mysom.currentObject.next = function(element,pos)
		{
			return element.getBagElement(pos);
  				
		}
		
 	  	mysom.currentObject.next_many = function(element)
		{
			return element.bag_many();
  				
		}
	});	
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualisaton_Option',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Attrib_visualsation',
	'ate:Attrib_visualsation',
	'Offers a attribute view of the net',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualisaton_Option');
 	
 	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
	function(som)
 	{
 	
 	var mysom = som;
 	
  	  	mysom.currentObject.prev = function(element,pos)
		{
			
  			return element.getContainerOwner(pos);
		}
		
  	  	mysom.currentObject.prev_many = function(element)
		{
			
			return element.container_many();
  				
		}
 	  	
 	  	mysom.currentObject.next = function(element,pos)
		{
			return element.getBagElement(pos);
  				
		}
		
 	  	mysom.currentObject.next_many = function(element)
		{
			return element.bag_many();
  				
		}
	});	
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualisaton_Option',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#taxom_visualsation',
	'ate:taxom_visualsation',
	'Offers a taxom view of the net',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualisaton_Option');
 	
 	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
	function(som)
 	{
 	
 	var mysom = som;
 	
  	  	mysom.currentObject.prev = function(element,pos)
		{
			 	

  		if(element.handling == 0)
  		{
  			if(element.output['http://www.w3.org/2000/01/rdf-schema#subClassOf'] == undefined)return false;
  		
  			if(element.output['http://www.w3.org/2000/01/rdf-schema#subClassOf'].length > pos)
  			{

 					return element.output['http://www.w3.org/2000/01/rdf-schema#subClassOf'][pos].successor;

  			}
  			return false;
  			
  			
  		}
 		else
  		{
  			if(element.output['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'] == undefined)
  			{
  			

 					return false
  			}
  		
  			if(element.output['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'].length > pos)
  			{
 				return element.output['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'][pos].successor;
 				
 			
  			}
  			return false;
  			
  			
  		}
		}
		
  	  	mysom.currentObject.prev_many = function(element)
		{
			
  		if(element.handling == 0)
  		{
  			if(element.output['http://www.w3.org/2000/01/rdf-schema#subClassOf'] == undefined)return 0;
  		
  			return element.output['http://www.w3.org/2000/01/rdf-schema#subClassOf'].length;
  			
  			
  		}
 		else
  		{
  			if(element.output['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'] == undefined)return 0;
  		
  			return element.output['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'].length;
  			
  			
  		}
  				
		}
 	  	
 	  	mysom.currentObject.next = function(element,pos)
		{

  		if(element.handling == 0)
  		{
  			if(element.input['http://www.w3.org/2000/01/rdf-schema#subClassOf'] == undefined)return false;
  		
  			if(element.input['http://www.w3.org/2000/01/rdf-schema#subClassOf'].length > pos)
  			{
  			  	return element.input['http://www.w3.org/2000/01/rdf-schema#subClassOf'][pos].antecessor;

  			}
  			return false;
  			
  			
  		}
 		else
  		{
  			if(element.input['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'] == undefined)return false;
  		
  			if(element.input['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'].length > pos)
  			{

 					return element.input['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'][pos].antecessor;
 				
 			
  			}
  			return false;
  			
  			
  		}
  				
		}
		
 	  	mysom.currentObject.next_many = function(element)
		{

		
  		if(element.handling == 0)
  		{
  			if(element.input['http://www.w3.org/2000/01/rdf-schema#subClassOf'] == undefined)return 0;
  		
  			return element.input['http://www.w3.org/2000/01/rdf-schema#subClassOf'].length;
  			
  			
  		}
 		else
  		{
  			if(element.input['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'] == undefined)return 0;
  		
  			return element.input['http://www.w3.org/2000/01/rdf-schema#subPropertyOf'].length;
  			
  		}
  				
		}
	});	
	
	 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualisaton_Option',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#type_inherit_visualsation',
	'ate:type_inherit_visualsation',
	'Offers a taxom view of the net',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualisaton_Option');
 	
 	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
	function(som)
 	{
 	
 	var mysom = som;
 	
  	  	mysom.currentObject.prev = function(element,pos)
		{

 		
 		if(element == undefined)return false;
 
		if(element.clazz != null)
		if(element.clazz.representation != undefined)
		{
			element = element.clazz.representation;
		}

		
		if(element.superObj != undefined)return element.superObj;
		}

		
  	  	mysom.currentObject.prev_many = function(element)
		{
			
 		if(element == undefined)return 0;
 
		if(element.clazz != null)
		if(element.clazz.representation != undefined)
		{
			element = element.clazz.representation;
		}

		
		if(element.superObj != undefined)return 1;
		return 0;
  				
		}
 	  	
 	  	mysom.currentObject.next = function(element,pos)
		{


  			return false;

  				
		}
		
 	  	mysom.currentObject.next_many = function(element)
		{

		return  0;

  				
		}
	});
 
 
 
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#hasVisualisationOptions',
	'ate:hasOptions',
	'connects options to Visualisations',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2010/08/anttree-lib#hasVisualisationOptions', 
	'http://www.w3.org/2000/01/rdf-schema#domain', 
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualization_panel' );
	
	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2010/08/anttree-lib#hasVisualisationOptions', 
	'http://www.w3.org/2000/01/rdf-schema#range', 
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualisaton_Option' );
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#hasInformationSource',
	'ate:hasInformationSource',
	'a link from a branch to a System_Information_Resource',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
 	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#hasInformationSource',
	'ate:hasInformationSource',
	'a link from a branch to a System_Information_Resource',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2010/08/anttree-lib#hasInformationSource', 
	'http://www.w3.org/2000/01/rdf-schema#domain', 
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Branch' );
	
	de.auster_gmbh.semanticelement.semantic_web.setIDGraph(
	'http://www.auster-gmbh.de/2010/08/anttree-lib#hasInformationSource', 
	'http://www.w3.org/2000/01/rdf-schema#range', 
	'http://www.auster-gmbh.de/2010/08/anttree-lib#System_Information_Resource' );
 	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag',
	undefined,
	'new Datatypes',
	'');
	
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/2001/XMLSchema#simpleType',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#CSV',
	'ate:CSV',
	'',
	'http://www.w3.org/2001/XMLSchema#simpleType');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#CSV',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#DirectedNetStructure',
	'ate:DirectedNetStructure',
	'',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#CSV');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#CSV',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#TreeStructure',
	'ate:TreeStructure',
	'',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#CSV');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#CSV',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#ChaoticNetStructure',
	'ate:ChaoticNetStructure',
	'',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#CSV');
 	

 	
 	
 	de.auster_gmbh.semanticelement.semantic_web.setIDGraph('http://www.auster-gmbh.de/2010/08/anttree-lib#System_Information_Resource',
 	'http://www.auster-gmbh.de/2010/08/anttree-lib#needsVisualisation',
 	'http://www.auster-gmbh.de/2010/08/anttree-lib#Visualization_panel' );
 	
 	de.auster_gmbh.semanticelement.semantic_web.setPropertyDataEntry(
 	'http://www.auster-gmbh.de/2010/08/anttree-lib#client',
 	'http://www.auster-gmbh.de/2010/08/anttree-lib#usesDatatype',
 	'http://www.auster-gmbh.de/2010/08/anttree-lib#DirectedNetStructure',
 	'ate:usesDatatype');
 	
 	 de.auster_gmbh.semanticelement.semantic_web.setPropertyDataEntry(
 	'http://www.auster-gmbh.de/2010/08/anttree-lib#client',
 	'http://www.auster-gmbh.de/2010/08/anttree-lib#usesDatatype',
 	'http://www.auster-gmbh.de/2010/08/anttree-lib#TreeStructure',
 	'ate:usesDatatype');
 	
  	 de.auster_gmbh.semanticelement.semantic_web.setPropertyDataEntry(
 	'http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel',
 	'http://www.auster-gmbh.de/2010/08/anttree-lib#supportsDatatype',
 	'http://www.auster-gmbh.de/2010/08/anttree-lib#TreeStructure',
 	'ate:supportsDatatype');
 	
  	 de.auster_gmbh.semanticelement.semantic_web.setPropertyDataEntry(
 	'http://www.auster-gmbh.de/2010/08/anttree-lib#ClickIt_TopTree_Panel',
 	'http://www.auster-gmbh.de/2010/08/anttree-lib#supportsDatatype',
 	'http://www.auster-gmbh.de/2010/08/anttree-lib#DirectedNetStructure',
 	'ate:supportsDatatype');
 	
 	 de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2010/08/anttree-lib#Bag_visualsation',
	 'pic', 'container','img/sbag_gross.png', 20, 20);
	 
	 de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2010/08/anttree-lib#taxom_visualsation',
	 'pic', 'container','img/taxom_gross.png', 20, 20);	
	 
	 de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2010/08/anttree-lib#Attrib_visualsation',
	 'pic', 'container','img/attrib_gross.png', 20, 20);
	 
	 de.auster_gmbh.library.createIcon('http://www.auster-gmbh.de/2010/08/anttree-lib#type_inherit_visualsation',
	 'pic', 'container','img/type_inherit.png', 20, 20);
	 	
 	
 	de.auster_gmbh.semanticelement.semantic_web.rootNode(1);
 	
 	de.auster_gmbh.semanticelement.semantic_web.getNameSpaceObj('http://www.auster-gmbh.de/2010/08/anttree-lib',1);
	pedlOnt = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/2002/07/owl#Ontology' );
	about = de.auster_gmbh.semanticelement.semantic_web.getObjecttoClazz( 'http://www.w3.org/1999/02/22-rdf-syntax-ns#about' );
	about.about(pedlOnt,'http://www.auster-gmbh.de/2010/08/anttree-Theme-lib');
	de.auster_gmbh.semanticelement.semantic_web.setRef2(pedlOnt); 
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	de.auster_gmbh.semanticelement.semantic_web.setGraphObj( 'http://www.w3.org/2002/07/owl#imports' );
 	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(1,'http://www.w3.org/2000/01/rdf-schema#label','Anttree-Theme-Lib');

	/* Deaktiv */

    de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#storyteller',
	'ate:storyteller',
	'storyteller',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class');

	
	 	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
 	function(som)
 	{
 	  	var mysom = som;
 	  	var display = null;
 	  	var views = [];
 	  	var actions = [];
 	  	var entrypoint = "";
 	  	var person = null;
 	  	var story = [];
 	  	var distributeResources = function(view)
 	  	{
 	  		var area = null;
 	  		
 	  		if('http://www.auster-gmbh.de/ontologies/rauhnacht-odyssey#isIn' in person.output)
 	  			if(person.output['http://www.auster-gmbh.de/ontologies/rauhnacht-odyssey#isIn'].length > 0)
 	  				if(area = person.output['http://www.auster-gmbh.de/ontologies/rauhnacht-odyssey#isIn'][0].successor)
 	  				{
 	  				
 	  				story.push( view.deliversContent(person, area) );
 	  				
 	  				}
 	  			
 	  			
 	  	}


  	
  		mysom.currentObject.onActivate = function( type , message )
  		{
  			// build up display
  			if(display.onActivate != null)
				{
					//alert("tech: onActivate");
					var eventobj = new de.auster_gmbh.library.tools.eventObject('*',mysom.currentObject,null);
					display.onActivate('*',eventobj);
					var meEl = mysom.semantic_web.getObjByRepresentationObj(entrypoint);
					if('http://www.auster-gmbh.de/ontologies/rauhnacht-odyssey#is' in meEl.output)
						if(0 in meEl.output['http://www.auster-gmbh.de/ontologies/rauhnacht-odyssey#is'])
							if(person = meEl.output['http://www.auster-gmbh.de/ontologies/rauhnacht-odyssey#is'][0].successor)
							{
								

								views.forEach(distributeResources);
								console.debug(story);
								story.forEach((element) => { display.addNewStoryElement(element); });
								display.refresh();

								
							}
					
				}
				else
				{
					console.error(display.getName() + ':Function "onActivate" is not available');
				}

		}
		
  		mysom.currentObject.onDeactivate = function( type , message )
  		{
			//myGraphicBag.remove();
			//myGraphicBag = new de.auster_gmbh.graphicelement.visualBag();
		}
		
		mysom.currentObject.getNewPropertyEvent = function(type, message)
		{
			//alert(type + " total irre, ein BagEntryEvent!");	
			if(message.getRequester().isSubClassOf('http://www.auster-gmbh.de/2010/08/anttree-lib#hasDisplay'))
			{
				if(message.getRequester().successor)
					display = message.getRequester().successor;
			}
			
			if(message.getRequester().isSubClassOf('http://www.auster-gmbh.de/2010/08/anttree-lib#hasStoryView'))
			{
				if(message.getRequester().successor)
					views.push(message.getRequester().successor);
			}

			if(message.getRequester().isSubClassOf('http://www.auster-gmbh.de/2010/08/anttree-lib#hasStoryAction'))
			{
				if(message.getRequester().successor)
					actions.push(message.getRequester().successor);
			}
			
			if(message.getRequester().isSubClassOf('http://www.auster-gmbh.de/2010/08/anttree-lib#hasEntryForEntity'))
			{
				if(message.getRequester().successor)
					if(message.getRequester().successor.toString)
					entrypoint = message.getRequester().successor.toString();
			}

		}
		

 	}
 	);
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#storyView',
	'ate:storyteller',
	'storyteller',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class');	

	
	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
 	function(som)
 	{
 	  	var mysom = som;



  	
  		mysom.currentObject.deliversContent = function( person, area )
  		{
  			if(this.landscape)
  				{
  					return this.landscape(area);
  				}
  			return "yes";
		}
		

	}
 	);
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#hasStoryView',
	'ate:hasStoryView',
	'has story view',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');

	de.auster_gmbh.semanticelement.semantic_web.definePropertyVicinity(
		'http://www.auster-gmbh.de/2010/08/anttree-lib#storyteller',
		'http://www.auster-gmbh.de/2010/08/anttree-lib#hasStoryView',
		'http://www.auster-gmbh.de/2010/08/anttree-lib#storyView');

	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#storyView',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#ViewOnLandscape',
	'ate:ViewOnLandscape',
	'ViewOnLandscape',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#storyView');	
	
	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
 	function(som)
 	{
 	  	var mysom = som;



  	
  		mysom.currentObject.landscape = function( area )
  		{
  			console.debug(area);
  			var textElement = null;
  			 if('http://www.auster-gmbh.de/ontologies/rauhnacht-odyssey#hasLandscapeDescription' in area.output)
 	  			if(area.output['http://www.auster-gmbh.de/ontologies/rauhnacht-odyssey#hasLandscapeDescription'].length > 0)
 	  				if(textElement = area.output['http://www.auster-gmbh.de/ontologies/rauhnacht-odyssey#hasLandscapeDescription'][0].successor)
 	  				{
 	  				
 	  					console.debug(textElement);
  			
  					return textElement.toString();
  					}
		

  		}
	}
 	);	
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#storyView',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#ViewOnPeople',
	'ate:ViewOnLandscape',
	'ViewOnLandscape',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#storyView');	
	
 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#storyAction',
	'ate:storyteller',
	'storyteller',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class');	

	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#hasStoryAction',
	'ate:hasStoryView',
	'has story view',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');

	de.auster_gmbh.semanticelement.semantic_web.definePropertyVicinity(
		'http://www.auster-gmbh.de/2010/08/anttree-lib#storyteller',
		'http://www.auster-gmbh.de/2010/08/anttree-lib#hasStoryAction',
		'http://www.auster-gmbh.de/2010/08/anttree-lib#storyAction');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#hasEntryForEntity',
	'ate:hasEntryForEntity',
	'has Entry For Entity',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#hasDisplay',
	'ate:hasDisplayPipeline',
	'has Display Pipeline',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#isUsedAsDisplay',
	'ate:hasDisplayPipeline',
	'has Display Pipeline',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Display',
	'ate:hasDisplayPipeline',
	'has Display Pipeline',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class');
	

	
	 	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
 	function(som)
 	{
 	  	var mysom = som;
 	  	var story_line = [];
 	  	var display = null;

  	
  		mysom.currentObject.onActivate = function( type , message )
  		{
  			// build up display
  			//displayPipeline
  			//console.debug(display.getGraphicalElement()); //.getGraphicalElement()

  			//$( "<div><h2>tolle story</h2><div>Kam da mal eine Kuh, Kam da mal eine Kuh, Kam da mal eine Kuh, Kam da mal eine Kuh, Kam da mal eine Kuh, Kam da mal eine Kuh, Kam da mal eine Kuh, Kam da mal eine Kuh, Kam da mal eine Kuh, </div></div>").appendTo(display.getGraphicalElement());
  			//display.getGraphicalElement().textContent += "This just got added------------------------------------------------------------";
  			/*
  			if(displayPipeline.input['http://www.auster-gmbh.de/2006/05/pedl-lib#pipe_in']);
  				if(displayPipeline.input['http://www.auster-gmbh.de/2006/05/pedl-lib#pipe_in'][0])  			
  			console.debug(displayPipeline.input['http://www.auster-gmbh.de/2006/05/pedl-lib#pipe_in'][0]);
*/
		}
		
  		mysom.currentObject.addNewStoryElement = function(storyElement)
  		{
  			story_line.push(storyElement);
  		}
		
  		mysom.currentObject.refresh = function()
  		{
  			story_line.forEach(function (element) 
  				{ 
  					console.log(element);
  					$( "<div>" + element + "</div>").appendTo(display.getGraphicalElement());
  				}
  				);
  		}
  		
  		mysom.currentObject.onDeactivate = function( type , message )
  		{
			//myGraphicBag.remove();
			//myGraphicBag = new de.auster_gmbh.graphicelement.visualBag();
		}
		
		mysom.currentObject.getNewPropertyEvent = function(type, message)
		{
			//alert(type + " total irre, ein BagEntryEvent!");	
			//if(message.getRequester().getName() == 'http://www.auster-gmbh.de/2010/08/anttree-lib#hasDisplayPipeline')
			//{
			//	if(message.getRequester().successor)
			//displayPipeline = message.getRequester().successor;
			//}

			if(message.getRequester().getName() == 'http://www.auster-gmbh.de/2010/08/anttree-lib#isUsedAsDisplay')
			{
				if(message.getRequester().antecessor)
					display = message.getRequester().antecessor;
			}
			


				//display.setText("ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
			
				


		}
		

 	}
 	);	
	

 	de.auster_gmbh.semanticelement.semantic_web.definePropertyVicinity(
		'http://www.auster-gmbh.de/2010/08/anttree-lib#storyteller',
		'http://www.auster-gmbh.de/2010/08/anttree-lib#hasDisplay',
		'http://www.auster-gmbh.de/2010/08/anttree-lib#Display');
 	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#connectorToElementInSpace',
	'ate:connectorToElementInSpace',
	'connector To Area',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');

 	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#ElementInSpace',
	'ate:ElementInSpace',
	'ElementInSpace',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class');	
	
 	de.auster_gmbh.semanticelement.semantic_web.definePropertyVicinity(
		'http://www.auster-gmbh.de/2010/08/anttree-lib#storyteller',
		'http://www.auster-gmbh.de/2010/08/anttree-lib#hasDisplay',
		'http://www.auster-gmbh.de/2010/08/anttree-lib#Display');
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#connectorToArea',
	'ate:connectorToArea',
	'connector To Area',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property');
	
	    de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Map',
	'ate:storyteller',
	'storyteller',
	'http://www.auster-gmbh.de/2006/05/pedl-lib#Class');

	
	 	de.auster_gmbh.semanticelement.semantic_web.setBehavior(2,
 	function(som)
 	{
 	  	var mysom = som;
 	  	var display = null;
 	  	var views = [];
 	  	var actions = [];
 	  	var entrypoint = "";
 	  	var person = null;
 	  	var story = [];



  	
  		mysom.currentObject.onActivate = function( type , message )
  		{
/*
  			var allElements = document.getElementsByTagName("*");
  			console.debug(allElements);
  			 const parentDOM = document.getElementById("map");
  			 console.debug(parentDOM);
*/
  			 //$( "<div>boop</div>").appendTo("#map");
  			 var map = L.map('map', {crs: L.CRS.Simple});
  			 var bounds = [[0,0], [1000,1000]];
  			 var image = L.imageOverlay('img/uqm_map_full.png', bounds).addTo(map);
  			 	map.fitBounds(bounds);
  			 //var map = L.map('map').setView([51.505, -0.09], 13);
  			 /*
  			 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
*/
  			//$( "test-----------------------------------------------------------------test").appendTo(parentDOM);
		}
		
  		mysom.currentObject.onDeactivate = function( type , message )
  		{
			//myGraphicBag.remove();
			//myGraphicBag = new de.auster_gmbh.graphicelement.visualBag();
		}
		
		mysom.currentObject.getNewPropertyEvent = function(type, message)
		{
			//alert(type + " total irre, ein BagEntryEvent!");	
			if(message.getRequester().isSubClassOf('http://www.auster-gmbh.de/2010/08/anttree-lib#hasDisplay'))
			{
				if(message.getRequester().successor)
					display = message.getRequester().successor;
			}
			

		}

 	}
 	);
	
	
	de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#working-structure',
	undefined,
	'Browser-display',
	'Visualisation of the Semweb');
	de.auster_gmbh.semanticelement.semantic_web.swappointer();
	 de.auster_gmbh.semanticelement.semantic_web.createFullBagEntry(
	1,
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Theme',
	'http://www.auster-gmbh.de/2010/08/anttree-Theme-lib#Browser',
	'T-ate:Browser',
	'Visualisation of the Semweb',
	'http://www.auster-gmbh.de/2010/08/anttree-lib#Theme');
	
	de.auster_gmbh.semanticelement.semantic_web.setGraphLiteral(2, 
	'http://www.auster-gmbh.de/2010/08/anttree-lib#ThemeBoundVisualisationNode', 'http://www.auster-gmbh.de/2010/08/anttree-lib#drawIllustration' );
	




 	de.auster_gmbh.semanticelement.semantic_web.rootNode(1);
 	
 	
