// var , let , const
// var age = 20;
// age = 30;
// initialization, declaration, assignment, redeclare, reassign

// let age = 10;
// age = 15;

// const age = 25;
// age = 30;
// console.log(age);

// const age = 11;
// const age = 11;

// console.log(age);

// get the selectors
let minus_btn = document.getElementById("minus");
let plus_btn = document.getElementById("plus");
let qty_input = document.getElementById("qty");
let add_btn = document.getElementById("add_btn");
let msg = document.getElementById("msg");

let qty = 1;
minus_btn.onclick = function () {
  qty--;
  if (qty < 1) {
    qty = 1;
  }
  if (qty < 10) {
    add_btn.disabled = false;
    msg.style.display = "none";
  }
  qty_input.value = qty;
};

plus_btn.onclick = function () {
  qty++;
  if (qty > 10) {
    // qty = 20;
    // alert("تواصل معنا لحجز طلبية خاصة");
    add_btn.disabled = true;
    msg.style.display = "block";
  }
  qty_input.value = qty;
};
