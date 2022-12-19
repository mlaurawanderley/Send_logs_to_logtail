const express = require('express');
const app = express();
const expressWinston = require('express-winston');
const { transports, format } = require('winston');
const logger = require('./logger');

app.use(expressWinston.logger({
    winstonInstance: logger,
    statusLevels: true
}));

app.get('/', (req, res) => {
    logger.info('This is an info log');
    res.sendStatus(200);
});

app.get('/400', (req, res) => {
    logger.warn('This is a warning log');
    res.sendStatus(400);
});

app.get ('/500', (req, res) => {
    logger.error('This is an error log');
    res.sendStatus(500);
});

app.get ('/error', (req, res) => {
    throw new Error('Error');
});

const myFormat = format.printf(({ level, meta, timestamp }) => {
    return `${timestamp} ${level}: ${meta.message}`;
})

app.use(expressWinston.errorLogger({
    transports: [
        new transports.File({
            filename: 'logsInternalErrors.log'
        })
    ],
    format: format.combine(
        format.timestamp(),
        format.json(),
        myFormat
    )
}));

// app.listen(4000)

const clientes = [
    'Maria',
    'Fernando',
    'Pedro',
    'Patricia',
    'Joaquim',
    'Sofia'
]

const planos = [
    'Free',
    'Starter',
    'Pro',
    'Prime'
]

const postLog = () => {
    const plano = planos[Math.floor(Math.random() * planos.length)];
    const cliente = clientes[Math.floor(Math.random() * clientes.length)];

    logger.info(`Parabens ${cliente} você contratou o plano ${plano}`, {planos, clientes});

    const fiftyFifty1 = Math.random() < 0.5;
    if (fiftyFifty1) {
        const fiftyFifty2 = Math.random() < 0.5;
        if (fiftyFifty2) {
            logger.warn(`Atenção ${cliente} o pagamento do plano ${plano} falhou, tente novamente.`, {planos, clientes});
        } else {
            logger.error(`${cliente} você cancelou o pagamento do plano ${plano}.`, {planos, clientes});
        }
    }

    setImmediate(postLog);
}
postLog()
    

app.listen(4000) 

