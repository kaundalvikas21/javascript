// var button = document.querySelector("button");
// let input1 = document.querySelector(".num1");
// let input2 = document.querySelector(".num2");
// let showVal = document.querySelector(".showVal");
// var color = document.querySelector("body");

// button.addEventListener("click", function (e) {
//   e.preventDefault();
//   // console.log(sum);
//   // console.log(typeof(sum));
//   // return sum;

//   let sum = parseFloat(input1.value) + parseFloat(input2.value);
//   if (sum > 50 && sum <= 100) {
//     showVal.textContent = Math.round(sum);
//     document.body.style.backgroundColor = "";
//   } else if (sum == 50) {
//     document.body.style.backgroundColor = "red";
//     showVal.textContent = Math.round(sum);
//   } else {
//     showVal.textContent = "HELLO";
//     document.body.style.backgroundColor = "";
//   };
// });


let input1 = document.querySelector(".num1");
let input2 = document.querySelector(".num2");
let showVal = document.querySelector(".showVal");
let calculateButton = document.getElementById("calculateButton");
let form = document.querySelector("form");

calculateButton.addEventListener("click", function () {
  calculateSum();
});

form.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    calculateSum();
  }
});

function calculateSum() {
  let num1 = parseFloat(input1.value);
  let num2 = parseFloat(input2.value);
  let sum = num1 + num2;

  switch (true) {
    case sum === 50:
      document.body.style.backgroundColor = "red";
      showVal.textContent = Math.round(sum);
      break;
    case sum > 50 && sum <= 100:
      showVal.textContent = Math.round(sum);
      document.body.style.backgroundColor = "";
      break;
    default:
      showVal.textContent = "The value is not in the desired range";
      document.body.style.backgroundColor = "";
  }
}
