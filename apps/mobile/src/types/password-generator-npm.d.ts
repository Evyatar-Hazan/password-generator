declare module 'password-generator-npm' {
  export function extractLetters(input: string[], length: number): string;
  export function combineNumbersAndLetters(
    input: string[],
    length: number,
  ): string;
  export function transformToUpperCase(input: string[], length: number): string;
  export function transformToSign(input: string[], length: number): string;
  export function extractNumbers(input: string[], length: number): string;
}
