# babel-node-starter
A very basic boilerplate to start node projects that compile with babel.

## Includes

+ Babel to transpile
+ ES2015 preset
+ Mocha to test, chai to assert
+ babel-rewire to dependency inject
+ eslint for linting

## How-to

Clone repo, npm install and you're on your way.

Create your project within the `src/` folder

`npm run test` to lint and test
`npm run compile` to build
`npm start` to run

Compiling happens on publish to npm, as well as on install, if the project
is to be published to npm, remove the `install` script, if it is to be private on
github, remove the `prepublish` script.

## Todos

+ Use some kind of cli based watcher
