import * as Tone from 'tone';
//
// boxes
//
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
    let status = pattern[i] == 1 ? "filled-box" : "empty-box";
    box.classList.add(status);

    // style box width
    let percent = 100.0/pattern.length + "%";
    let padding = nameWidth / pattern.length + 0.5;
    box.style.width = "calc(" + percent + " - " + padding + "em)"

    boxes.appendChild(box);
  }

  return boxes;  
}

//
// build loop example from a data object
//
export function createLoopExample(tagId, loopExampleData, audioFunction) {
  var example = document.getElementById(tagId);

  // create elements
  var loopButton = document.createElement("span");
  loopButton.classList.add("btn");
  loopButton.innerText = "Play loop";
  
  var title = document.createElement("span");
  title.classList.add("title");
  title.innerText = loopExampleData.title;
  
  // append elements
  example.appendChild(loopButton);
  example.appendChild(title);
  
  for (let i = 0; i < loopExampleData.parts.length; i++) {
    let part = createBoxes(loopExampleData.parts[i]);
    example.appendChild(part);
  }
  
  loopButton.addEventListener('click', async() => {

    // if not playing
    if (loopButton.innerText == "Play loop") {

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
    
      // generic callback code
      await Tone.start();
      Tone.Transport.start();
      loopButton.innerText = "Stop";
    } else {
      Tone.Transport.stop();
      loopButton.innerText = "Play loop";
    }
  });
}
