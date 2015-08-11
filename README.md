A Sample Angular 2 Project

Install dependencies: `npm install`

Watch TypeScript file changes: `npm run watch`

Start a server: `npm run server`

---
Description of files:
`config.js`: Configures loading paths for SystemJS.

`tsconfig.json`: Describes TypeScript's options so you don't have to type them out in the command line

`tsd.json`: Describes TypeScript definition files which will be installed with `tsd install`.
`tsd install` is run on `postinstall`, so you don't have to worry about it. This also allows you
to `/// <reference path="typings/tsd.d.ts" />` so you don't have worry about typing out `d.ts` paths.