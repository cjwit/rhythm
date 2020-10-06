import * as Tone from "tone";

export class Example {
  constructor(tagId, data) {
    this.tagId = tagId;
    this.data = data;
    this.loops = data.loops;
    this.numLoops = this.loops.length;
    this.example = document.getElementById(tagId);

    this.makePlayButton(this.loops[0]);
    this.makeTitle();
    this.makeBoxes(this.loops[0].parts);

    // add other buttons/loops
    if (this.numLoops > 1) {
      for (let i = 1; i < this.numLoops; i++) {
        this.makePlayButton(this.loops[i], "mute")
      }
    }
  }

  makePlayButton(loop, btnClass = null) {
    var btnText = loop.btnText;
    var button = document.createElement("span");
    button.classList.add("btn");
    button.classList.add("play-button");
    button.innerText = btnText;
    if (btnClass) {
      button.classList.add(btnClass);
    }

    button.addEventListener('click', async () => {
      
      // start playing if stopped
      if (button.innerText == btnText) {
        this.stopAllExamples();
        this.setUpLoop(loop);

        await Tone.start();

        if (loop.audioFile) {
          loop.audioFile.play();
        }

        Tone.Transport.start("+0.01")
        button.innerText = "Stop"
      
      // stop if playing
      } else {
        Tone.Transport.stop();

        if (loop.audioFile) {
          loop.audioFile.pause();
          loop.audioFile.currentTime = 0;
        }

        button.innerText = btnText;
      }
    })

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

  stopAllExamples() {
    var playButtons = Array.from(document.getElementsByClassName("play-button"));
    playButtons.forEach(button => {
      if (button.innerText == "Stop") {
        button.click();
      }
    })
  }

  setUpLoop(loop) {
    Tone.Transport.cancel(0);

    for (let i = 0; i < loop.parts.length; i++) {
      let part = loop.parts[i];
      let name = part.name.toLowerCase().replace(" ", "-");

      let sequenceObject = [];
      part.pattern.forEach(note => {
        if (note == 0) {
          sequenceObject.push(null)
        } else {
          sequenceObject.push(part.note)
        }
      })

      let sequence = new Tone.Sequence((time, note) => {
        // if showing
        part.source.triggerAttackRelease(note, "8n", time);
      }, sequenceObject).start(0);
      // createLoopSequence(name, sequence, sampler, exampleData.parts[i].show);
    }

    Tone.Transport.bpm.value = loop.tempo;
  }
}