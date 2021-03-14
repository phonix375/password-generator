// Assignment code here
function createPassword (passwordLen, lowerCase, uppercase, simbels) {
  // inisialise the list's of posible simbels and latters 
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowe = 'abcdefghijklmnopqrstuvwxyz';
  var simbel = "\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~";
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
    var temp = radomIn[Math.floor(Math.random() * (radomIn.length))];
    res+= temp;
  }
  return res;
};

// get the list if carecters from the user to include in the password
function getTypeOfCarecters(){
  var lowerCase = false;
  var uppercase = false;
  var simbels = false;
  //make sure the user didn't select any of the options
  while(!lowerCase || !uppercase || !simbels){
    lowerCase = confirm("Include lowercase latters? ");
    uppercase = confirm("Include uppercase latters? ");
    simbels = confirm("Include simbels? ");

    if(!lowerCase && !uppercase && !simbels){
      alert('please select at least one option')
    }
    else{
      break;
    };
  };
  return [lowerCase,uppercase,simbels];
}

function generatePassword(){
  var passwordLen = window.prompt('please select a password lenght between 8 - 128');

  //check if the number is blacnk
  if(passwordLen.length == 0){
    alert('You cant leave this blank');
    generatePassword();
  }
  //check to see if the user entered a number 
  if(!(/^-?[\d.]+(?:e-?\d+)?$/.test(passwordLen)) || passwordLen.includes(".")){
    alert('Please enter only numbers')
    generatePassword();
  }
  passwordLen = parseInt(passwordLen);
  if(passwordLen > 128 || passwordLen < 8){
    alert('Please enter a number between 8 - 128')
    generatePassword();
  }
  var types = getTypeOfCarecters();
// get the type of carecters from the user
  return createPassword(passwordLen, types[0], types[1], types[2]);
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
