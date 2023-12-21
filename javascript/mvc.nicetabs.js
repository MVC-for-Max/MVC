//sketch.default2d();


inlets = 2;
outlets = 2;

mgraphics.init();
mgraphics.relative_coords = 1;
mgraphics.autofill = 0;

var aspect;


var selectedCells = [];
var listOfSelectedCells = ["none"];
var startDragCell = 0;
var currentCell = 0;

var activeCellColor = [.5, .5, .5, 1.];
var activeTextColor = [0, 0, 0, 1.];
var activeSelectedCellColor = [.2, .7, .7, 1.];

var passiveCellColor = [.8, .8, .8, 1.];
var passiveTextColor = [0.2, 0.2, 0.2, 1.];
var passiveSelectedCellColor = [.5, .5, .5, 1.];

var _mintabwidth  = 29; // minimum tab width in pixels
var _maxtabs = 10; //maxium nb of tabs below which we spread them
var _ntabs = 0;
var _tabnames = [];
var previousHoveredCell = -1;
var _active = 1;


function loadbang(){
  	selectedCells.push(0);
	ntabs(1);
}

function paint()
{   
    with (mgraphics){

        var boxheight = this.box.rect[3] - this.box.rect[1];

        var pixelsize = 1/boxheight;

        var standard_line_width = 2;
        var line_width = standard_line_width/boxheight;
        set_line_width(line_width);
        set_source_rgba(.2, .2, .2, 1.);
        // rectangle(x_top_left, y_top_left, width, height)
        //rectangle(-1*aspect+0.5*line_width, 1-0.5*line_width, 2*aspect-0.5*line_width, 2)
        stroke();
        

      	selectedCellColor = ((_active && (_ntabs>0)) ? activeSelectedCellColor : passiveSelectedCellColor);			
      	textColor = ((_active && (_ntabs>0)) ? activeTextColor : passiveTextColor);			
		cellColor = ((_active && (_ntabs>0)) ? activeCellColor : passiveCellColor);		

        var fontmeasure = font_extents();
        var baselineoffset = -fontmeasure[1] + (fontmeasure[0]+fontmeasure[1]) / 2;

        var minTab = Math.max(_ntabs,1);
        for (var i=0;i<minTab;i++)
        {

            var halfcellwidth = aspect/minTab;
            var cellposition = (2*i + 1)*halfcellwidth - aspect;
        
            var cellheight = 0.95;
            var cellXscale = 1;

            var x1 = cellposition - cellXscale*halfcellwidth;
            var y1 = -1*cellheight;
            var x2 = cellposition - cellXscale*halfcellwidth;
            var y2 = cellheight;
            var x3 = cellposition + cellXscale*halfcellwidth;
            var y3 = cellheight;
            var x4 = cellposition + cellXscale*halfcellwidth;
            var y4 = -1*cellheight;

            var currentCellColor;
            if (selectedCells[i] == 1) {
                currentCellColor = selectedCellColor; 
            }
            else {
                currentCellColor = cellColor; 
            }

            set_source_rgba(currentCellColor);
            rectangle(x1,cellheight, 2*cellXscale*halfcellwidth, 2*cellheight);
            fill();

            var frameColor = currentCellColor.map(function(x) { return x * 0.5; });
            set_source_rgba(frameColor);
            rectangle(x1,cellheight, 2*cellXscale*halfcellwidth, 2*cellheight);
            stroke();

            
			
			// use tabname if exists, otherwise use cell index
			if(typeof _tabnames[i] === 'undefined') {
    			// does not exist
				var textitem = (i+1).toString();
			}
			else {
    			// does exist
				var textitem = _tabnames[i];
			}
			
			//outlet(1, "currenttabname", textitem);
			
			//post("measure", i, text_measure(textitem)[0], fontmeasure[0], "\n");
			
            var textwidth = text_measure(textitem)[0]/fontmeasure[0];
            var textheigth = text_measure(textitem)[1]/fontmeasure[0];

			// if text width exceeds cell size, truncate text with dots
			var _textwidthRatio = (2*cellXscale*halfcellwidth)/textwidth;
			if (_textwidthRatio < 1){
				var truncationLength = Math.floor(textitem.length*_textwidthRatio) - 2;
				textitem = truncate(textitem, truncationLength);
			}

            //m.graphics.select_font_face(cr, "Arial", CAIRO_FONT_SLANT_NORMAL, CAIRO_FONT_WEIGHT_BOLD);
            select_font_face("Arial","normal", "normal"); // could used "italic" for 3rd arg and "bold" for 3rd arg
            set_font_size(12);
            set_source_rgba(textColor); // black text


			var realTextStartPosition = cellposition - textwidth/2.;
			var textStartPosition = Math.max(realTextStartPosition, x1 + 5*pixelsize) ;
            move_to(textStartPosition, -1*cellheight/2.); //center text
            //text_path(i.toString());
			text_path(textitem);
            fill();
        }


        //var textwidth = mgraphics.text_measure("toto")[0];
        //var textheight = mgraphics.text_measure("toto")[1];
  
    }
}

function onclick(x,y,but,cmd,shift,capslock,option,ctrl)
{
	if (!_active || (_ntabs==0)) return;

    //var pos = sketch.screentoworld(x,y)[0];

	var boxwidth = this.box.rect[2] - this.box.rect[0];
	var pos = 2 * (x / boxwidth) - 1;
    //pos /= aspect;
    if (pos > 1.) pos = 1.;
    if (pos < -1.) pos = -1.;
    startDragCell = Math.round(Math.round((0.5*(pos+1)*_ntabs) - 0.5));

    selectedCells[startDragCell] = !selectedCells[startDragCell]
    mgraphics.redraw();

	//post("start", startDragCell,"\n");

    outlet(1, "start", startDragCell);
    //outlet(1, "posInWorld", pos);

}

onclick.local = 1; //private. could be left public to permit "synthetic" events

function extclick(x,y,but,cmd,shift,capslock,option,ctrl)
{
    onclick(x,y,but,cmd,shift,capslock,option,ctrl);
}


function ondrag(x,y,but,cmd,shift,capslock,option,ctrl)
{
    if (!_active || (_ntabs==0)) return;
	
    //var pos = sketch.screentoworld(x,y)[0];
    //pos /= aspect;

	var boxwidth = this.box.rect[2] - this.box.rect[0];
	var pos = 2 * (x / boxwidth) - 1;
	
    if (pos > 1.) pos = 1.;
    if (pos < -1.) pos = -1.;
    var newCurrentCell = Math.round((0.5*(pos+1)*_ntabs)-0.5);
    if (newCurrentCell!=currentCell){
       
        // prevent from gaps
        var bounds = [];
        var bounds = (newCurrentCell<startDragCell ? [newCurrentCell, startDragCell] : [startDragCell, newCurrentCell]);
        for (var i=bounds[0]; i<=bounds[1]; i++){
            selectedCells[i] = selectedCells[startDragCell];
        }
        currentCell = newCurrentCell;
        outlet(1, "current", newCurrentCell);
        //selectedCells[newCurrentCell] = selectedCells[startDragCell];
    } 
    mgraphics.redraw();

    listOfSelectedCells = [];
    // listOfSelectedCells.length = 0;
    for (var i=0;i<_ntabs;i++){
        if (selectedCells[i]==1) {
            listOfSelectedCells.push(i);
        }
        
    } 
    // set none if no cell is selected
    if (listOfSelectedCells.length == 0) listOfSelectedCells.push("none");
 
    // output only on mouse up
    if (but==0){
		//post("yo");
        outlet(0, listOfSelectedCells);
    }
}

ondrag.local = 0; //private. could be left public to permit "synthetic" events

// let call the ondrag function from outside
// this is only because JSUI prevents dragging in bpatchers
// so we override this function by get mouse data from an external LCD object 
function extdrag(x,y,but,cmd,shift,capslock,option,ctrl)
{
	ondrag(x,y,but,cmd,shift,capslock,option,ctrl);
}

function ondblclick(x,y,but,cmd,shift,capslock,option,ctrl)
{
}
ondblclick.local = 1;

function onclickdrag(x,y)
{	
}


function onresize() {
	aspect = calcAspect();
    mgraphics.redraw();
}

// compute aspect ratio
function calcAspect() {
  var width = this.box.rect[2] - this.box.rect[0];
  var height = this.box.rect[3] - this.box.rect[1];
  return width/height;
}

function ntabs(val){
	
	val = Math.max(val,0);

	if (val == _ntabs) return; // do nothing if the same as before
	

	var sizeDiff = (val - _ntabs);	
	if (sizeDiff >= 0) {
        var valueToPush = (val==1) ? 1 : 0; // if we change from 0 to 1 tab, make this one active
		for (var i=0;i<sizeDiff;i++){
        	selectedCells.push(valueToPush);
    	}
	}
	else  {
		selectedCells = selectedCells.slice(0, val);
		
	}

	_ntabs = val;
	
	listOfSelectedCells = [];
    for (var i=0;i<_ntabs;i++){
        if (selectedCells[i]==1) {
            listOfSelectedCells.push(i);
        }
        
    }

    // set none if no cell is selected
    if (listOfSelectedCells.length == 0) listOfSelectedCells.push("none");

	//leave 1st item selected if none is selected
	//if (listOfSelectedCells.length == 0) {
	//	selectedCells[0] = 1;
	//	listOfSelectedCells.push(0);
	//}

    // resize jsui frame according to ntabs and min tab width
    var height = this.box.rect[3] - this.box.rect[1];
    if (_ntabs <= _maxtabs) {
		var tabsize = _maxtabs*_mintabwidth;
        box.size(tabsize ,height);
		outlet(1, "tabsize", tabsize,height);
    } 
    else {
		var tabsize =_ntabs*_mintabwidth;
		box.size(tabsize, height);
 		outlet(1, "tabsize", tabsize, height);
   }
    aspect = calcAspect();
    mgraphics.redraw();
}


function itemsize(w){
    _mintabwidth = w;

    // resize jsui frame according to ntabs and min tab width
    var height = this.box.rect[3] - this.box.rect[1];
    if (_ntabs <= _maxtabs) {
		var tabsize = _maxtabs*_mintabwidth;
        box.size(tabsize ,height);
		outlet(1, "tabsize", tabsize,height);
    } 
    else {
		var tabsize =_ntabs*_mintabwidth;
		box.size(tabsize, height);
 		outlet(1, "tabsize", tabsize, height);
   }
    aspect = calcAspect();
    mgraphics.redraw();
}

function maxitems(n){
    _maxtabs = n;

    // resize jsui frame according to ntabs and min tab width
    var height = this.box.rect[3] - this.box.rect[1];
    if (_ntabs <= _maxtabs) {
		var tabsize = _maxtabs*_mintabwidth;
        box.size(tabsize ,height);
		outlet(1, "tabsize", tabsize,height);
    } 
    else {
		var tabsize =_ntabs*_mintabwidth;
		box.size(tabsize, height);
 		outlet(1, "tabsize", tabsize, height);
   }
    aspect = calcAspect();
    mgraphics.redraw();

}

function list(){
    var theCells = arrayfromargs(arguments);
    listOfSelectedCells = [];

    for (var i=0;i<_ntabs;i++){
        selectedCells[i] = 0;
    }

    for (var i = 0; i < theCells.length; i++){
        if (theCells[i] < _ntabs) {
            selectedCells[theCells[i]] = 1;
        }
    }
    
        for (var i=0;i<_ntabs;i++){
        if (selectedCells[i]==1) {
            listOfSelectedCells.push(i);
        }
        
    } 
    // set none if no cell is selected
    if (listOfSelectedCells.length == 0) listOfSelectedCells.push("none");
    mgraphics.redraw();
    // output only on mouse up
    outlet(0, listOfSelectedCells);
}

function tabnames(){
	_tabnames = arrayfromargs(arguments);
	outlet(1, "tabnames",_tabnames);
	mgraphics.redraw();
}

function htabcolor(){
	var _color = arrayfromargs(arguments);
	activeSelectedCellColor = [_color[0], _color[1],_color[2],_color[3]]
	outlet(1, "color",_color);
	mgraphics.redraw();
}

function tabcolor(){
	var _color = arrayfromargs(arguments);
	activeCellColor = [_color[0], _color[1],_color[2],_color[3]]
	outlet(1, "color",_color);
	mgraphics.redraw();
}

function textcolor(){
	var _color = arrayfromargs(arguments);
	activeTextColor = [_color[0], _color[1],_color[2],_color[3]]
	mgraphics.redraw();
}

function bang(){
	outlet(0, listOfSelectedCells);
}

function truncate(input, maxLength) {
   if (input.length > maxLength) {
      return input.substring(0, maxLength) + '...';
   }
   return input;
};

function hover(x, y) {
    var pos = sketch.screentoworld(x,y)[0];
    pos /= aspect;
    if (pos > 1.) pos = 1.;
    if (pos < -1.) pos = -1.;
    var hoveredCell = Math.round((0.5*(pos+1)*_ntabs)-0.5);

	

//	if (hoveredCell != previousHoveredCell){
		// use tabname if exists, otherwise use cell index
		if(typeof _tabnames[hoveredCell] === 'undefined') {
    		// does not exist
			var textitem = (hoveredCell+1).toString();
		}
		else {
    		// does exist
			var textitem = _tabnames[hoveredCell];
		}
		outlet(1, "hover", textitem);
//		previousHoveredCell = hoveredCell;
//	}
};

function active(state) {
   _active = Boolean(state);
	//post(_active)
	mgraphics.redraw();
};

//select none
function none(){
	for (var i=0;i<_ntabs;i++){
        	selectedCells[i]= 0;
	}
	listOfSelectedCells = [];
	listOfSelectedCells.push("none");
	mgraphics.redraw();
	bang();
}

//select all
function all(){
	for (var i=0;i<_ntabs;i++){
        	selectedCells[i]= 1;
	}
	
	listOfSelectedCells = [];
    for (var i=0;i<_ntabs;i++){
        if (selectedCells[i]==1) {
            listOfSelectedCells.push(i);
        }
        
    } 
	mgraphics.redraw();
	bang();
}

function anything()
{
	//post("unknown method" + a + "\n");
}