const fastify = require('fastify');
const qs = require('qs');

const registerRoutes = require('./routes');
const { connect: connectDB } = require('./db');
const { errorHandler, registerMiddlewares } = require('./middlewares');
const config = require('./config');

connectDB();

const appParams = {
  logger: true,
  querystringParser: (str) => qs.parse(str),
};

const app = fastify({
  ...appParams,
});

registerMiddlewares(app);

registerRoutes(app);

app.setErrorHandler(errorHandler);

app
  .listen(
    config.port,
    config.host,
  );
