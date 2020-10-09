import * as Tone from 'tone';

// drum sampler configuration
export function createDrumSampler() {
  const drumSampler = new Tone.Sampler({
    urls: {
      A1: "./hihat.mp3",
      A2: "./snare.mp3",
      A3: "./kick.mp3",
      A4: "./clave.mp3",
      A5: "./ding.mp3",
      A6: "./bongo1.mp3",
      A7: "./bongo2.mp3",
      A8: "./tom3.mp3",
      A9: "./cowbell.mp3"
    },
  }).toDestination();

  return drumSampler;
}

export function createSynth() {
  const synth = new Tone.Synth().toDestination();
  return synth;
}