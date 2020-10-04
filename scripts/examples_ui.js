import * as Tone from 'tone';
import { setTempo, buildDrumLoops } from './audio.js';

//
// build loop example from a data object
//
//
// creates a row of boxes
// used by createLoopExample
function createBoxes({ name, pattern }) {
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
// remove current-example class from all other examples on the page
// used by createLoopExample
function setAsCurrentExample(example) {
  var active = Array.from(document.getElementsByClassName("current-example"));
  active.forEach(element => element.classList.remove("current-example"));
  example.classList.add("current-example");
}

// reset Tone.Transport with current loops
// used by createLoopExample
function setNewLoop(loopExampleData, sampler) {
  Tone.Transport.cancel(0);
  buildDrumLoops(loopExampleData, sampler);
  setTempo(loopExampleData.tempo);
}

// click "stop" to end all running loops
// used by createLoopExample
function stopAllExamples() {
  var examples = Array.from(document.getElementsByClassName("example"));
  examples.forEach(example => {
    if (example.children[0].innerText == "Stop") {
      example.children[0].click();
    }
  })
}

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

// create example title
function createTitle(title) {
  var titleElement = document.createElement("span");
  titleElement.classList.add("title");
  titleElement.innerText = title;
  return titleElement;
}

// add start/stop loop listener
function addLoopStartStopListener(button, defaultText, example, loopExampleData, sampler) {
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
      Tone.Transport.start("+0.01");
      button.innerText = "Stop";

    } else {
      Tone.Transport.stop();
      button.innerText = defaultText;

      // remove active status from all boxes NOT WORKING START HERE
      var activeBoxes = Array.from(document.getElementsByClassName("active-box"));
      activeBoxes.forEach(element => element.classList.remove("active-box"));
    }
  });
}

export function createExampleHeader(tagId, loopExampleData, sampler) {
  var example = document.getElementById(tagId);

  // create and add elements
  var loopButton = addButton("Play loop");
  var title = createTitle(loopExampleData.title);
  example.appendChild(loopButton);
  example.appendChild(title);

  // set up loop listener
  addLoopStartStopListener(loopButton, loopButton.innerText, example, loopExampleData, sampler);

  return example;
}

export function createLoopExample(tagId, loopExampleData, sampler) {
  var example = createExampleHeader(tagId, loopExampleData, sampler);
  // add rows of boxes for loops
  var rows = 0;
  for (let i = 0; i < loopExampleData.parts.length; i++) {
    if (loopExampleData.parts[i].show) {
      let part = createBoxes(loopExampleData.parts[i]);
      example.appendChild(part);
      rows++;
    }
  }
  if (rows == 0) {
    example.children[0].classList.add("no-boxes");  // button
    example.children[1].classList.add("no-boxes");  // title
  }
  
  return example;
}

//
// build loop object with mute buttons
//
//
// mute button event listener START HERE
function muteEventListener(part, partNumber) {
  console.log("Muting part", partNumber, part.name );
}

// add to createLoopExample functionality
export function createMuteLoopExample(tagId, loopExampleData, sampler) {
  var example = createLoopExample(tagId, loopExampleData, sampler);

  // set up mute buttons
  for (let i = 0; i < loopExampleData.parts.length; i++) {
    
    // create mute button
    var muteButton = addButton("Mute " + loopExampleData.parts[i].name, ["mute"]);
    muteButton.addEventListener("click", () => { muteEventListener(loopExampleData.parts[i], i); })
    example.appendChild(muteButton);
  }
} 

//
// handler for box animations
//
//
// helper used by boxVisualRowCallback()
function fadeActiveBox(element) {
  element.style.backgroundColor = "#2875a1";
  setTimeout(function() {}, 100);
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
// mark specific boxes
//
//
// called in individual script file
export function markBoxWithBorder(tagId, rowNumber, boxNumber) {
  var example = document.getElementById(tagId);
  var children = Array.from(example.children);
  var boxes = Array.from(children[rowNumber + 1].children);
  var box = boxes[boxNumber + 1];
  box.classList.add("mark-with-border")
}
