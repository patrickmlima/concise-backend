const User = function (
  id,
  firstName,
  lastName,
  email,
  birthDate,
  createdAt,
  updatedAt,
  password
) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.birthDate = birthDate;
  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
  this.password = password;
};

module.exports = { User };
