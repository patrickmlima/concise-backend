const bcrypt = require('bcrypt');

function HashService() {
  const saltRounds = 10;

  this.hashString = (strValue) => bcrypt.hashSync(strValue, saltRounds);

  this.compareString = async (hashValue, strValue) =>
    bcrypt.compare(strValue, hashValue);
}

module.exports = { HashService: new HashService() };
