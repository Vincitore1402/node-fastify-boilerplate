class ServiceError extends Error {
  constructor(title, detail, statusCode) {
    super();
    this.title = title;
    this.detail = detail;
    this.statusCode = statusCode;
  }
}

class ClientError extends ServiceError {
  constructor(detail) {
    super('Client Error', detail, 400);
  }
}

class ServerError extends ServiceError {
  constructor(detail) {
    super('Server Error', detail, 500);
  }
}

module.exports = {
  ServiceError,
  ClientError,
  ServerError,
};
