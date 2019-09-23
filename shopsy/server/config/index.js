const bunyan = require('bunyan');

const appname = 'Shopsy';

module.exports = {
  applicationName: appname,
  logger: bunyan.createLogger({ name: appname }),
  mongodb: {
    dsn: 'mongodb://localhost:27017/shopsy',
  },
};
