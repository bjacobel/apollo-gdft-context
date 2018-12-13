module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        modules: "commonjs",
      },
    ],
    "@babel/preset-react",
  ],
};
