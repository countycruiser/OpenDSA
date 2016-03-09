"use strict";

$(document).ready(function () {

    JSAV.init();
    var av = new JSAV("MinEditDistance_Ch1_1");
    var wordOne = ['' ,'' ,'c','a','t',''];
    var wordTwo = ['o','r','c','s','' ,''];
    var arr_w1 = av.ds.array(wordOne);
    var arr_w2 = av.ds.array(wordTwo);
    av.umsg("When looking at the words Cat and Orcs, this is a prime example of how we have to perform all different operations");
    // Note: av.displayInit() will not affect the number of slides.
    // All that it will do is affect what you get to see on the
    // initial slide.
    av.displayInit();
    // We are now starting a new slide (#2)
    av.umsg("First, we see the letter t will not be needed, so we can remove it. This has a cost of 1");
    arr_w1.value(4,'');
    arr_w1.highlight(4);
    arr_w2.highlight(4);
    av.step();
    // We are now starting a new slide (#3)
    av.umsg("Next, we see that we need to add an r in front of ca, this also has a cost of 1");
    arr_w1.unhighlight(4);
    arr_w2.unhighlight(4);
    arr_w1.value(1,'r');
    arr_w1.highlight(1);
    arr_w2.highlight(1);
    av.step();
    av.umsg("Then, also add an o in from of rca, this also has a cost of 1");
    arr_w1.unhighlight(1);
    arr_w2.unhighlight(1);
    arr_w1.value(0,'o');
    arr_w1.highlight(0);
    arr_w2.highlight(0);
    av.step();
    av.umsg("Now, we have to replace the a to an s. This operation has a cost of 2");
    arr_w1.unhighlight(0);
    arr_w2.unhighlight(0);
    arr_w1.value(3,'s');
    arr_w1.highlight(3);
    arr_w2.highlight(3);
    av.step();
    av.umsg("Now that our base word has reached our target word, we simply sum up the costs of operations to obtain the edit distance. We performed one removal, with a cost of 1, two additions, each with a cost of 1, and a replacement which had a cost of 2. Our final edit distance is 5.")
    arr_w1.unhighlight(3);
    arr_w2.unhighlight(3);
    
    av.recorded();
    // If you add av.umsg after av.recorded, it will add new slides in
    // ways that you probably do not expect and probably cannot
    // control in the way that you want. As av.recorded() rewinds the
    // slideshow, the new slides would go to the beginning of the slideshow.
    // So, unless you are trying to add slides on-the-fly
    // interactively, you don’t want to do this.
    // av.umsg("Text after av.recorded()");
});