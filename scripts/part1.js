import { Example } from './Example.js';
import { addBorder, showMoreButton } from './other_ui.js';

export function part1setup(examples, drumSampler) {
  const example1 = new Example("example1", examples[1]);
  const example2 = new Example("example2", examples[2]);
  const example3 = new Example("example3", examples[3]);
  addBorder(example3, 0, 0);
  
  const example4 = new Example("example4", examples[4]);
  addBorder(example4, 0, 8);
  
  const example5 = new Example("example5", examples[5]);
  addBorder(example5, 0, 0);
  
  const example6 = new Example("example6", examples[6]);

  showMoreButton("part1-second-half");
}
