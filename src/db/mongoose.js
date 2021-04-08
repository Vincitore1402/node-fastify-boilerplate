const { merge } = require('lodash/fp');
const mongoose = require('mongoose');

const log = require('../utils/logger.shared');
const config = require('../config');

const defaultParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

const connect = async (params = {}) => {
  try {
    await mongoose.connect(
      config.db.mongo_uri,
      merge(defaultParams, params),
    );

    log.info('Mongoose connection has been set up successfully');
  } catch (error) {
    log.error(error, 'Mongoose failed to connect with error:');
  }
};

module.exports = connect;
