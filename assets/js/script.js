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
  // choose password length (cast to number) and set generated password varible to empty string
  let passwordLengthInput = Number(prompt("How many characters for your password?"));
  let generatedPassword = "";
  
  // catches incorrect password input and password length
  if (Number.isNaN(passwordLengthInput)) {
    alert("Invalid input.\nplease enter a number")
    return "Input Invalid. Please click again to generate a password."
  } else {
    if ((passwordLengthInput < 8) || (passwordLengthInput > 128)) {
      alert("Invalid password length.\nPassword length must be between 8 and 128 characters.");
      return "Length Invalid. Please click again to generate a password.";
    }
  }

  // option to include lowercase characters
  let includeLowercase = confirm("Would you like to include lowercase characters?");

  // option to include uppercase characters
  let includeUppercase = confirm("Would you like to include uppercase characters?");

  // option to include numerical characters
  let includeNumeric = confirm("Would you like to include numerical characters?");

  // option to include specials characters
  let includeSpecial = confirm("Would you like to include special characters?");

  // catches no options - at least one option must be chosen
  if ((includeLowercase === false) && (includeUppercase === false) && (includeNumeric === false) && (includeSpecial === false)) {
    alert("Invalid character choices.\nPlease choose at least one type of character.");
    return "Password Type Invalid. Please click again to generate a password.";
  }

  // strings of each character type
  let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseLetters = lowercaseLetters.toUpperCase();
  let numericChoices = "0123456789";
  let specialChoices = "!@#$%^&*()?";

  // arrays from character type strings
  let lowercaseArray = lowercaseLetters.split("");
  let uppercaseArray = uppercaseLetters.split("");
  let numericArray = numericChoices.split("");
  let specialArray = specialChoices.split("");

  // master array logic - an array of selected character-type arrays
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

  // random array from master - returns random Array object
  function randomFromMaster () {
    let randomMasterIndex = Math.floor(Math.random() * masterArray.length);
    let randomArrayFromMaster = masterArray[randomMasterIndex];
    return randomArrayFromMaster
  }

  // picks random array index from that array - should return string at index
  function randomFromArray(array) {
    let randomArrayIndex = Math.floor(Math.random() * array.length);
    let randomArrayChoice = array[randomArrayIndex];
    return randomArrayChoice;
  }

  // generate password
  while (generatedPassword.length < passwordLengthInput) {
    generatedPassword = generatedPassword + randomFromArray(randomFromMaster());
  }

  return generatedPassword;
}