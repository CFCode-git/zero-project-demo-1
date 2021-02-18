module.exports = [
  {
    test: /\.scss$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
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
