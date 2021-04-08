const SERVICE_NAME = '/universities';

const getAuth = (app) => [app.verifyBearerAuth];

const find = async (req, res) => [];

module.exports = async (app) => {
  app.get(SERVICE_NAME, {
    preHandler: [...getAuth(app)],
  }, find);
};
