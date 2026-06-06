de.auster_gmbh.library.language = {};
de.auster_gmbh.library.parser = {};


de.auster_gmbh.library.language.multiple_state_automat = function () {
}


de.auster_gmbh.library.language.mealy_automat = function () {
 
	var ref = new Array();
	var reverse = new Array();
	var debug_table = new Array();
	var edge_table = new Array();
	var selectiontree = new Array();
	var collectable = new Array();

	
	var current_line = new Array();
	var blueprint_line = new Array();
	var fulltable = new Array();
	var unique = 0;
	var next_available = false;
	var deep = 0;
	var section = "none";
	var edge_line = function(from, to, sign,cmd){this.from = from; this.to = to; this.sign = sign; this.cmd = cmd;}
	var debug_line = function(state, next, position, process, context, breaks){this.state = reverse[state]; this.next = reverse[next];this.position = position; this.process = process; this.context = context; this.breaks = breaks;}


	this.setNodes = function()
	{

		for (i = 0; i < arguments.length; i++) 
			this.setNode(arguments[i]);
	}
	

	
	this.setNode= function(name)
	{
		if(ref[name])throw new Error('already in stack');
		{
		ref[name] = unique;
		reverse[unique++] = name;
		}
	}
	

	
this.setEdge = function(ante, succ, valid, cmd) {
    var arg;
    var res;

    // Sicherstellen, dass 'valid' immer ein Array ist
    if (Array.isArray(valid)) {
        arg = valid;
    } else {
        arg = [];
        arg.push(valid);
    }

    // Klassische for-Schleife statt 'for...in'
    for (var i = 0; i < arg.length; i++) {
        var currentSign = arg[i];

        // 1. In die edge_table eintragen
        edge_table.push(new edge_line(ante, succ, '"' + currentSign + '"', cmd));

        // 2. Suchbaum für dieses Zeichen aufbauen/erweitern
        res = createTreeSearch(currentSign);
        res[ref[ante]] = [ref[succ], cmd];

        // 3. Blueprint-Register aktualisieren
        if (!cmd.endsWith(')') && cmd !== '') {
            blueprint_line[cmd] = true;
        }
    }
};
	
	this.setStringNode = function(node, cmd)
	{
		
		collectable[ref[node]] = cmd;
		 if(!cmd.endsWith(')') && cmd != '')
		 	 blueprint_line[cmd] = true;
		
		
	}
	
	var createTreeSearch = function(val)
	{
		
		var tmp = selectiontree;

		 for(var i = 0;i < val.length; i++)
		 {

		 	 if(!tmp['§' + val.charAt(i)])
		 	 	 tmp['§' + val.charAt(i)] = {};
		 	 
		 	 tmp = tmp['§' + val.charAt(i)];
		 }
	 
		 return tmp;
	
	}
	
	this.showStructure = function()
	{
	console.log("-------------shows structure---------------------");
		var res = [];
		var i = 0;
		var line = function(node, cmd){this.node = node;this.cmd = (cmd != undefined ? cmd : "" ) ;}
		
	console.info('nodes:');
		for (var val in ref)
			{
				res.push(new line(val, collectable[i++] ));
			}

	console.table(res);
	console.info('egdes:');
	console.table(edge_table);
	console.log(selectiontree);
	}

	
	this.checkString = function(str)
	{
		//var str = str.replace(" ", "");
		//$arg = str_split($str);f
		var process = "";
		var context = "";
		var context_add = "";
		var state = 0;
		var compare = 0;
		var collect1 = '';
		var tmpstr = '';
		var check_str = "";
		var collect2 = '';
		var tmp = selectiontree;
		var swap;
		deep = 0;
		


		
		for(var pos=0;pos < str.length;pos++)
			{
				
				//console.log("starts on state:" + " (" + state + ")"  + "(" + pos + "+" + compare + ")");
				
				
				
				// search in a char array for pattern 
				while(true) //compare=0;true;compare++)
				{
				tmpstr +=  str.charAt(pos + compare);	

				if(tmp['§' + str.charAt(pos + compare)])
				{
					
					collect1 += str.charAt(pos + compare) ;
					//console.log(str.charAt(pos + compare) + "(" + pos + "+" + compare + ")");
					tmp = tmp['§' + str.charAt(pos + compare)]; //Runs forward through multiarray
					check_str += '.§' + str.charAt(pos + compare);

					
				}
				else
				{
						compare = Math.max(0, compare - 1);
						//$collect2 = $arg[$pos + $compare];
						context_add += "[" + pos + "+" + compare + " {" + check_str;
					//mo and monthly 
					break;
				}
				compare++;
				}

				check_str = "";
				
				//if there are collectables, the result will be saved
				if(collectable[state]) 
					{
						process = "collectable";
						//collects pattern, which has no egde but a name
						if(!tmp[state])
							{
								tmp = selectiontree;
								context += str.charAt(pos);
								//collect2 +=  tmpstr;
								//saveSet(tmpstr, collectable[state]);
								saveSet(str.charAt(pos), collectable[state]);
								compare = 0;
								tmpstr = '';
								collect1 = '';
								context_add += "(" + str.charAt(pos + compare + 1) + ")]\n";
								continue;
							}
							else
							{				
								saveSet("", tmp[state][1]);
								context_add += ".[" + tmp[state][0] + ", " + tmp[state][1] + "]]\n";
								collect2 = '';
							}
							
					}
					else
						if(tmp[state])
						{
							context_add += ".[" + tmp[state][0] + ", " + tmp[state][1] + "]";
							if(tmp[state][1])
								process = "has_process:" + tmp[state][1];
							else
								process = "common_path";
							saveSet(str.substring(pos, pos + compare + 1), tmp[state][1]);
							
						}


					
					
				//if there is no valide state at the end of the tree, it throws an error
				if(!tmp[state])
				{
					comment = 'text not accepted:' + " " + "\n"; //array_search($state, $this->ref);
					comment +=  state + " has no graph for: \n" + str.substring(0, pos + compare ) + " (" + str.charAt(pos + compare)   + ") " + str.substring(pos + compare + 1) + "\n on position " + "(" + pos + "+" + compare + ")" ;
					//commend .= array_search($state, $this->ref); // . "($state) has no graph '$tmpstr$collect1' on position $pos : ..." ;

					throw comment;
				}

				//hlp = tmp[state][1];
				debug_table.push(new debug_line(state, tmp[state][0], "'" + str.substring(pos, pos + compare + 1) + "'(" + pos + ", " + compare + ")", process, context, context_add));
				process = "";
				context = "";
				context_add = "";
				state = tmp[state][0]; //set new state

				tmpstr = '';
				collect1 = '';
				tmp = selectiontree; 		//reset tree
				pos = pos + compare; 	//set new position for start
				compare = 0; 			//reset compare
				
			}
		debug_table.push(new debug_line(state, state, "'" + str.substring(pos, pos + compare + 1) + "'(" + pos + ", " + compare + ")", "Finalized ", context, context_add));
		
	}
	
	var saveSet = function(string, cmd)
	{
		var command = "";
		var arg = "";
		//var res = Array();
		if(cmd == '' || cmd == undefined )return true;
		//console.debug("saveSet(" + string + ", " + cmd + ")");
		

		if(cmd.endsWith(')') )
			{

				command = cmd.substring(0, cmd.indexOf("(")); //section
				arg  = cmd.substring(cmd.indexOf("(") + 1, cmd.indexOf(")")); //section

				if( command == "next" && next_available)
				{
				next_available = false;
				current_line['#section'] = section;
				current_line['#deep'] = deep;
				fulltable.push(current_line);
				current_line= new Array();
				}
				if(command == 'deeper' )
				{ 

					current_line['#section'] = section;
					current_line['#deep'] = ++deep;
					if(next_available)
					{
					fulltable.push(current_line);
					current_line= new Array();
					next_available = false;
					}
				}
				if(command == 'shallow' )
				{ 


					current_line['#section'] = section;
					current_line['#deep'] = deep--;
					if(next_available)
					{
					fulltable.push(current_line);
					current_line= new Array();
					next_available = false;
					}
				}
				if(command == 'section' )
				{
					section = arg;
				}
				

				return true;
			}

		if(blueprint_line[cmd])
			{

				next_available = true;
				if(current_line[cmd] == undefined)current_line[cmd] = "";
				current_line[cmd] += string;
				
				return true;
			}
		return true;
		//echo "\nTo table: $string ($cmd)\n";
	}
	

	this.getResult = function()
	{return fulltable;}
	
	this.showAll = function()
	{
		console.table(debug_table);
		console.log(debug_table.length + " entries\n");
		console.log("Result ");
		console.log(fulltable);

	}
 
}

/* language */
/**
de.auster_gmbh.library.language.body
+setText(txt)
+setObject(key, obj)
+setString(key_start, key_end, txt) 
*/
de.auster_gmbh.library.language.body = function language_body()
{
var counter = 0;
var structure = new Array();
var parsetext = new Array();
var startPoint = "";
var curelement = null;

this.setText = function (txt)
{

for(var i = 0;i < txt.length; i++)
parsetext[i] = txt.charAt(i);
}

this.setObject = function (key, obj) 
{
 for (i = 2; i < arguments.length; i++) 
    console.debug( arguments[i] + " - test\n" );
  structure[key] = obj;
  obj.setName(key);
  if(arguments.length == 3)new de.auster_gmbh.library.language.language_edge(this.getObject(arguments[2]), obj);
  if(arguments.length == 4)new de.auster_gmbh.library.language.language_edge(this.getObject(arguments[2]), obj,arguments[3]);


   

}

/**
*  setString
*  @param key_start: existing node for appending
*  @param key_end: name of the last node to call it for later
*  @param txt: String to create a chain of nodes with
*  @param *: object for last node [optional] 
*/

this.setString = function (key_start, key_end, txt) 
{

  var prev = structure[key_start]; 
  var next = new de.auster_gmbh.library.language.language_node(true); 
  
  for(var i = 0;i < txt.length; i++)
  {
  new de.auster_gmbh.library.language.language_edge(prev, next, txt.charAt(i));
  
  prev = next;
  if(i < txt.length - 2)
  next = new de.auster_gmbh.library.language.language_node(true);
  else
    if(arguments.length == 4)
      next = arguments[3];
    else
      next = new de.auster_gmbh.library.language.language_node(true);
  }

  structure[key_end] = prev;

}


this.getObject = function (key) {return structure[key];}
this.setStart = function (start) {startPoint = start;}
this.start = function () 
{
  structure[startPoint].compute_element(parsetext);
}


this.toString = function () {return "parser";}

this.showStructure = function()
{
	var res = new Array();
	
	var list = function (key, node1, sign, node2) { this.key = key; this.node1 = node1; this.sign = sign; this.node2 = node2; }
	//console.info(structure);
	//console.info(structure.length);
	for (var key in structure)
		{
			//console.info(key + " " +  structure[key].getName() + " " +  structure[key].length +  "\n");
			
			if(structure[key].length > 0)
			for (var i = 0; i < structure[key].length; i++)
			{
				//console.group("Kante");
				for (var j = 0; j < structure[key].getEdge(i).sign.length; j++)
				{
					//console.group("zeichen");
					//console.info(structure[key].getEdge(i).sign[j] + "\n");
					res.push(new list(key, structure[key].getName(), structure[key].getEdge(i).getSign(j), structure[key].getEdge(i).to.getName() ));
					//console.groupEnd()
				}
				
				//console.info(structure[key].getEdge(i).to.getName() + "\n");
				//console.groupEnd()
			}
			else
				res.push(new list(key, structure[key].getName(), "", "" ));
		
		}

	return res;
}

};

de.auster_gmbh.library.language.test = function ()
{

	console.debug("begin");
 	var statement = "BASE <http://www.uni-wuppertal.de/Math_Elements> \n";
 	statement += "PREFIX jo: <blahblah> \n";
 	statement += "PREFIX deine: <mudda> \n"; 
 	statement += "SELECT ?def, ?bumm \n";
 	statement += "WHERE { ?def pre obj .";
 	statement += " ?def pre \"test it\" }";
 		console.debug("Statement:" + statement);
 	var element = new de.auster_gmbh.library.parser.sparql(statement);
 	console.table(element.showStructure());
// ?def block_name  \"Def 1.1\" . \n ?def  block_name  \"Def 1.2\" . }
 		console.debug("end");
}

de.auster_gmbh.library.language.language_node = function languare_node(reduce_char)
{
 var edges = new Array();
 var alt = false;
 var name = "anonym";
 var reduce = reduce_char;
 var variable = false;
 var secure = 0;
 this.length = 0;
 this.deep = 0;
 if(arguments.length > 1)
   variable = arguments[1];
 
 this.setName = function(objname){name = objname;}
 this.getName = function(){return name;}
 this.setEdge = function(edge)
 {
   if(edge.sign.length == 0)
   {
   if(!alt)
   alt = edge;
   else
   alert("alt overwritten");
   }
   else
   {
   
   
   edges[edges.length] = edge;
   this.length = edges.length;
   }
 }
 
 
 this.getEdge = function(idx)
 {
 	return edges[idx];
 }
 
 this.compute_element = function(elem)
 {
 
 var var_arr = variable; 
 var fin = false;

 
 if(variable)
   if(variable.length != 0)
     this.deep = variable.pop();
 

 
 if(reduce)
   if(this.expand_funct == undefined)
     if(variable)
     {
      
             //alert(de.auster_gmbh.library.tools.var_dump(var_arr));
      
       while(var_arr[0] instanceof Array )
         var_arr = var_arr[0];


     
       if(variable.length == 0)
         var_arr.unshift(elem.shift())
        else
         var_arr[0] += elem.shift();
      }
      else
        elem.shift();
   else
   {
     this.expand_funct(var_arr);
     elem.shift();
  }
 else
 {
   if(this.expand_funct != undefined)
     this.expand_funct(var_arr);
 }
 
 if(variable instanceof Array )
    variable.push(this.deep);
 

 /* workflow complete */
 if(elem.length == 0)return true;
 
 if(elem[0] == undefined) return false;
 
  /* tests all edges */
   if(edges.length > 0 )
     for(var i = 0; i < edges.length; i++)
       if(edges[i].compute_element(elem))
         {
           fin = true;
           break;
         }
   
   /* test alternative */   
   if(!fin && alt)fin = alt.compute_element(elem);
      
   /* TODO Throw */   
   if(!fin)alert("fehler " + elem[0] + " konnte nicht verarbeitet werden");
   
   return true;
   
 }
 
 
};

   de.auster_gmbh.library.language.control_array_node = function control_array_node(reduce_char, variable, direction)
	{
	
	
	de.auster_gmbh.library.language.control_array_node.baseConstructor.call(this, reduce_char, variable);
        this.direction = direction;
        

	};
	
   de.auster_gmbh.library.language.control_array_node.prototype = new de.auster_gmbh.library.language.language_node();
   de.auster_gmbh.library.language.control_array_node.prototype.constructor = 
   de.auster_gmbh.library.language.language_node;
   de.auster_gmbh.library.language.control_array_node.baseConstructor = de.auster_gmbh.library.language.language_node;
   de.auster_gmbh.library.language.control_array_node.prototype.direction = 0;
   de.auster_gmbh.library.language.control_array_node.prototype.exact_deep = function(arr_var,deep, max_deep)
   {
   	 
   	 if(deep < max_deep)
   	 {
   	 
   	   var variable = arr_var;
   	   if(variable[0] instanceof Array )
   	   {
             variable = variable[0];
             return this.exact_deep(variable,deep + 1, max_deep);
           }
           alert(typeof variable[0]);
           return arr_var;
         }
         else
         return arr_var;
   
   }
   

   de.auster_gmbh.library.language.control_array_node.prototype.expand_funct = function(arr_var)
   {
   
    
    if(this.direction == 1)
    {
      var variab = this.exact_deep(arr_var,0, this.deep);
      variab.unshift("");
     }
     
        
     if(this.direction == 2) //hoch
     {
      var variab = this.exact_deep(arr_var,0, this.deep);

	if(!(variab[0] instanceof Array))
        variab[0] = new Array();
        variab[0].unshift("");
	this.deep++;

     }

    
     if(this.direction == 3) //runter
     {
     
     	this.deep--;
 
     }

   }

de.auster_gmbh.library.language.language_edge = function language_edge(from, to)
{
	this.from = from;
	this.to = to;
	this.sign = new Array();

	console.debug( arguments);
	if(arguments.length > 2)
        { //alert("neues funktionelles Element");
          for(var i = 0;i < (arguments.length - 2);i++)
          {
          	  
           this.sign[i] = arguments[i + 2];
          }
         }
	
	from.setEdge(this);
	
	this.compute_element = function(elem)
	{
	
	// no sign (all char)
	if(this.sign.length == 0 )
	{
	//alert("ignoriert");
	this.to.compute_element(elem);
	return true;
	}
	// collection of signs
	for(var i = 0;i < this.sign.length;i++)
	{
	  //alert("vergleiche :" + elem[0] + "==" + this.sign[i]);
	 
	  if(this.sign && elem[0] == this.sign[i])
	  {
	   //alert("gefunden");
	   this.to.compute_element(elem);
	   
	   return true;
	  }
	 
	 } 
	 }
	  
	  this.getSign = function(idx)
	  {
	  	  return this.sign[idx];
	  }
	 
};

de.auster_gmbh.library.parser.csv = function(txt)
{
var lang = new de.auster_gmbh.library.language.body();
 var language_node = de.auster_gmbh.library.language.language_node;
 var array_node = de.auster_gmbh.library.language.control_array_node;
 var col_name = new Array();
 var col_val = new Array();
 var seperator= ';';
 var next = "\n";
 
 if(arguments.length > 1)
 {
 seperator = arguments[1];
   if(arguments.length > 2)
     next = arguments[2];

 }
 

 var edge;
  

 if(txt != undefined)
 {
 lang.setText(txt);
 
 /* (start)  */
 lang.setObject("start", new language_node(false));

 /* (start)-->(*ColName) */
 lang.setObject("ColName", new language_node(true,col_name),"start");

 /* (ColName)--sonst-->(CollName) */
 new de.auster_gmbh.library.language.language_edge(lang.getObject("ColName"),lang.getObject("ColName"));

 /* (ColName)--separator-->(;) */
 lang.setObject(";", new array_node(true, col_name,  1),"ColName", seperator);

 /* (;)--sonst-->(ColName) */
 new de.auster_gmbh.library.language.language_edge(lang.getObject(";"),lang.getObject("ColName"));

 /* (ColName)--next-->(next) */
 lang.setObject("next",  new array_node(true, col_val,  2) ,"ColName", next); //, "\r", "\t", "\f"

 /* (ColVal) */
 lang.setObject("ColVal", new language_node(true,col_val));
 
 /* (next)--sonst-->(ColVal) */
 new de.auster_gmbh.library.language.language_edge(lang.getObject("next"),lang.getObject("ColVal"));

 /* (ColVal)--sonst-->(ColVal) */
 new de.auster_gmbh.library.language.language_edge(lang.getObject("ColVal"),lang.getObject("ColVal"));

 /* (ColVal)--sperator-->(2;) */
 lang.setObject("2;", new array_node(true, col_val,  1),"ColVal", seperator);

 /* (2;)--seperator-->(2;) */
 new de.auster_gmbh.library.language.language_edge(lang.getObject("2;"),lang.getObject("2;"),seperator);

 /* (2;)--sonst-->(ColVal) */
 new de.auster_gmbh.library.language.language_edge(lang.getObject("2;"),lang.getObject("ColVal"));

 /* (ColVal)--next-->(rollback) */
 lang.setObject("rollback",  new array_node(false, col_val,  3) ,"ColVal", next);

 /* (rollback)--next-->(newline) */
 lang.setObject("newline",  new array_node(false, col_val,  1) ,"rollback");
 
 /* (newline)--sonst-->(next) */
 new de.auster_gmbh.library.language.language_edge(lang.getObject("newline"),lang.getObject("next"));


 lang.setStart("start");
 lang.start();
  
 // alert(de.auster_gmbh.library.tools.var_dump(col_val));
 col_name.pop(); 
 col_name.reverse();

 col_val.pop();
 
 for (var i = 0; i < col_val.length; i++)
    col_val[i].reverse();
 
 
 col_val.reverse();
 
 }
 
 this.colNameMany = function(){return col_name.length;}
 
 this.colName = function(pos)
 {
 if(pos < 0 || pos > col_name.length -1)
   return col_name[pos];
}
 
 this.addName = function(name)
 {
 col_name.push(name);
 }

 this.addNewLine = function()
 {
     pos = col_val.length;
    col_val[pos] = new Array();
    for (var i = 0; i < col_name.length; i++) 
      col_val[pos][i] = ''; 
 }
 
 this.addValue = function(name, value)
 {
   pos = col_val.length - 1;
 
   for (var i = 0; i < col_name.length; i++) {
        if (col_name[i] == name) {
            col_val[pos][i] = value;
        }
    }
 }
 
 this.colVal = function(row, name)
 {

   for (var i = 0; i < col_name.length; i++) {
        if (col_name[i] == name) {
          if(row >= 0 || row < col_val.length)
            return col_val[row][i];
        }
    }

 
 
 return false;}
 
 this.setSeperator = function(myseperator){seperator= myseperator;}
 
 
 this.setEOL = function(mynext){ next= mynext; }
 
 this.row_many = function(){return col_val.length;}

 this.toString = function()
 {
   res = '';
   if(col_name.length == 0)return false;
   
   res = col_name[0];
   
   for (var i = 1; i < col_name.length; i++) res += seperator + col_name[i] ;
    
   res += next; 

   for (var i = 0; i < col_val.length; i++)
   { 
    res += col_val[i][0];
    
    for (var j = 1; j < col_val[i].length; j++)res += seperator + col_val[i][j] ;
    
    if(i < (col_val.length) )
    res += next;
   }    
   
   return res;
 }
 
 this.truncate = function()
 {
 	col_val = new Array();
 }
}

de.auster_gmbh.library.parser.sparql = function(txt)
{

 var mealy = new de.auster_gmbh.library.language.mealy_automat();

 mealy.setNodes('start', 'base','pre1','uri');
 mealy.setNodes('prefix', 'pre2', 'prename');
 mealy.setNodes('select', 'col', 'where', 'space', 'space_sub', 'space_pre', 'space_obj', 'return' , 'sub', 'pre', 'obj', 'sub_txt', 'pre_txt', 'obj_txt');
 mealy.setEdge('start','start', ["\n", "\r", "\t", "\f", ' '],'');

 mealy.setEdge('start', 'base','BASE','section(base)');
 mealy.setEdge('base', 'pre1',' ',''); 
 mealy.setEdge('pre1', 'pre1',' ','');
 
 
 mealy.setEdge('start', 'prefix','PREFIX','section(prefix)');
 mealy.setEdge('prefix', 'prename',' ','');
 mealy.setEdge('prename', 'prename',' ','');
 mealy.setStringNode('prename', 'name');
 mealy.setEdge('prename', 'pre1',':','');


 mealy.setEdge('pre1', 'uri','<','');
 mealy.setStringNode('uri', 'uri');
 mealy.setEdge('uri', 'start','>','next()');
 
  mealy.setEdge('start', 'select','SELECT','section(select)');
  mealy.setEdge('select', 'col',["\n", "\r", "\t", "\f", ' '],'');
  mealy.setStringNode('col', 'col');
  mealy.setEdge('col', 'col',["\n", "\r", "\t", "\f", ' ', ','],'next()');  
 
   mealy.setEdge('col', 'where','WHERE','section(where)');
   mealy.setEdge('where', 'where',' ','');
   mealy.setEdge('where', 'space_sub','{','deeper()');
   mealy.setEdge('space_sub', 'space_sub',["\n", "\r", "\t", "\f", ' '],'');
   mealy.setEdge('space_sub', 'sub', ["?", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_", "-"],'subject'); //, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
   //mealy.setEdge( 'sub','space_sub', ' ','');
 mealy.setEdge('space_sub', 'space','}','shallow()');
   mealy.setStringNode('sub', 'subject');
   

 
   mealy.setEdge('sub', 'space_pre',' ','');
   mealy.setEdge('space_pre', 'space_pre', ["\n", "\r", "\t", "\f", ' '],'');
   mealy.setEdge('space_pre', 'pre',["?", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_", "-"],'predicate');
   mealy.setStringNode('pre', 'predicate');

   mealy.setEdge('pre', 'space_obj',' ','');   
   mealy.setEdge('space_obj', 'space_obj', ["\n", "\r", "\t", "\f", ' '],'');
   mealy.setEdge('space_obj', 'obj',["?", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_", "-"],'object');
   mealy.setStringNode('obj', 'object');
   
   //mealy.setEdge('pre', 'obj',' ','');
   //mealy.setEdge('obj', 'obj',["\n", "\r", "\t", "\f", ' '],'');
   //mealy.setStringNode('obj', 'object');
    mealy.setEdge('space', 'space',["\n", "\r", "\t", "\f", ' '],'');
   mealy.setEdge('space_obj', 'obj_txt','"','');
   mealy.setEdge('obj_txt', 'space','"','');
   mealy.setStringNode('obj_txt', 'object_txt');
   
  mealy.setEdge('obj', 'space',' ','');
   
   

   
   mealy.setEdge('space', 'space_sub','.','next()');
   
   mealy.setEdge('space', 'space','}','shallow()');
  
 mealy.showStructure();
 
 mealy.checkString(txt);
 mealy.showAll();
 
 //mealy.getResult();
 
 var semweb = de.auster_gmbh.semanticelement.semantic_web;
subject =  semweb.getObjByRepresentationObj('http://www.auster-gmbh.de/ontologies/Life#Archaea');
 console.debug( subject  );
 
 var lang = new de.auster_gmbh.library.language.body();
 var language_node = de.auster_gmbh.library.language.language_node;
 var array_node = de.auster_gmbh.library.language.control_array_node;
 var base = new Array();
 var prefix = new Array();
 var select = new Array();
 var where = new Array();
 var edge;
  

 
 //lang.setText(txt);
 lang.setObject("start", new language_node(false));
 

 
 this.showStructure = function()
 {
 	 return lang.showStructure();
 	  
    }
 
 
    
    
 /**
 * @param base:
 * @param prefix:
 * @param where:
 */
 var completed_Array = function (base, prefix, where)
 {
 
  var pos = -1;
  var key = "";
  var value = "";
 //removes empty lines
 console.debug(where);
      for(var k = where.length - 1; k >= 0;k--)
       if(where[k].length == 0 || where[k].charAt == undefined )
         {
         where.splice(k, 1);
         k--;
         }
         
   where.reverse();
 console.debug(where);
   for(var i = where.length - 1; i >= 0;i--)
   {
   
     if(where[i] instanceof Array)
       completed_Array(base, prefix, where[i]);
     else
     {
       if(where[i].length != 0 && where[i].charAt != undefined  && where[i].charAt(0) != '?' && where[i].charAt(0) != '"')
         if((pos = where[i].search(":")) != -1)
           for(var j = 0;j < where[i].length;j++)
           {
             if(j < pos)key += where[i].charAt(0);
             if(j > pos)value += where[i].charAt(0);
           } 
         else
           {
             where[i] = base + "#" + where[i];
           }

     }
     

   }
 
 } 
 
  var collection_Array = function (where, arr)
 {
 

   for(var i = 0; i >= 0;i--)
   {
    
     if(where[i] instanceof Array)
       collection_Array(where[i], arr);
     else
       if(where[i].charAt != undefined  &&  where[i].charAt(0) == '?')arr.unshift(where[i]);
     

   }
 
 return arr;
 
 }; 

var create_tiplet_recordset = function (arr_el, rec_list)
{
 

   for(var i = 0; i < arr_el.length; i++)
    if(arr_el[i] instanceof Array)
       create_tiplet_recordset(arr_el[i], rec_list);
     else
     {
       rec_list.AddNew();
       rec_list.setValue("subject", arr_el[i]);
       rec_list.setValue("predicate", arr_el[i + 1]);
       rec_list.setValue("object", arr_el[i + 2]);

       i = i + 2;
     
     }
}

var compute_statement = function(funct_list, statement_list, obj_list )
{

 var selection;
 var rec = new de.auster_gmbh.library.tools.Recordset();
 rec.append_col("result");

 statement_list.first();
 do{
 selection = 0;
 
 if(statement_list.getValue("subject").charAt(0) == '?') selection += 1;
 if(statement_list.getValue("predicate").charAt(0) == '?') selection += 2;
 if(statement_list.getValue("object").charAt(0) == '?') selection += 4;
 
 rec.AddNew();
 
 rec.setValue("result",
   funct_list[selection](
     statement_list.getValue("subject"),
     statement_list.getValue("predicate"),
     statement_list.getValue("object"),
     obj_list
     ));

 
 }
 while(list.next());

 if(rec.RecordCount() > 1);
 
 return rec;
}

var collectFromPredicate = function(subject, predicate, object)
{
 var clazz = de.auster_gmbh.semanticelement.semantic_web.getClazz(predicate);
 var rec = new de.auster_gmbh.library.tools.Recordset();
 rec.append_col(subject);
 rec.append_col("predicate");
 rec.append_col(object);

 if(clazz)
  if(clazz.inherited instanceof Array)
    for(var i = 0; i < clazz.inherited.length; i++)
    {
      rec.AddNew();
      rec.setValue(subject, clazz.inherited[i].container[0]);
      rec.setValue("predicate", clazz.inherited[i]);
      rec.setValue(object, clazz.inherited[i].bag[0]);
      
    }

  return rec;

}

var collectFromSubject = function(subject, predicate, object)
{
 var clazz = de.auster_gmbh.semanticelement.semantic_web.getClazz(subject);
 var rec = new de.auster_gmbh.library.tools.Recordset();
 rec.append_col("subject");
 rec.append_col(predicate);
 rec.append_col(object);

 if(clazz)
  if(clazz.inherited instanceof Array)
    for(var i = 0; i < clazz.inherited.length; i++)
    {
      rec.AddNew();
      rec.setValue("subject", clazz.inherited[i]);
      rec.setValue(predicate, clazz.inherited[i].container[0]);
      rec.setValue(object, clazz.inherited[i].container[0]);
      
    }

  return rec;

}

//TODO NOch fuer Literale bearbeiten

var collectFromObject = function(subject, predicate, object)
{
 var clazz = de.auster_gmbh.semanticelement.semantic_web.getClazz(subject);
 var rec = new de.auster_gmbh.library.tools.Recordset();
 rec.append_col(subject);
 rec.append_col(predicate);
 rec.append_col("object");

 if(clazz)
  if(clazz.inherited instanceof Array)
    for(var i = 0; i < clazz.inherited.length; i++)
    {
      rec.AddNew();
      rec.setValue(subject, clazz.inherited[i].bag[0]);
      rec.setValue(predicate, clazz.inherited[i].bag[0]);
      rec.setValue("object", clazz.inherited[i]);
      
    }

  return rec;

}

return true;
/*
var funct_list = new Array();
funct_list[0] = function(subject, predicate, object, obj_list){ alert(0); } 
funct_list[1] = function(subject, predicate, object, obj_list)
{

 var rec = collectFromPredicate(subject, predicate, "object");
 rec.first();
    
    do
    {
      if(object.charAt(0) == '"' )
        if(rec.getValue("object").toString() != object.substr(1, object.length - 2))rec.delete();
    }
    while(rec.next());
    
    rec.delete_col("predicate"); rec.delete_col("object");
    
    rec.update();

 return rec;
 
 } 
 
funct_list[2] = function(subject, predicate, object, obj_list){ alert(2); } 
funct_list[3] = function(subject, predicate, object, obj_list){ alert(3); } 
funct_list[4] = function(subject, predicate, object, obj_list){

 var rec = collectFromPredicate("subject", predicate, object );
 rec.first();
    
    do
    {
      
        if(rec.getValue("subject").isSubObjectOf(subject))rec.delete();
    }
    while(rec.next());
    
    rec.delete_col("predicate"); rec.delete_col("subject");
    
    rec.update();

 return rec;
 
 } 
funct_list[5] = function(subject, predicate, object, obj_list){ alert(5); } 
funct_list[6] = function(subject, predicate, object, obj_list){ alert(6); } 
funct_list[7] = function(subject, predicate, object, obj_list){ alert(7); } 

 
 completed_Array(base, prefix, where);
 var res = new Array();
 var rec = new de.auster_gmbh.library.tools.Recordset();
 var list = new de.auster_gmbh.library.tools.Recordset();
 

 collection_Array(where, res);
 
 for(var i = 0 ; i < res.length; i++)rec.append_col(res[i]);
 
 
 list.append_col("subject");
 list.append_col("predicate");
 list.append_col("object");
 
 
 create_tiplet_recordset(where, list);
 

 //compute_statement(funct_list, list, rec);


//create_Result(where, res);
 
// alert(base);
// alert(prefix);
// alert(select);
// alert(where);
// alert(res);
 

*/
};


 	
de.auster_gmbh.library.tools.SemanticResult = function(arr)
{
	this._data = arr || [];

	this.count = function()
	{
		return this._data.length;
	};

	this.arrayHas = function(predicate, role)
	{
		var bucket = (role === de.auster_gmbh.library.tools.SemanticResult.SUBJECT) ? 'output' : 'input';
		var filtered = [];
		for (var i = 0; i < this._data.length; i++)
		{
			var el = this._data[i];
			if (el[bucket] && el[bucket][predicate] && el[bucket][predicate].length > 0)
				filtered.push(el);
		}
		return new de.auster_gmbh.library.tools.SemanticResult(filtered);
	};

	this.giveInstances = function()
	{
		var sw = de.auster_gmbh.semanticelement.semantic_web;
		var instances = [];
		for (var i = 0; i < this._data.length; i++)
		{
			var name = this._data[i].name;
			if (!name) continue;
			var count = sw.manyIDXObj(name);
			if (!count) continue;
			for (var j = 0; j < count; j++)
			{
				var inst = sw.findIDXObj(name, j);
				if (inst) instances.push(inst);
			}
		}
		return new de.auster_gmbh.library.tools.SemanticResult(instances);
	};

	this.follow = function(predicate, role)
	{
		var SR     = de.auster_gmbh.library.tools.SemanticResult;
		var bucket = (role === SR.SUBJECT) ? 'output' : 'input';
		var end    = (role === SR.SUBJECT) ? 'successor' : 'antecessor';
		var seen   = new Set();
		var result = [];
		for (var i = 0; i < this._data.length; i++)
		{
			var el = this._data[i];
			if (!el[bucket] || !el[bucket][predicate]) continue;
			var edges = el[bucket][predicate];
			for (var j = 0; j < edges.length; j++)
			{
				var target = edges[j][end];
				if (target && !seen.has(target))
				{
					seen.add(target);
					result.push(target);
				}
			}
		}
		return new SR(result);
	};

	this.arrayFilter = function(predicate, role, uri)
	{
		var SR     = de.auster_gmbh.library.tools.SemanticResult;
		var bucket = (role === SR.SUBJECT) ? 'output' : 'input';
		var end    = (role === SR.SUBJECT) ? 'successor' : 'antecessor';
		var isLiteral = uri && uri.charAt(0) === '"';
		var literalVal = isLiteral ? uri.slice(1, -1) : null;
		var filtered = [];
		for (var i = 0; i < this._data.length; i++)
		{
			var el = this._data[i];
			if (!el[bucket] || !el[bucket][predicate]) continue;
			var edges = el[bucket][predicate];
			for (var j = 0; j < edges.length; j++)
			{
				var target = edges[j][end];
				if (!target) continue;
				var match = isLiteral
					? target.toString() === literalVal
					: target.name === uri;
				if (match) { filtered.push(el); break; }
			}
		}
		return new SR(filtered);
	};

	this.toArray = function()
	{
		return this._data.slice();
	};

	this.each = function(fn)
	{
		for (var i = 0; i < this._data.length; i++)
			fn(this._data[i], i);
		return this;
	};
};

de.auster_gmbh.library.tools.SemanticResult.SUBJECT = 'SUBJECT';
de.auster_gmbh.library.tools.SemanticResult.OBJECT  = 'OBJECT';


de.auster_gmbh.library.tools.SPARQLObject = function(engine)
{


 	var list_of_columns = new Array();
 	var element = null;
 	var engine = engine;

 
 	 var mealy = new de.auster_gmbh.library.language.mealy_automat();

 mealy.setNodes('start', 'base','pre1','uri');
 mealy.setNodes('prefix', 'pre2', 'prename');
 mealy.setNodes('select', 'col', 'where', 'space', 'space_sub', 'space_pre', 'space_obj', 'return' , 'sub', 'pre', 'obj', 'sub_txt', 'pre_txt', 'obj_txt');
 mealy.setEdge('start','start', ["\n", "\r", "\t", "\f", ' '],'');

 mealy.setEdge('start', 'base','BASE','section(base)');
 mealy.setEdge('base', 'pre1',' ',''); 
 mealy.setEdge('pre1', 'pre1',' ','');
 
 
 mealy.setEdge('start', 'prefix','PREFIX','section(prefix)');
 mealy.setEdge('prefix', 'prename',' ','');
 mealy.setEdge('prename', 'prename',' ','');
 mealy.setStringNode('prename', 'name');
 mealy.setEdge('prename', 'pre1',':','');


 mealy.setEdge('pre1', 'uri','<','');
 mealy.setStringNode('uri', 'uri');
 mealy.setEdge('uri', 'start','>','next()');
 
  mealy.setEdge('start', 'select','SELECT','section(select)');
  mealy.setEdge('select', 'col',["\n", "\r", "\t", "\f", ' '],'');
  mealy.setStringNode('col', 'col');
  mealy.setEdge('col', 'col',["\n", "\r", "\t", "\f", ' ', ','],'next()');  
 
   mealy.setEdge('col', 'where','WHERE','section(where)');
   mealy.setEdge('where', 'where',' ','');
   mealy.setEdge('where', 'space_sub','{','deeper()');
   mealy.setEdge('space_sub', 'space_sub',["\n", "\r", "\t", "\f", ' '],'');
   mealy.setEdge('space_sub', 'sub', ["?", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_", "-"],'subject'); //, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
   //mealy.setEdge( 'sub','space_sub', ' ','');
 mealy.setEdge('space_sub', 'space','}','shallow()');
   mealy.setStringNode('sub', 'subject');
   

 
   mealy.setEdge('sub', 'space_pre',' ','');
   mealy.setEdge('space_pre', 'space_pre', ["\n", "\r", "\t", "\f", ' '],'');
   mealy.setEdge('space_pre', 'pre',["?", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_", "-"],'predicate');
   mealy.setStringNode('pre', 'predicate');

   mealy.setEdge('pre', 'space_obj',' ','');   
   mealy.setEdge('space_obj', 'space_obj', ["\n", "\r", "\t", "\f", ' '],'');
   mealy.setEdge('space_obj', 'obj',["?", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_", "-"],'object');
   mealy.setStringNode('obj', 'object');
   
   //mealy.setEdge('pre', 'obj',' ','');
   //mealy.setEdge('obj', 'obj',["\n", "\r", "\t", "\f", ' '],'');
   //mealy.setStringNode('obj', 'object');
    mealy.setEdge('space', 'space',["\n", "\r", "\t", "\f", ' '],'');
   mealy.setEdge('space_obj', 'obj_txt','"','');
   mealy.setEdge('obj_txt', 'space','"','');
   mealy.setStringNode('obj_txt', 'object_txt');
   
  mealy.setEdge('obj', 'space',' ','');
   
   

   
   mealy.setEdge('space', 'space_sub','.','next()');
   
   mealy.setEdge('space', 'space','}','shallow()');

 	
 	
	this.setRequest = function(statement)
	{
		mealy.checkString(statement);
		//element  = new de.auster_gmbh.library.parser.sparql(statement);
	//$prefix =  explode ( 'PREFIX' , $statement  );
	 	
	
	
	//$select =  explode ( 'SELECT' , $prefix[count($prefix) - 1]  );
		
	}
	
	this.showStructure = function()
	{
		return mealy.getResult();
	}

	this.execute = function()
	{
		var SR  = de.auster_gmbh.library.tools.SemanticResult;
		var sw  = de.auster_gmbh.semanticelement.semantic_web;
		var q   = this.getQueryStructure();
		var bindings = {};

		for (var i = 0; i < q.where.length; i++)
		{
			var t = q.where[i];
			if (t.s.charAt(0) === '?') bindings[t.s] = null;
			if (t.o.charAt(0) === '?') bindings[t.o] = null;
		}

		var startFrom = function(uri)
		{
			var clazz = sw.getClazz(uri);
			if (!clazz || !clazz.representation) return new SR([]);
			return new SR([clazz.representation]);
		};

		var isVar = function(term) { return term && term.charAt(0) === '?'; };

		var edgeCount = function(uri, predicate, dir)
		{
			var clazz = sw.getClazz(uri);
			if (!clazz || !clazz.representation) return 1;
			var edges = clazz.representation[dir] && clazz.representation[dir][predicate];
			return edges ? edges.length : 1;
		};

		var estimateCost = function(t)
		{
			if (isVar(t.p))      return Infinity;
			if (!isVar(t.s) && !isVar(t.o)) return 0;
			if (!isVar(t.s))     return edgeCount(t.s, t.p, 'output');
			if (!isVar(t.o))     return edgeCount(t.o, t.p, 'input');
			return Infinity;
		};

		q.where = q.where.slice().sort(function(a, b) { return estimateCost(a) - estimateCost(b); });

		for (var i = 0; i < q.where.length; i++)
		{
			var t      = q.where[i];
			var sVar   = isVar(t.s),  oVar   = isVar(t.o);
			var sBound = sVar && bindings[t.s] !== null;
			var oBound = oVar && bindings[t.o] !== null;

			// TODO: Prädikatvariablen — Ergebnis sind URI-Strings, kein SemanticResult
			// URI ?p URI  → iteriere output-Keys des Subjects, prüfe ob successor === Object-URI
			// URI ?p ?o   → alle ausgehenden Kanten des Subjects
			// ?s  ?p URI  → alle eingehenden Kanten des Objects
			// ?s  ?p ?o   → Vollscan
			if (isVar(t.p))
			{
				console.warn('SPARQL execute: Prädikatvariable noch nicht implementiert — Triple übersprungen:', t);
				continue;
			}

			if (!sVar && !oVar)
			{
				// beide konkret — nur Validierung, kein Binding
			}
			else if (sVar && !oVar)
			{
				if (!sBound)
					bindings[t.s] = startFrom(t.o).follow(t.p, SR.OBJECT);
				else
					bindings[t.s] = bindings[t.s].arrayFilter(t.p, SR.SUBJECT, t.o);
			}
			else if (!sVar && oVar)
			{
				if (!oBound)
					bindings[t.o] = startFrom(t.s).follow(t.p, SR.SUBJECT);
				else
					bindings[t.o] = bindings[t.o].arrayFilter(t.p, SR.OBJECT, t.s);
			}
			else // beide Variablen
			{
				if (sBound && !oBound)
					bindings[t.o] = bindings[t.s].follow(t.p, SR.SUBJECT);
				else if (!sBound && oBound)
					bindings[t.s] = bindings[t.o].follow(t.p, SR.OBJECT);
				else if (sBound && oBound)
				{
					// JOIN: filtere ?s auf die, deren output[p] in ?o liegt
					var oSet = new Set(bindings[t.o]._data);
					var joined = [];
					var sData = bindings[t.s]._data;
					for (var k = 0; k < sData.length; k++)
					{
						var el = sData[k];
						if (!el.output || !el.output[t.p]) continue;
						var edges = el.output[t.p];
						for (var m = 0; m < edges.length; m++)
							if (oSet.has(edges[m].successor)) { joined.push(el); break; }
					}
					bindings[t.s] = new SR(joined);
				}
				else
					console.warn('SPARQL execute: beide Variablen ungebunden — Triple übersprungen:', t);
			}
		}

		var result = {};
		for (var v = 0; v < q.select.length; v++)
		{
			var varName = q.select[v];
			result[varName] = bindings[varName] || new SR([]);
		}
		return result;
	}

	this.getSubClasses = function(uri)
	{
		var SUBCLASSOF = 'http://www.w3.org/2000/01/rdf-schema#subClassOf';
		var clazz = de.auster_gmbh.semanticelement.semantic_web.getClazz(uri);
		if (!clazz || !clazz.representation) return [];

		var result = [];
		var visited = new Set();
		var queue = [clazz.representation];

		while (queue.length > 0)
		{
			var element = queue.shift();
			if (!element || visited.has(element)) continue;
			visited.add(element);
			result.push(element);

			if (element.input && element.input[SUBCLASSOF])
				for (var i = 0; i < element.input[SUBCLASSOF].length; i++)
				{
					var ante = element.input[SUBCLASSOF][i].antecessor;
					if (ante && !visited.has(ante)) queue.push(ante);
				}
		}

		return new de.auster_gmbh.library.tools.SemanticResult(result);
	}

	this.getQueryStructure = function()
	{
		var rows = mealy.getResult();
		var result = { base: '', prefixes: {}, select: [], where: [] };

		for (var i = 0; i < rows.length; i++)
		{
			var row = rows[i];
			switch (row['#section'])
			{
				case 'base':
					if (row['uri']) result.base = row['uri'];
					break;
				case 'prefix':
					if (row['name'] && row['uri'])
						result.prefixes[row['name']] = row['uri'];
					break;
				case 'select':
					if (row['col']) result.select.push(row['col']);
					break;
				case 'where':
					result.where.push({
						s: row['subject']  || '',
						p: row['predicate'] || '',
						o: row['object_txt'] !== undefined ? '"' + row['object_txt'] + '"' : (row['object'] || ''),
						deep: row['#deep'] || 0
					});
					break;
			}
		}

		var resolve = function(term, base, prefixes)
		{
			if (!term || term.charAt(0) === '?') return term;
			var colon = term.indexOf(':');
			if (colon !== -1)
			{
				var ns = term.substring(0, colon);
				if (prefixes[ns]) return prefixes[ns] + term.substring(colon + 1);
			}
			else if (base)
				return base + '#' + term;
			return term;
		};

		for (var j = 0; j < result.where.length; j++)
		{
			var t = result.where[j];
			t.s = resolve(t.s, result.base, result.prefixes);
			t.p = resolve(t.p, result.base, result.prefixes);
			if (t.o.charAt(0) !== '"') t.o = resolve(t.o, result.base, result.prefixes);
		}

		return result;
	}



};

de.auster_gmbh.library.tools.CSVObject = {

	cur_seperator: ';',

	setSperator: function(seperator)
	{
		this.cur_seperator = seperator;	
	},
	
	parseCSV: function(csv)
	{
	
	}
};

//de.auster_gmbh.library.language.test();
