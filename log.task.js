const { inspect } = require('util');

function log(message) {
  console.log('\x1b[90m\ncy.log:\x1b[0m');
  if (typeof message === 'object') {
    console.log(inspect(message, { showHidden: false, depth: null, colors: true }));
  } else {
    console.log(message);
  }

  return null;
}

module.exports = {
  log,
};
