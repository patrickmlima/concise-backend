const path = require('path');
const dotenv = require('dotenv');

const dotenvPath = path.join(process.cwd(), '.env');

dotenv.config({ path:  dotenvPath });

const development = {
    app: {
        port: process.env.DEV_PORT || '',
        ip: process.env.DEV_HOST_IP || ''
    }
}

const production = {
    app: {
        port: process.env.PORT || '',
        ip: process.env.HOST_IP || ''
    }
}

const selectEnv = () => {
    const envValue = process.env.NODE_ENV || 'development';

    if (envValue === 'production') {
        return production;
    }
    return development;
}

module.exports = selectEnv();
