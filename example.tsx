// test linting typescriptt files

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface IntrinsicElements {
      p: object;
    }
  }
}

export default () => <p>aaa</p>;
