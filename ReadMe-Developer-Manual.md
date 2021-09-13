# Roamnia-UAT-API - Developer Manual

# Commands

## CLI

This project was generated with [Nest CLI](https://docs.nestjs.com/cli/overview) version 7.0.0

Use `npx` to run the commands.

### Project generation

The project was generated using the command `npx -p @nestjs/cli new APP_NAME`

### Code scaffolding

Run `npx ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Now `npx` will now use the local `@nestjs/cli` version from `node_modules`.

## How to run in production

**Check if `.production.env` exists and it has the expected variables or if the environment variables from .sample.env are all set.**

```bash
$ nvm use #optional, but the min version of NodeJS should match the version from .nvmrc
$ nvm install(optional)
$ npm ci
$ npm run build
$ npm run start:prod
```

## How to run in dev

**Check if `.development.env` exists and it has the expected variables**

1. Switch to node verison >= the one mentioned in `.nvmrc`
2. Install the dependencies `npm ci` or `npm i`
3. Run in dev mode `npm run start:dev`

## How to run debug

**Check if `.development.env` exists and it has the expected variables**

1. Open VSCode
2. All the settings are in `.vscode/launch.json`, so update them if you thing that is required
3. In `Run and Debug` panel, choose and run `Debug App`

## Other Scripts

`npm run test` - to run all the test files
`npm run lint` - to lint the code

# Data

The UAT data can be found in `data` folder in JSON format.
