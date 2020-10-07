import * as Tone from "tone";
import { Example } from './Example.js';

export class ExampleCustomBoxWidth extends Example {
  constructor(tagId, data) {
    super(tagId, data);
  }

  makeRowOfBoxes(part) {
    var row = document.createElement("div");
    row.classList.add("boxes");

    // add name to the row of boxes
    var rowName = document.createElement("span");
    rowName.classList.add("box-label");
    rowName.innerText = part.name;
      var nameWidth = 6.0;
    rowName.style.width = nameWidth + "em";
    row.appendChild(rowName);
  
    for (let i = 0; i < part.boxPattern.length; i++) {
      let box = document.createElement("span");
      box.classList.add("box");
  
      // filled or not
      let status = part.boxPattern[i] == 1 ? "filled-box" : "empty-box";
      box.classList.add(status);
  
      // style box width
      let width = Math.floor(part.boxWidths[i] * 1000) / 10;
      let percent = width + "%";
      let padding = nameWidth / part.boxPattern.length + 0.1;
      box.style.width = "calc(" + percent + " - " + padding + "em)"
  
      // for identification from the draw command
      let className = part.name.toLowerCase().replace(" ", "-") + "-box";
      box.classList.add(className);
  
      row.appendChild(box);
    }
    return row;
  }
}
