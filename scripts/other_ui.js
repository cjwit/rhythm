//
// other ui
//
//
// show hidden text in part 1
export function showMoreButton(hiddenElementId) {
  var showMoreButton = document.getElementById("showMoreButton");
  showMoreButton.onclick = function () {
    showMoreButton.style.display = "none";
    var part1secondHalf = document.getElementById(hiddenElementId);
    part1secondHalf.style.display = "block";
  }
}
