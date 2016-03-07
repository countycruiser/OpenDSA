.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-13 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.
.. avmetadata::
:author: Sam Weinkauf, Max

For our algorithm we were assigned the topic of Artificial Intelligence or AI. Within this topic we selected the Minimum Edit Distance algorithm, created by Levenshtein.

==============================
What Is Minimum Edit Distance
==============================

Minimum edit distance is an algorithm used to calculate the most minimal way to change one word into another. Simply put, it takes one word, such as apple, and calculates how much editing would need to be done to change it into word two, such as orange.


====================
Why Should We Care?
====================

This is useful for everyday things that you may use such as spell checker or text recognition. For instance, a spell checker program or suggested word program will take in a word that you type, check it against a dictionary, and if it exists it leaves it alone. However, if the word does not match in the dictionary used, the program can use this algorithm to compare this word to similar words and calculate the the minimum edit distance value for all possibilities. Then the program can rank words that are closest based on which have the least value and suggest words that are close. Pretty cool hey?

.. inlineav:: MinEditDistance_Ch0_1 ss
   :output: show

.. odsascript:: AV/Development/MinEditDistance_Ch0_1.js