"use strict";

$(document).ready(function () {

    JSAV.init();
    var av = new JSAV("MinEditDistance_Ch2_9");
    var table = av.ds.matrix([["T",3, , , , , ], ["A",2, , , , , ], ["C",1, , , , , ], ["#",0,1,2,3,4, ], [ , "#", "O", "R", "C", "A", ]]);;
	// RUN THROUGH THE CAT/ORCA EXAMPLE
    // Begin Slide 1
    av.umsg("As we saw in the previous examples, the cost to get from \"C\" to \"O\" is 2, whether we are adding a letter (adding 1 to the cost from the left)...", {preserve: true});
    table.highlight(2,2);
	table.highlight(2,1);
    av.displayInit();
    av.step();
    // Begin Slide 2
    av.umsg("As we saw in the previous examples, the cost to get from \"C\" to \"O\" is 2, whether we are adding a letter (adding 1 to the cost from the left), deleting a letter (adding 1 to the cost from below)...");
    table.unhighlight(2,1);
	table.highlight(3,2);
	av.step();
	// Begin Slide 3
	av.umsg("As we saw in the previous examples, the cost to get from \"C\" to \"O\" is 2, whether we are adding a letter (adding 1 to the cost from the left), deleting a letter (adding 1 to the cost from below), or swapping two letters (adding 2 to the cost from below and to the left).");
    table.unhighlight(3,2);
	table.highlight(3,1);
	av.step();
	// Begin Slide 4
	av.umsg("Since the lowest possible cost to get from \"C\" to \"O\" is a 2, we place a 2 in the cell.");
    table.unhighlight(3,1);
	table.value(2,2,2);
	av.step();
	// Begin Slide 5
	av.umsg("Next we calculate the cost to get from \"C\" to \"OR\". The cost for adding a letter (\"R\") would be 3, since we add 1 to the cost from the left.");
	table.highlight(2,3);
	av.step();
	// Begin Slide 6
	av.umsg("The cost for deleting a letter (\"C\") would be 3, since we add 1 to the cost from below.");
    table.unhighlight(2,2);
	table.highlight(3,3);
	av.step();
	// Begin Slide 7
	av.umsg("The cost for swapping two letters (\"C\" and \"R\") would be 3, since we add 2 to the cost from below and to the left.");
    table.unhighlight(3,3);
	table.highlight(3,2);
	av.step();
	// Begin Slide 8
	av.umsg("Since the lowest possible cost would be 3 (from adding, subtracting, or swapping), we place a 3 in the cell.");
    table.unhighlight(3,2);
	table.value(2,3,3);
	av.step();
	// Begin Slide 9
	av.umsg("Next we calculate the cost to get from \"C\" to \"ORC\". The cost for adding a letter (\"C\") would be 4, since we add 1 to the cost from the left.");
	table.highlight(2,4);
	av.step();
	// Begin Slide 10
	av.umsg("The cost for deleting a letter (\"C\") would be 4, since we add 1 to the cost from below.");
    table.unhighlight(2,3);
	table.highlight(3,4);
	av.step();
	// Begin Slide 11
	av.umsg("The cost for swapping two letters (\"C\" and \"C\") would be 2. Since the letters are the same, we add 0 to the cost from below and to the left.");
    table.unhighlight(3,4);
	table.highlight(3,3);
	av.step();
	// Begin Slide 12
	av.umsg("Since the lowest possible cost would be 2 (from swapping), we place a 2 in the cell.");
    table.unhighlight(3,3);
	table.value(2,4,2);
	av.step();
	// Begin Slide 13
	av.umsg("Next we calculate the cost to get from \"C\" to \"ORCA\". The cost for adding a letter (\"A\") would be 3, since we add 1 to the cost from the left.");
	table.highlight(2,5);
	av.step();
	// Begin Slide 14
	av.umsg("The cost for deleting a letter (\"C\") would be 5, since we add 1 to the cost from below.");
    table.unhighlight(2,4);
	table.highlight(3,5);
	av.step();
	// Begin Slide 15
	av.umsg("The cost for swapping two letters (\"C\" and \"A\") would be 5, since we add 2 to the cost from below and to the left.");
    table.unhighlight(3,5);
	table.highlight(3,4);
	av.step();
	// Begin Slide 16
	av.umsg("Since the lowest possible cost would be 3 (from adding), we place a 3 in the cell.");
    table.unhighlight(3,4);
	table.value(2,5,3);
	//av.step();
	// Begin Slide 17
	av.umsg("Next we calculate the cost to get from \"CA\" to \"O\". The cost for adding a letter (\"O\") would be 3, since we add 1 to the cost from the left.");
	table.unhighlight(2,5);
	table.highlight(1,2);
	table.highlight(1,1);
	av.step();
	// Begin Slide 18
	av.umsg("The cost for deleting a letter (\"A\") would be 3, since we add 1 to the cost from below.");
    table.unhighlight(1,1);
	table.highlight(2,2);
	av.step();
	// Begin Slide 19
	av.umsg("The cost for swapping two letters (\"A\" and \"O\") would be 3, since we add 2 to the cost from below and to the left.");
    table.unhighlight(2,2);
	table.highlight(2,1);
	av.step();
	// Begin Slide 20
	av.umsg("Since the lowest possible cost would be 3 (from adding, deleting, or swapping), we place a 3 in the cell.");
    table.unhighlight(2,1);
	table.value(1,2,3);
	av.step();
	// Begin Slide 21
	av.umsg("Next we calculate the cost to get from \"CA\" to \"OR\". The cost for adding a letter (\"R\") would be 4, since we add 1 to the cost from the left.");
	table.highlight(1,3);
	av.step();
	// Begin Slide 22
	av.umsg("The cost for deleting a letter (\"A\") would be 4, since we add 1 to the cost from below.");
    table.unhighlight(1,2);
	table.highlight(2,3);
	av.step();
	// Begin Slide 23
	av.umsg("The cost for swapping two letters (\"A\" and \"R\") would be 4, since we add 2 to the cost from below and to the left.");
    table.unhighlight(2,3);
	table.highlight(2,2);
	av.step();
	// Begin Slide 24
	av.umsg("Since the lowest possible cost would be 4 (from adding, deleting, or swapping), we place a 4 in the cell.");
    table.unhighlight(2,2);
	table.value(1,3,4);
	av.step();
	// Begin Slide 25
	av.umsg("Next we calculate the cost to get from \"CA\" to \"ORC\". The cost for adding a letter (\"C\") would be 5, since we add 1 to the cost from the left.");
	table.highlight(1,4);
	av.step();
	// Begin Slide 26
	av.umsg("The cost for deleting a letter (\"A\") would be 3, since we add 1 to the cost from below.");
    table.unhighlight(1,3);
	table.highlight(2,4);
	av.step();
	// Begin Slide 27
	av.umsg("The cost for swapping two letters (\"A\" and \"C\") would be 5, since we add 2 to the cost from below and to the left.");
    table.unhighlight(2,4);
	table.highlight(2,3);
	av.step();
	// Begin Slide 28
	av.umsg("Since the lowest possible cost would be 3 (from deleting), we place a 3 in the cell.");
    table.unhighlight(2,3);
	table.value(1,4,3);
	av.step();
	// Begin Slide 29
	av.umsg("Next we calculate the cost to get from \"CA\" to \"ORCA\". The cost for adding a letter (\"A\") would be 4, since we add 1 to the cost from the left.");
	table.highlight(1,5);
	av.step();
	// Begin Slide 30
	av.umsg("The cost for deleting a letter (\"A\") would be 4, since we add 1 to the cost from below.");
    table.unhighlight(1,4);
	table.highlight(2,5);
	av.step();
	// Begin Slide 31
	av.umsg("The cost for swapping two letters (\"A\" and \"A\") would be 2. The letters are the same, so we add 0 to the cost from below and to the left.");
    table.unhighlight(2,5);
	table.highlight(2,4);
	av.step();
	// Begin Slide 32
	av.umsg("Since the lowest possible cost would be 2 (from swapping), we place a 2 in the cell.");
    table.unhighlight(2,4);
	table.value(1,5,2);
	av.step();
	// Begin Slide 33
	av.umsg("Next we calculate the cost to get from \"CAT\" to \"O\". The cost for adding a letter (\"O\") would be 4, since we add 1 to the cost from the left.");
	table.unhighlight(1,5);
	table.highlight(0,2);
	table.highlight(0,1);
	av.step();
	// Begin Slide 34
	av.umsg("The cost for deleting a letter (\"T\") would be 4, since we add 1 to the cost from below.");
    table.unhighlight(0,1);
	table.highlight(1,2);
	av.step();
	// Begin Slide 35
	av.umsg("The cost for swapping two letters (\"T\" and \"O\") would be 4, since we add 2 to the cost from below and to the left.");
    table.unhighlight(1,2);
	table.highlight(1,1);
	av.step();
	// Begin Slide 36
	av.umsg("Since the lowest possible cost would be 4 (from adding, deleting, or swapping), we place a 4 in the cell.");
    table.unhighlight(1,1);
	table.value(0,2,4);
	av.step();
	// Begin Slide 37
	av.umsg("Next we calculate the cost to get from \"CAT\" to \"OR\". The cost for adding a letter (\"R\") would be 5, since we add 1 to the cost from the left.");
	table.highlight(0,3);
	av.step();
	// Begin Slide 38
	av.umsg("The cost for deleting a letter (\"T\") would be 5, since we add 1 to the cost from below.");
    table.unhighlight(0,2);
	table.highlight(1,3);
	av.step();
	// Begin Slide 39
	av.umsg("The cost for swapping two letters (\"T\" and \"R\") would be 5, since we add 2 to the cost from below and to the left.");
    table.unhighlight(1,3);
	table.highlight(1,2);
	av.step();
	// Begin Slide 40
	av.umsg("Since the lowest possible cost would be 5 (from adding, deleting, or swapping), we place a 5 in the cell.");
    table.unhighlight(1,2);
	table.value(0,3,5);
	av.step();
	// Begin Slide 41
	av.umsg("Next we calculate the cost to get from \"CAT\" to \"ORC\". The cost for adding a letter (\"C\") would be 6, since we add 1 to the cost from the left.");
	table.highlight(0,4);
	av.step();
	// Begin Slide 42
	av.umsg("The cost for deleting a letter (\"T\") would be 4, since we add 1 to the cost from below.");
    table.unhighlight(0,3);
	table.highlight(1,4);
	av.step();
	// Begin Slide 43
	av.umsg("The cost for swapping two letters (\"T\" and \"C\") would be 6, since we add 2 to the cost from below and to the left.");
    table.unhighlight(1,4);
	table.highlight(1,3);
	av.step();
	// Begin Slide 44
	av.umsg("Since the lowest possible cost would be 4 (from deleting), we place a 4 in the cell.");
    table.unhighlight(1,3);
	table.value(0,4,4);
	av.step();
	// Begin Slide 41
	av.umsg("Next we calculate the cost to get from \"CAT\" to \"ORCA\". The cost for adding a letter (\"A\") would be 5, since we add 1 to the cost from the left.");
	table.highlight(0,5);
	av.step();
	// Begin Slide 42
	av.umsg("The cost for deleting a letter (\"T\") would be 3, since we add 1 to the cost from below.");
    table.unhighlight(0,4);
	table.highlight(1,5);
	av.step();
	// Begin Slide 43
	av.umsg("The cost for swapping two letters (\"T\" and \"A\") would be 5, since we add 2 to the cost from below and to the left.");
    table.unhighlight(1,5);
	table.highlight(1,4);
	av.step();
	// Begin Slide 44
	av.umsg("Since the lowest possible cost would be 3 (from deleting), we place a 3 in the cell. This makes 3 our final edit distance between \"CAT\" and \"ORCA\".");
    table.unhighlight(1,4);
	table.value(0,5,3);
	av.recorded();
});
