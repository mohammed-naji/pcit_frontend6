// setInterval(function () {
//   console.log("setInterval");
// }, 1000);

// setTimeout(function () {
//   console.log("setTimeout");
// }, 1000);

// console.log("Outside");

// let link = document.querySelector(".link");
// let count = 5;
// link.onclick = function (e) {
//   e.preventDefault();

//   link.innerHTML = count;
//   let timer = setInterval(function () {
//     count--;
//     link.innerHTML = count;
//     if (count == 0) {
//       window.location.href = link.href;
//       clearInterval(timer);
//     }
//   }, 1000);
// };

// document.onkeypress =
// document.onkeydown =
// document.onkeyup = function (e) {
//   console.log(e);
//   if (e.keyCode == 27 || e.keyCode == 88) {
//     document.getElementById("text").remove();
//   }
// };

// let link = document.querySelector(".link");
// document.onmousemove = function (e) {
//   if (e.target == link) {
//     link.style.top = Math.random() * 100 + "%";
//     link.style.left = Math.random() * 100 + "%";
//   }
// };

// console.log(parseInt(Math.random() * 5));

let input_name = document.querySelector(".name");
// input_name.onkeyup = function () {
//   if (input_name.value.length >= 8) {
//     input_name.style.borderColor = "#0f0";
//   } else {
//     input_name.style.borderColor = "#f00";
//   }
// };
input_name.onblur = function () {
  if (input_name.value.length >= 8) {
    input_name.style.borderColor = "#0f0";
  } else {
    input_name.style.borderColor = "#f00";
    alert("الرجاء ملئ الحقل");
  }
};
