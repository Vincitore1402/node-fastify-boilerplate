const {
  pipe,
  replace,
  join,
  split,
  omitAll,
  get,
  defaultTo,
} = require('lodash/fp');

const buildQuery = pipe(
  (it) => JSON.stringify(it),
  replace(/\b(gt|gte|lt|lte|in|elemMatch)\b/g, (match) => `$${match}`),
  (it) => JSON.parse(it),
);

const buildSelectOrSortQuery = (inputQuery) => {
  if (!inputQuery) return null;

  return pipe(
    split(','),
    join(' '),
  )(inputQuery);
};

const parseQuery = (input = {}) => {
  const reservedFields = ['select', 'sort', 'page', 'limit'];

  const reqQuery = pipe(
    (it) => ({ ...it }),
    omitAll(reservedFields),
  )(input);

  const selectQuery = pipe(
    get('select'),
    buildSelectOrSortQuery,
  )(input);

  const sortQuery = pipe(
    get('sort'),
    buildSelectOrSortQuery,
    defaultTo('-createdAt'),
  )(input);

  return {
    query: buildQuery(reqQuery),
    selectQuery,
    sortQuery,
  };
};

module.exports = {
  buildQuery,
  buildSelectOrSortQuery,
  parseQuery,
};
