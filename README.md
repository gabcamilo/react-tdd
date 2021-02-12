# React TDD

This repository is based on the course [ReactJS, Hooks, Recoil, TDD, Clean Architecture, SOLID](https://www.udemy.com/course/react-com-mango/) by [Rodrigo Manguinho](https://www.udemy.com/user/rodrigo-manguinho/) on Udemy (Pt-Br).

## Configuring Project Dependencies

### npm

`npm init -y`

### Message linter

Won`t allow nonstandard commits from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

`npm i -D git-commit-msg-linter`

### TypeScript

`npm i -D typescript @types/node`
`touch tsconfig.json`

**tsconfig.json:**

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
