export class Example {
  constructor(tagId, data) {
    this.tagId = tagId;
    this.data = data;
    this.loops = data.loops;
    this.numLoops = this.loops.length;
    this.example = document.getElementById(tagId);

    this.makePlayButton(this.loops[0].btnText);
    this.makeTitle();
    this.makeBoxes(this.loops[0].parts);

    // add other buttons/loops
    if (this.numLoops > 1) {
      for (let i = 1; i < this.numLoops; i++) {
        this.makePlayButton(this.loops[i].btnText, "mute")
      }
    }
  }

  makePlayButton(innerText, btnClass = null) {
    var button = document.createElement("span");
    button.classList.add("btn");
    button.innerText = innerText;
    if (btnClass) {
      button.classList.add(btnClass);
    }

    // TODO add listener

    this.example.appendChild(button); 
  }

  makeTitle() {
    var titleSpan = document.createElement("span");
    titleSpan.classList.add("title");
    titleSpan.innerText = this.data.title;
    this.example.appendChild(titleSpan)
  }

  makeBoxes(parts) {
    var rows = 0;
    for (let i = 0; i < parts.length; i++) {
      if (parts[i].show) {
        let row = this.makeRowOfBoxes(parts[i]);
        this.example.appendChild(row);
        rows++;
      }
    }
  
    if (rows == 0) {
      this.example.children[0].classList.add("no-boxes");  // button
      this.example.children[1].classList.add("no-boxes");  // title
    }
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
  
    for (let i = 0; i < part.pattern.length; i++) {
      let box = document.createElement("span");
      box.classList.add("box");
  
      // filled or not
      let status = part.pattern[i] == 1 ? "filled-box" : "empty-box";
      box.classList.add(status);
  
      // style box width
      let percent = 100.0 / part.pattern.length + "%";
      let padding = nameWidth / part.pattern.length + 0.1;
      box.style.width = "calc(" + percent + " - " + padding + "em)"
  
      // for identification from the draw command
      let className = part.name.toLowerCase().replace(" ", "-") + "-box";
      box.classList.add(className);
  
      row.appendChild(box);
    }
    return row;
  }
}