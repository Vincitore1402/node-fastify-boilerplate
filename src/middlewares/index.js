const bearerAuthPlugin = require('fastify-bearer-auth');
const helmet = require('fastify-helmet');
const cors = require('fastify-cors');
const rateLimit = require('fastify-rate-limit');

const errorHandler = require('./error-handler.middleware');

const { ClientError } = require('../utils/errors');
const config = require('../config');

/**
 * List of application middlewares which should be registered
 *
 * P.S. I also wanted to use `express-mongo-sanitize` package to prevent possible NoSQL-injections,
 * but it was not compatible with Fastify (even with `middie` plugin).
 *
 * It's possible to write custom middleware using sanitize package functions, but I didn't want
 * spend so much time writing/testing it.
 *
 */
const middlewares = [
  /**
   * Rate limiting middleware
   */
  async (app) => app.register(rateLimit, {
    max: 100,
    timeWindow: '1 minute',
  }),
  /** Cors and helmet */
  (app) => app.register(cors),
  (app) => app.register(helmet),
  /** Bearer auth protection */
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
