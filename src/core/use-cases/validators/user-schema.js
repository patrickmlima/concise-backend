const yup = require('yup');

const userSchema = yup
  .object()
  .noUnknown()
  .shape({
    email: yup.string().email().min(5).max(320).trim().required(),
    firstName: yup.string().max(30).nullable(false).trim().required(),
    lastName: yup.string().max(50).nullable(false).trim().required(),
    birthDate: yup.date().nullable(false).required(),
    password: yup.string().nullable(false).min(4),
  });

module.exports = {
  userSchema,
};
