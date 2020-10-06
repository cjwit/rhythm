import { Example } from './Example.js';
import { ExampleHeaderOnly } from './ExampleHeaderOnly.js';
import { addBorder, removeBorder } from './other_ui.js';

export function part3setup(examples) {
  const example9 = new Example("example9", examples[9]);
  addBorder(example9, 0, 2);
  addBorder(example9, 0, 6);
  addBorder(example9, 1, 0);
  addBorder(example9, 1, 4);
  
  const example10 = new Example("example10", examples[10]);
  addBorder(example10, 0, 2);
  addBorder(example10, 0, 6);
  addBorder(example10, 1, 0);
  addBorder(example10, 1, 4);

  new ExampleHeaderOnly("example11");

  const example12 = new Example("example12", examples[12]);
  addBorder(example12, 1, 0);
  addBorder(example12, 1, 2);
  addBorder(example12, 1, 4);
  addBorder(example12, 1, 6);

  var example12Children = Array.from(example12.example.children);
  var playButton = example12Children[0];
  playButton.addEventListener("click", () => {
    if (playButton.innerText == "Stop") {
      // started playing loop 0
      addBorder(example12, 1, 2);
      addBorder(example12, 1, 6);
    }
  })

  var switchButton = example12Children[example12Children.length - 1];
  switchButton.addEventListener("click", () => {
    if (switchButton.innerText == "Stop") {
      // started playing loop 1
      removeBorder(example12, 1, 2);
      removeBorder(example12, 1, 6);
    }
  })

  new ExampleHeaderOnly("example14");
  new ExampleHeaderOnly("example15a");
  new ExampleHeaderOnly("example15b");
  new ExampleHeaderOnly("example15c");
  new ExampleHeaderOnly("example16");
  new ExampleHeaderOnly("example17");

  const example13 = new Example("example13", examples[13]);
  addBorder(example13, 1, 0);
  addBorder(example13, 1, 5);
  addBorder(example13, 0, 3);
  addBorder(example13, 0, 7);

  // createLoopExample("example14", examples[14], drumSampler);
  // markBoxWithBorder("example14", 1, 0);
  // markBoxWithBorder("example14", 1, 2);
  // markBoxWithBorder("example14", 1, 4);
  // markBoxWithBorder("example14", 1, 6);
  // markBoxWithBorder("example14", 1, 8);
  // markBoxWithBorder("example14", 1, 10);

  // var example14 = document.getElementById("example14");
  // var switchButton = addButton("Switch Pulse", ["mute"]);
  // switchButton.addEventListener("click", () => {
  //   if (example14.children[2].children[3].classList.contains("mark-with-border")) {
  //     example14.children[2].children[3].classList.remove("mark-with-border");
  //     example14.children[2].children[5].classList.remove("mark-with-border");
  //     example14.children[2].children[9].classList.remove("mark-with-border");
  //     example14.children[2].children[11].classList.remove("mark-with-border");

  //     example14.children[2].children[4].classList.add("mark-with-border");
  //     example14.children[2].children[10].classList.add("mark-with-border");
  //     // TODO and mute clicks
  //   } else {
  //     example14.children[2].children[3].classList.add("mark-with-border");
  //     example14.children[2].children[5].classList.add("mark-with-border");
  //     example14.children[2].children[9].classList.add("mark-with-border");
  //     example14.children[2].children[11].classList.add("mark-with-border");

  //     example14.children[2].children[4].classList.remove("mark-with-border");
  //     example14.children[2].children[10].classList.remove("mark-with-border");
  //   }
  // })
  // example14.appendChild(switchButton);

  // createMuteLoopExample("example15a", examples["15a"], drumSampler);

  // examples.default.tag = "example15b";
  // createExampleHeader("example15b", examples.default, drumSampler);
  // examples.default.tag = "example15c";
  // createExampleHeader("example15c", examples.default, drumSampler);
  // examples.default.tag = "example16";
  // createExampleHeader("example16", examples.default, drumSampler);
  // examples.default.tag = "example17";
  // createExampleHeader("example17", examples.default, drumSampler);
}
