import * as Tone from 'tone';
import { Loop } from 'tone';
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
      pattern: [0, 0, 1, 0, 0, 0, 1, 0],
    },
    {
      name: "Kick drum",
      pattern: [1, 0, 0, 0, 1, 0, 0, 1],
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
function createDrumSampler() {
  const drumSampler = new Tone.Sampler({
    urls: {
      A1: "hihat.mp3",
      A2: "snare.mp3",
      A3: "kick.mp3"
    },
    baseUrl: "https://raw.githubusercontent.com/Tonejs/audio/master/drum-samples/acoustic-kit/"
  }).toDestination();

  return drumSampler;
}

// convert pattern from data object into a sequence array for the loop
function createNoteSequence(pattern, noteString) {
  var sequence = [];
  pattern.forEach(note => makeSequenceFromNotes(note, sequence, noteString));
  return sequence;
}

// convert loop array into a loop/Sequence object
function createLoopSequence(name, sequence, noteLength, sampler) {
  const loop = new Tone.Sequence((time, note) => {
    boxVisualRowCallback(name);
    sampler.triggerAttackRelease(note, noteLength, time);
  }, sequence).start(0);
  return loop;
}


function createSequenceObject(parts) {
    // set up sequences
    var sequences = {};
    sequences.hh = createNoteSequence(parts[0].pattern, "A1");
    sequences.snare = createNoteSequence(parts[1].pattern, "A2");
    sequences.kick = createNoteSequence(parts[2].pattern, "A3");  
    return sequences;
}

// convert loop objects into drum loops attached to a drum sampler
function buildDrumLoops(sequences, tempo, sampler) {
  // set up loops
  var highHatLoop = createLoopSequence("high-hat", sequences.hh, "8n", sampler);
  var highHatLoop = createLoopSequence("snare-drum", sequences.snare, "8n", sampler);
  var highHatLoop = createLoopSequence("kick-drum", sequences.kick, "8n", sampler);
  
  // set tempo
  Tone.Transport.bpm.value = tempo;
}

var example1Sequences = createSequenceObject(example1Data.parts);
var drumSampler = createDrumSampler();
buildDrumLoops(example1Sequences, 108, drumSampler);
createLoopExample("example1", example1Data);
