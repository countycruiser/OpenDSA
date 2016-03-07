.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-13 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.
.. avmetadata::
:author: Sam Weinkauf, Max Beauchemin, Shaina Bathke

==============================
Creating the Table
==============================

To begin, we set up a table to visualize the algorithm.

.. inlineav:: MinEditDistance_Ch2_1 ss
   :output: show
   
.. odsascript:: AV/Development/MinEditDistance_Ch2_1.js

Each cell in the table will represent the minimum number of steps (adding, deleting, or swapping letters) to get from a portion of our starting word on the left to our goal word on the bottom.

.. inlineav:: MinEditDistance_Ch2_2 ss
   :output: show
   
.. odsascript:: AV/Development/MinEditDistance_Ch2_2.js


==============================
Initializing the Table
==============================

Next, we initialize the table. First we must fill in the bottom row of the table to show how many steps it would take to get from the empty string (no letters) to part of our goal word.

.. inlineav:: MinEditDistance_Ch2_3 ss
   :output: show
   
.. odsascript:: AV/Development/MinEditDistance_Ch2_3.js


Next we must fill in the first column of the table to show how many steps it would take to get from part of our starting word to the empty string.

.. inlineav:: MinEditDistance_Ch2_4 ss
   :output: show
   
.. odsascript:: AV/Development/MinEditDistance_Ch2_4.js



==============================
The Steps
==============================

For each cell, we have three options. We can add a letter from the goal word, delete a letter from the starting word, or swap the two letters.

Adding
------

To add a letter from the goal word, we take the number from the cell to the left and add one.

.. inlineav:: MinEditDistance_Ch2_5 ss
   :output: show
   
.. odsascript:: AV/Development/MinEditDistance_Ch2_5.js


Deleting
--------

To delete a letter from the starting word, we take the number from the cell below and add one.

.. inlineav:: MinEditDistance_Ch2_6 ss
   :output: show
   
.. odsascript:: AV/Development/MinEditDistance_Ch2_6.js


Swapping
--------

Swapping two letters is essentially the same as deleting a letter from the starting word and adding a letter from the goal word, so it takes two steps. To do this, we take the number from the cell below and to the left and add two.

.. inlineav:: MinEditDistance_Ch2_7 ss
   :output: show
   
.. odsascript:: AV/Development/MinEditDistance_Ch2_7.js


However, if the two letters we are swapping are the same, we don't have to use any steps. Therefore, we can take the value from the cell below and to the left and add zero.

.. inlineav:: MinEditDistance_Ch2_8 ss
   :output: show
   
.. odsascript:: AV/Development/MinEditDistance_Ch2_8.js


==============================
Putting It All Together!
==============================

To run through the rest of the algorithm, we start in the lowest, leftmost empty cell and work our way to the right, then up. We figure out which option (adding, deleting, or swapping) gives us the lowest number and place that number in the cell. In many cases, two or even all three of the options will give us the same number.

.. inlineav:: MinEditDistance_Ch2_9 ss
   :output: show
   
.. odsascript:: AV/Development/MinEditDistance_Ch2_9.js
