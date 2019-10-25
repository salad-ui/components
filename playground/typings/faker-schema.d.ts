declare module 'faker-schema' {
  export class Schema<T> {
    constructor(factory: () => T);
    make(count: 1): T;
    make(count: number): T[];
  }
}
