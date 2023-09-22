const path = require("path");
const CracoLessPlugin = require("craco-less");
const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
	plugins: [
		/* less */
		{
			plugin: CracoLessPlugin,
		},
	],
	webpack: {
		/* 别名 */
		alias: {
			"@": resolve("src"),
		},
	},
	style: {
		modules: {
			localIdentName: "",
		},
		css: {
			/* eslint-disable */
			loaderOptions: (cssLoaderOptions, { env, paths }) => {
				/* ... */
				return cssLoaderOptions;
			},
		},
		sass: {
			loaderOptions: (sassLoaderOptions, { env, paths }) => {
				/* ... */
				return sassLoaderOptions;
			},
		},
		postcss: {
			mode: "extends" /* (default value) */ || "file",
			plugins: [require("plugin-to-append")],
			env: {
				autoprefixer: {
					/* ... */
				},
				stage: 3,
				features: {
					/* ... */
				},
			},
			loaderOptions: (postcssLoaderOptions, { env, paths }) => {
				/* ... */
				return postcssLoaderOptions;
			},
		},
	},
};
