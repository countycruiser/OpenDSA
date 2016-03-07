"use strict";

$(document).ready(function () {

    JSAV.init();
    var av = new JSAV("MinEditDistance_Ch2_4");
    var table = av.ds.matrix([["T", , , , , , ], ["A", , , , , , ], ["C", , , , , , ], ["#",0,1,2,3,4, ], [ , "#", "O", "R", "C", "A", ]]);;
    // Begin Slide 1
    av.umsg("To get from \"C\" to the empty string, we must delete a letter, so we place a 1 in the corresponding cell to show that it takes 1 step.", {preserve: true});
    table.highlight(2,1);
	table.highlight(2,0);
	table.highlight(4,1);
	table.value(2,1,1);
    av.displayInit();
    av.step();
    // Begin Slide 2
    av.umsg("To get from \"CA\" to the empty string, we must delete two letters, so we place a 2 in the corresponding cell to show that it takes 2 steps.");
    table.unhighlight(2,1);
	table.unhighlight(2,0);
	table.highlight(1,1);
	table.highlight(1,0);
	table.value(1,1,2);
    av.step();
    // Begin Slide 3
    av.umsg("To get from \"CAT\" to the empty string, we must delete three letters, so we place a 3 in the corresponding cell to show that it takes 3 steps.");
    table.unhighlight(1,1);
	table.unhighlight(1,0);
	table.highlight(0,1);
	table.highlight(0,0);
	table.value(0,1,3);
    av.recorded();
});
