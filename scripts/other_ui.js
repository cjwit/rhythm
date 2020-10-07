import { Tone } from "tone/build/esm/core/Tone";

// show hidden text in part 1
export function showMoreButton(hiddenElementId) {
  var showMoreButton = document.getElementById("showMoreButton");
  showMoreButton.onclick = function () {
    showMoreButton.style.display = "none";
    var part1secondHalf = document.getElementById(hiddenElementId);
    part1secondHalf.style.display = "block";
  }
}

// mark boxes with border (called in individual script files)
export function addBorder(example, rowIndex, boxIndex) {
  var exampleInstance = example.example;
  var rows = Array.from(exampleInstance.getElementsByClassName("boxes"));
  var row = rows[rowIndex];

  var boxes = Array.from(row.getElementsByClassName("box"));
  var box = boxes[boxIndex];

  box.classList.add("mark-with-border")
}

// mark boxes with border (called in individual script files)
export function removeBorder(example, rowIndex, boxIndex) {
  var exampleInstance = example.example;
  var rows = Array.from(exampleInstance.getElementsByClassName("boxes"));
  var row = rows[rowIndex];

  var boxes = Array.from(row.getElementsByClassName("box"));
  var box = boxes[boxIndex];

  box.classList.remove("mark-with-border")
}
