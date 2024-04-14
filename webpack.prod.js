const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require("webpack");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "Universal",
      filename: "remoteEntry.js",
      remotes: {
        counter:
          "diaryblogadminui@https://diaryblogadminui-9lj0.onrender.com/remoteEntry.js",
        DiaryBlogSpace:
          "diaryblogadminui@https://diaryblogadminui-9lj0.onrender.com/remoteEntry.js",
       // FollowSpace:
        //  "followadminui@https://followadminui.onrender.com/remoteEntry.js",
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "@fortawesome/free-solid-svg-icons": {
          singleton: true,
          requiredVersion: deps["@fortawesome/free-solid-svg-icons"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
