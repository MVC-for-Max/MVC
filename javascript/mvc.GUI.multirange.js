//sketch.default2d();


inlets = 2;
outlets = 2;

mgraphics.init();
mgraphics.relative_coords = 1;
mgraphics.autofill = 0;

var aspect;

var _selectedHandle = -1;

var arrayX = []; // array containing right handle of each cell (between 0 and 1, last element is 1)

var activeCellColor = [.5, .5, .5, .5];
var activeTextColor = [0, 0, 0, 1.];
var activeSelectedCellColor = [.2, .7, .7, .5];
var activeSelectedCellFrameColor = [.2, .2, .2, .5];


var passiveCellColor = [.8, .8, .8, .5];
var passiveTextColor = [0.2, 0.2, 0.2, .5];
var passiveSelectedCellColor = [.5, .5, .5, .5];
var passiveSelectedCellFrameColor = [.1, .1, .1, .5];

var _mintabwidth  = 29; // minimum tab width in pixels
var _maxtabs = 10; //maxium nb of tabs below which we spread them
var _ntabs = 0;
var _tabnames = [];
var previousHoveredCell = -1;
var _active = 1;

// initialize with 2 tabs
ntabs(2);


function paint()
{   
    with (mgraphics){

        var boxheight = this.box.rect[3] - this.box.rect[1];
        var pixelsize = 1/boxheight;

        var standard_line_width = 2;
        var line_width = standard_line_width/boxheight;
        set_line_width(line_width);
        //set_source_rgba(.2, .2, .2, 1.);
        // rectangle(x_top_left, y_top_left, width, height)
        //rectangle(-1*aspect+0.5*line_width, 1-0.5*line_width, 2*aspect-0.5*line_width, 2)
        //stroke();
        

      	selectedCellColor = (_active ? activeSelectedCellColor : passiveSelectedCellColor);
		selectedCellFrameColor = (_active ? activeSelectedCellFrameColor : passiveSelectedCellFrameColor);			
      	textColor = (_active ? activeTextColor : passiveTextColor);			
		cellColor = (_active ? activeCellColor : passiveCellColor);		

        var fontmeasure = font_extents();
        var baselineoffset = -fontmeasure[1] + (fontmeasure[0]+fontmeasure[1]) / 2;

        var normalizedCellWidths = arrayDifference(arrayX);

        for (var i=0;i<_ntabs;i++)
        {

            var cellStarts = -1 * aspect;
            if (i > 0) cellStarts = aspect * (2*arrayX[i-1] - 1)

            var cellWidth = 2 * aspect * normalizedCellWidths[i];
            var cellheight = 0.95;
            var cellXscale = 1;

          	set_source_rgba(selectedCellColor);
            // centered rectangles
            rectangle(cellStarts, -1, cellWidth, -2);
            fill();

            //var frameColor = selectedCellColor.map(function(x) { return x * 0.5; });
			//var frameColor = [frameColor[0], frameColor[1],frameColor[2], 1.];
			var frameColor = selectedCellFrameColor;
			
            set_source_rgba(frameColor);
            // centered rectangles
            rectangle(cellStarts, -1, cellWidth, -2);
            stroke();

            // draw range handle in yellow
			//if (_selectedHandle == (i-1)) {
            //    set_source_rgba(1, 1, 0, 1);
            //    rectangle(cellStarts, -1, 0, -2);
            //    stroke();
            //}
        }
    }
}

function onclick(x,y,but,cmd,shift,capslock,option,ctrl) {
	if (!_active) return;

    _selectedHandle = -1;

    if (but == 1) {
        var boxheight = this.box.rect[3] - this.box.rect[1];
        var pixelsize = 1/boxheight;
    
         //post("hello button", "\n");
        var posX = sketch.screentoworld(x,y)[0];
        posX /= aspect;
        if (posX > 1.) posX = 1.;
        if (posX < -1.) posX = -1.;
        posX = (posX + 1)/2; //scale to 0-1
        // var selectedCell = Math.min(_ntabs-1, Math.round((0.5*(posX+1)*_ntabs)-0.5));
    
        var posY = sketch.screentoworld(x,y)[1];
        if (posY > 1.) posY = 1.;
        if (posY < -1.) posY = -1.;
        posY = (posY + 1)/2; //scale to 0-1
        //post("posX", posX, "\n");
    
        
        // treat X or Y ?
        for (var i=0;i<(_ntabs-1);i++){
            if ((posX > (arrayX[i] - 4*pixelsize)) && (posX < (arrayX[i] + 4*pixelsize)))
            { // grab horizontal handle ?
                _selectedHandle = i;
                break;
            }
        }
    }

    mgraphics.redraw();
}


onclick.local = 1; //private. could be left public to permit "synthetic" events

function extclick(x,y,but,cmd,shift,capslock,option,ctrl)
{
    onclick(x,y,but,cmd,shift,capslock,option,ctrl);
}


function ondrag(x,y,but,cmd,shift,capslock,option,ctrl)
{
	if (!_active) return;

    // output only on mouse up
    if (but==1){
        // normalize X and Y 
        var posX = sketch.screentoworld(x,y)[0];
        posX /= aspect;
        if (posX > 1.) posX = 1.;
        if (posX < -1.) posX = -1.;
        posX = (posX + 1)/2; //scale to 0-1
    
        var posY = sketch.screentoworld(x,y)[1];
        if (posY > 1.) posY = 1.;
        if (posY < -1.) posY = -1.;
        posY = (posY + 1)/2; //scale to 0-1
    
        // are we grabbing an horizontal handle ?
        if (_selectedHandle != -1) {
            //post("hello handle", _selectedHandle, posX, "\n");
            arrayX[_selectedHandle] = posX; // update selected handle position
            for (var i=0;i<_ntabs;i++) { // push other handles
                if (i < _selectedHandle) {
                    arrayX[i] = Math.min(arrayX[i], posX);
                }
                else if (i > _selectedHandle) {
                    arrayX[i] = Math.max(arrayX[i], posX);
                }
				outlet(0, arrayX.slice(0, -1)); // return X seperator, omitting the last which is always 1
            }
        }
    } else {
        _selectedHandle = -1;
    }

    mgraphics.redraw();

//	var returnX = arrayX.pop();
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
	
	val = Math.max(val,1);

	if (val == _ntabs) return;
	
	//var sizeDiff = (val - _ntabs);	
	//if (sizeDiff >= 0) {
	//	for (var i=0;i<sizeDiff;i++){
    //    	selectedCells.push([0, 0]);
    //	}
	//}
	//else  {
	//	selectedCells = selectedCells.slice(0, val);
	//	
	//}

	_ntabs = val;
    arrayX = [];
    arrayY = [];
 
	// fill cells with default values
    for (var i=0;i<_ntabs;i++){
        arrayX.push((i+1)/_ntabs);
    }



    // resize jsui frame according to ntabs and min tab width
    //var height = this.box.rect[3] - this.box.rect[1];
    //if (_ntabs <= _maxtabs) {
	//	var tabsize = _maxtabs*_mintabwidth;
    //    box.size(tabsize ,height);
	//	outlet(1, "tabsize", tabsize,height);
    //} 
    //else {
	//	var tabsize =_ntabs*_mintabwidth;
	//	box.size(tabsize, height);
 	//	outlet(1, "tabsize", tabsize, height);
    //}
    aspect = calcAspect();
    mgraphics.redraw();
}

function list(){
 	//post('json', JSON.stringify(values),'\n');
    var newValues = arrayfromargs(arguments); 
	for (var i = 0; i < Math.min(_ntabs-1, newValues.length) ; i++) {
  		arrayX[i] = newValues[i];
		//post("hello");
	}
	arrayX.sort(function(a, b){return a - b});
	outlet(0, arrayX.slice(0, -1));
    mgraphics.redraw();
}

function set(){
    var newValues = arrayfromargs(arguments); 
	for (var i = 0; i < Math.min(_ntabs-1, newValues.length) ; i++) {
  		arrayX[i] = newValues[i];
	}
	arrayX.sort(function(a, b){return a - b});
    mgraphics.redraw();
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

function framecolor(){
	var _color = arrayfromargs(arguments);
	activeSelectedCellFrameColor = [_color[0], _color[1],_color[2],_color[3]]
	//outlet(1, "color",_color);
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
}

function truncate(input, maxLength) {
   if (input.length > maxLength) {
      return input.substring(0, maxLength) + '...';
   }
   return input;
};


function hover(x, y) {

    var posX = sketch.screentoworld(x,y)[0];
    posX /= aspect;
    if (posX > 1.) posX = 1.;
    if (posX < -1.) posX = -1.;
     posX = (posX + 1)/2; //scale to 0-1
    
    var posY = sketch.screentoworld(x,y)[1];
    if (posY > 1.) posY = 1.;
    if (posY < -1.) posY = -1.;
    posY = (posY + 1)/2; //scale to 0-1

    var hoveredCell = Math.round((0.5*(posX+1)*_ntabs)-0.5);

    // treat X or Y ?
    for (var i=0;i<_ntabs;i++){
        if ((posX > 0.7 * selectedCells[i][0]) && (posX < 1.2 * selectedCells[i][0])){ // grab horizontal handle ?
            //post("hello handle", i);
            _selectedHandle = i;
        }
        else _selectedHandle = -1;
    }

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

    mgraphics.redraw();
};


function active(state) {
   _active = Boolean(state);
	//post(_active)
	mgraphics.redraw();
};


function anything()
{
	//post("unknown method" + a + "\n");
}


function cumulativeSum(myArray)
{
    var result = [];
    result.push(myArray[0]);

    for (var i=1;i<myArray.length;i++){
        result.push(myArray[i]+result[i-1])
    }
    return result;
}

function arrayDifference(myArray)
{
    var result = [];
    result.push(myArray[0]);

    for (var i=1;i<myArray.length;i++){
        result.push(myArray[i]-myArray[i-1])
    }
    return result;
}

//post(arrayDifference([0.1, 0.4, 0.5, 0.9, 1.]))

function findclosest(num, arr){
    curr = arr[0]
    for (var i = 0; i < arr.length; i++){
        if (Math.abs(num - arr[i]) < Math.abs(num - curr)) curr = arr[i]
        }
    return curr
}

function findcell(num, arr){
    //post("-", num, "\n")

    for (var i = 0; i < arr.length; i++){
        //post("----", arr[i], "\n")
        if (num < arr[i]) {
            break;
        }
    }
    //post("------", i, "\n")
    return i;
}

function anything()
{
	var a = arrayfromargs(messagename, arguments);
	post('Function "' + a[0] + '" is not supported by mvc.GUI.multirange.\n');
}
