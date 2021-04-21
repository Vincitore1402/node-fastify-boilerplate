const { registerSchemas } = require('./schemas');

const universitiesRoutes = require('./universities.routes');

const routes = [
  universitiesRoutes,
];

const params = {
  prefix: 'api/v1',
};

module.exports = {
  registerRoutes: async (app) => {
    await registerSchemas(app);

    await Promise.all([
      ...routes.map(
        (it) => app.register(it, params),
      ),
    ]);
  },
};
