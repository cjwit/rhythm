import { createDrumSampler } from './audio.js';
import { createLoopExample, createMuteLoopExample, markBoxWithBorder } from './examples_ui.js';
import { showMoreButton } from './other_ui.js';
import { examples } from './examples.js';

//
// instantiate examples
//
var drumSampler = createDrumSampler();
var page = window.location.pathname.split("/").pop();

switch (page) {
  case "part1.html":
    createLoopExample("example1", examples[1], drumSampler);
    createLoopExample("example2", examples[2], drumSampler);
    createLoopExample("example3", examples[3], drumSampler);
    createLoopExample("example4", examples[4], drumSampler);
    createLoopExample("example5", examples[5], drumSampler);
    createLoopExample("example6", examples[6], drumSampler);

    markBoxWithBorder("example3", 1, 0);
    markBoxWithBorder("example4", 1, 8);
    markBoxWithBorder("example5", 1, 0);

    showMoreButton("part1-second-half");
  
  case "part2.html":
    createLoopExample("example7", examples[7], drumSampler);
    createMuteLoopExample("example8", examples[8], drumSampler);
}
