// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLengthResult;
var pwLowercaseResult;
var pwUppercaseResult;
var pwSpecialCharactersResult;
var pwNumericalResult;

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
      pwLengthResult = pwLength;
    } else {
      window.alert("Please enter numerical values between 8-128")
      generatePassword();
    }
  } else {
    window.alert("Please enter numerical values only")
    generatePassword();
  }

  // Character Type Section -lowercase
  var lowercaseInput = window.prompt("Would you like to have lowercase characters in your password? (Y/N)");
  var yesOrNo = confirmYesOrNo(lowercaseInput);
  if (yesOrNo === true) {
    // user wants lowercase
    pwLowercaseResult = true;
  } else if (yesOrNo === false) {
    // user does not want lowercase
    pwLowercaseResult = false;
  } else {
    // user did not choose y/n -prompted with message in window alert for confirmYesOrNO Function
    generatePassword();
  }

  // Character Type Section -UPPERCASE
  var uppercaseInput = window.prompt("Would you like to have uppercase characters in your password? (Y/N)");
  var yesOrNo = confirmYesOrNo(uppercaseInput);
  if (yesOrNo === true) {
    // user wants uppercase
    pwUppercaseResult = true;
  } else if (yesOrNo === false) {
    // user does not want uppercase
    pwUppercaseResult = false;
  } else {
    // user did not choose y/n -prompted with message in window alert for confirmYesOrNO Function
    generatePassword();
  }

   // Character Type Section -Special Characters
   var specialCharacterInput = window.prompt("Would you like to have special characters in your password? (Y/N)");
   var yesOrNo = confirmYesOrNo(specialCharacterInput);
   if (yesOrNo === true) {
     // user wants special characters
     pwSpecialCharactersResult = true;
   } else if (yesOrNo === false) {
     // user does not want special characters
     pwSpecialCharactersResult = false;
   } else {
     // user did not choose y/n -prompted with message in window alert for confirmYesOrNO Function
     generatePassword();
   }

   // Character Type Section -Numerical 
   var numericalInput = window.prompt("Would you like to have numbers in your password? (Y/N)");
   var yesOrNo = confirmYesOrNo(numericalInput);
   if (yesOrNo === true) {
     // user wants numbers
     pwNumericalResult = true;
   } else if (yesOrNo === false) {
     // user does not want numbers
     pwNumericalResult = false;
   } else {
     // user did not choose y/n -prompted with message in window alert for confirmYesOrNO Function
     generatePassword();
   }

  // validating at least one character type is selected
   if (!pwLowercaseResult && !pwUppercaseResult && !pwSpecialCharactersResult && !pwNumericalResult ) {
      window.alert("You must select at least one character type to generate a password");
      generatePassword();
   }

  //  Generation of the password based off users responses
  var chars = ""; // this stores the available characters that the password can be made of
  var password = ""; // this stores the generated password 
  
  // Determine what the available characters are based on prior user input
  if (pwLowercaseResult) {
      chars = chars.concat("abcdefghijklmnopqrstuvwxyz")
  } 
  if (pwUppercaseResult) {
      chars = chars.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (pwSpecialCharactersResult) {
      chars = chars.concat(" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  } 
  if (pwNumericalResult) {
      chars = chars.concat("0123456789");
  }

  // Loop through as many times are there are characters in the desired password 
  for (var i = 0; i <= pwLengthResult - 1; i++) {
    console.log(chars.length);
      // each loop we select a random character from the available characters
      var randomNumber = Math.floor(Math.random() * chars.length);
      console.log(randomNumber);
      password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// helper Functions
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
