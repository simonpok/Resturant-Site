// Code for navBar to Change its color when scroll down

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".navbar");

  window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 100) {
      header.classList.add("navbarDark");
    } else {
      header.classList.remove("navbarDark");
    }
  };
  // $("#myModal").on("shown.bs.modal", function () {
  //   $("#myInput").trigger("focus");
  // });
});
