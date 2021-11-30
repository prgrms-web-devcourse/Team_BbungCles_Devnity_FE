module.exports = {
  extends: [
    "stylelint-config-sass-guidelines",
    "stylelint-config-concentric-order",
    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {
    "order/properties-alphabetical-order": null,
    "prettier/prettier": [true, { trailingComma: "none" }],
    "selector-max-id": 1,
  },
  ignoreFiles: ["src/assets/**/*.png"],
};
