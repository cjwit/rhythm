import * as Tone from 'tone';
import { setTempo, buildDrumLoops } from './audio.js';

//
// handle rows of boxes
//

// creates a row of boxes with a label
function createRowOfBoxes({ name, pattern }) {
  var boxes = document.createElement("div");
  boxes.classList.add("boxes");
  var boxName = document.createElement("span");
  boxName.classList.add("box-label");
  boxName.innerText = name;

  // style name
  var nameWidth = 6.0;
  boxName.style.width = nameWidth + "em";

  boxes.appendChild(boxName);

  for (let i = 0; i < pattern.length; i++) {
    let box = document.createElement("span");
    box.classList.add("box");

    // filled or not
    let status = pattern[i] == 1 ? "filled-box" : "empty-box";
    box.classList.add(status);

    // style box width
    let percent = 100.0 / pattern.length + "%";
    let padding = nameWidth / pattern.length + 0.1;
    box.style.width = "calc(" + percent + " - " + padding + "em)"

    // for identification from the draw command
    let className = name.toLowerCase().replace(" ", "-") + "-box";
    box.classList.add(className);

    boxes.appendChild(box);
  }

  return boxes;
}

// iterate through parts to add rows of boxes, format if none show
function addRowsOfBoxes(example, loopExampleData) {

  var rows = 0;
  for (let i = 0; i < loopExampleData.parts.length; i++) {
    if (loopExampleData.parts[i].show) {
      let part = createRowOfBoxes(loopExampleData.parts[i]);
      example.appendChild(part);
      rows++;
    }
  }

  if (rows == 0) {
    example.children[0].classList.add("no-boxes");  // button
    example.children[1].classList.add("no-boxes");  // title
  }

  return;
}

//
// handle changing examples
//

// click "stop" to end all running loops
function stopAllExamples() {
  var examples = Array.from(document.getElementsByClassName("example"));
  examples.forEach(example => {
    if (example.children[0].innerText == "Stop") {
      example.children[0].click();
    }
  })
}

// remove current-example class from all other examples on the page
function setAsCurrentExample(example) {
  var active = Array.from(document.getElementsByClassName("current-example"));
  active.forEach(element => element.classList.remove("current-example"));
  example.classList.add("current-example");
}

// reset Tone.Transport with current loops
function setNewLoop(loopExampleData, sampler) {
  Tone.Transport.cancel(0);
  buildDrumLoops(loopExampleData, sampler);
  setTempo(loopExampleData.tempo);
}

//
// create shared UI elements
//

// create a generic button
export function addButton(innerText, classes = []) {
  var button = document.createElement("span");
  button.classList.add("btn");
  button.innerText = innerText;
  for (let i = 0; i < classes.length; i++) {
    button.classList.add(classes[i]);
  }
  return button
}

// add a button with mute class and labels, connect to mute listener
function addMuteButton(example, part) {
  var muteButton = addButton("Mute " + part.name, ["mute"]);
  muteButton.addEventListener("click", () => { muteEventListener(part); })
  example.appendChild(muteButton);
}

// create example title
function createTitle(title) {
  var titleElement = document.createElement("span");
  titleElement.classList.add("title");
  titleElement.innerText = title;
  return titleElement;
}

// mark boxes with border (called in individual script files)
export function markBoxWithBorder(tagId, rowNumber, boxNumber) {
  var example = document.getElementById(tagId);
  var children = Array.from(example.children);
  var boxes = Array.from(children[rowNumber + 1].children);
  var box = boxes[boxNumber + 1];
  box.classList.add("mark-with-border")
}

//
// format active box animations
//

// helper used by boxVisualRowCallback()
function fadeActiveBox(element) {
  element.style.backgroundColor = "#2875a1";
  setTimeout(function () { }, 100);
  setTimeout(function () {
    element.animate({
      backgroundColor: "#570E51"
    }, 1000);
  });
  setTimeout(function () {
    element.style.backgroundColor = "#570E51";
  }, 1000);
}

// add and remove active-box class to the next box in the loop
// callback used by createLoopSequence()
export function boxVisualRowCallback(name) {
  var example = Array.from(document.getElementsByClassName("current-example"))[0];
  var boxes = example.getElementsByClassName(name + "-box");

  boxes = Array.from(boxes); // convert HTMLCollection to array
  boxes = boxes.filter(box => box.classList.contains("filled-box"));
  var numBoxes = boxes.length;

  var active = 0;
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].classList.contains("active-box")) {
      boxes[i].classList.remove("active-box");
      active = (i + 1) % numBoxes;
      break;
    }
  };
  fadeActiveBox(boxes[active]);
  boxes[active].classList.add("active-box");
}

//
// configure shared event listeners
//

// add start/stop loop listener
function addLoopStartStopListener(button, defaultText, example, loopExampleData, sampler, audioFile = false) {
  button.addEventListener('click', async () => {

    // if not playing
    if (button.innerText == defaultText) {

      // if not current, clear loops and prepare them for this example
      if (example.classList.contains("current-example") == false) {
        setAsCurrentExample(example);
        stopAllExamples();
        setNewLoop(loopExampleData, sampler);
      }

      // start loop
      await Tone.start();

      if (audioFile) {
        audioFile.play();
      }

      Tone.Transport.start("+0.01");
      button.innerText = "Stop";

    } else {
      Tone.Transport.stop();

      if (audioFile) {
        audioFile.pause();
        audioFile.currentTime = 0;
      }

      button.innerText = defaultText;

      // remove active status from all boxes NOT WORKING START HERE
      var activeBoxes = Array.from(document.getElementsByClassName("active-box"));
      activeBoxes.forEach(element => element.classList.remove("active-box"));
    }
  });
}

// mute button event listener NOT WORKING
function muteEventListener(part) {
  console.log("Muting part", part.name);
  console.log(Tone);
}

//
// structure example interfaces
//

// build generic header for all examples
export function createExampleHeader(tagId, loopExampleData, sampler) {
  var example = document.getElementById(tagId);

  // create and add elements
  var loopButton = addButton("Play loop");
  var title = createTitle(loopExampleData.title);
  example.appendChild(loopButton);
  example.appendChild(title);

  // check for synced audio and set up loop listener
  var audioFile = false;
  if (loopExampleData.audio) {
    console.log(loopExampleData.audio);
    audioFile = new Audio(loopExampleData.audio);
  }
  addLoopStartStopListener(loopButton, loopButton.innerText, example, loopExampleData, sampler, audioFile);

  return example;
}

// build simple loop examples (header, rows)
export function createLoopExample(tagId, loopExampleData, sampler) {
  var example = createExampleHeader(tagId, loopExampleData, sampler);
  addRowsOfBoxes(example, loopExampleData);
  return example;
}

// add mute buttons to standard loop
export function createMuteLoopExample(tagId, loopExampleData, sampler) {
  var example = createLoopExample(tagId, loopExampleData, sampler);
  console.log(example);

  // set up mute buttons
  for (let i = 0; i < loopExampleData.parts.length; i++) {
    addMuteButton(example, loopExampleData.parts[i]);
  }
}
