// test linting typescriptt files

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      p: object;
    }
  }
}

export default () => <p>aaa</p>;
