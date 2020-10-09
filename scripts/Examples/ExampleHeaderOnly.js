export class ExampleHeaderOnly {
  constructor(tagId) {
    this.tagId = tagId;
    this.example = document.getElementById(tagId);

    this.makePlayButton();
    this.makeTitle();

    this.example.children[0].classList.add("no-boxes");  // button
    this.example.children[1].classList.add("no-boxes");  // title
  }

  makePlayButton() {
    var button = document.createElement("span");
    button.classList.add("btn");
    button.classList.add("play-button");
    button.innerText = "Sorry!";
    this.example.appendChild(button);
  }

  makeTitle() {
    var titleSpan = document.createElement("span");
    titleSpan.classList.add("title");
    titleSpan.innerText = "Not yet coded";
    this.example.appendChild(titleSpan)
  }
}