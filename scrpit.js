const toggleSignupLink = document.getElementById('toggleSignup');
const toggleLoginLink = document.getElementById('toggleLogin');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');








const likes = document.getElementsByClassName("like");
console.log(likes)
for (let i = 0; i < likes.length; i++) {
  let like = likes[i];

  like.addEventListener("click", function () {
    if (like.style.color === "red") {
      like.style.color = "black";
    } else {
      like.style.color = "red";
    }
  });
}




document.getElementById("sign-up-btn").addEventListener("click",function(){

  loginForm.classList.add("hide")
 signupForm.classList.remove("hide")


})

document.getElementById("sign-in-btn").addEventListener("click",function(){

  loginForm.classList.remove("hide")
 signupForm.classList.add("hide")


})









