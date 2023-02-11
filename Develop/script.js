// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// click generate -> presented w/ series of prompts -> 1. password length (8-128) 2. character types -> 
// A. lowercase B. uppercase C. numeric D. Special Characters (need 1 of each)
// 3. After all of that, generate password in alert of box on screen