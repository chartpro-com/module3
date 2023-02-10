
# Professional Portfolio using Advanced CSS
![License Badge](https://img.shields.io/badge/License-MIT-green)

## Table of Contents
* [Description](#description)
* [Examples](#examples)
* [Technologies](#technologies)
* [License](#license)


## Description
The purpose of this challenge was to create a passwrod generator using JavaScript.

## Examples
Created a function that brought in the user's choices into an array. Then randomly assigned a value to create a password with the user's preferences.
```JavaScript

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
```

Used an event listener to prompt the user for password preferences. 
```JavaScript

generateButton.addEventListener("click", function() {
  var length = parseInt(
    prompt("Enter the desired length of your password (at least 8 characters)")
 
  );
```
## Technologies
* ![HTML Badge](https://img.shields.io/badge/Language-HTML-blue)
* ![CSS Badge](https://img.shields.io/badge/Language-CSS-yellow)
* ![JS Badge](https://img.shields.io/badge/Language-JavaScript-yellow)

## License
Copyright 2023 Matt Fleming

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.