const fastify = require('fastify');
const bearerAuthPlugin = require('fastify-bearer-auth');
const qs = require('qs');

const registerRoutes = require('./routes');
const { connect: connectDB } = require('./db');
const { errorHandler } = require('./middlewares');
const config = require('./config');

connectDB();

const appParams = {
  logger: true,
  querystringParser: (str) => qs.parse(str),
};

const app = fastify({
  ...appParams,
});

app.register(bearerAuthPlugin, {
  addHook: false,
  keys: [config.auth.bearer_token],
});

registerRoutes(app);

app.setErrorHandler(errorHandler);

app
  .listen(config.port);
