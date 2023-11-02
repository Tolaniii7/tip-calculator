"use strict";

const billInput = document.querySelector(".input--bill__1");
const peopleInput = document.querySelector(".input--bill__2");
const labelAmt = document.querySelector(".label-tip-amount");
const labelTotal = document.querySelector(".label-tip-total");
const btnReset = document.querySelector(".button-reset");
const tips = document.querySelectorAll(".tip-percentages");
const customInputTips = document.querySelector(".tip-custom");

let billValue = 0;
let peopleValue = 0;
labelAmt.textContent = `$ ${(0).toFixed("2")}`;
labelTotal.textContent = `$ ${(0).toFixed("2")}`;

const peopleInputFun = function () {
  peopleValue = peopleInput.value;
  if (!peopleValue) {
    peopleInput.style.border = "2px solid red";
  }
};

const calcTip = function (tipValue, customValue) {
  billValue = parseFloat(billInput.value);
  peopleValue = parseFloat(peopleInput.value);

  if (!peopleValue) {
    peopleInputFun();
  } else if (peopleValue >= 1) {
    const tipAmount = (billValue * tipValue || customValue) / peopleValue;
    const total = billValue / peopleValue + tipAmount;
    labelAmt.textContent = `$ ${tipAmount.toFixed("2")}`;
    labelTotal.textContent = `$ ${total.toFixed("2")}`;
    peopleInput.style.border = "none";
  }
};

tips.forEach(function (tip) {
  const tipValue = parseFloat(tip.textContent) / 100;
  tip.addEventListener("click", function () {
    calcTip(tipValue);
  });
});

customInputTips.addEventListener("keydown", function (e) {
  const customValue = parseFloat(customInputTips.value) / 100;
  if (e.key === "Enter") {
    calcTip(customValue);
  }
});

btnReset.addEventListener("click", function () {
  labelAmt.textContent = `$ ${(0).toFixed("2")}`;
  labelTotal.textContent = `$ ${(0).toFixed("2")}`;
  billInput.value = "";
  peopleInput.value = "";
});
