import * as ts from 'typescript';
import glob from 'fast-glob';
import {getBuildDirectory} from './build-utilities';

const compile = (fileNames: string[], options: ts.CompilerOptions) => {
  const program = ts.createProgram(fileNames, options);
  const emitResult = program.emit();

  const allDiagnostics = ts
    .getPreEmitDiagnostics(program)
    .concat(emitResult.diagnostics);

  allDiagnostics.forEach(diagnostic => {
    if (diagnostic.file) {
      let {line, character} = diagnostic.file.getLineAndCharacterOfPosition(
        diagnostic.start!,
      );
      let message = ts.flattenDiagnosticMessageText(
        diagnostic.messageText,
        '\n',
      );
      console.log(
        `${diagnostic.file.fileName} (${line + 1},${character +
          1}): ${message}`,
      );
    } else {
      console.log(
        `${ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')}`,
      );
    }
  });

  if (emitResult.emitSkipped) {
    throw new Error('Error!');
  }
};

export const createTypings = async () => {
  // list the files we want to compile
  const files = await glob(['src/**/*.{ts,tsx}', 'typings/**/*.d.ts'], {
    ignore: ['**/*.test.{ts,tsx}', '**/*.stories.tsx'],
  });
  compile(files, {
    strict: true,
    noEmitOnError: true,
    noImplicitAny: true,
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS,
    declaration: true,
    emitDeclarationOnly: true,
    jsx: 'react',
    outDir: getBuildDirectory(),
  });
};
