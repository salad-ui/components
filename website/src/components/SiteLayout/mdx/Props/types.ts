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
      defaultValue?: DocGenType;
      required: boolean;
      type: DocGenType;
    };
  };
}
