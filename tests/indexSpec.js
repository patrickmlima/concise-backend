const app = require('../src/index');

describe("Server instance", function() {
    it("Should have application server instance", function() {
        expect(app).toBeTruthy();
    });
  });