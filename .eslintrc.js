const SHARED_ESLINT_ENV = { browser: true, es6: true, node: true }

const SHARED_ESLINT_RULES = {
  "import/no-webpack-loader-syntax": [0],
  // "graphql/template-strings": [
  //   "error",
  //   {
  //     // Import default settings for your GraphQL client. Supported values:
  //     // 'apollo', 'relay', 'lokka', 'fraql', 'literal'
  //     env: "apollo",

  //     // Import your schema JSON here
  //     schemaJson: require("./schema.json"),

  //     // OR provide absolute path to your schema JSON (but not if using `eslint --cache`!)
  //     // schemaJsonFilepath: path.resolve(__dirname, './schema.json'),

  //     // OR provide the schema in the Schema Language format
  //     // schemaString: printSchema(schema),

  //     // tagName is gql by default
  //   },
  // ],
  "react/no-unescaped-entities": "off",
  "react/jsx-pascal-case": "off",
  "jsx-a11y/accessible-emoji": "warn",
  "jsx-a11y/alt-text": "warn",
  "jsx-a11y/anchor-has-content": "warn",
  "jsx-a11y/anchor-is-valid": "warn",
  "jsx-a11y/aria-activedescendant-has-tabindex": "warn",
  "jsx-a11y/aria-props": "warn",
  "jsx-a11y/aria-proptypes": "warn",
  "jsx-a11y/aria-role": "warn",
  "jsx-a11y/aria-unsupported-elements": "warn",
  "jsx-a11y/click-events-have-key-events": "warn",
  "jsx-a11y/control-has-associated-label": [
    "warn",
    {
      ignoreElements: [
        "audio",
        "canvas",
        "embed",
        "input",
        "textarea",
        "tr",
        "video",
      ],
      ignoreRoles: [
        "grid",
        "listbox",
        "menu",
        "menubar",
        "radiogroup",
        "row",
        "tablist",
        "toolbar",
        "tree",
        "treegrid",
      ],
      includeRoles: ["alert", "dialog"],
    },
  ],
  "jsx-a11y/heading-has-content": "warn",
  "jsx-a11y/html-has-lang": "warn",
  "jsx-a11y/iframe-has-title": "warn",
  "jsx-a11y/img-redundant-alt": "warn",
  "jsx-a11y/interactive-supports-focus": [
    "warn",
    {
      tabbable: [
        "button",
        "checkbox",
        "link",
        "progressbar",
        "searchbox",
        "slider",
        "spinbutton",
        "switch",
        "textbox",
      ],
    },
  ],
  "jsx-a11y/label-has-for": "warn",
  "jsx-a11y/label-has-associated-control": "warn",
  "jsx-a11y/lang": "warn",
  "jsx-a11y/media-has-caption": "warn",
  "jsx-a11y/mouse-events-have-key-events": "warn",
  "jsx-a11y/no-access-key": "warn",
  "jsx-a11y/no-autofocus": "warn",
  "jsx-a11y/no-distracting-elements": "warn",
  "jsx-a11y/no-interactive-element-to-noninteractive-role": "warn",
  "jsx-a11y/no-noninteractive-element-interactions": [
    "warn",
    {
      body: ["onError", "onLoad"],
      iframe: ["onError", "onLoad"],
      img: ["onError", "onLoad"],
    },
  ],
  "jsx-a11y/no-noninteractive-element-to-interactive-role": "warn",
  "jsx-a11y/no-noninteractive-tabindex": "warn",
  "jsx-a11y/no-onchange": "warn",
  "jsx-a11y/no-redundant-roles": "warn",
  "jsx-a11y/no-static-element-interactions": "warn",
  "jsx-a11y/role-has-required-aria-props": "warn",
  "jsx-a11y/role-supports-aria-props": "warn",
  "jsx-a11y/scope": "warn",
  "jsx-a11y/tabindex-no-positive": "warn",
  indent: ["error", 2, { SwitchCase: 1 }],
}

const SHARED_ESLINT_GLOBALS = {
  graphql: true,
  __PATH_PREFIX__: true,
  __BASE_PATH__: true,
  Atomics: "readonly",
  SharedArrayBuffer: "readonly",
}

module.exports = {
  env: { ...SHARED_ESLINT_ENV },
  extends: [
    "react-app",
    "plugin:jsx-a11y/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/babel",
    "prettier/react",
    "plugin:prettier/recommended",
  ],
  globals: {
    ...SHARED_ESLINT_GLOBALS,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["jsx-a11y", "graphql", "react", "prettier"],
  rules: {
    ...SHARED_ESLINT_RULES,
  },
  settings: { react: { version: "detect" } },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      env: { ...SHARED_ESLINT_ENV },
      extends: [
        "react-app",
        "plugin:jsx-a11y/recommended",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/babel",
        "prettier/react",
        "plugin:prettier/recommended",
      ],
      globals: {
        ...SHARED_ESLINT_GLOBALS,
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2018,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      plugins: [
        "jsx-a11y",
        "graphql",
        "react",
        "@typescript-eslint",
        "prettier",
      ],
      rules: {
        ...SHARED_ESLINT_RULES,
        "react/prop-types": "off",
        "@typescript-eslint/explicit-module-boundary-types": [
          "error",
          {
            allowArgumentsExplicitlyTypedAsAny: false,
            allowDirectConstAssertionInArrowFunctions: true,
            allowedNames: ["ignoredFunctionName", "ignoredMethodName"],
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
      },
      settings: { react: { version: "detect" } },
    },
  ],
}
