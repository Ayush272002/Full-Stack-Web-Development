## Converting TypeScript to JavaScript

To convert TypeScript (.ts) files to JavaScript (.js) files, follow these steps:

### Step 1: Initialize a `tsconfig.json` File

Run the following command in your terminal to generate a `tsconfig.json` file:

```sh
tsc -init
```

### Step 2: Update the `tsconfig.json` File

Open the `tsconfig.json` file and modify the `target` option to `"ES6"`:

```json
{
  "compilerOptions": {
    "target": "ES6",
    // other options...
  }
}
```

### Step 3: Compile Your TypeScript Code

To compile your TypeScript code, use the following command:

```sh
tsc
```

This will compile all TypeScript files in your project according to the settings in the `tsconfig.json` file.

If you want to compile only certain files not all of them modify the `tsconfig.json` to this, in this example i wanted to compile only `index.ts`.

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true
  },
  "files": [
    "index.ts",
  ]
}
```
After that run 
```sh
tsc
```


[link to documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)