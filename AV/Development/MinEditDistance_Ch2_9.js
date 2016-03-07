"use strict";

$(document).ready(function () {

    JSAV.init();
    var av = new JSAV("MinEditDistance_Ch2_9");
    var table = av.ds.matrix([["T",3, , , , , ], ["A",2, , , , , ], ["C",1, , , , , ], ["#",0,1,2,3,4, ], [ , "#", "O", "R", "C", "A", ]]);;
	// RUN THROUGH THE CAT/ORCA EXAMPLE
    // Begin Slide 1
    av.umsg("In this example, we will be swapping \"C\" from \"CAT\" for \"C\" from \"ORCA\".", {preserve: true});
    table.highlight(2,4);
	table.highlight(2,0);
	table.highlight(4,4);
    av.displayInit();
    av.step();
    // Begin Slide 2
    av.umsg("Since we don't have to use any steps, we take the value below and to the left and add 0.");
    table.unhighlight(2,0);
	table.unhighlight(4,4);
	table.highlight(3,3);
	table.value(2,4,2);
    av.recorded();
});
