var generateButton = document.getElementById("generate-button");
var passwordDisplay = document.getElementById("password-display");

generateButton.addEventListener("click", function() {
  var length = parseInt(
    prompt("Enter the desired length of your password (at least 8 characters)")
 
  );
  if (length < 8 || length > 128) {
    alert("Password length must be between at least 8 characters.");
    return;
  }
  var includeLowercase = confirm("Include lowercase letters in the password?");
  var includeUppercase = confirm("Include uppercase letters in the password?");
  var includeNumeric = confirm("Include numeric characters in the password?");
  var includeSpecial = confirm("Include special characters in the password?");
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return;

  }

//   change to display of the password after sending arguments to a function
  passwordDisplay.textContent = length + " " + includeLowercase+ " " + includeUppercase;

});



