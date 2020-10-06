import { Example } from './Example.js';
import { ExampleHeaderOnly } from './ExampleHeaderOnly.js';

export function part4setup(examples) {
  const example18 = new Example("example18", examples[18]);

  new ExampleHeaderOnly("example19");
  new ExampleHeaderOnly("example20");
  new ExampleHeaderOnly("example21");
  new ExampleHeaderOnly("example22");
  new ExampleHeaderOnly("example23");
  new ExampleHeaderOnly("example24");
}
