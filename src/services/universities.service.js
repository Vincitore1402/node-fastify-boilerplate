class UniversitiesService {
  constructor(...args) {
    this.params = args;
  }
}

module.exports = (...args) => new UniversitiesService(...args);
