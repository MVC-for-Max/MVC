/*

simple 2d dial

arguments: fgred fggreen fgblue bgred bggreen bgblue dialred dialgreen dialblue

*/

sketch.default2d();
var vfrgb = [0.5,0.5,0.5,1.];

// process arguments
if (jsarguments.length>1)
	vfrgb[0] = jsarguments[1];
if (jsarguments.length>2)
	vfrgb[1] = jsarguments[2];
if (jsarguments.length>3)
	vfrgb[2] = jsarguments[3];
if (jsarguments.length>4)
	vfrgb[3] = jsarguments[4];

draw();

function draw()
{
	var theta;
	var height = box.rect[3] - box.rect[1]; 
	var width = box.rect[2] - box.rect[0]; 

	var ratio = width/height;
	
	with (sketch) {
		glclearcolor(1,1,1,0);
		glclear();			
		glcolor(vfrgb);
		
		var spacing = 10;
		var numlines = 2*Math.round(width/spacing, 1)+1;
		
		//glcolor(0.8, 0.6, 0.8, 0.75);
		gllinewidth(5);
		for (var i = 0; i <= numlines; i++){

			moveto(4*i/numlines*ratio-ratio, ratio);
			lineto(4*i/numlines*ratio-3*ratio, -1*ratio);
		}
	}
}


function fsaa(v)
{
	sketch.fsaa = v;
	bang();
}

function color(r,g,b,a)
{
	//vfrgb[0] = r;
	//vfrgb[1] = g/255.;
	//vfrgb[2] = b/255.;
	//vfrgb[3] = a/255.;
	vfrgb = [r, g,b,a];
	draw();
	refresh();
}

function forcesize(w,h)
{
	if (w!=h) {
		//h = w;
		box.size(w,h);
	}
}
forcesize.local = 1; //private

function onresize(w,h)
{
	forcesize(w,h);
	draw();
	refresh();
}
onresize.local = 1; //private
