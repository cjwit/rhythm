import { createDrumSampler, buildDrumLoops } from './audio.js';
import { createLoopExample } from './examples_ui.js';
import { example1Data, example2Data } from './examples.js';

//
// instantiate examples
//
var drumSampler = createDrumSampler();

buildDrumLoops(example1Data.parts, drumSampler);
createLoopExample("example1", example1Data);

buildDrumLoops(example2Data.parts, drumSampler);
createLoopExample("example2", example2Data);
