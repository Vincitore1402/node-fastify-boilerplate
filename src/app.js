const fastify = require('fastify');

const registerRoutes = require('./routes');
const config = require('./config');

const app = fastify({
  logger: true,
});

app.get('/', (request, response) => {
  response.send({ data: 'Hi from Fastify' });
});

registerRoutes(app);

app
  .listen(config.port);
