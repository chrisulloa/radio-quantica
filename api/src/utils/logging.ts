import { createLogger, format, transports } from 'winston';

const { combine, timestamp, prettyPrint, printf } = format;

const customFormat = printf(
  (f: { level: string; message: string; timestamp: string }) =>
    `${f.level.toUpperCase()} ${f.timestamp}: ${f.message}`
);

const logger = createLogger({
  format: combine(timestamp(), prettyPrint(), customFormat),
  transports: [new transports.Console()],
});

export default logger;
