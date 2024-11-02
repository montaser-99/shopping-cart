let username=document.querySelector(".username")
let email=document.querySelector(".email")
let password=document.querySelector(".password")
let registerbtn=document.querySelector("#sign-up")
// /////////////////////////////////////////////////////



registerbtn.addEventListener("click",registeruser)

// /////////////////////////////////////////////////////
function registeruser(e){
    e.preventDefault()
    if(username.value===""||email.value===""||password.value==="")
        alert("please fill data")
    else{
        localStorage.setItem("user",username.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
    }
    setTimeout(()=>{
        window.location="login.html"
    },1500)

}
// /////////////////////////////////////////////////////////