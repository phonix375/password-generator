# password-generator

list of requirements:
- Click the generate a password button will prompt the user :
  - password length
  - include lower case letters
  - include upper case letters
  - include symbols
  - include numbers
- when selecting the length of the password its must be between 8 - 128 and not left blank or non-numeric value
- validate user input to make sure at least one character type is selected
- generate a password and display it to the user

## execution

This application is asking the user the length of the password if to include uppercase/lowercase letters, symbols, and/or numbers. 

### Validation:
To make sure the user didn't select/typed incorrect password length or didn't select a category to include in the password.

### generation of the password:
Using the user selection I'm creating a string of all character possibilities and using Math. random to get a random number between 0 and the length of the string of possibilities. using the index of the string of possibilities I'm adding the result to the "result" string and repeating this process the number of times as the length of the password the user selected.

### output:
After generating the password I'm displaying it to the screen by changing the value of the id "password" element.

List of functions created:
- createPassword
- getTypeOfCarecters
- generatePassword
