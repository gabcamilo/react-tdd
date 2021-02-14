# React TDD

This repository is based on the course [ReactJS, Hooks, Recoil, TDD, Clean Architecture, SOLID](https://www.udemy.com/course/react-com-mango/) by [Rodrigo Manguinho](https://www.udemy.com/user/rodrigo-manguinho/) on Udemy (Pt-Br).

## Configuring Project Dependencies

### npm

`npm init -y`

### Message linter

Won`t allow nonstandard commits from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

`$ npm i -D git-commit-msg-linter`

### TypeScript

`$ npm i -D typescript @types/node`

#### tsconfig.json:

`$ touch tsconfig.json`

``` json

{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "jsx": "react",
    "rootDir": "src",
    "baseUrl": "src",
    "allowJs": true,
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": [
    "src"
  ]
}
```

### eslint

`$ npm i -D eslint eslint-config-standard-with-typescript@11 eslint-plugin-import eslint-plugin-promise eslint-plugin-standard @typescript-eslint/eslint-plugin eslint-plugin-node`

#### eslintrc.json:

`$ touch eslintrc.json`

```json
{
  "extends": "standard-with-typescript",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/strict-boolean-expressions": "off"
  }
}
```

#### eslintignore:

`$ touch eslintignore`

``` text
node_modules
.vscode
```

### Validation before commits

`$ npm i -D lint-staged husky`

Before committing, the staged files are tested for lint errors and it tries to fix the those errors. If it can't be fixed automatically the commit is stopped.

#### huskyrc.json:

`$ touch huskyrc.json`

Defines hooks for git.

 ```json
{
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```

#### lintstagedrc.json:

`$ touch lintstagedrc.json`

 ```json
 {
  "*.{ts,tsx}": [
    "eslint 'src/**' --fix"
  ]
}
```
