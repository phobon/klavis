import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  external: [
    "react",
    "react-dom",
    "@emotion/react",
    "@emotion/styled",
    "styled-system",
  ],
  plugins: [
    babel({
      exclude: ["node_modules/**"],
      babelHelpers: "bundled",
    }),
    resolve(),
    commonjs(),
  ],
};
