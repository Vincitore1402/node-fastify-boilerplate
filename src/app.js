const fastify = require('fastify');

const app = fastify({
  logger: true,
});

app.get('/', (request, response) => {
  response.send({ data: 'Hi from Fastify' });
});

module.exports = app;
