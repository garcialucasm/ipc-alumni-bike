
import winston from "winston";

const { combine, timestamp, json, splat } = winston.format;
winston.configure({
    format: combine(timestamp(), json(), splat()),
    transports: [
        new winston.transports.Console(),
    ]
});

class LoggerFactory {
    private logger: winston.Logger
    private children: Map<String, winston.Logger>

    private static instance: LoggerFactory

    private constructor() {
        this.logger = winston.createLogger({
            level: process.env.LOG_LEVEL || 'info',
            format: combine(timestamp(), json(), splat()),
            transports: [
                new winston.transports.Console(),
            ]
        });
        this.children = new Map()
    }

    public static getInstance() {
        if (this.instance == null) {
            this.instance = new LoggerFactory()
        }
        return this.instance;
    }

    getGlobalLogger(): winston.Logger {
        return this.logger;
    }

    getLogger(className: string): winston.Logger {
        let childLogger = this.children.get(className)

        if (childLogger != undefined)
            return childLogger;

        childLogger = this.logger.child({ className: className })
        const childLoggerLevel = process.env[`LOG_LEVEL_${className}`] || process.env.LOG_LEVEL || 'info';
        childLogger.configure({
            level: childLoggerLevel
        })

        this.children.set(className, childLogger);

        return childLogger;
    }
}

const logger = LoggerFactory.getInstance().getGlobalLogger()

export { logger, LoggerFactory };
