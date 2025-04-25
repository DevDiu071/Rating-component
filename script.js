"use strict";

const btn = document.querySelector(".btn");
const ratingComponent = document.querySelector(".start");
const thankYouComponent = document.querySelector(".thank-you");
const nums = document.querySelectorAll(".option");
const numContainer = document.querySelector(".nums");
const youSelectMessage = document.querySelector(".you-select");

let curNum;
for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", function () {
    console.log(nums[i].textContent);
    this.classList.add("num-back");

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== this) {
        nums[j].classList.remove("num-back");
        curNum = this.textContent;
      }
    }
  });
  console.log(curNum);
}
let numCurr;
for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("keydown", function (e) {
    if (e.key === "enter") {
      console.log(nums[i].textContent);
      this.classList.add("num-back");

      for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== this) {
          nums[j].classList.remove("num-back");
          curNum = this.textContent;
        }
      }
    }
  });
  console.log(curNum);
}

btn.addEventListener("click", function () {
  if (curNum) {
    ratingComponent.classList.add("hide");
    thankYouComponent.classList.remove("hide");
    youSelectMessage.textContent = `You selected ${curNum} out of 5`;
  }
});
