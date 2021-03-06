const {
  omit, map, pipe, get,
  omitBy, merge, isNil,
} = require('lodash/fp');

const { ClientError } = require('../utils/errors');

const sanitizeResponse = omit(['__v']);

class UniversitiesService {
  constructor(options = {}) {
    this.Model = options.model || {};
  }

  /**
   * Returns a list of universities which match the provided query
   *
   * @param query
   * @param selectQuery
   */
  async list(
    query = {},
    selectQuery = null,
  ) {
    const data = await this.Model
      .find({ ...query })
      .select(selectQuery)
      .lean();

    return map(sanitizeResponse, data);
  }

  /**
   * Returns a single university item if it exists, otherwise fails.
   *
   * @param id
   */
  async get(id) {
    const data = await this.Model
      .findOne({ _id: id })
      .lean();

    if (!data) throw new ClientError(`University with id: ${id} not found`);

    return sanitizeResponse(data);
  }

  /**
   * Creates new university using provided payload
   *
   * @param payload - university item which should be created
   */
  async create(payload) {
    const response = await this.Model.create({
      ...payload,
    });

    return pipe(
      get('_doc'),
      sanitizeResponse,
    )(response);
  }

  /**
   * Updates university by id
   *
   * @param id
   * @param payload
   */
  async update(id, payload = {}) {
    const item = await this.get(id);

    const updatePayload = pipe(
      omitBy(isNil),
      (it) => ({ ...it, updatedAt: new Date() }),
      merge(item),
    )(payload);

    const params = { new: true, lean: true };

    const response = await this.Model.findByIdAndUpdate(
      id,
      updatePayload,
      params,
    );

    return sanitizeResponse(response);
  }

  /**
   * Removes university by id
   *
   * @param id
   */
  async remove(id) {
    const resp = await this.Model.findByIdAndRemove(id);

    if (!resp) throw new ClientError(`University with id: ${id} not found`);

    return { id };
  }
}

module.exports = (...args) => new UniversitiesService(...args);
