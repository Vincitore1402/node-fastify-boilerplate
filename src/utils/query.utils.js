const { parseQuery } = require('./mongoose.utils');

/**
 * The main reason for using separate query.utils file is a ability to
 * easily switch this import to sequelize.utils within the same interface
 */
module.exports = {
  parseQuery,
};
