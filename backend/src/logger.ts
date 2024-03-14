import winston from "winston";

const { combine, timestamp, json, splat } = winston.format;

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(timestamp(), json(), splat()),
  transports: [
    new winston.transports.Console()
  ]
});

const global = logger;

function getLogger(className: string = "") {
  if (className === "")
    return global
  const level = process.env[`LOG_LEVEL_${className}`] || process.env.LOG_LEVEL || 'info'
  const child = global.child({ className: className })
  child.configure({
    level: level
  })

  return child
}

// TODO remove logger export to avoid conflicts 
export { logger, global, getLogger };
