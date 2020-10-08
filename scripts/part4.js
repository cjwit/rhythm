import { Example } from './Example.js';
import { ExampleHeaderOnly } from './ExampleHeaderOnly.js';
import { ExampleCustomBoxWidth } from './ExampleCustomBoxWidth.js';
import { ExampleWithTempoSlider } from './ExampleWithTempoSlider.js';
import { addBorder } from './other_ui.js';

export function part4setup(examples) {
  const example18 = new Example("example18", examples[18]);

  const example19 = new ExampleWithTempoSlider("example19", examples[19]);

  const example20 = new ExampleCustomBoxWidth("example20", examples[20]);

  const example21 = new Example("example21", examples[21]);

  const example22 = new ExampleCustomBoxWidth("example22", examples[22]);
  addBorder(example22, 0, 0);
  addBorder(example22, 0, 2);
  addBorder(example22, 0, 4);
  addBorder(example22, 0, 6);
  addBorder(example22, 1, 8);
}
