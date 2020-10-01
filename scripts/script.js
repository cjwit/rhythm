import { createDrumSampler } from './audio.js';
import { createLoopExample } from './examples_ui.js';
import { example1Data, example2Data, example3Data } from './examples.js';

//
// instantiate examples
//
var drumSampler = createDrumSampler();

createLoopExample("example1", example1Data, drumSampler);
createLoopExample("example2", example2Data, drumSampler, false);
createLoopExample("example3", example3Data, drumSampler);
