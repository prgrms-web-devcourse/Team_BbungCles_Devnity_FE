require("dotenv").config();

const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = (webpackEnv) => {
  const isEnvDevelopment = !!webpackEnv.development;
  const isEnvProduction = !!webpackEnv.production;

  return {
    mode: isEnvProduction ? "production" : isEnvDevelopment && "development",
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@contexts": path.resolve(__dirname, "src/contexts"),
        "@apis": path.resolve(__dirname, "src/apis"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@constants": path.resolve(__dirname, "src/constants"),
      },
    },
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].bundle.js",
      publicPath: "/",
      clean: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.REST_API_KEY": JSON.stringify(process.env.REST_API_KEY),
        "process.env.API_URL": JSON.stringify(
          isEnvProduction ? process.env.API_URL_PROD : process.env.API_URL_DEV
        ),
      }),
      new HtmlWebpackPlugin({
        filename: "./index.html",
        template: path.resolve(__dirname, "./index.html"),
        favicon: "logo.png",
      }),
      new CopyPlugin({
        patterns: [{ from: "static" }],
      }),
      isEnvProduction &&
        new MiniCssExtractPlugin({
          filename: "[name].css",
        }),
      isEnvProduction &&
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          openAnalyzer: false,
          generateStatsFile: true,
          statsFilename: "bundleStats.json",
        }),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
            {
              loader: "ts-loader",
            },
          ],
        },
        {
          test: /\.s?css$/i,
          use: [
            isEnvProduction ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              ...(isEnvDevelopment
                ? {
                    options: {
                      sourceMap: true,
                    },
                  }
                : {}),
            },
            "postcss-loader",
            {
              loader: "sass-loader",
              ...(isEnvDevelopment
                ? {
                    options: {
                      sourceMap: true,
                    },
                  }
                : {}),
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|mp3)$/i,
          type: "asset/resource",
        },
      ],
    },
    ...(isEnvDevelopment
      ? {
          devtool: "source-map",
          devServer: {
            historyApiFallback: true,
            hot: true,
            compress: true,
            port: 8000,
          },
        }
      : {
          devtool: "source-map",
          devServer: {
            static: "./dist",
            historyApiFallback: true,
            hot: true,
            compress: true,
            port: 9000,
          },
        }),
  };
};
