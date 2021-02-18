module.exports = [
  {
    test: /\.scss$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: "[local]__[hash:base64:10]",
          },
        },
      },
      {
        loader: "sass-loader",
        options: {
          implementation: require("sass"),
        },
      },
    ],
  },
];
