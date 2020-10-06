import * as Tone from 'tone';
import { setTempo, buildDrumLoops } from './audio.js';



//
// handle changing examples
//

// click "stop" to end all running loops


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
