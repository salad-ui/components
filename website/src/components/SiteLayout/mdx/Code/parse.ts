export interface ParseResult {
  imports: string[];
  dependencies: string[];
  code: string;
}

export function parse(source: string): ParseResult {
  const regexp = /import\s+.+\s+from\s+(?:["](.+)["]|['](.+)[']).*/g;
  const imports: string[] = [];
  const dependencies: string[] = [];

  // extract imports and dependencies
  let match: RegExpExecArray | null;
  while ((match = regexp.exec(source)) !== null) {
    imports.push(match[0]);
    dependencies.push(match[1] || match[2]);
  }

  // extract code
  const code = source.replace(regexp, '').trim();

  return {
    imports,
    dependencies,
    code,
  };
}
