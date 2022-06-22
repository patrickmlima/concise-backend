const path = require('path');
const dotenv = require('dotenv');

const dotenvPath = path.join(process.cwd(), '.env');

dotenv.config({ path: dotenvPath });

const variables = {
  app: {
    host: process.env?.SERVER_IP,
    port: process.env?.SERVER_PORT,
  },
  database: {
    host: process.env?.DB_HOST,
    port: process.env?.DB_PORT,
    name: process.env?.DB_NAME,
    username: process.env?.DB_USER_NAME,
    password: process.env?.DB_USER_PASSWORD,
  },
};

module.exports = { ...variables };
