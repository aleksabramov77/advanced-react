import {BuildOptions} from "./types/config";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolver} from "./buildResolver";

export function buildWebpackConfig(options: BuildOptions) {
    const {mode, paths} = options;

    return {
        mode: mode,
        entry: {
            main: paths.entry
        },
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders()

        },
        resolve: buildResolver()
    }
}