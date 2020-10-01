import * as Tone from 'tone';
import { boxVisualRowCallback } from './examples_ui.js';

//
// example 1 audio setup
//
//
// set up sampler object
export function createDrumSampler() {
  const drumSampler = new Tone.Sampler({
    urls: {
      A1: "./hihat.mp3",
      A2: "./snare.mp3",
      A3: "./kick.mp3",
      A4: "./clave.mp3"
    },
  }).toDestination();

  return drumSampler;
}

//
// configure drum loops
//
//
// callback used in createNoteSequence() 
function makeSequenceFromNotes(note, sequence, string) {
  if (note == 0) {
    sequence.push(null)
  } else {
    sequence.push(string)
  }
}

// convert pattern from data object into a sequence array for the loop
function createNoteSequence(pattern, noteString) {
  var sequence = [];
  pattern.forEach(note => makeSequenceFromNotes(note, sequence, noteString));
  return sequence;
}

// used by buildDrum Loops
function createSequenceObject(part) {
  // set up sequences
  var sequence = createNoteSequence(part.pattern, part.note);
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

// convert loop objects into drum loops attached to a drum sampler
export function buildDrumLoops(parts, sampler) {
  // set up loops
  for (let i = 0; i < parts.length; i++) {
    let name = parts[i].name.toLowerCase().replace(" ", "-");
    let sequence = createSequenceObject(parts[i])
    console.log(sequence);
    let loop = createLoopSequence(name, sequence, "8n", sampler);
  }
}

export function setTempo(tempo) {
    // set tempo
    Tone.Transport.bpm.value = tempo;
}
