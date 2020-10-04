import { createDrumSampler } from './audio.js';
import { createExampleHeader, createLoopExample, createMuteLoopExample, markBoxWithBorder, addButton } from './examples_ui.js';
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
    break;
  
  case "part2.html":
    createLoopExample("example7", examples[7], drumSampler);
    createMuteLoopExample("example8", examples[8], drumSampler);
    break;
  
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

    createLoopExample("example12", examples[12], drumSampler);
    markBoxWithBorder("example12", 2, 0);
    markBoxWithBorder("example12", 2, 2);
    markBoxWithBorder("example12", 2, 4);
    markBoxWithBorder("example12", 2, 6);
    var example12 = document.getElementById("example12");
    var switchButton = addButton("Switch Pulse", ["mute"]);
    switchButton.addEventListener("click", () => {
      if (example12.children[3].children[3].classList.contains("mark-with-border")) {
        example12.children[3].children[3].classList.remove("mark-with-border");
        example12.children[3].children[7].classList.remove("mark-with-border");
        // TODO and mute clicks on 2 and 4
      } else {
        example12.children[3].children[3].classList.add("mark-with-border");
        example12.children[3].children[7].classList.add("mark-with-border");
        // TODO and unmute clicks on 2 and 4
      }
    })
    example12.appendChild(switchButton);

    createLoopExample("example13", examples[13], drumSampler);
    markBoxWithBorder("example13", 2, 0);
    markBoxWithBorder("example13", 2, 5);
    markBoxWithBorder("example13", 1, 3);
    markBoxWithBorder("example13", 1, 7);

    createLoopExample("example14", examples[14], drumSampler);
    markBoxWithBorder("example14", 1, 0);
    markBoxWithBorder("example14", 1, 2);
    markBoxWithBorder("example14", 1, 4);
    markBoxWithBorder("example14", 1, 6);
    markBoxWithBorder("example14", 1, 8);
    markBoxWithBorder("example14", 1, 10);

    var example14 = document.getElementById("example14");
    var switchButton = addButton("Switch Pulse", ["mute"]);
    switchButton.addEventListener("click", () => {
      if (example14.children[2].children[3].classList.contains("mark-with-border")) {
        example14.children[2].children[3].classList.remove("mark-with-border");
        example14.children[2].children[5].classList.remove("mark-with-border");
        example14.children[2].children[9].classList.remove("mark-with-border");
        example14.children[2].children[11].classList.remove("mark-with-border");

        example14.children[2].children[4].classList.add("mark-with-border");
        example14.children[2].children[10].classList.add("mark-with-border");
        // TODO and mute clicks
      } else {
        example14.children[2].children[3].classList.add("mark-with-border");
        example14.children[2].children[5].classList.add("mark-with-border");
        example14.children[2].children[9].classList.add("mark-with-border");
        example14.children[2].children[11].classList.add("mark-with-border");

        example14.children[2].children[4].classList.remove("mark-with-border");
        example14.children[2].children[10].classList.remove("mark-with-border");
      }
    })
    example14.appendChild(switchButton);

    examples.default.tag = "example15";
    createExampleHeader("example15", examples.default, drumSampler);
    examples.default.tag = "example16";
    createExampleHeader("example16", examples.default, drumSampler);
    examples.default.tag = "example17";
    createExampleHeader("example17", examples.default, drumSampler);
    break;

  case "part4.html":
    createLoopExample("example18", examples[18], drumSampler);

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
    break;
}
