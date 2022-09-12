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
  if (!checkName()) {
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
