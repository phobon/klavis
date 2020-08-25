
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      globals: {
        'react': 'React',
      },
    },
    {
      file: 'dist/bundle.js',
      format: 'umd',
      name: 'Hooks',
      globals: {
        'react': 'React',
      },
    },
  ],
  external: [
    'react',
  ],
  plugins: [
    babel({
      exclude: ['node_modules/**'],
      babelHelpers: 'bundled',
    }),
    typescript({
      exclude: '*.test.ts',
    }),
    resolve(),
    commonjs(),
  ],
};