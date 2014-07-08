/* global ODSA, PARAMS */
(function ($) {
  "use strict";
  var initialArray = [],
      tree,
      subtree,
      nodeSelected,
      selectedNode,
      selectedPointer,
      rotationType = PARAMS.rotation || "single",
      difficulty = PARAMS.diff || "hard",
      $layoutButton = $("#layoutButton"),
      $nullButton = $("#nullButton"),
      av = new JSAV($("#jsavcontainer"));

  function initialize() {

    // clear old structures
    if (tree) {
      tree.element.remove();
    }
    if (nodeSelected) {
      nodeSelected.clear();
    }
    if (selectedPointer) {
      selectedPointer.clear();
    }

    // create binary pointer tree
    tree = av.ds.binarypointertree({center: true, visible: true, nodegap: 15});
    initialArray = unbalancedTree({
      minNodes: 12,
      maxNodes: 18,
      maxHeight: 8,
      rotationType: rotationType,
      difficulty: difficulty
    });
    tree.insert(initialArray);
    tree.click(clickHandler);
    tree.layout();

    // jsav variable
    // not selected  0
    // selected      1 
    nodeSelected = av.variable(0);
    selectedPointer = av.variable(0);
    
    return tree;
  }

  function modelSolution(jsav) {
    var msTree = jsav.ds.binarypointertree({center: true, visible: true, nodegap: 15});
    msTree.insert(initialArray);
    msTree.layout();

    jsav.displayInit();

    // balance the tree
    msTree.getUnbalancedNode(initialArray[initialArray.length - 1]).balance();
    msTree.layout();

    jsav.step();

    return msTree;
  }

  // generates an array which can be inserted to a tree so that it will be unbalanced tree
  function unbalancedTree(options) {
    var defaults = {
      minNodes: 7,
      maxNodes: 10,
      maxHeight: 6,
      rotationType: "single",
      difficulty: "hard"
    };

    options = $.extend({}, defaults, options);
    
    while (true) {
      var arr = [];
      var bt = av.ds.binarytree();
      for (var i = 0; i < options.maxNodes; i++) {
        var rand;
        do {
          rand = JSAV.utils.rand.numKey(10, 100);
        } while ($.inArray(rand, arr) !== -1);
        arr[i] = rand;
        bt.insert(arr[i]);
        if (bt.height() > options.maxHeight) {
          bt.clear();
          break;
        }
        var node = bt.getUnbalancedNode(arr[i]);
        if (node &&
            getRotationType(node) === options.rotationType &&
            node !== bt.root() &&
            i >= options.minNodes &&
             ((options.difficulty === "hard" && node.left() && node.right()) ||
              (options.difficulty === "easy" && !(node.left() && node.right()))))
        {
          bt.clear();
          return arr; //done
        } else if (node) {
          // wrong kind of rotation or not enough nodes -> balance tree
          node.balance();
          treeToArray(bt.root(), arr);
        }
      }
      bt.clear();
    }
  }

  function getRotationType(node) {
    if ((height(node.left()) > height(node.right()) &&
      height(node.left().left()) > height(node.left().right())) ||
      (height(node.right()) > height(node.left()) &&
      height(node.right().right()) > height(node.right().left()))) {
      return "single";
    } else {
      return "double";
    }
  }

  // returns the height of the node and 0 if node is undefined/null
  function height(node) {
    if (node) {
      return node.height();
    }
    return 0;
  }

  // writes the tree in preorder
  function treeToArray(root, arr, index) {
    index = index || 0;
    arr[index] = root.value();
    if (root.left()) {
      index = treeToArray(root.left(), arr, index + 1);
    }
    if (root.right()) {
      index = treeToArray(root.right(), arr, index + 1);
    }
    return index;
  }

  // makes sure that there are no loops in the tree
  function isValid(tree) {
    var root = tree.root(),
        stack = [root],
        visited = [];

    while (stack[0]) {
      var node = stack.shift();
      if (node.left()) {
        stack.push(node.left());
      }
      if (node.right()) {
        stack.push(node.right());
      }
      if (visited.indexOf(node) !== -1) {
        // loop detected
        return false;
      }
      visited.push(node);
    }
    if (visited.length !== initialArray.length) {
      // all the nodes are not part of the tree
      return false;
    }
    return true;
  }

  var clickHandler = function (event) {
    if (this.value() === "jsavnull") {
      return;
    }
    if (nodeSelected.value()) {
      if (this !== selectedNode) {
        selectedNode.child(selectedPointer.value(), this, {hide: false});
        selectedNode.pointers[selectedPointer.value()].layout();
        av.step();
      } /* else if (event.target.className.indexOf(selectedPointer.value() === 0 ? "left" : "right") !== -1 && selectedNode.child(selectedPointer)) {
        selectedNode.child(selectedPointer.value(), null, {hide: false});
        av.step();
      } */
      selectedNode.removeClass("selected-left");
      selectedNode.removeClass("selected-right");
      selectedNode = null;
      nodeSelected.value(0);
      $nullButton.attr("disabled", true);
    } else {
      if (event.target.className.indexOf("jsavpointerarea") !== -1) {
        selectedNode = this;
        nodeSelected.value(1);
        $nullButton.attr("disabled", false);
        if (event.target.className.indexOf("left") !== -1) {
          selectedPointer.value(0);
          this.addClass("selected-left");
        } else {
          selectedPointer.value(1);
          this.addClass("selected-right");
        }
      }
    }
  }

  // add click handlers
  $layoutButton.click(function () {
    if (!isValid(tree)) {
      window.alert("The tree is invalid...");
      return;
    }
    tree.layout();
    av.step();
  });
  $nullButton.click(function () {
    if (nodeSelected.value()) {
      selectedNode.child(selectedPointer.value(), null, {hide: false});
      av.step();
      selectedNode.removeClass("selected-left");
      selectedNode.removeClass("selected-right");
      selectedNode = null;
      nodeSelected.value(0);
      $nullButton.attr("disabled", true);
    }
  });

  var exercise = av.exercise(modelSolution, initialize, {
    feedback: "atend",
    grader: "finalStep",
    modelDialog: {width: 780}
  });
  exercise.reset();
}(jQuery));
