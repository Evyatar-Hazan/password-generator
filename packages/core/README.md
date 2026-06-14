# password-generator-npm

Reusable deterministic password-generation utilities.

This package now lives inside the `password-generator` monorepo:

https://github.com/Evyatar-Hazan/password-generator/tree/main/packages/core

## Installation

```bash
npm install password-generator-npm
```

## Usage

```javascript
import {
  combineNumbersAndLetters,
  concatenateAndHash,
  extractLetters,
  extractNumbers,
  transformToSign,
  transformToUpperCase,
} from 'password-generator-npm';

const inputs = ['username', 'website', 'local-secret'];

const hash = concatenateAndHash(inputs);
const numbers = extractNumbers(inputs, 8);
const letters = extractLetters(inputs, 8);
const mixed = combineNumbersAndLetters(inputs, 8);
const strong = transformToUpperCase(inputs, 12);
const strongest = transformToSign(inputs, 12);
```

## API

- `concatenateAndHash(input)` accepts a string or array of strings and returns a SHA256 hash.
- `extractNumbers(input, length)` returns numeric characters from a deterministic hash.
- `extractLetters(input, length)` returns lowercase letters from a deterministic hash.
- `combineNumbersAndLetters(input, length)` returns a mixed alphanumeric password.
- `transformToUpperCase(input, length)` returns a mixed password with at least one uppercase letter.
- `transformToSign(input, length)` returns a password with a deterministic sign replacement.

`length` is capped at 256 characters.

## Repository

Issues and source code are maintained in the monorepo:

https://github.com/Evyatar-Hazan/password-generator
