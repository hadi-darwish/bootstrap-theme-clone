const send = document.getElementById("send");
const fname = document.getElementById("fname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const divider = document.getElementById("divider");
const input = document.querySelectorAll(".name");
var error = "";
send.onclick = () => {
  divider.style.display = "none";
  error = "";
  if (!checkName() || !checkEmail()) {
    divider.style.display = "block";
    divider.innerHTML = error;
    return false;
  }
};
//this function will check if the name is valid
//where this regex select a word of at least 5 letters without any additional characters
function checkName() {
  if (!/(.*[a-z]){5}/i.test(fname.value)) {
    fname.style.borderColor = "red";
    error +=
      "Please enter name has at least 5 letters no numbers or special characters!!<br>";
    return false;
  }
  fname.style.borderColor = "green";
  return true;
}
//this function will check if name is valid
//where this regex select an email with at least 3 characters before @ and 5 after
function checkEmail() {
  if (!/(^[\w-\.]{3,})+@(([\w-]{5,})+\.)+[\w-]{2,4}$/.test(email.value)) {
    email.style.borderColor = "red";
    error +=
      "Please enter email with at least 3 characters before @ and 5 after!!<br>";
    return false;
  }
  email.style.borderColor = "green";
  return true;
}
