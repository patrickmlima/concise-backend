const winston = require('winston');

const MAX_LOG_SIZE = 200000000; // 200MB
const MAX_COMBINED_LOG_SIZE = 1000000000; // 1GB

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.json(),
    winston.format.label({ message: false }),
    winston.format.printf(
      ({ level, message, timestamp, label }) =>
        `${timestamp} - ${level} [${label}: ${message}]`
    )
  ),
  defaultMeta: { service: 'concise-main' },
  transports: [
    new winston.transports.File({
      filename: 'error.log',
      level: 'error',
      maxsize: MAX_LOG_SIZE,
    }),
    new winston.transports.File({
      filename: 'info.log',
      level: 'info',
      maxsize: MAX_LOG_SIZE,
    }),
    new winston.transports.File({
      filename: 'all.log',
      maxsize: MAX_COMBINED_LOG_SIZE,
    }),
    new winston.transports.Console(),
  ],
});

module.exports = {
  createLogger: (label) => logger.child({ label }),
};
