const universitiesRoutes = require('./universities.routes');

const routes = [
  universitiesRoutes,
];

const params = {
  prefix: 'api/v1',
};

module.exports = async (app) => {
  await Promise.all([
    ...routes.map(
      (it) => app.register(it, params),
    ),
  ]);
};
