import { createExampleHeader, createLoopExample, createMuteLoopExample, markBoxWithBorder, addButton } from './examples_ui.js';
import { showMoreButton } from './other_ui.js';

export function part4setup(examples, drumSampler) {
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
}
