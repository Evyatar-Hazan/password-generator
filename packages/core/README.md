# password-generator-npm

![npm](https://img.shields.io/npm/v/password-generator-npm)
![GitHub](https://img.shields.io/github/license/Evyatar-Hazan/password-generator-npm)

**password-generator-npm** is a lightweight JavaScript library for cryptographic hashing, extraction, and transformation of strings. It provides functions for concatenating strings, computing SHA256 hashes, extracting numbers and letters, combining alphanumeric passwords, calculating string hashes, and transforming strings by converting lowercase letters to uppercase, and replacing the first alphanumeric character with a random sign.

## Installation

You can install **password-generator-npm** via npm:

```bash
npm install password-generator-npm
```

## Usage

#### concatenateAndHash
- ```javascript
    import { concatenateAndHash } from 'password-generator-npm';
    let textA = "text1"
    let textB = "text2"
    let textArr = [textA, textB]
    let output1 = concatenateAndHash(textA)
    let output2 = concatenateAndHash(textArr)
    ```
#### extractNumbers
- ```javascript
    import { extractNumbers } from 'password-generator-npm';

    let numberOfCharacters = 8 //defult
    let textA = "text1"
    let textB = "text2"
    let textArr = [textA, textB]

    let output1 = extractNumbers(textA)
    let output2 = extractNumbers(textArr)
    let output1 = extractNumbers(textA, numberOfCharacters)
    let output2 = extractNumbers(textArr, numberOfCharacters)
    ```
#### extractLetters
- ```javascript
    import { extractLetters } from 'password-generator-npm';

    let numberOfCharacters = 8 //defult
    let textA = "text1"
    let textB = "text2"
    let textArr = [textA, textB]

    let output1 = extractLetters(textA)
    let output2 = extractLetters(textArr)
    let output1 = extractLetters(textA, numberOfCharacters)
    let output2 = extractLetters(textArr, numberOfCharacters)
    ```
#### combineNumbersAndLetters
- ```javascript
    import { combineNumbersAndLetters } from 'password-generator-npm';

    let numberOfCharacters = 8 //defult
    let textA = "text1"
    let textB = "text2"
    let textArr = [textA, textB]

    let output1 = combineNumbersAndLetters(textA)
    let output2 = combineNumbersAndLetters(textArr)
    let output1 = combineNumbersAndLetters(textA, numberOfCharacters)
    let output2 = combineNumbersAndLetters(textArr, numberOfCharacters)
    ```
#### transformToUpperCase
- ```javascript
    import { transformToUpperCase } from 'password-generator-npm';

    let numberOfCharacters = 8 //defult
    let textA = "text1"
    let textB = "text2"
    let textArr = [textA, textB]

    let output1 = transformToUpperCase(textA)
    let output2 = transformToUpperCase(textArr)
    let output1 = transformToUpperCase(textA, numberOfCharacters)
    let output2 = transformToUpperCase(textArr, numberOfCharacters)
    ```
#### transformToSign
- ```javascript
    import { transformToSign } from 'password-generator-npm';

    let numberOfCharacters = 8 //defult
    let textA = "text1"
    let textB = "text2"
    let textArr = [textA, textB]

    let output1 = transformToSign(textA)
    let output2 = transformToSign(textArr)
    let output1 = transformToSign(textA, numberOfCharacters)
    let output2 = transformToSign(textArr, numberOfCharacters)
    ```
## api

#### concatenateAndHash(textArray)
    Concatenates an array of strings and computes the SHA256 hash of the resulting string.

#### extractNumbers(hash, numberOfCharacters)
    Extracts numeric characters from a hash and returns a specified number of characters.

#### extractLetters(hash, numberOfCharacters)
    Extracts alphabetical characters from a hash and returns a specified number of characters.

#### combineNumbersAndLetters(hash, numberOfCharacters)
    Combines numeric and alphabetical passwords extracted from a hash.

#### transformToUpperCase(hash, numberOfCharacters)
    Transforms lowercase letters to uppercase randomly in a string.

#### transformToSign(hash, numberOfCharacters)
    Transforms the first alphanumeric character in a string to a random sign.


## License

This project is licensed under the ISC

## Contributing

Contributions are welcome! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more information.

## Issues

If you discover any issues, please [create an issue](https://github.com/Evyatar-Hazan/password-generator-npm/issues) in our GitHub repository.

## Credits

**password-generator-npm** is developed and maintained by [Evyater Hazan](https://github.com/Evyatar-Hazan).

## Support

For any inquiries or support requests, please contact us at [evyatarhazan3.14@gmail.com](mailto:evyatarhazan3.14@gmail.com).