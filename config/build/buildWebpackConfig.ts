import {BuildOptions} from "./types/config";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolver} from "./buildResolver";
import {buildDevServer} from "./buildDevServer";
import {Configuration} from "webpack";

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const {mode, paths, isDev} = options;

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
        resolve: buildResolver(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}