const sinon = require('sinon');

beforeEach(function () {
  this.sinonSandbox = sinon.createSandbox();
});

afterEach(function () {
  this.sinonSandbox.restore();
});
