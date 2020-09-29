import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    external: ["react", "react-dom"],
    plugins: [
      typescript({
        declaration: true,
        declarationDir: "dist",
      }),
    ],
    output: {
      dir: "dist",
    },
  },
];
// }, {
//   input: 'src/index.ts',
//   external: [
//     'react',
//     'react-dom',
//   ],
//   plugins: [
//     typescript(),
//     resolve(),
//     commonjs(),
//     babel({
//       exclude: ['node_modules/**'],
//       extensions: ['.ts', '.tsx'],
//       babelHelpers: 'bundled',
//     }),
//   ],
//   output: [{
//     file: pkg.main,
//     format: 'cjs',
//   }, {
//     file: pkg.module,
//     format: 'esm',
//   }],
// }];
