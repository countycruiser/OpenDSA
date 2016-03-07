"use strict";

$(document).ready(function () {

    JSAV.init();
    var av = new JSAV("MinEditDistance_Ch2_3");
    var table = av.ds.matrix([["T", , , , , , ], ["A", , , , , , ], ["C", , , , , , ], ["#", , , , , , ], [ , "#", "O", "R", "C", "A", ]]);
    // Begin Slide 1
    av.umsg("To get from the empty string to the empty string, we don't have to do anything. Therefore, we place a 0 in the bottom left cell to show that it takes 0 setps.", {preserve: true});
    table.highlight(3,1);
	table.highlight(3,0);
	table.highlight(4,1);
	table.value(3,1,0);
    av.displayInit();
    av.step();
    // Begin Slide 2
    av.umsg("To get from the empty string to \"O\", we must add a letter, so we place a 1 in the corresponding cell to show that it takes 1 step.");
    table.unhighlight(3,1);
	table.unhighlight(4,1);
	table.highlight(3,2);
	table.highlight(4,2);
	table.value(3,2,1);
    av.step();
    // Begin Slide 3
    av.umsg("To get from the empty string to \"OR\", we must add two letters, so we place a 2 in the corresponding cell to show that it takes 2 steps.");
    table.unhighlight(3,2);
	table.unhighlight(4,2);
	table.highlight(3,3);
	table.highlight(4,3);
	table.value(3,3,2);
	av.step();
	// Begin Slide 4
	av.umsg("To get from the empty string to \"ORC\", we must add three letters, so we place a 3 in the corresponding cell to show that it takes 3 steps.");
	table.unhighlight(3,3);
	table.unhighlight(4,3);
	table.highlight(3,4);
	table.highlight(4,4);
	table.value(3,4,3);
	av.step();
	// Begin Slide 5
	av.umsg("To get from the empty string to \"ORCA\", we must add four letters, so we place a 4 in the corresponding cell to show that it takes 4 steps.");
	table.unhighlight(3,4);
	table.unhighlight(4,4);
	table.highlight(3,5);
	table.highlight(4,5);
	table.value(3,5,4);
    av.recorded();
});
