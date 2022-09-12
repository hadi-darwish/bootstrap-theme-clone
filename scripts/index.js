const send = document.getElementById("send");
const fname = document.getElementById("fname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const divider = document.getElementById("divider");
var error = "";
send.onclick = () => {
  divider.style.display = "none";
  error = "";
  if (checkName() + checkEmail() + checkPhone() + checkMessage() != 0) {
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
    return 1;
  }
  fname.style.borderColor = "green";
  return 0;
}
//this function will check if name is valid
//where this regex select an email with at least 3 characters before @ and 5 after
function checkEmail() {
  if (!/(^[\w-\.]{3,})+@(([\w-]{5,})+\.)+[\w-]{2,4}$/.test(email.value)) {
    email.style.borderColor = "red";
    error +=
      "Please enter email with at least 3 characters before @ and 5 after!!<br>";
    return 1;
  }
  email.style.borderColor = "green";
  return 0;
}

//this function will check if phone number is valid
function checkPhone() {
  if (!/^(\+961)([1-9]|70|71|76|78|79|81)\d{6}$/.test(phone.value)) {
    phone.style.borderColor = "red";
    error +=
      "Please enter Lebanese phone number with country code +961 and if ur number starts with 0x enter it as +961xyyyyyy!!<br>";
    return 1;
  }
  phone.style.borderColor = "green";
  return 0;
}

//this function will check if message is valid
function checkMessage() {
  if (!/^(\w){100,}$/.test(message.value)) {
    message.style.borderColor = "red";
    error += "Please enter a message of at least 100 char!!<br>";
    return 1;
  }
  message.style.borderColor = "green";
  return 0;
}
