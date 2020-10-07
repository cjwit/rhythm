import { Example } from './Example.js';
import { ExampleHeaderOnly } from './ExampleHeaderOnly.js';
import { ExampleCustomBoxWidth } from './ExampleCustomBoxWidth.js';
import { addBorder } from './other_ui.js';

export function part4setup(examples) {
  const example18 = new Example("example18", examples[18]);

  new ExampleHeaderOnly("example19");
  new ExampleHeaderOnly("example20");

  const example21 = new ExampleCustomBoxWidth("example21", examples[21]);

  const example22 = new ExampleCustomBoxWidth("example22", examples[22]);
  addBorder(example22, 0, 0);
  addBorder(example22, 0, 2);
  addBorder(example22, 0, 4);
  addBorder(example22, 0, 6);
  addBorder(example22, 1, 8);

  new ExampleHeaderOnly("example23");
  new ExampleHeaderOnly("example24");
  new ExampleHeaderOnly("example25");

}
