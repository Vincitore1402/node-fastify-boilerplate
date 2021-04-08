module.exports = {
  port: process.env.PORT || 3000,
  auth: {
    bearer_token: process.env.COMMON_BEARER_TOKEN || '092bb6e668ad4466991ed3388df5847b',
  },
  db: {
    mongo_uri: process.env.MONGO_URI || 'mongodb://localhost:27017/universities-service-dev',
  },
};
