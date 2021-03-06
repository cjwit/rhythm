import { part1setup } from './parts/part1.js';
import { part2setup } from './parts/part2.js';
import { part3setup } from './parts/part3.js';
import { part4setup } from './parts/part4.js';
import { examples } from './examples.js';

//
// create examples
//

var page = window.location.pathname.split("/").pop();

switch (page) {
  case "part1.html":
    part1setup(examples);
    break;

  case "part2.html":
    part2setup(examples);
    break;

  case "part3.html":
    part3setup(examples);
    break;

  case "part4.html":
    part4setup(examples);
    break;
}
