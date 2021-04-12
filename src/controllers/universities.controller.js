const { createUniversitiesService } = require('../services');
const { University } = require('../db');
const { success } = require('../utils/reply.utils');

const universitiesService = createUniversitiesService({
  model: University,
});

const find = async (request, reply) => {
  const data = await universitiesService.list();

  return success(reply, data);
};

const get = async (request, reply) => {
  const data = await universitiesService.get(request.params.id);

  return success(reply, data);
};

const create = async (request, reply) => {
  const data = await universitiesService.create(request.body);

  return success(reply, data);
};

const update = async (request, reply) => {
  const data = await universitiesService.update(
    request.params.id,
    request.body,
  );

  return success(reply, data);
};

const remove = async (request, reply) => {
  const data = await universitiesService.remove(request.params.id);

  return success(reply, data);
};

module.exports = {
  find,
  get,
  create,
  update,
  remove,
};
