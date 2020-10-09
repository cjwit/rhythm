import { Example } from './Example.js';
import { ExampleWithSlider } from './ExampleWithSlider.js';
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

  const example11a = new Example("example11a", examples["11a"]);
  const example11b = new Example("example11b", examples["11b"]);
  
  const example12 = new Example("example12", examples[12]);
  addBorder(example12, 1, 0);
  addBorder(example12, 1, 2);
  addBorder(example12, 1, 4);
  addBorder(example12, 1, 6);

  var example12Children = Array.from(example12.example.children);
  var playButton = example12Children[0];
  playButton.addEventListener("click", () => {
    if (playButton.innerText != "Stop") {
      // started playing loop 0
      addBorder(example12, 1, 2);
      addBorder(example12, 1, 6);
    }
  })

  var switchButton = example12Children[example12Children.length - 1];
  switchButton.addEventListener("click", () => {
    if (switchButton.innerText != "Stop") {
      // started playing loop 1
      console.log("clicked slower")
      removeBorder(example12, 1, 2);
      removeBorder(example12, 1, 6);
    }
  })

  const example13 = new Example("example13", examples[13]);
  addBorder(example13, 1, 0);
  addBorder(example13, 1, 5);
  addBorder(example13, 0, 3);
  addBorder(example13, 0, 7);

  const example14 = new Example("example14", examples[14]);
  addBorder(example14, 0, 0);
  addBorder(example14, 0, 2);
  addBorder(example14, 0, 4);
  addBorder(example14, 0, 6);
  addBorder(example14, 0, 8);
  addBorder(example14, 0, 10);

  var example14Children = Array.from(example14.example.children);
  var playButton = example14Children[0];
  playButton.addEventListener("click", () => {
    if (playButton.innerText == "Stop") {
      // started playing loop 0
      addBorder(example14, 0, 2);
      addBorder(example14, 0, 4);
      addBorder(example14, 0, 8);
      addBorder(example14, 0, 10);

      removeBorder(example14, 0, 3);
      removeBorder(example14, 0, 9);
    }
  })

  var switchButton = example14Children[example14Children.length - 1];
  switchButton.addEventListener("click", () => {
    if (switchButton.innerText == "Stop") {
      // started playing loop 1
      removeBorder(example14, 0, 2);
      removeBorder(example14, 0, 4);
      removeBorder(example14, 0, 8);
      removeBorder(example14, 0, 10);

      addBorder(example14, 0, 3);
      addBorder(example14, 0, 9);
    }
  })

  const example15 = new Example("example15", examples[15]);
  const example16 = new Example("example16", examples[16]);
  
  const example17 = new ExampleWithSlider("example17", examples[17]);
}
