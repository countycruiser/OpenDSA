"use strict";

$(document).ready(function () {

    JSAV.init();
    var av = new JSAV("MinEditDistance_Ch2_1");
    var cathat = [['C','','','','',''],['A','','','','',''],['T','','','','',''],['#','','','','',''],['','#','O','R','C','A']];
    var mx_cathat = av.ds.matrix(cathat);
    av.umsg("This is the style of how to setup a matrix for this algorithm for the words CAT and ORCA.");
    // Note: av.displayInit() will not affect the number of slides.
    // All that it will do is affect what you get to see on the
    // initial slide.
    av.displayInit();
    // We are now starting a new slide (#2)
    av.umsg("Notice CAT is along the left hand column");
    mx_cathat.highlight(0,0);
    mx_cathat.highlight(1,0);
    mx_cathat.highlight(2,0);
    av.step();
    // We are now starting a new slide (#3)
    av.umsg("And that ORCA is along the bottom row");
    mx_cathat.unhighlight(0,0);
    mx_cathat.unhighlight(1,0);
    mx_cathat.unhighlight(2,0);
    mx_cathat.highlight(4,2);
    mx_cathat.highlight(4,3);
    mx_cathat.highlight(4,4);
    mx_cathat.highlight(4,5);
    av.recorded();
    // If you add av.umsg after av.recorded, it will add new slides in
    // ways that you probably do not expect and probably cannot
    // control in the way that you want. As av.recorded() rewinds the
    // slideshow, the new slides would go to the beginning of the slideshow.
    // So, unless you are trying to add slides on-the-fly
    // interactively, you don’t want to do this.
    // av.umsg("Text after av.recorded()");
});