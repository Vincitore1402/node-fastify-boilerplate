const fastify = require('fastify');
const bearerAuthPlugin = require('fastify-bearer-auth');

const registerRoutes = require('./routes');
const config = require('./config');

const app = fastify({
  logger: true,
});

app.register(bearerAuthPlugin, {
  addHook: false,
  keys: [config.auth.bearer_token],
});

app.get('/', (request, response) => {
  response.send({ data: 'Hi from Fastify' });
});

registerRoutes(app);

app
  .listen(config.port);
