let username = document.querySelector(".username");
let password = document.querySelector(".password");
let loginbtn = document.querySelector("#sign-in");
let getusername = localStorage.getItem("user");
let getpassword = localStorage.getItem("password");
// /////////////////////////////////////////////////////

loginbtn.addEventListener("click", loginuser);

// /////////////////////////////////////////////////////
function loginuser(e) {
  e.preventDefault();
  if (username.value === "" || password.value === "") alert("please fill data");
  else {
    if ( getusername &&getusername.trim() === username.value.trim() &&getpassword &&getpassword.trim() === password.value.trim()) 
        {
      setTimeout(() => {
        window.location = "index.html";
      }, 1500);
    }
  }
}
// ///////////////////////////////////////////////////////
