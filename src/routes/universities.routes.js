const SERVICE_NAME = '/universities';

const find = async (req, res) => {
  return [];
};

module.exports = async (app) => {
  app.get(
    SERVICE_NAME,
    find
  );
};
