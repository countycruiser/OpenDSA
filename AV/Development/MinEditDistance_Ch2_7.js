"use strict";

$(document).ready(function () {

    JSAV.init();
    var av = new JSAV("MinEditDistance_Ch2_7");
    var table = av.ds.matrix([["T",3, , , , , ], ["A",2, , , , , ], ["C",1, , , , , ], ["#",0,1,2,3,4, ], [ , "#", "O", "R", "C", "A", ]]);;
    // Begin Slide 1
    av.umsg("In this example, we will be swapping \"C\" from \"CAT\" for \"O\" from \"ORCA\".", {preserve: true});
    table.highlight(2,2);
	table.highlight(2,0);
	table.highlight(4,2);
    av.displayInit();
    av.step();
    // Begin Slide 2
    av.umsg("The cell below and to the left represents the number of steps to get from the empty string to the empty string. To get to the empty string, we must delete \"C\". Once we have the empty string, we add \"O\" to to complete the swap.");
    table.unhighlight(2,2);
	table.unhighlight(2,0);
	table.unhighlight(4,2);
	table.highlight(3,1);
	table.highlight(3,0);
	table.highlight(4,1);
    av.step();
    // Begin Slide 3
    av.umsg("We add 2 to the value from the cell below and to the left to show that it took 2 steps to swap \"C\" for \"O\".");
	table.unhighlight(3,0);
	table.unhighlight(4,1);
	table.highlight(2,2);
	table.value(2,2,2);
    av.recorded();
});
