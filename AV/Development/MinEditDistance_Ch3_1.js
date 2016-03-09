"use strict";

$(document).ready(function () {

   JSAV.init();
   var av = new JSAV("MinEditDistance_Ch3_1");
    
   var a = "KITTEN";
   var b = "SITTING";

 
	var mx = [];
	
	var i;
	var j;
   var arr;		
	
	//Vertical Word
	for(i = 1; i <= a.length; i++){
		arr = [];
		arr[0] = a.charAt(i-1);
		for (j = 1; j <= b.length + 1; j++) {
			arr[j] = '';
		}
		mx[a.length-i] = arr;
	}
	
	//# below vertical word
	arr = [];
	arr[0] = '#';
	for (j = 1; j <= b.length + 1; j++) {
			arr[j] = '';
	}
	mx[a.length] = arr;

	//Horizontal Word
	arr = [];
	arr[0] = '';
	arr[1] = '#'
	for (j = 0; j < b.length; j++) {
			arr[j+2] = b.charAt(j);
	}
	mx[a.length+1] = arr;
	
	
	//Horizontal numbering
	for (j = 0; j <= b.length; j++) {
		mx[a.length][j+1] = j;
	}
	
	//Vertical numbering
	for (i = 1; i <= a.length; i++) {
		mx[a.length - i][1] = i;
	}
	
	
 	var table = av.ds.matrix(mx);
	
	// Begin Slide 1
 	av.umsg("Here we have the starting point for the algorithm. The basic setup has been complete, and we can now begin iterating through the steps", {preserve: true});
 	av.displayInit();
 	av.step();
	
	// SETUP COMPLETE
	
	av.umsg("Now we will iterate through step by step. The highlighted cell is the one that we are calculating.");

 		var aIndex = 0;
	
	for(i = a.length - 1; i >= 0; i--){
		var aChar = a.charAt(aIndex);
		aIndex++;
		for (j = 2; j <=b.length + 1; j++) {
			// New Slide
			table.highlight(i, j);				
			av.step();
			
			if(aChar == b.charAt(j-2)){
				mx[i][j] = mx[i+1][j-1];				
			} else {
				mx[i][j] = Math.min(mx[i+1][j-1] + 2,
							  Math.min(mx[i+1][j] + 1, mx[i][j-1] + 1));				
			}
			table.value(i,j,mx[i][j]);
			table.unhighlight(i, j);
		}
	}
		
	// Begin Final Slide
   av.umsg("Once the algorithm is complete, we find the edit distance in the upper-right cell. In this case, the edit distance from " + a + " to " + b + " is " + mx[0][b.length+1]);
	
	//Highlights the edit distance cell in an aqua color                                          
	table.css(0, b.length+1, {"background-color": "aqua", "color": "rgb(150, 55, 50)"});	          
	
   av.recorded()
});

