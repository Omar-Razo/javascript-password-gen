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

// my code

function generatePassword() {
  // choose length btw 8 and 128 characters
  let passwordLength = prompt("How many characters for your password?");
  let generatedPassword = "";
  
  // catches incorrect password length
  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("Invalid password length.\nPassword length must be between 8 and 128 characters.");
    return "Length Invalid. Please click again to generate a password.";
  }
  // option to include lowercase
  let includeLowercase = confirm("Would you like to include lowercase characters?");
  // option to include uppercase
  let includeUppercase = confirm("Would you like to include uppercase characters?");
  // option to include numeric
  let includeNumeric = confirm("Would you like to include numerical characters?");
  // option to include specials
  let includeSpecial = confirm("Would you like to include special characters?");
  // catches no options
  if ((includeLowercase === false) && (includeUppercase === false) && (includeNumeric === false) && (includeSpecial === false)) {
    alert("Invalid character choices.\nPlease choose at least one type of character.");
    return "Type Invalid. Please click again to generate a password.";
  }
  // arrays of choices
  let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseLetters = lowercaseLetters.toUpperCase();
  let numericChoices = "0123456789";
  let specialChoices = "!@#$%^&*()?";

  let lowercaseArray = lowercaseLetters.split();
  let uppercaseArray = uppercaseLetters.split();
  let numericArray = numericChoices.split();
  let specialArray = specialChoices.split();

  // master array logic
  let masterArray = []

  if (includeLowercase) {
    masterArray.push(lowercaseArray);
  } 

  if (includeUppercase) {
    masterArray.push(uppercaseArray);
  }

  if (includeNumeric) {
    masterArray.push(numericArray);
  }

  if (includeSpecial) {
    masterArray.push(specialArray);
  }

  // master array selection

  // pick a random array
  function randomIndex(array) {
    let randomArrayIndex = Math.floor(Math.random() * array.length);
    return randomArrayIndex; 
  }

  // pick random array index from that array
  function randomFromArray() {
    let randomArrayChoice = array[randomArrayIndex];
    return randomArrayChoice;
  }

  // generate password
  while (generatedPassword.length < passwordLength) {
    generatedPassword = generatedPassword + randomFromArray();
  }
}

