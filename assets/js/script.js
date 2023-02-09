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

  var password = generatePassword(
    length,
    includeLowercase,
    includeUppercase,
    includeNumeric,
    includeSpecial
  );
  passwordDisplay.textContent = password;
});

function generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  var password = "";
  // must set to an array
  var characterTypes = [];
  if (includeLowercase) {
    characterTypes.push("abcdefghijklmnopqrstuvwxyz");
  }
  if (includeUppercase) {
    characterTypes.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (includeNumeric) {
    characterTypes.push("0123456789");
  }
  if (includeSpecial) {
    characterTypes.push("!@#$%^&*()_+-=[]{}\\|;':\",.<>/?`~");
  }


  for (i = 0; i < length; i++) {
    var tempType = characterTypes[Math.floor(Math.random() * characterTypes.length)];
    password += tempType[Math.floor(Math.random() * tempType.length)];

  }
  return password;
}
