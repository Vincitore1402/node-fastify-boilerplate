const toError = (title, detail, status = 500) => ({
  errors: [
    {
      status,
      title,
      detail,
    },
  ],
});

const failure = (
  reply,
  title,
  detail,
  status = 500,
) => reply
  .status(status)
  .send(
    toError(title, detail, status),
  );

const success = (
  reply,
  data,
) => reply
  .status(200)
  .send(data || {});

module.exports = {
  success,
  failure,
  toError,
};
