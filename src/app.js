const fastify = require('fastify');
const qs = require('qs');

const { registerRoutes } = require('./routes');
const { connect: connectDB } = require('./db');
const {
  errorHandler,
  registerMiddlewares,
} = require('./middlewares');
const config = require('./config');
const log = require('./utils/logger.shared');

const appParams = {
  logger: true,
  querystringParser: (str) => qs.parse(str),
};

(async () => {
  try {
    await connectDB();

    const app = fastify({
      ...appParams,
    });

    await app.setErrorHandler(errorHandler);

    await registerMiddlewares(app);

    await registerRoutes(app);

    await app.listen(config.port, config.host);
  } catch (err) {
    log.error(err, 'Error occurred while starting the application:');
    process.exit(1);
  }
})();
