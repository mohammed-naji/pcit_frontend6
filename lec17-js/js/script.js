let form = document.querySelector(".content form");
let name_el = document.querySelector("#name_el");
let email_el = document.querySelector("#email_el");
let phone_el = document.querySelector("#phone_el");
let tbody = document.querySelector("table tbody");
let count = 1;
form.onsubmit = function (e) {
  e.preventDefault();

  if (
    name_el.value.length == 0 ||
    email_el.value.length == 0 ||
    phone_el.value.length == 0
  ) {
    // alert("الرجاء املاء جميع الحقول");
    Swal.fire({
      title: "خطأ!",
      text: "الرجاء ادخال كافة الحقول",
      icon: "error",
      confirmButtonText: "موافق",
    });
  } else {
    let row = `<tr id="item_${count}">
          <td>${name_el.value}</td>
          <td>${email_el.value}</td>
          <td>${phone_el.value}</td>
          <td><button onclick="deleteItem('item_${count}')">Delete</button></td>
        </tr>`;
    count++;
    tbody.innerHTML += row;

    Swal.fire({
      title: "تمت الاضافة!",
      text: "تمت اضافة البيانات بنجاح",
      icon: "success",
      confirmButtonText: "موافق",
    });

    name_el.value = "";
    email_el.value = "";
    phone_el.value = "";
  }
};

function deleteItem(id) {
  // if (confirm("Are your sure?")) {
  //   document.getElementById(id).remove();
  // }

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById(id).remove();
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
}
