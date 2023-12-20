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

## Author

Yevhen Laichenkov <elaichenkov@gmail.com>

## License

[MIT](./LICENSE)
