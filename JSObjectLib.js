 if(!de) de = {};
 else if (typeof de != 'object')
 throw new Error('de allready exists and os not an object'); 

 if(!de.auster_gmbh) de.auster_gmbh = {};
 else if (typeof de.auster_gmbh != 'object')
 throw new Error('de.auster_gmbh allready exists and os not an object'); 

 if(!de.auster_gmbh.objectelement_toolbox) de.auster_gmbh.objectelement_toolbox = {};
 else if (typeof de.auster_gmbh.objectelement_toolbox != 'object')
 throw new Error('de.auster_gmbh.objectelement allready exists and os not an object'); 

//-------------------Object Element Tools-----------------------------------

de.auster_gmbh.objectelement_toolbox.tools = {}
de.auster_gmbh.objectelement_toolbox.tools.bar_status = function(container)
{
	return !container[0].closed;
}
de.auster_gmbh.objectelement_toolbox.tools.open_bar = function(container)
{
  			var args_array = new Array();
  			var it = 0;
  			  			
  			if(container[0].closed)
  			{
  			

  		if(!container[1]['InsertNode'].closed)
  		{  		
  			
  			args_array[it] = new Array();
  			args_array[it][0] = container[1]['InsertNode'];
  			args_array[it][1] = 0;
  			args_array[it][2] = 0;
  			args_array[it++][3] = 'my1';
  		}

  		if(!container[1]['NodeWeb'].closed)
  		{
  		
  			args_array[it] = new Array();
  			args_array[it][0] = container[1]['NodeWeb'];
  			args_array[it][1] = 0;
  			args_array[it][2] = 0;
  			args_array[it++][3] = 'my1';
  		}


  			args_array[it] = new Array();
  			args_array[it][0] = container[0];
  			args_array[it][1] = 0;
  			args_array[it][2] = 0;
  			args_array[it++][3] = 'my1';
  			
  			
  				//this.movetToPoint(container[0],0,0);
  				//container[0].transit(0,0);
  				container[0].closed = false;
  				//container[1].transit(0,0);
  				//container[1].closed = false;
  				
  				de.auster_gmbh.graphicelement.sequenceMoveToPoint( args_array );
  				
  				
  			}
  			else
  			{
  			
  			args_array[it] = new Array();
  			args_array[it][0] = container[0];
  			args_array[it][1] = (-1 * (window.innerWidth)) + 120;
  			args_array[it][2] = 0;
  			args_array[it++][3] = 'my1';
  			

  		if(!container[1]['NodeWeb'].closed)
  		{  		
  			
  			args_array[it] = new Array();
  			args_array[it][0] = container[1]['NodeWeb'];
  			args_array[it][1] = 0;
  			args_array[it][2] = (-1 * (window.innerHeight - 20));
  			args_array[it++][3] = 'my1';
  		}

  		if(!container[1]['InsertNode'].closed)
  		{
  		
  			args_array[it] = new Array();
  			args_array[it][0] = container[1]['InsertNode'];
  			args_array[it][1] = 0;
  			args_array[it][2] = (-1 * 400);
  			args_array[it++][3] = 'my1';
  		}

  			
  				//this.movetToPoint(container[0],0,0);
  				//container[1].transit(0,-1 * (window.innerHeight - 20));
  				//container[1].closed = false;
  				//container[0].transit((-1 * (window.innerWidth)) + 120,0);
  				//this.movetToPoint(container[0],(-1 * (window.innerWidth)) + 120,0);
  				container[0].closed = true;
  				de.auster_gmbh.graphicelement.sequenceMoveToPoint( args_array );
  			}

}
de.auster_gmbh.objectelement_toolbox.tools.open_NewNode = function(container)
{
  		if(container[1]['InsertNode'].closed)
  		{
  		
  		var args_array = new Array();
  		
  		
  		args_array[0] = new Array();
  		args_array[0][0] = container[1]['InsertNode'];
  		args_array[0][1] = 0;
  		args_array[0][2] = 0;
  		args_array[0][3] = 'my1';
  		

  		
  		de.auster_gmbh.graphicelement.sequenceMoveToPoint( args_array );
  		container[1]['InsertNode'].closed = false;
 
  		}
  		else
  		{

  		var args_array = new Array();

   		args_array[0] = new Array();
  		args_array[0][0] = container[1]['InsertNode'];
  		args_array[0][1] = 0;
  		args_array[0][2] = (-1 * 400);
  		args_array[0][3] = 'my2';
  		
  		de.auster_gmbh.graphicelement.sequenceMoveToPoint( args_array );
  		container[1]['InsertNode'].closed = true;
  			
  		}
  			
};

de.auster_gmbh.objectelement_toolbox.tools.functions = {};

de.auster_gmbh.objectelement_toolbox.tools.functions.neutral = function(arrayobj,semweb,parentObj,pfad)
{
	
	 	var mycontainer = new de.auster_gmbh.graphicelement.visualElement();
		
		mycontainer.setID('entry');
		
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGforeign(parentObj);
		mysvg.transit(240,125);
		mysvg.setWayPoint(0,10);
		mysvg.setDimension(350,200);
		mysvg.setID('SVGforeign');
		
		var myxhtml = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('p',pfad);
		myxhtml.setText('Testpage');
		myxhtml.setStyle( 'position:absolute;left:40px;border:none ;' );
		myxhtml.setAttribute('size','33');
		myxhtml.setID('URI');
		
		var uriInsertElement = myxhtml;
		
		mysvg.add( myxhtml );

		mycontainer.add(mysvg);
		
		mycontainer.init();
		
		arrayobj[0][0].add(mycontainer);
};

de.auster_gmbh.objectelement_toolbox.tools.functions.info = function(arrayobj,semweb,parentObj,pfad)
{
	
	 	var mycontainer = new de.auster_gmbh.graphicelement.visualElement();
		
		mycontainer.setID('entry');
		
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGforeign(parentObj);
		mysvg.transit(170,25);
		mysvg.setWayPoint(0,10);
		mysvg.setDimension(1050,600);
		mysvg.setID('SVGforeign');
		
		var div = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('div',pfad); //background-color:none;
		div.setStyle( 'position:relative;left:0px;width:930px;height:500px;border:none;overflow:auto;' );
		
		var table = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('table',pfad);
		var tr = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('tr',pfad);
		var td = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('td',pfad);
		td.setText('URI:');
		tr.add(td);
		

		
		td = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('td',pfad);
		td.setText('URI: ' + semweb.curNode(1));
		//td.setStyle( 'position:absolute;left:40px;border:none ;color:red;' );
		//myxhtml.setAttribute('size','33');
		td.setID('URI');
		
		
		tr.add(td);
		table.add(tr);
		

		
		tr = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('tr',pfad);
		td = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('td',pfad);
		td.setText('Label:');
		tr.add(td);
		
		td = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('td',pfad);
		td.setText(semweb.getLabel(1));
		//td.setStyle( 'position:absolute;left:40px;top:20px;border:none ;color:black;' );
		td.setID('label');
		tr.add(td);
		table.add(tr);
		
		tr = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('tr',pfad);
		td = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('td',pfad);
		td.setText('Comment:');
		tr.add(td);
		
		td = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('td',pfad);
		//td.setStyle( 'position:absolute;left:40px;top:40px;border:none ;' );
		td.setText( semweb.getComment(1));
		td.setID('Comment');
		tr.add(td);
		table.add(tr);
		
		tr = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('tr',pfad);
		td = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('td',pfad);
		td.setText('id:');
		td.setStyle( 'font-size:10px;' );
		tr.add(td);
		
		
		td = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('td',pfad);
		//td.setStyle( 'position:absolute;left:40px;top:40px;border:none ;' );
		td.setText( semweb.getID(1));
		td.setID('id');
		td.setStyle( 'font-size:10px;' );
		tr.add(td);
		table.add(tr);
		
		tr = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('tr',pfad);
		td = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('td',pfad);
		td.setText('trace:');
		td.setStyle( 'font-size:10px;' );
		tr.add(td);
		
		td = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('td',pfad);
		//td.setStyle( 'position:absolute;left:40px;top:40px;border:none ;' );
		td.setText( semweb.getTrace(1));
		td.setID('id');
		td.setStyle( 'font-size:10px;' );
		tr.add(td);
		table.add(tr);
		
		
		div.add( table );
		
		var myxhtml = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('hr',pfad);
		div.add( myxhtml );

		myxhtml = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('h1',pfad);
		myxhtml.setStyle( 'font-size:16px;' );
		myxhtml.setText('output');
		div.add( myxhtml );
		
		myxhtml = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('ul',pfad);
		//myxhtml.setStyle( 'position:absolute;left:40px;top:60px;border:none ;' );
		
		var outputG = semweb.getoutGraphs();
		var li = null;
		for(var i = 0;outputG.length > i;i++)
		{
		
		li =  new de.auster_gmbh.graphicelement.xhtml.HTMLElement('li',pfad);
		li.setText(outputG[i][0] + ' ' + outputG[i][1] + ' ' + outputG[i][2]);
		li.setStyle( 'font-size:12px;' );
		li.setID('li_' + i);
		myxhtml.add( li );
		}
		
		
		div.add( myxhtml );



		myxhtml = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('hr',pfad);
		div.add( myxhtml );
		
		myxhtml = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('h1',pfad);
		myxhtml.setStyle( 'font-size:16px;' );
		myxhtml.setText('input');
		div.add( myxhtml );
		
		myxhtml = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('ul',pfad);
		var inputG = semweb.getinGraphs();

		for(var i = 0;inputG.length > i;i++)
		{
		
		li =  new de.auster_gmbh.graphicelement.xhtml.HTMLElement('li',pfad);
		li.setText(inputG[i][0] + ' ' + inputG[i][1] + ' ' + inputG[i][2]);
		li.setStyle( 'font-size:12px;' );
		li.setID('li_' + i);
		myxhtml.add( li );
		}
		div.add( myxhtml );
		
		var myxhtml = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('hr',pfad);
		div.add( myxhtml );
		
		myxhtml = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('h1',pfad);
		myxhtml.setStyle( 'font-size:16px;' );
		myxhtml.setText('bag');
		div.add( myxhtml );
		
		myxhtml = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('ul',pfad);
		var bag = semweb.getBag(1);
		for(var i = 0;bag.length > i;i++)
		{
		
		li =  new de.auster_gmbh.graphicelement.xhtml.HTMLElement('li',pfad);
		li.setText(bag[i]);
		li.setStyle( 'font-size:12px;' );
		li.setID('li_' + i);
		myxhtml.add( li );
		}
		div.add( myxhtml );

		var myxhtml = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('hr',pfad);
		div.add( myxhtml );
		
		myxhtml = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('h1',pfad);
		myxhtml.setStyle( 'font-size:16px;' );
		myxhtml.setText('Container');
		div.add( myxhtml );
		
		myxhtml = new de.auster_gmbh.graphicelement.xhtml.HTMLElement('ul',pfad);
		var cont = semweb.getContainer(1);
		for(var i = 0;cont.length > i;i++)
		{
		
		li =  new de.auster_gmbh.graphicelement.xhtml.HTMLElement('li',pfad);
		li.setText(cont[i]);
		li.setStyle( 'font-size:12px;' );
		li.setID('li_' + i);
		myxhtml.add( li );
		}
		div.add( myxhtml );		

		mysvg.add( div );
	
		mycontainer.add(mysvg);
		
		mycontainer.init();
		
		arrayobj.add(mycontainer);
};

de.auster_gmbh.objectelement_toolbox.tools.open_Node = function(container, position, functionObject ,semweb ,parentObj,pfad) //for all infowindows
{

  		if(container[1][position].closed)
  		{
  		
  		var args_array = new Array();
  		
  		
  		args_array[0] = new Array();
  		args_array[0][0] = container[1][position];
  		args_array[0][1] = 0;
  		args_array[0][2] = 0;
  		args_array[0][3] = 'my1';
  		
  		if(!container[1]['InsertNode'].closed)
  		{
   		args_array[1] = new Array();
  		args_array[1][0] = container[1]['InsertNode'];
  		args_array[1][1] = 0;
  		args_array[1][2] = (-1 * 400);
  		args_array[1][3] = 'my2';
  		container[1]['InsertNode'].closed = true;
  		}
  		
		functionObject(args_array[0][0],semweb,parentObj,pfad);
  		
  		de.auster_gmbh.graphicelement.sequenceMoveToPoint( args_array );
  		container[1][position].closed = false;
 
  		}
  		else
  		{
  		var args_array = new Array();
  		
  		container[1][position].deleteID('entry');
  		
  		args_array[0] = new Array();
  		args_array[0][0] = container[1][position];
  		args_array[0][1] = 0;
  		args_array[0][2] = (-1 * (window.innerHeight - 20));
  		args_array[0][3] = 'my2';
  		
  		if(!container[1]['InsertNode'].closed)
  		{
   		args_array[1] = new Array();
  		args_array[1][0] = container[1]['InsertNode'];
  		args_array[1][1] = 0;
  		args_array[1][2] = (-1 * 400);
  		args_array[1][3] = 'my2';
  		container[1]['InsertNode'].closed = true;
  		}
  			
  			
   		de.auster_gmbh.graphicelement.sequenceMoveToPoint( args_array );
   		container[1][position].closed = true;
  		}
  		

  			
};

de.auster_gmbh.objectelement_toolbox.tools.Datapanel = function( parentObj, declaration ,pfad , color) //'Overview' 
 	{
 		var mycontainer = new de.auster_gmbh.graphicelement.visualBag();
		var myelement = new de.auster_gmbh.graphicelement.visualElement();	
		var mysvg = new de.auster_gmbh.graphicelement.svg.SVGPath(parentObj,pfad);
		
		mycontainer.setID(declaration);
			
		mysvg.transit(150,28);
		mysvg.setWayPoint(0,0);
		mysvg.setWayPoint(window.innerWidth - 300,0);
		mysvg.setWayPoint(window.innerWidth- 300 ,window.innerHeight -70);
		mysvg.setWayPoint(window.innerWidth- 320 ,window.innerHeight - 50);
		mysvg.setWayPoint(0,window.innerHeight - 50);
		mysvg.setWayPoint(0,0);
		mysvg.setStyle('fill:' + color + ';stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1');
		mysvg.setID('objectHeadUp');
			
		myelement.add(mysvg);
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGPath(parentObj,pfad)
		mysvg.transit(150,28);
		mysvg.setWayPoint(20,0);
		mysvg.setWayPoint(window.innerWidth - 320,0);
		mysvg.setWayPoint(window.innerWidth- 320 ,window.innerHeight -80);
		mysvg.setWayPoint(window.innerWidth- 330 ,window.innerHeight - 70);
		mysvg.setWayPoint(40,window.innerHeight - 70);
		mysvg.setWayPoint(20,window.innerHeight - 90);
		mysvg.setWayPoint(20,0);
		mysvg.setStyle('fill:#ffffff;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1');
		mysvg.setID('objectHeadUp');

		myelement.add(mysvg);
			
 
			
			

		myelement.setID('display');
		mycontainer.add(myelement);
		
		var mybag = new de.auster_gmbh.graphicelement.visualBag();
		mybag.setID('workbench');

		mycontainer.add(mybag);
		//mycontainer.add(my2element);
		//alert(mycontainer.manyElements());
		mycontainer.init();
		return mycontainer;
 		
 	};
 	
 de.auster_gmbh.objectelement_toolbox.tools.Insertpanel = function( parentObj,pfad) //'Overview' 
 	{
 		var mycontainer = new de.auster_gmbh.graphicelement.visualElement();
			
		var mysvg = new de.auster_gmbh.graphicelement.svg.SVGPath(parentObj,pfad);
			
		mysvg.transit(200,28);
		mysvg.setWayPoint(0,0);
		mysvg.setWayPoint(10,0);
		mysvg.setWayPoint(40,50);
		mysvg.setWayPoint(400,50);
		mysvg.setWayPoint(400 ,285);
		mysvg.setWayPoint(385 ,300);
		mysvg.setWayPoint(50,300);
		mysvg.setWayPoint(50,200);
		mysvg.setWayPoint(-50,0);
		mysvg.setWayPoint(0,0);
		mysvg.setStyle('fill:#002e7a;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1');
		mysvg.setID('objectHeadUp');
			
		mycontainer.add(mysvg);
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGPath(parentObj,pfad);
		mysvg.transit(200,28);
		mysvg.setWayPoint(59,60);
		mysvg.setWayPoint(390,60);
		mysvg.setWayPoint(390 ,280);
		mysvg.setWayPoint(380 ,290);
		mysvg.setWayPoint(59,290);
		mysvg.setStyle('fill:#ffffff;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1');
		mysvg.setID('objectHeadUp');
			
		mycontainer.add(mysvg);

		mysvg = new de.auster_gmbh.graphicelement.svg.SVGText(parentObj,pfad);
		mysvg.transit(260,85);
		mysvg.setWayPoint(5,20);

		mysvg.setText('Bitte tragen Sie ');
		mysvg.setStyle('font-size:medium;font-family:Bitstream Vera Sans, Arial; font-weight:normal;font-style:normal;stroke:#8794a6;stroke-width:1;fill:#8794a6');
		mysvg.setID('headline1');
		mycontainer.add(mysvg);

		mysvg = new de.auster_gmbh.graphicelement.svg.SVGText(parentObj,pfad);
		mysvg.transit(260,105);
		mysvg.setWayPoint(5,20);

		mysvg.setText('den Namen des neuen Objektes ein:');
		mysvg.setStyle('font-size:medium;font-family:Bitstream Vera Sans, Arial; font-weight:normal;font-style:normal;stroke:#8794a6;stroke-width:1;fill:#8794a6');
		mysvg.setID('headline1');
		mycontainer.add(mysvg);
	
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGImage(parentObj,pfad);
			
		mysvg.transit(260,110);
		mysvg.setWayPoint(5,20);
		mysvg.setDimension(292,32); 
		mysvg.setImage('img/editpad.png');
		mysvg.setID('objectinfo');
		mycontainer.add(mysvg);
		
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGforeign(parentObj);
		mysvg.transit(260,125);
		mysvg.setWayPoint(0,10);
		mysvg.setDimension(350,200);
		mysvg.setID('SVGforeign');
		
		var myxhtml = new de.auster_gmbh.graphicelement.xhtml.input(pfad)
		myxhtml.setText('URI');
		myxhtml.setStyle( 'position:absolute;left:40px;border:none ;' );
		myxhtml.setAttribute('size','33');
		myxhtml.setID('URI');
		
		var uriInsertElement = myxhtml;
		
		mysvg.add( myxhtml );
		
		myxhtml = new de.auster_gmbh.graphicelement.xhtml.input(pfad)
		myxhtml.setText('label');
		myxhtml.setStyle( 'position:absolute;left:10px;top:30px;border:dotted;border-width:1px;' );
		myxhtml.setAttribute('size','37');
		myxhtml.setID('label');
		
		var labelInsertElement = myxhtml;
		
		mysvg.add( myxhtml );
		
		myxhtml = new de.auster_gmbh.graphicelement.xhtml.textarea(pfad)
		
		myxhtml.setStyle( 'position:absolute;left:10px;top:50px;border:dotted;border-width:1px;' );
		myxhtml.setAttribute('cols','38');
		myxhtml.setAttribute('rows','5');
		myxhtml.setID('comment');
		
		var textAreaElement = myxhtml;
		
		mysvg.add( myxhtml );
		
		mycontainer.add(mysvg);
					
		mysvg = new de.auster_gmbh.graphicelement.svg.SVGImage(parentObj,pfad);
			
		mysvg.transit(471,160);
		mysvg.setWayPoint(5,120);
		mysvg.setDimension(81,31); 
		mysvg.setImage('img/okbutton.png');
		mysvg.setID('okField');
		mycontainer.add(mysvg);
					
		//mycontainer.init();
		
		var mybag = new de.auster_gmbh.graphicelement.visualBag();
		mybag.add(mycontainer);
		mybag.init();
		
		mybag.uri = uriInsertElement;
		mybag.label = labelInsertElement;
		mybag.comment = textAreaElement;
		
		
		return mybag;
 		
	
 	};
 	
de.auster_gmbh.objectelement_toolbox.Info = function infoObject(backref)
{
	var mainObject = backref;
}

de.auster_gmbh.objectelement_toolbox.Web = function WebObject(backref)
{
	var mainObject = backref;
}
