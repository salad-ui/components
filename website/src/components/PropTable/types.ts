export interface DocGenType {
  name?: string;
  value: string | DocGenType;
}

export interface DocGen {
  displayName: string;
  description?: string;
  props: {
    [name: string]: {
      name: string;
      description?: string;
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      defaultValue?: DocGenType;
      required: boolean;
      type: DocGenType;
    };
  };
}
