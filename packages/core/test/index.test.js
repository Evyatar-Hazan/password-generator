import {
    concatenateAndHash,
    extractNumbers,
    extractLetters,
    combineNumbersAndLetters,
    transformToUpperCase,
    transformToSign,
  } from "../index.js"; 
  
  describe("Unit Tests for Password Functions", () => {
    describe("concatenateAndHash", () => {
      test("should concatenate and hash strings", () => {
        const result = concatenateAndHash(["abc", "123"]);
        expect(result).toHaveLength(64); // SHA256 hash length
      });
  
      test("should also support a single string input", () => {
        const result = concatenateAndHash("abc");
        expect(result).toHaveLength(64);
      });
    });
  
    describe("extractNumbers", () => {
      test("should extract numbers from hash", () => {
        const result = extractNumbers("a1b2c3", 2);
        expect(result).toHaveLength(2);
        expect(result).toMatch(/^\d+$/);
      });
  
      test("should throw an error for invalid input", () => {
        expect(() => extractNumbers(123, 2)).toThrow();
      });
    });
  
    describe("extractLetters", () => {
      test("should extract letters from hash", () => {
        const result = extractLetters("a1b2c3", 2);
        expect(result).toHaveLength(2);
        expect(result).toMatch(/^[a-z]+$/);
      });
  
      test("should throw an error for invalid input", () => {
        expect(() => extractLetters(123, 2)).toThrow();
      });
    });
  
    describe("combineNumbersAndLetters", () => {
      test("should combine numbers and letters", () => {
        const result = combineNumbersAndLetters(["abc", "123"], 4);
        expect(result).toHaveLength(4);
        expect(result).toMatch(/^[a-z0-9]+$/);
      });
  
      test("should throw an error for invalid input", () => {
        expect(() => combineNumbersAndLetters("notAnArray", ["a"], 1)).toThrow();
      });
    });
  
    describe("transformToUpperCase", () => {
      test("should transform string to uppercase", () => {
        const result = transformToUpperCase("abc");
        expect(result).toHaveLength(8);
        expect(result).toMatch(/[A-Z]/);
      });
  
      test("should throw an error for invalid input", () => {
        expect(() => transformToUpperCase(123)).toThrow();
      });
    });
  
    describe("transformToSign", () => {
      test("should transform string with a random sign", () => {
        const result = transformToSign("abc");
        expect(result).toMatch(/[?@#$&!]/);
      });
  
      test("should throw an error for invalid input", () => {
        expect(() => transformToSign(123)).toThrow();
      });
    });
  });
  
