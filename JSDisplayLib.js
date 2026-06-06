de.auster_gmbh.library.tools.displayElements = {};
de.auster_gmbh.library.tools.displayElements.assembleThemeBar = function(visBag,top,left,width,height,svg_container,Eventlistener)
{
	//visBag.remove();
	visBag.delete();
	var myList = de.auster_gmbh.semanticelement.semantic_web.showAllThemes()
		.filter((el) => el?.givesSymbol?.());

	
	var visElement = new de.auster_gmbh.graphicelement.visualElement();
	var many = myList.length + 1;
	var division_X = (1/many) * width;
	var addme = division_X;
	var symbol = null;
	var id = 0;
	for(var it = 0;it < myList.length;it++)
	{
		


									id = myList[it].innerID;		
									
									if(myList[it].givesSymbol())
									{
									console.debug("In progress:", myList[it].getName());
									symbol = myList[it].givesSymbol().getNewObject(svg_container,Eventlistener);
									symbol.setWayPoint( left + addme  , top + 20); // + ((height * it) / many)
									addme += division_X;
									symbol.setDimension(60,60);
									symbol.setID( 'theme_' + id + '_onClick');
									visElement.add(symbol);
									visBag.add(visElement);
									symbol.init();
									//alert(id);
									}
									else
									{
										console.error(myList[it].getName() + "(" + id + ") is invalid (" + it + "," + myList.length + ")");
									}
									

	
	}
	
}

