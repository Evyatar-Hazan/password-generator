declare module '*.jpeg' {
  const content: number | string;
  export default content;
}
declare module '*.jpg' {
  const content: number | string;
  export default content;
}
declare module '*.png' {
  const content: number | string;
  export default content;
}
declare module '*.json' {
  const content: Record<string, unknown>;
  export default content;
}
