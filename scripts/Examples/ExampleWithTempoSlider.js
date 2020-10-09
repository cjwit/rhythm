import { ExampleWithSlider } from '../Examples/ExampleWithSlider.js';

export class ExampleWithTempoSlider extends ExampleWithSlider {
  constructor(tagId, data) {
    super(tagId, data);
    this.timeouts = [];
    this.playing= false;
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

    button.addEventListener('click', () => {
      
      // start playing if stopped
      if (button.innerText == btnText) {
        this.stopAllExamples();
        this.stopLoop();
        this.playing = true;
        this.setUpLoop(loop);
        this.startLoop();
        button.innerText = "Stop"
      
      // stop if playing
      } else {
        this.stopLoop();
        this.playing = false;
        button.innerText = btnText;

      }
    })

    this.example.appendChild(button); 
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

  buildSwingSlider() {
    // create slider object
    const sliderContainer = document.createElement("div");
    sliderContainer.classList.add("slider-container");
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = "50";
    slider.max = "100";
    slider.value = "100";
    slider.classList.add("slider");
    slider.id = this.example.tagId + "slider";
    sliderContainer.appendChild(slider);
    this.example.insertBefore(sliderContainer, this.example.childNodes[3]);

    // capture slider values
    this.firstNoteLength = slider.value;
    slider.addEventListener("input", () => {
      this.firstNoteLength = slider.value;
      this.updateBoxSizes();
      this.setUpLoop();
      if (this.playing) {
        var button = Array.from(this.example.getElementsByClassName("play-button"))[0];
        button.click();
      }
    })
  }

  updateBoxSizes() {
    var rows = Array.from(this.example.getElementsByClassName("boxes"));
    var firstRow = Array.from(rows[0].getElementsByClassName("box"));

    // calculate widthPercent from this.firstNoteLength
    var originalWidthString = firstRow[0].style.width;
    var updatedWidthString = originalWidthString.replace(/[0-9.]+/, this.firstNoteLength * 50 / 100);

    for (let i = 0; i < rows.length; i++) {
      var boxes = Array.from(rows[i].getElementsByClassName("box"));
      boxes[0].style.width = updatedWidthString;
    }
  }

  setUpLoop() {
    this.audio = new Audio("./samples/clave.mp3");
    this.stopLoop();
    
    var durations = this.loops[0].parts[0].durations;
    durations[0] = this.firstNoteLength ? this.firstNoteLength / 100.0 : durations[0];
    
    this.startTimes = [];
    var lastStart = 0;
    durations.forEach(d => {
      this.startTimes.push(lastStart);
      lastStart += d;
    })

    this.loopLength = lastStart;
  }

  startLoop() {
    var iterationStartTimes = [0];
    for (let i = 0; i < 10; i++) {
      iterationStartTimes.push(iterationStartTimes[i] + this.loopLength * 1000)
    }

    iterationStartTimes.forEach(i => this.setLoopTimeouts(i))
  }

  setLoopTimeouts(loopStart) {
    var loopTimeout = window.setTimeout(() => {

      for (let i = 0; i < this.startTimes.length; i++) {
        let timeout = window.setTimeout(() => {
          this.audio.play();
          this.visualCallback(this.loops[0].parts[0].name)
        }, this.startTimes[i] * 1000);
        this.timeouts.push(timeout);
      }  
    }, loopStart);

    this.timeouts.push(loopTimeout);
  }

  stopLoop() {
    this.timeouts.forEach(t => { clearTimeout(t); })
  }
}

