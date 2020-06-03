class Slider {
  inputLeft;
  inputRight;
  thumbLeft;
  thumbRight;
  range;
  minValue;
  maxValue;

  constructor(leftSide, rightSide) {
    const inputLeft = this.inputLeft = leftSide;
    const inputRight = this.inputRight = rightSide;
    const thumbLeft = this.thumbLeft = document.querySelector(".slider > .thumb.left");
    const thumbRight = this.thumbRight = document.querySelector(".slider > .thumb.right");
    const range = this.range = document.querySelector(".slider > .range");
    const minValue = this.minValue = document.getElementById("min");
    const maxValue = this.maxValue = document.getElementById("max");

    function setLeftValue() {
      var il = inputLeft;
      var min = parseInt(il.min);
      var max = parseInt(il.max);
      
      il.value = Math.min(parseInt(il.value), parseInt(inputRight.value) - 1);
      minValue.textContent = "Min: " + il.value;
    
      var percent = ((il.value - min) / (max - min)) * 100;
      thumbLeft.style.left = percent + "%";
      range.style.left = percent + "%";
    }
    setLeftValue();

    function setRightValue() {
      var rl = inputRight;
      var min = parseInt(rl.min);
      var max = parseInt(rl.max);

      rl.value = Math.max(parseInt(rl.value), parseInt(inputLeft.value) + 1);
      maxValue.textContent = "Max: " + rl.value;
    
      var percent = ((rl.value - min) / (max - min)) * 100;
      thumbRight.style.right = (100 - percent) + "%";
      range.style.right = (100 - percent) + "%";
    }
    setRightValue();

    this.inputLeft.addEventListener("input", setLeftValue);
    this.inputRight.addEventListener("input", setRightValue);
  }
}

const slider = new Slider(document.getElementById("input-left"), document.getElementById("input-right"));