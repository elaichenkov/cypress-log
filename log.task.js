const { inspect } = require('util');

function log(messages) {
  const sanitizeMessages = messages.map((message) =>
    typeof message === 'object' ? inspect(message, { showHidden: false, depth: null, colors: true }) : message,
  );
  console.log('\x1b[90m\ncy.log:\x1b[0m');
  console.log(...sanitizeMessages);

  return null;
}

module.exports = {
  log,
};
