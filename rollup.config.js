import ts from "rollup-plugin-ts";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
import path from "path";
import { compilerOptions as tsconfig } from "./tsconfig.json";

delete tsconfig.rootDir;

/**
 * @type {import('rollup').RollupOptions}
 */
const rollupConfig = {
	input: path.resolve("src/index.ts"),
	output: {
		dir: path.resolve("lib"),
		format: "cjs",
		exports: "named",
		strict: true,
	},
	external: [...Object.keys(pkg.dependencies), "crypto"],
	plugins: [
		resolve({ extensions: [".ts"] }),
		commonjs(),
		ts({
			transpiler: "babel",
			babelConfig: {
				babelrc: false,
				presets: ["@babel/preset-env"],
				plugins: ["@babel/plugin-transform-runtime"],
			},
			tsconfig: {
				...tsconfig,
				declaration: true,
				removeComments: false,
				sourceMap: false,
				strict: true,
			},
		}),
		terser({
			compress: true,
			mangle: true,
			format: {
				comments: false,
			},
		}),
	],
};
export default rollupConfig;
