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

    // filled or not
    let status = pattern[i] == 1 ? "filled-box" : "empty-box";
    box.classList.add(status);

    // style box width
    let percent = 100.0/pattern.length + "%";
    let padding = nameWidth / pattern.length + 0.5;
    box.style.width = "calc(" + percent + " - " + padding + "em)"

    // for identification from the draw command
    let className = name.toLowerCase().replace(" ", "-") + "-box";
    box.classList.add(className);

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
      await Tone.start();
      audioFunction();

      // generic callback code
      Tone.Transport.start("+0.5");
      loopButton.innerText = "Stop";
    } else {
      Tone.Transport.stop();
      loopButton.innerText = "Play loop";
      
      // remove active status from all boxes NOT WORKING START HERE
      var activeBoxes = Array.from(loopButton.parentElement.getElementsByClassName("active-box"));
      console.log(activeBoxes);
      activeBoxes.forEach(element => element.classList.remove("active-box"));
      console.log(activeBoxes);
    }
  });
}
