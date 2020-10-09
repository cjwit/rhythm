import * as Tone from "tone";
import { Example } from '../Examples/Example.js';

export class ExampleWithSlider extends Example {
  constructor(tagId, data) {
    super(tagId, data);
    this.buildSwingSlider();
  }

  buildSwingSlider() {
    // create slider object
    const sliderContainer = document.createElement("div");
    sliderContainer.classList.add("slider-container");
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = "0";
    slider.max = "80";
    slider.value = "0";
    slider.classList.add("slider");
    slider.id = this.example.tagId + "slider";
    sliderContainer.appendChild(slider);
    this.example.insertBefore(sliderContainer, this.example.childNodes[3]);

    // capture slider values
    this.swingRatio = slider.value;
    slider.addEventListener("input", () => {
      this.swingRatio = slider.value;
      this.updateBoxSizes(this.swingRatio);
      Tone.Transport.swing = this.swingRatio / 100;
    })
  }

  updateBoxSizes() {
    var rows = Array.from(this.example.getElementsByClassName("boxes"));
    var firstRow = Array.from(rows[0].getElementsByClassName("box"));
    var numBoxesPerRow = firstRow.length;
    var widthPercent = 100.0 / numBoxesPerRow;

    var evenWidthPercent = widthPercent + widthPercent * this.swingRatio / 100;
    var oddWidthPercent = widthPercent * 2 - evenWidthPercent;

    let originalWidthString = firstRow[0].style.width;
    var evenWidthString = originalWidthString.replace(/[0-9.]+/, evenWidthPercent);
    var oddWidthString = originalWidthString.replace(/[0-9.]+/, oddWidthPercent);

    for (let i = 0; i < rows.length; i++) {
      var boxes = Array.from(rows[i].getElementsByClassName("box"));
      for (let j = 0; j < boxes.length; j++) {
        if (j % 2 == 0) {
          boxes[j].style.width = evenWidthString;
          boxes[j + 1].style.width = oddWidthString;
        }
      }
    }
  }
}