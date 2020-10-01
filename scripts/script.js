import { createDrumSampler } from './audio.js';
import { createLoopExample, markBoxWithBorder } from './examples_ui.js';
import { example1Data, example2Data, example3Data, example4Data, example5Data, example6Data } from './examples.js';

//
// instantiate examples
//
var drumSampler = createDrumSampler();

// part 1 examples
createLoopExample("example1", example1Data, drumSampler);
createLoopExample("example2", example2Data, drumSampler);
createLoopExample("example3", example3Data, drumSampler);
createLoopExample("example4", example4Data, drumSampler);
createLoopExample("example5", example5Data, drumSampler);
createLoopExample("example6", example6Data, drumSampler);

markBoxWithBorder("example3", 1, 0);
markBoxWithBorder("example4", 1, 8);
markBoxWithBorder("example5", 1, 0);

// part 2 examples

//
// other ui
//
//
// show hidden text in part 1
var showMoreButton = document.getElementById("showMoreButton");
showMoreButton.onclick = function() {
  var part1secondHalf = document.getElementById("part1-second-half");
  part1secondHalf.style.display = "block";
}