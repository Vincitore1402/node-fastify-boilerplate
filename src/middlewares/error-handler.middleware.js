const { failure } = require('../utils/reply.utils');
const { ServiceError } = require('../utils/errors');

module.exports = (err, request, reply) => {
  if (err instanceof ServiceError) {
    return failure(
      reply,
      err.title,
      err.detail,
      err.statusCode,
    );
  }

  return failure(
    reply,
    'Unexpected error',
    err.message,
    500,
  );
};
