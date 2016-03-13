/*global window */
(function() {
    "use strict";
    var my_array;
    var words = ['EPISODE','ASSEMBLY','MARBLE','AIRSPACE','ADVANTAGE','RIVAL','CUBE','ANYBODY','CIVILIZATION','APPLE','BLAZE','COINCIDENCE'];
    
    var MinEditDistance_Q1 = {
	
	option: [0,0,0],

	// Initialise the exercise
	initArr: function(arr_size,wordOneIndex,wordTwoIndex) {
	    var i;
	    var next_val;
	    var array_str;
	    my_array = [words[wordOneIndex],words[wordTwoIndex]];
	    array_str = "";
	    for (i = 0; i < arr_size; i++) {
		array_str = array_str + " " + my_array[i];
	    }
	    console.log(array_str);
	    return array_str;
	},
	
	answer: function(wordOneIndex,wordTwoIndex) {
        var a = words[wordOneIndex];
        var b = words[wordTwoIndex];
        if(a.length == 0)
            return b.length;

        if(b.length == 0)
            return a.length;

        //Sanitize input
        a = a.toUpperCase();
        a = a.replace(" ","");

        b = b.toUpperCase();
        b = b.replace(" ","");

        var mx = [];

        var i;
        var j;
       var arr;		

        //Vertical Word
        for(i = 1; i <= a.length; i++){
            arr = [];
            arr[0] = a.charAt(i-1);
            for (j = 1; j <= b.length + 1; j++) {
                arr[j] = '';
            }
            mx[a.length-i] = arr;
        }

        //# below vertical word
        arr = [];
        arr[0] = '#';
        for (j = 1; j <= b.length + 1; j++) {
                arr[j] = '';
        }
        mx[a.length] = arr;

        //Horizontal Word
        arr = [];
        arr[0] = '';
        arr[1] = '#'
        for (j = 0; j < b.length; j++) {
                arr[j+2] = b.charAt(j);
        }
        mx[a.length+1] = arr;


        //Horizontal numbering
        for (j = 0; j <= b.length; j++) {
            mx[a.length][j+1] = j;
        }

        //Vertical numbering
        for (i = 1; i <= a.length; i++) {
            mx[a.length - i][1] = i;
        }

        var aIndex = 0;

        for(i = a.length - 1; i >= 0; i--){
            var aChar = a.charAt(aIndex);
            aIndex++;
            for (j = 2; j <=b.length + 1; j++) {
                if(aChar == b.charAt(j-2)){
                    mx[i][j] = mx[i+1][j-1];				
                } else {
                    mx[i][j] = Math.min(mx[i+1][j-1] + 2,
                                  Math.min(mx[i+1][j] + 1, mx[i][j-1] + 1));				
                }
            }
        }
        
        MinEditDistance_Q1 . option [0] = 1;
        MinEditDistance_Q1 . option [1] = 2;
        MinEditDistance_Q1 . option [2] = 3;
        MinEditDistance_Q1 . option [3] = 4;
        return mx[0][b.length + 1];
    }

    };

    window.MinEditDistance_Q1 = window.MinEditDistance_Q1 || MinEditDistance_Q1;
}());
