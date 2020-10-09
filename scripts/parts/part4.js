import { Example } from '../Examples/Example.js';
import { ExampleCustomBoxWidth } from '../Examples/ExampleCustomBoxWidth.js';
import { ExampleDurationSlider } from '../Examples/ExampleDurationSlider.js';
import { addBorder } from '../helpers/other_ui.js';

export function part4setup(examples) {
  const example18 = new Example("example18", examples[18]);

  const example19 = new ExampleDurationSlider("example19", examples[19]);

  const example20 = new ExampleCustomBoxWidth("example20", examples[20]);

  const example21 = new Example("example21", examples[21]);

  const example22 = new ExampleCustomBoxWidth("example22", examples[22]);
  addBorder(example22, 0, 0);
  addBorder(example22, 0, 2);
  addBorder(example22, 0, 4);
  addBorder(example22, 0, 6);
  addBorder(example22, 1, 8);
}
