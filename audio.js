//
// boxes
//

var createBoxes = function(label, series) {
  var boxes = document.createElement("div");
  boxes.classList.add("boxes");
  var boxLabel = document.createElement("span");
  boxLabel.classList.add("box-label");
  boxLabel.innerText = label;
  boxes.appendChild(boxLabel);
  
  for (let i = 0; i < series.length; i++) {
    let box = document.createElement("span");
    box.classList.add("box");
    let status = series[i] == 1 ? "filled-box" : "empty-box";
    box.classList.add(status);
    boxes.appendChild(box);
  }

  return boxes;  
}

//
// example 1
//

var example1 = document.getElementById("example1");

// create elements
var loopButton = document.createElement("span");
loopButton.classList.add("btn");
loopButton.innerText = "Play loop";

var highHatBoxes = createBoxes("High hat", [1, 1, 1, 1]);
var snareBoxes = createBoxes("Snare", [0, 0, 1, 0]);
var bassBoxes = createBoxes("Bass drum", [1, 0, 0, 0]);

// append elements
example1.appendChild(loopButton);
example1.appendChild(highHatBoxes);
example1.appendChild(snareBoxes);
example1.appendChild(bassBoxes);
