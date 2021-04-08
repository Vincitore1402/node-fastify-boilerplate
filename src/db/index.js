const connect = require('./mongoose');
const models = require('./models');

module.exports = {
  connect,
  ...models,
};
