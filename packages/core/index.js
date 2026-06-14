import CryptoJS from "crypto-js";

// Define constant for signs
const SIGNS = ["?", "@", "#", "$", "&", "!"];

const normalizeTextArray = (textArray = [""]) => {
  if (typeof textArray === "string") {
    return [textArray];
  }

  if (Array.isArray(textArray) && textArray.every((item) => typeof item === "string")) {
    return textArray;
  }

  throw new TypeError("Expected a string or an array of strings.");
};

const checkLimitNumberOfCharacters = (numberOfCharacters) => {
  if (!Number.isFinite(numberOfCharacters) || numberOfCharacters <= 0) {
    throw new TypeError("Expected a positive number of characters.");
  }

  if (numberOfCharacters > 256) {
    return 256
  } else {
    return numberOfCharacters
  }
}

/**
 * Concatenates an array of strings and computes the SHA256 hash of the resulting string.
 * @param {Array<string>} textArray - Array of strings to concatenate.
 * @returns {string} SHA256 hash of the concatenated string.
 */
const concatenateAndHash = (textArray = [""]) => {
  const normalizedTextArray = normalizeTextArray(textArray);
  // Concatenate the strings in the array
  let textToHash = "";
  for (let textItem of normalizedTextArray) {
    textToHash += textItem;
  }
  // Compute the SHA256 hash of the concatenated string
  return CryptoJS.SHA256(textToHash).toString();
};

/**
 * Extracts numeric characters from a hash and returns a specified number of characters.
 * @param {string} hash - Hash string from which to extract numeric characters.
 * @param {number} [numberOfCharacters=8] - Number of numeric characters to return.
 * @returns {string|null} Numeric password extracted from the hash.
 */
const extractNumbers = (hash, numberOfCharacters=8) => {
  numberOfCharacters = checkLimitNumberOfCharacters(numberOfCharacters)
  hash = concatenateAndHash(hash)
  // Extract numeric substrings from the hash
  const numbers = hash.match(/\d+/g);
  if (numbers) {
    // Concatenate numeric substrings and return the specified number of characters
    return numbers.join("").substring(0, numberOfCharacters);
  } else {
    console.log("No numbers found in the string.");
    return null;
  }
};

/**
 * Extracts alphabetical characters from a hash and returns a specified number of characters.
 * @param {string} hash - Hash string from which to extract alphabetical characters.
 * @param {number} [numberOfCharacters=8] - Number of alphabetical characters to return.
 * @returns {string|null} Alphabetical password extracted from the hash.
 */
const extractLetters = (hash, numberOfCharacters=8) => {
  numberOfCharacters = checkLimitNumberOfCharacters(numberOfCharacters)
  hash = concatenateAndHash(hash)
  // Extract lowercase alphabetical substrings from the hash
  const letters = hash.match(/[a-z]+/g);
  if (letters) {
    // Concatenate alphabetical substrings and return the specified number of characters
    return letters.join("").substring(0, numberOfCharacters);
  } else {
    console.log("No letters found in the string.");
    return null;
  }
};


/**
 * Combines numeric and alphabetical passwords extracted from a hash.
 * @param {string} hash - Hash string from which to extract passwords.
 * @param {number} [numberOfCharacters=8] - Number of characters in the combined password.
 * @returns {string} Combined alphanumeric password.
 */
const combineNumbersAndLetters = (hash, numberOfCharacters=8) => {
  numberOfCharacters = checkLimitNumberOfCharacters(numberOfCharacters)
  hash = concatenateAndHash(hash)
  const numbers = extractNumbers(hash, numberOfCharacters)
  const letters = extractLetters(hash, numberOfCharacters)
  // Determine the maximum length between numbers and letters arrays
  const maxLength = Math.max(numbers.length, letters.length);
  let numbersAndLetters = "";

  // Concatenate alternating elements from the numbers and letters arrays
  for (let index = 0; index < maxLength; index++) {
    if (index < numbers.length) {
      numbersAndLetters += numbers[index];
    }
    if (index < letters.length) {
      numbersAndLetters += letters[index];
    }
  }
  // Return the combined string with the specified number of characters
  return numbersAndLetters.substring(0, numberOfCharacters);
};

/**
 * Calculates a simple hash for a string based on character codes.
 * @param {string} hash - String for which to calculate the hash.
 * @returns {number} Calculated hash value.
 */
const calculateStringHash = (hash) => {
  const str = concatenateAndHash(hash)
  // Calculate a hash based on the character codes of the string
  let calculate = 0;
  for (let i = 0; i < str.length; i++) {
    calculate = (calculate << 5) - calculate + str.charCodeAt(i);
  }
  return calculate;
};

/**
 * Transforms lowercase letters to uppercase randomly in a string.
 * @param {string} hash - String to transform.
 * @param {number} [numberOfCharacters=8] - Number of characters in the transformed string.
 * @returns {string} Transformed string with uppercase letters.
 */
const transformToUpperCase = (hash, numberOfCharacters=8) => {
  numberOfCharacters = checkLimitNumberOfCharacters(numberOfCharacters)
  const str = concatenateAndHash(hash)
  let changed = false;
  // Replace lowercase letters with uppercase based on a random hash calculation
  let newString = str.replace(/[a-z]/g, function (match) {
    const hash = calculateStringHash(match);
    if (hash % 2 === 0) {
      changed = true;
      return match.toUpperCase().slice(0, numberOfCharacters);
    } else {
      return match.slice(0, numberOfCharacters);
    }
  });

  // If no letters were changed, transform the first letter to uppercase
  if (!changed) {
    newString = newString.replace(/([a-zA-Z])/, function (match) {
      return match.toUpperCase().slice(0, numberOfCharacters);
    });
  }

  // Ensure that at least one lowercase letter is present and transform any uppercase letters to lowercase
  if (!/[a-z]/.test(newString)) {
    newString = newString.replace(/([A-Z])/, function (match) {
      return match.toLowerCase().slice(0, numberOfCharacters);
    });
  }
  const limitedString = newString.slice(0, numberOfCharacters);

  if (!/[A-Z]/.test(limitedString)) {
    return limitedString.replace(/[a-z]/, (match) => match.toUpperCase());
  }

  return limitedString;
};

/**
 * Transforms the first alphanumeric character in a string to a random sign.
 * @param {string} hash - String to transform.
 * @param {number} [numberOfCharacters=8] - Number of characters in the transformed string.
 * @returns {string} Transformed string with a sign at the beginning.
 */
const transformToSign = (hash, numberOfCharacters=8) => {
  numberOfCharacters = checkLimitNumberOfCharacters(numberOfCharacters)
  const str = transformToUpperCase(hash)
  // Select a random sign from the array based on a hash calculation
  const randomSign = calculateStringHash(str);
  const selectedSignIndex = Math.abs(randomSign) % SIGNS.length;
  const selectedSign = SIGNS[selectedSignIndex];
  // Replace the first alphanumeric character in the string with the selected sign
  return str.replace(/[a-zA-Z0-9]/, selectedSign).slice(0, numberOfCharacters);
};


/**
 * Checks if the given number of characters exceeds a limit and returns either
 * the limit or the original number of characters accordingly.
 * @param {number} numberOfCharacters - The number of characters to check.
 * @returns {number} - Either the original number of characters or the limit (256).
 */
// Exporting the modularized functions
export {
  concatenateAndHash,
  extractNumbers,
  extractLetters,
  combineNumbersAndLetters,
  transformToUpperCase,
  transformToSign,
};
