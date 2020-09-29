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
      name: "Snare",
      pattern: [0, 0, 1, 0],
    },
    {
      name: "Bass drum",
      pattern: [1, 0, 0, 0],
    }
  ]
}

function example1Sampler() {
  // example 1 audio setup
  const drumSampler = new Tone.Sampler({
    urls: {
      A1: "hihat.mp3",
      A2: "snare.mp3",
      A3: "kick.mp3"
    },
    baseUrl: "https://raw.githubusercontent.com/Tonejs/audio/master/drum-samples/acoustic-kit/"
  }).toDestination();

  const highHatLoop = new Tone.Loop(time => {
    drumSampler.triggerAttackRelease("A1", "8n", time);
  }, "8n").start(0);

  const snareLoop = new Tone.Loop(time => {
    drumSampler.triggerAttackRelease("A2", "4n", time);
  }, "1n").start("2n");

  const kickLoop = new Tone.Loop(time => {
    drumSampler.triggerAttackRelease("A3", "4n", time);
  }, "1n").start(0);

  Tone.Transport.bpm.value = 108;
}

createLoopExample("example1", example1Data, example1Sampler);
