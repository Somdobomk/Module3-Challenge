// Assignment code here
var lowerCaseLetters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];
var upperCaseLetters = [
	'A',
	'B',
	'C',
	'D',
	'F',
	'G',
	'H',
	'I',
	'J',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];
var numbersChoice = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var alternateCharacters = ['#', '%', '*', '!', '@', '^', '$'];
console.log(lowerCaseLetters);
console.log(upperCaseLetters);
console.log(numbersChoice);
console.log(alternateCharacters);

function passwordChoice() {
	var length = parseInt(
		window.prompt('How many characters for your password?')
	);

	if (length > 128 || length < 8) {
		window.alert('Password must be between 8 and 128 characters');
		return;
	}

	var lowerCase = window.confirm(
		"Click OK if you're including lower case letters"
	);

	var upperCase = window.confirm(
		"Push OK if you're including upper case letters"
	);

	var wholeNumbers = window.confirm(
		"Push OK if you're including numbers (0-9)"
	);

	var alternateCharacters = window.confirm(
		"Push OK if you're including special characters such as !@#$%^&*()"
	);

	if (
		lowerCase === false &&
		upperCase === false &&
		wholeNumbers === false &&
		alternateCharacters === false
	) {
		window.alert('Please check for missing characters');
		return;
	}

	// Store user input
	var passwordChoice = {
		passwordLength: length,
		lowerCaseLetters: lowerCaseLetters,
		upperCaseLetters: upperCaseLetters,
		alternateCharacters: alternateCharacters,
		wholeNumbers: wholeNumbers,
	};

	return passwordChoice;
}

function getRandomPassword(password) {
	var randomIndex = Math.floor(Math.random() * password.length);
	var randomElement = password[randomIndex];
	console.log(randomElement);
	return randomElement;
}

// Function for password generation from user input
function generatePassword() {
	var choices = passwordChoice();
	var result = [];
	var potentialItems = [];
	var actualItems = [];

	if (choices.lowerCaseLetters) {
		potentialItems = potentialItems.concat(lowerCaseLetters);
		actualItems.push(getRandomPassword(lowerCaseLetters));
	}

	if (choices.upperCaseLetters) {
		potentialItems = potentialItems.concat(upperCaseLetters);
		actualItems.push(getRandomPassword(upperCaseLetters));
	}

	if (choices.alternateCharacters) {
		potentialItems = potentialItems.concat(alternateCharacters);
		actualItems.push(getRandomPassword(alternateCharacters));
	}

	if (choices.wholeNumbers) {
		potentialItems = potentialItems.concat(numbersChoice);
		actualItems.push(getRandomPassword(numbersChoice));
	}

	for (var i = 0; i < actualItems.length; i++) {
		result.push(actualItems[i]);
	}

	while (result.length < choices.passwordLength) {
		result.push(getRandomPassword(potentialItems));
	}

	return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
	return;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
