"use strict";

$(document).ready(function () {

    JSAV.init();
    var av = new JSAV("MinEditDistance_Ch2_6");
    var table = av.ds.matrix([["T",3, , , , , ], ["A",2, , , , , ], ["C",1, , , , , ], ["#",0,1,2,3,4, ], [ , "#", "O", "R", "C", "A", ]]);;
    // Begin Slide 1
    av.umsg("In this example, we will be deleting the letter \"C\" from our starting word \"CAT\".", {preserve: true});
    table.highlight(2,2);
	table.highlight(2,0);
    av.displayInit();
    av.step();
    // Begin Slide 2
    av.umsg("The cell below represents the minimum number of steps it took to get to \"O\" from the empty string. However, since we are starting with \"C\", we must first delete the letter \"C\" to get to the empty string.");
    table.unhighlight(2,2);
	table.unhighlight(2,0);
	table.highlight(3,2);
	table.highlight(3,0);
    av.step();
    // Begin Slide 3
    av.umsg("We add 1 to the value from the cell below to show that it took 1 step to delete \"C\".");
    table.unhighlight(3,2);
	table.unhighlight(3,0);
	table.highlight(2,2);
	table.highlight(2,0);
	table.value(2,2,2);
    av.recorded();
});
