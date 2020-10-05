import { createExampleHeader, createLoopExample, createMuteLoopExample, markBoxWithBorder, addButton } from './examples_ui.js';
import { showMoreButton } from './other_ui.js';

export function part1setup(examples, drumSampler) {
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
}
