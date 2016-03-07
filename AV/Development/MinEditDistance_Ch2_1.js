"use strict";

$(document).ready(function () {

    JSAV.init();
    var av = new JSAV("MinEditDistance_Ch2_1");
    var table = av.ds.matrix([["T", , , , , , ], ["A", , , , , , ], ["C", , , , , , ], ["#", , , , , , ], [ , "#", "O", "R", "C", "A", ]]);
    // Begin Slide 1
    av.umsg("The height of the table should be the number of letters in our starting word plus one for the empty string (no letters). We use \"#\" to denote the empty string. In this example, the height of the table is 4 (not including the labels).", {preserve: true});
    table.highlight(0,0);
    table.highlight(1,0);
    table.highlight(2,0);
    table.highlight(3,0);
    av.displayInit();
    av.step();
    // Begin Slide 2
    av.umsg("Similarly, the width should be the number of letters in our goal word plus one for the empty string. In this example, the width of the table is 5 (not including the labels).");
    table.unhighlight(0,0);
    table.unhighlight(1,0);
    table.unhighlight(2,0);
    table.unhighlight(3,0);
    table.highlight(4,1);
    table.highlight(4,2);
    table.highlight(4,3);
    table.highlight(4,4);
    table.highlight(4,5);
    av.recorded()
});
