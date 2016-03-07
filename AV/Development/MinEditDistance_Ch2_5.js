"use strict";

$(document).ready(function () {

    JSAV.init();
    var av = new JSAV("MinEditDistance_Ch2_5");
    var table = av.ds.matrix([["T",3, , , , , ], ["A",2, , , , , ], ["C",1, , , , , ], ["#",0,1,2,3,4, ], [ , "#", "O", "R", "C", "A", ]]);;
    // Begin Slide 1
    av.umsg("In this example, we will be adding the letter \"O\" from our goal word \"ORCA\".", {preserve: true});
    table.highlight(2,2);
	table.highlight(4,2);
    av.displayInit();
    av.step();
    // Begin Slide 2
    av.umsg("The cell to the left represents the minimum number of steps, or cost, to get to the empty string from \"C\", so we will be adding \"O\" to the empty string.");
    table.unhighlight(2,2);
	table.unhighlight(4,2);
	table.highlight(2,1);
	table.highlight(4,1);
    av.step();
    // Begin Slide 3
    av.umsg("We add 1 to the value from the left to show that it took 1 step to add \"O\".");
    table.unhighlight(2,1);
	table.unhighlight(4,1);
	table.highlight(2,2);
	table.highlight(4,2);
	table.value(2,2,2);
    av.recorded();
});
