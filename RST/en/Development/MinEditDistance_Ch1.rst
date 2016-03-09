.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-13 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.
.. avmetadata::
:author: Sam Weinkauf, Max, Shaina

==============================
Calculating Edit Distance Cost
==============================

The basis of understanding edit distance is seeing how two different words ‘intersect’ and the most efficient way to get from your initial word to your target word. There are three basic operations that can be done while calculating edit distance. You can add a letter to your base word, remove a letter from it, or replace a letter. All of these operations can be done at any index of the base word. The addition and subtraction steps both have a cost of 1, while replacing a letter has a cost of 2.


.. inlineav:: MinEditDistance_Ch1_1 ss
   :output: show

.. odsascript:: AV/Development/MinEditDistance_Ch1_1.js
