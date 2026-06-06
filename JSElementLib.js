if(!de) de = {};
 else if (typeof de != 'object')
 throw new Error('de allready exists and os not an object'); 

 if(!de.auster_gmbh) de.auster_gmbh = {};
 else if (typeof de.auster_gmbh != 'object')
 throw new Error('de.auster_gmbh allready exists and os not an object'); 

 if(!de.auster_gmbh.controllelement_toolbox) de.auster_gmbh.controllelement_toolbox = {};
 else if (typeof de.auster_gmbh.controllelement_toolbox != 'object')
 throw new Error('de.auster_gmbh.controllelement allready exists and os not an object'); 

//-------------------Object Element Tools-----------------------------------

de.auster_gmbh.controllelement_toolbox.tools = {}
de.auster_gmbh.controllelement_toolbox.tools.bar_status = function(container)
{
	if(container !== undefined)
	return !container[0].closed;
	else
	{
		console.error("malfunction in bar_status (container is undefined)");
		return true;
	}
}
de.auster_gmbh.controllelement_toolbox.tools.openControl = function(container)
{
	var listGE = new Array();
	listGE[0] = new Array();

  			if(container[0].closed)
  			{
  			
  			
  			for(iter = 1;container.length > iter;iter++)
  			{
  				container[iter].transit(0,0);
  			}
  			
  			
  			listGE[0][0] = container[0];
  			listGE[0][1] = 0;
  			listGE[0][2] = 0;
  			
  			de.auster_gmbh.graphicelement.sequenceMoveToPoint(listGE);
  			//this.container[0].transit(0,0);
  			container[0].closed = false;
  			

  			
  			}
  			else
  			{
  			
  			for(iter = 1;container.length > iter;iter++)
  			{
  				container[iter].transit(-1300,0);
  			}
  			
  			listGE[0][0] = container[0];
  			listGE[0][1] = -270;
  			listGE[0][2] = 0;
  			
  			de.auster_gmbh.graphicelement.sequenceMoveToPoint(listGE);
  			//this.container[0].transit(-270,0);
  			container[0].closed = true;
  			
  			

  			}

}
