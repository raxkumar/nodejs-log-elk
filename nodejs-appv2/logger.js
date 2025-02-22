import winston from "winston"

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({filename: 'logs/appv2.log'})
    ]
})

export default logger