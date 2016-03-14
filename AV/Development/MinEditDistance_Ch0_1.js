"use strict";

$(document).ready(function () {

    JSAV.init();
    var av = new JSAV("MinEditDistance_Ch0_1");
    var wordOne = ['k','i','t','t','e','n',''];
    var wordTwo = ['f','i','t','t','i','n','g'];
    var arr_w1 = av.ds.array(wordOne);
    var arr_w2 = av.ds.array(wordTwo);
    av.umsg("Take the words Kitten and Fitting for example");
    // Note: av.displayInit() will not affect the number of slides.
    // All that it will do is affect what you get to see on the
    // initial slide.
    av.displayInit();
    // We are now starting a new slide (#2)
    av.umsg("The way minimum edit distance works, it would start by substituting k for f");
    arr_w1.value(0,'f');
    arr_w1.highlight(0);
    arr_w2.highlight(0);
    av.step();
    // We are now starting a new slide (#3)
    av.umsg("Then substitute i for e");
    arr_w1.unhighlight(0);
    arr_w2.unhighlight(0);
    arr_w1.value(4,'i');
    arr_w1.highlight(4);
    arr_w2.highlight(4);
    av.step();
    av.umsg("Then add g at the end");
    arr_w1.unhighlight(4);
    arr_w2.unhighlight(4);
    arr_w1.value(6,'g');
    arr_w1.highlight(6);
    arr_w2.highlight(6);
    av.step();
    av.umsg("This would count as a minimum edit distance cost of 5 from kitten to fitting. Since we made the 3 modifications: k->f, i->e, and adding g at the end. Next, find out why our total cost is 5 when we only made 3 changes.");
    arr_w1.unhighlight(6);
    arr_w2.unhighlight(6);
    
    
    av.recorded();
    // If you add av.umsg after av.recorded, it will add new slides in
    // ways that you probably do not expect and probably cannot
    // control in the way that you want. As av.recorded() rewinds the
    // slideshow, the new slides would go to the beginning of the slideshow.
    // So, unless you are trying to add slides on-the-fly
    // interactively, you don’t want to do this.
    // av.umsg("Text after av.recorded()");
});