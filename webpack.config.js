const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  mode: "production",
  //   entry: "./src/index.ts",
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  externals: {
    react: "react",
    "react-dom": "ReactDOM",
    "@mui/material": "MaterialUI",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Обрабатываем файлы .js и .jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-react",
                { development: false, runtime: "automatic" },
              ],
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "entry",
                },
              ],
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      //   {
      //     test: /\.m?js$/,
      //     resolve: {
      //       fullySpecified: false,
      //     },
      //   },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

