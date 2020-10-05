import { createExampleHeader, createLoopExample, createMuteLoopExample, markBoxWithBorder, addButton } from './examples_ui.js';
import { showMoreButton } from './other_ui.js';

export function part2setup(examples, drumSampler) {
  createLoopExample("example7", examples[7], drumSampler);
  createMuteLoopExample("example8", examples[8], drumSampler);
}
