/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-css-modules', 'stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  plugins: ['stylelint-selector-bem-pattern', 'stylelint-scss'],
  rules: {
    'block-no-empty': true,
    'at-rule-no-unknown': null,
    'scss/dollar-variable-pattern': null,
    'scss/at-rule-no-unknown': true,
    'selector-class-pattern': null,
    'custom-property-pattern': null,
    'scss/at-extend-no-missing-placeholder': null,
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['flex-flow', 'outline', 'padding-block', 'padding-inline', 'margin-block', 'margin-inline'],
      },
    ],
    'no-invalid-double-slash-comments': null,
    'scss/comment-no-empty': null,
  },
};
