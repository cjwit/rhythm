import * as Tone from 'tone';
import { createLoopExample } from './audio.js';

//
// example 1
//

var example1Data = {
  title: "Example 1: a basic rock beat",
  parts: [
    {
      name: "High hat",
      pattern: [1, 1, 1, 1, 1, 1, 1, 1],
    },
    {
      name: "Snare drum",
      pattern: [0, 0, 0, 0, 1, 0, 0, 0],
    },
    {
      name: "Kick drum",
      pattern: [1, 0, 0, 0, 0, 0, 0, 0],
    }
  ]
}

function fadeActiveBox(element) {
  element.style.backgroundColor = "#2875a1";
  setTimeout(function() {
    element.animate({
      backgroundColor: "#570E51"
    }, 1500);
  });
  setTimeout(function() {
    element.style.backgroundColor = "#570E51";
  }, 1500);
}

// add and remove active-box class to the next box in the loop
function boxVisualRowCallback(name) {
  var boxes = document.getElementsByClassName(name + "-box");
  
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

function makeSequenceFromNotes(note, sequence, string) {
  if (note == 0) {
    sequence.push(null)
  } else {
    sequence.push(string)
  }
}

// example 1 audio setup
function example1Sampler() {
  const drumSampler = new Tone.Sampler({
    urls: {
      A1: "hihat.mp3",
      A2: "snare.mp3",
      A3: "kick.mp3"
    },
    baseUrl: "https://raw.githubusercontent.com/Tonejs/audio/master/drum-samples/acoustic-kit/"
  }).toDestination();

  // START HERE: https://tonejs.github.io/docs/14.7.39/Sequence https://medium.com/dev-red/tutorial-lets-make-music-with-javascript-and-tone-js-f6ac39d95b8c
  // set up sequences
  var highHatSequence = [];
  example1Data.parts[0].pattern.forEach(note => makeSequenceFromNotes(note, highHatSequence, "A1"));

  var snareSequence = [];
  example1Data.parts[1].pattern.forEach(note => makeSequenceFromNotes(note, snareSequence, "A2"));

  var kickSequence = [];
  example1Data.parts[2].pattern.forEach(note => makeSequenceFromNotes(note, kickSequence, "A3"));

  // set up loops
  const highHatLoop = new Tone.Sequence((time, note) => {
    boxVisualRowCallback("high-hat");
    drumSampler.triggerAttackRelease(note, "8n", time);
  }, highHatSequence).start(0);
  
  const snareLoop = new Tone.Sequence((time, note) => {
    boxVisualRowCallback("snare-drum");
    drumSampler.triggerAttackRelease(note, "8n", time);
  }, snareSequence).start(0);
  
  const kickLoop = new Tone.Sequence((time, note) => {
    boxVisualRowCallback("kick-drum");
    drumSampler.triggerAttackRelease(note, "8n", time);
  }, kickSequence).start(0);

  // set tempo
  Tone.Transport.bpm.value = 108;
}

createLoopExample("example1", example1Data, example1Sampler);
