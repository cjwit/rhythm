console.log("audio.js running");
// import * as Tone from 'tone';
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

  // .box-row-four {
  //   width: calc(25% - #{$box-label-width}/4 - #{$box-margin-left});
  // }
  
  
  return boxes;  
}

// build loop example from a data object
function createLoopExample(tagId, loopExampleData) {
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
  
  // connect audio for example 1
  // loopButton.addEventListener('click', async() => {
  //   console.log('loop start for ' + tagId);
  // });
}

module.exports = {
  createBoxes: createBoxes,
  createLoopExample: createLoopExample
}