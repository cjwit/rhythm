//
// boxes
//

var createBoxes = function(label, series) {
  var boxes = document.createElement("div");
  boxes.classList.add("boxes");
  var boxLabel = document.createElement("span");
  boxLabel.classList.add("box-label");
  boxLabel.innerText = label;

  // style label
  var labelWidth = 6.0;
  boxLabel.style.width = labelWidth + "em";

  boxes.appendChild(boxLabel);
  
  for (let i = 0; i < series.length; i++) {
    let box = document.createElement("span");
    box.classList.add("box");
    let status = series[i] == 1 ? "filled-box" : "empty-box";
    box.classList.add(status);

    // style box width
    let percent = 100.0/series.length + "%";
    let padding = labelWidth / series.length + 0.5;
    box.style.width = "calc(" + percent + " - " + padding + "em)"

    boxes.appendChild(box);
  }

  // .box-row-four {
  //   width: calc(25% - #{$box-label-width}/4 - #{$box-margin-left});
  // }
  
  
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

var title = document.createElement("span");
title.classList.add("title");
title.innerText = "Example 1: a basic rock beat";

var highHatBoxes = createBoxes("High hat", [1, 1, 1, 1, 1, 1, 1, 1]);
var snareBoxes = createBoxes("Snare", [0, 0, 1, 0]);
var bassBoxes = createBoxes("Bass drum", [1, 0, 0, 0]);

// append elements
example1.appendChild(loopButton);
example1.appendChild(title);
example1.appendChild(highHatBoxes);
example1.appendChild(snareBoxes);
example1.appendChild(bassBoxes);
