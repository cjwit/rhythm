import Audio from './audio.js';

//
// example 1
//
var example1Data = {
  title: "Example 1: a basic rock beat",
  parts: [
    {
      name: "High hat",
      pattern: [1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      name: "Snare",
      pattern: [0, 0, 1, 0]
    },
    {
      name: "Bass drum",
      pattern: [1, 0, 0, 0]
    }
  ]
}

Audio.createLoopExample("example1", example1Data);
console.log("end");
