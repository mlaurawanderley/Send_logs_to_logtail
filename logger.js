const { createLogger, transports, format } = require('winston');
const { Logtail } = require('@logtail/node');
const { LogtailTransport } = require('@logtail/winston');


const logger = createLogger({
    transports: [
        new transports.Console(),
        new transports.File({ 
            level: 'warn',
            filename: 'logsWarning.log'
         }),
         new transports.File({ 
            level: 'error',
            filename: 'logsError.log',
            handleExceptions: true
            }),
        new LogtailTransport(new Logtail('BceskGi9EGhrnL6X9SoU2bJf'))
    ],
    format: format.combine(
        format.timestamp(),
        format.json(),
        format.prettyPrint()
    ),
});

module.exports = logger;

