const { universitiesController } = require('../controllers');

const SERVICE_NAME = '/universities';

const getAuth = (app) => [app.verifyBearerAuth];

module.exports = async (app) => {
  app.get(
    SERVICE_NAME,
    {
      preHandler: [...getAuth(app)],
    },
    universitiesController.find,
  );

  app.get(
    `${SERVICE_NAME}/:id`,
    {
      preHandler: [...getAuth(app)],
    },
    universitiesController.get,
  );

  app.post(
    SERVICE_NAME,
    {
      preHandler: [...getAuth(app)],
    },
    universitiesController.create,
  );

  app.patch(
    `${SERVICE_NAME}/:id`,
    {
      preHandler: [...getAuth(app)],
    },
    universitiesController.update,
  );

  app.delete(
    `${SERVICE_NAME}/:id`,
    {
      preHandler: [...getAuth(app)],
    },
    universitiesController.remove,
  );
};
