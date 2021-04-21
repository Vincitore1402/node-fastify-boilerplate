const { size } = require('lodash/fp');

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

  if (
    size(err.validation)
  ) {
    return failure(
      reply,
      'Unprocessable Entity',
      err.message || 'Validation error',
      422,
    );
  }

  if (err.statusCode === 429) {
    return failure(
      reply,
      'Too Many Requests',
      err.message,
      429,
    );
  }

  return failure(
    reply,
    'Unexpected error',
    err.message,
    500,
  );
};
