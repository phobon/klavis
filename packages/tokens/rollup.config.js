import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json'

export default [{
  input: 'src/index.ts',
  plugins: [
    typescript({
      declaration: true,
      declarationDir: 'dist',
    }),
    resolve(),
    commonjs(),
    babel({
      exclude: ['node_modules/**'],
      extensions: ['.ts', '.tsx'],
      babelHelpers: 'bundled',
    }),
  ],
  output: {
    dir: 'dist',
  },
}, {
  input: 'src/index.ts',
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: ['node_modules/**'],
      extensions: ['.ts', '.tsx'],
      babelHelpers: 'bundled',
    }),
  ],
  output: [{
    file: pkg.main,
    format: 'cjs',
  }, {
    file: pkg.module,
    format: 'esm',
  }],
}];