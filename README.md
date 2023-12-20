# cypress-log

> Super simple plugin to log whatever you want to the Cypress Runner UI or to the terminal. This is useful when you don't want to handle the commands where to log by yourself, but you still want to use one command for logging everywhere. Moreover, it provides a way to print nested objects in a readable way and to log stringified objects in the Cypress Runner UI.

## Install

```shell
npm install -D cypress-log
```

## Usage

In your `cypress/support/e2e.js` file, add the following:

```js
import 'cypress-log';
```

Also, you need to add the following to your `cypress.config.js` file:

```js
// Import the task function
const { log } = require('./log.task');

module.exports = {
  // ...
  e2e: {
    setupNodeEvents(on, config) {
      // Add the task to the Cypress object
      on('task', { log });
    },
  },
  // ...
};
```

Then, you can use the `cy.log` command in your tests as you've used to do it before. The only difference is that you can any data type as an argument. For example:

```js
// Y
cy.log('Hello World!');
cy.log({ foo: { bar: { baz: 'baz' } } });
cy.log(['foo', 'bar', 'baz']);
```

So, if you run your tests in the Cypress Runner, you will see the following:

![ui](./assets/ui.png)

and if you run your tests in non-interactive mode, you will see the following in the terminal:

![terminal](./assets/terminal.png)

## Author

Yevhen Laichenkov <elaichenkov@gmail.com>

## License

[MIT](./LICENSE)
