let links = document.querySelector(".links");
let user_info = document.querySelector(".user-info");
let userdata = document.querySelector(".user");

// Check if username exists in localStorage
if (localStorage.getItem("user")) {
  links.style.display = "none"; // Hide the sign-in/sign-up links
  user_info.style.display = "flex";
  userdata.innerHTML = localStorage.getItem("user");
}

//   ////////////////////////////////////////////////
// Logout functionality
let logoutbtn = document.querySelector(".log-out");
if (logoutbtn) {
  logoutbtn.addEventListener("click", function () {
    localStorage.clear();
    setTimeout(() => {
      window.location = "login.html";
    }, 1500);
  });
}