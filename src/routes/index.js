const universitiesRoutes = require('./universities.routes');

const routes = [
  universitiesRoutes
];

module.exports = async (app) => {
  await Promise.all([
    ...routes.map(
      it => app.register(it)
    )
  ]);
};
