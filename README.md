Cypress with TypeScript
-----------------------
> From [Released 4/13/2020](https://github.com/cypress-io/cypress/releases/tag/v4.4.0)
>> "TypeScript test files are now supported without using special preprocessors plugins."

### How to create your own TS template
- `$ yarn init -y`
- `$ yarn add cypress --dev`
- `$ yarn add typescript --dev`
- `$ yarn add @bahmutov/add-typescript-to-cypress --dev` (install TypeScript support )
- `$ yarn add webpack --dev`
- pls manually exchange format `*.js` to `*.ts` of files:  `intergartion/test.spec.ts` and `support/commands.ts`

### Usage:
- `$ yarn cypress open`

Reference link:
----------------
- [`@bahmutov` To add TypeScript support to Cypress](https://github.com/cypress-io/add-cypress-custom-command-in-typescript)
