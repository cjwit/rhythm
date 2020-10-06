// mark boxes with border (called in individual script files)
export function markBoxWithBorder(tagId, rowNumber, boxNumber) {
  var example = document.getElementById(tagId);
  var children = Array.from(example.children);
  var boxes = Array.from(children[rowNumber + 1].children);
  var box = boxes[boxNumber + 1];
  box.classList.add("mark-with-border")
}
