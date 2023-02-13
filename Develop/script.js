// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // Password length section
  var pwLength = window.prompt("Please choose a password length between 8-128 characters").toLowerCase(); 
  
  // Looping through user input-making sure only numeric values between 8-128 are present
  if (containsOnlyNumbers(pwLength)){
    // success
    // user entered numbers- now checking pwLength is between 8-128 
    pwLength = parseInt(pwLength)
    console.log(pwLength)
    if (pwLength >= 8 && pwLength <= 128) {
      // user has entered an acceptable password length between 8-128
    } else {
      window.alert("Please enter numerical values between 8-128")
    }
  } else {
    window.alert("Please enter numerical values only")
  }

  // Character Type Section -lowercase,UPPERCASE,numeric, special characters
  var lowercaseInput = window.prompt("Would you like to have lowercase characters in your password? (Y/N)");
  if (confirmYesOrNo(lowercaseInput)) {
    // user wants lowercase
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// helper function
function containsOnlyNumbers(str) {
  return /^\d+$/.test(str);
}

function confirmYesOrNo(str) {
  str = str.toLowerCase();
  if (str === "y") {
    return true
  } else if (str === "n") {
    return false
  } else {
    window.alert("Please only enter Y or N")
  }
}

// click generate -> presented w/ series of prompts -> 1. password length (8-128) 2. character types -> 
// A. lowercase B. uppercase C. numeric D. Special Characters (need 1 of each)
// 3. After all of that, generate password in alert of box on screen