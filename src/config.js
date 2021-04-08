module.exports = {
  port: process.env.PORT || 3000,
  auth: {
    bearer_token: process.env.COMMON_BEARER_TOKEN || '092bb6e668ad4466991ed3388df5847b',
  },
};
