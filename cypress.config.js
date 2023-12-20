const { log } = require('./log.task');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log,
      });
    },
  },
};
