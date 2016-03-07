"use strict";

$(document).ready(function () {

    JSAV.init();
    var av = new JSAV("MinEditDistance_Ch2_2");
    var table = av.ds.matrix([["T", , , , , , ], ["A", , , , , , ], ["C", , , , , , ], ["#", , , , , , ], [ , "#", "O", "R", "C", "A", ]]);
    // Begin Slide 1
    av.umsg("This cell will show the minimum cost to get from the empty string (no letters) to \"OR\".", {preserve: true});
    table.highlight(3,3);
    /*table.highlight(3,0);
    table.highlight(4,1);
    table.highlight(4,2);
    table.highlight(4,3);*/
    av.displayInit();
    av.step();
    // Begin Slide 2
    av.umsg("This cell will show the minimum cost to get from \"CA\" to \"ORC\".");
    table.unhighlight(3,3);
    table.highlight(1,4);
    /*table.highlight(2,0);
    table.highlight(1,0);
    table.highlight(4,4);*/
    av.step();
    // Begin Slide 3
    av.umsg("This cell will show the minimum cost to get from our starting word \"CAT\" to our goal word \"ORCA\". This will be the final minimum edit distance between the two words.");
    table.unhighlight(1,4);
    table.highlight(0,5);
    /*table.highlight(0,0);
    table.highlight(4,5);*/
    av.recorded();
});
