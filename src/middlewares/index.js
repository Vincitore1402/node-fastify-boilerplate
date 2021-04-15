const bearerAuthPlugin = require('fastify-bearer-auth');

const errorHandler = require('./error-handler.middleware');

const { ClientError } = require('../utils/errors');
const config = require('../config');

/**
 * List of application middlewares which should be registered
 *
 */
const middlewares = [
  (app) => app.register(bearerAuthPlugin, {
    addHook: false,
    keys: [config.auth.bearer_token],
    errorResponse: (err) => new ClientError(
      err.message || 'Unauthorized',
    ),
  }),
];

module.exports = {
  errorHandler,
  registerMiddlewares: async (app) => {
    await Promise.all([
      ...middlewares.map(
        (it) => it(app),
      ),
    ]);
  },
};
