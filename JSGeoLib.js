de.auster_gmbh.library.tools.geoElements = {};
de.auster_gmbh.library.tools.geoElements.assembleGeoField = function(visBag,top,left,width,height)
{
	
	
	var mymap = L.map('mapid').setView([51.505, -0.09], 13);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=MAPBOX_ACCESS_TOKEN', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);



	
	//visBag.remove(); 
	/*
	visBag.delete();
	var myList = de.auster_gmbh.semanticelement.semantic_web.showAllThemes();
	var visElement = new de.auster_gmbh.graphicelement.visualElement();
	var many = myList.length + 1;
	var division_X = (1/many) * width;
	var addme = division_X;
	var symbol = null;
	var id = 0;
	for(var it = 0;it < myList.length;it++)
	{
		


									id = myList[it].innerID;		
									symbol = myList[it].givesSymbol().getNewObject(svg_container,Eventlistener);
									symbol.setWayPoint( left + addme  , top + 20); // + ((height * it) / many)
									addme += division_X;
									symbol.setDimension(60,60);
									symbol.setID( 'theme_' + id + '_onClick');
									visElement.add(symbol);
									visBag.add(visElement);
									symbol.init();
									//alert(id);
		*/							
		/*
		for(var iter = 0; iter < myList[it].bag_many(); iter++)
	{
		id = myList[it].innerID;	
					if(myList[it].getBagElement(iter).getName() == 
					'http://www.auster-gmbh.de/2010/08/anttree-lib#isDisplayed2DImage')
					{
							
						for(var iter2 = 0; iter2 < myList[it].getBagElement(iter).bag_many(); iter2++)
						{
							if(myList[it].getBagElement(iter).getBagElement(iter2).getName() == 
								'http://www.w3.org/2000/svg#image')
								{
									
									
									symbol = myList[it].getBagElement(iter).getBagElement(iter2).getNewObject(svg_container,Eventlistener);
									symbol.setWayPoint( left + addme  , top + 20); // + ((height * it) / many)
									addme += division_X;
									symbol.setDimension(60,60);
									symbol.setID( 'theme_' + id + '_onClick');
									visElement.add(symbol);
									visBag.add(visElement);
									symbol.init();
									
								}
							}
							
						}
	}
	
	
	} */ 
	
}

