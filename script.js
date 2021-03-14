// Assignment code here
function createPassword (passwordLen, lowerCase, uppercase, simbels) {
  // inisialise the list's of posible simbels and latters 
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowe = 'abcdefghijklmnopqrstuvwxyz';
  var simbel = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  //this will hold the string of all posible simbels 
  var radomIn = '';
  //this will be the return of the function
  var res = '';
  if(lowerCase){
    radomIn += lowe;
  };
  if(uppercase){
    radomIn += upper;
  };
  if(simbels){
    radomIn += simbel;
  };
  for(var i = 0; i < passwordLen ; i++){

    res+= radomIn[Math.floor(Math.random() * (radomIn.length + 1))];
  }
  return res;
};

function generatePassword(){
  var passwordLen = window.prompt('please select a password lenght between 8 - 128');

  //check if the number is blacnk
  if(passwordLen.length == 0){
    alert('You cant leave this blank');
    generatePassword();
  }
  //check to see if the user entered a number 
  if(!(/^-?[\d.]+(?:e-?\d+)?$/.test(passwordLen)) || passwordLen.includes(".")){
    alert('Please enter only numbers round')
    generatePassword();
  }
  passwordLen = parseInt(passwordLen);
  if(passwordLen > 128 || passwordLen < 8){
    alert('Please enter a number between 8 - 128')
    generatePassword();
  }
// get the type of carecters from the user
  var lowerCase = confirm("Include lowercase latters? ");
  var uppercase = confirm("Include uppercase latters? ");
  var simbels = confirm("Include simbels? ");
  return createPassword(passwordLen, lowerCase, uppercase, simbels);
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
