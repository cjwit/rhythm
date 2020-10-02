import { createDrumSampler } from './audio.js';
import { createExampleHeader, createLoopExample, createMuteLoopExample, markBoxWithBorder } from './examples_ui.js';
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
    markBoxWithBorder("example3", 1, 0);

    createLoopExample("example4", examples[4], drumSampler);
    markBoxWithBorder("example4", 1, 8);

    createLoopExample("example5", examples[5], drumSampler);
    markBoxWithBorder("example5", 1, 0);

    createLoopExample("example6", examples[6], drumSampler);


    showMoreButton("part1-second-half");
  
  case "part2.html":
    createLoopExample("example7", examples[7], drumSampler);
    createMuteLoopExample("example8", examples[8], drumSampler);
  
  case "part3.html":
    createLoopExample("example9", examples[9], drumSampler);
    markBoxWithBorder("example9", 1, 2);
    markBoxWithBorder("example9", 1, 6);
    markBoxWithBorder("example9", 2, 0);
    markBoxWithBorder("example9", 2, 4);

    createLoopExample("example10", examples[10], drumSampler);    
    markBoxWithBorder("example10", 1, 2);
    markBoxWithBorder("example10", 1, 6);
    markBoxWithBorder("example10", 2, 0);
    markBoxWithBorder("example10", 2, 4);

    examples.default.tag = "example11";
    createExampleHeader("example11", examples.default, drumSampler);
    examples.default.tag = "example12";
    createExampleHeader("example12", examples.default, drumSampler);
    examples.default.tag = "example13";
    createExampleHeader("example13", examples.default, drumSampler);
    examples.default.tag = "example14";
    createExampleHeader("example14", examples.default, drumSampler);
    examples.default.tag = "example15";
    createExampleHeader("example15", examples.default, drumSampler);
    examples.default.tag = "example16";
    createExampleHeader("example16", examples.default, drumSampler);
    examples.default.tag = "example17";
    createExampleHeader("example17", examples.default, drumSampler);

  case "part4.html":
    examples.default.tag = "example18";
    createExampleHeader("example18", examples.default, drumSampler);
    examples.default.tag = "example19";
    createExampleHeader("example19", examples.default, drumSampler);
    examples.default.tag = "example20";
    createExampleHeader("example20", examples.default, drumSampler);
    examples.default.tag = "example21";
    createExampleHeader("example21", examples.default, drumSampler);
    examples.default.tag = "example22";
    createExampleHeader("example22", examples.default, drumSampler);
    examples.default.tag = "example23";
    createExampleHeader("example23", examples.default, drumSampler);
    examples.default.tag = "example24";
    createExampleHeader("example24", examples.default, drumSampler);

}
