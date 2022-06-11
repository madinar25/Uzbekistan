const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});
function ajaxpost() {
  // (A) GET FORM DATA
  var form = document.getElementById("myForm");
  var data = new FormData(form);

  // (B) AJAX REQUEST
  // (B1) POST DATA TO SERVER, RETURN RESPONSE AS TEXT
  fetch("1c-server.html", { method: "POST", body: data })
    .then((res) => res.text())

    // (B2) SHOW MESSAGE ON SERVER RESPONSE
    .then((response) => {
      console.log(response);
      if (response == "OK") {
        alert("SUCCESSFUL!");
      } else {
        alert("FAILURE!");
      }
    })

    // (B3) OPTIONAL - HANDLE FETCH ERROR
    .catch((err) => {
      console.error(err);
    });

  // (C) PREVENT FORM SUBMIT
  return false;
}
