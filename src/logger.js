import dateFormat from 'dateformat';
import fs from 'fs';

class Logger {
  constructor(filename = "app.log") {
    this.filename = filename;
  }

    log(message, level = "INFO") {
        const timestamp = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        const logEntry = `[${timestamp}] [${level}]: ${message}\n`;
        fs.appendFileSync(this.filename, logEntry);
        console.log(logEntry.trim());
    }

    info(message) {
        this.log(message, "INFO");
    }

    error(message) {
        this.log(message, "ERROR");
    }
}

if(require.main === module) {
    const logger = new Logger();
    logger.info("Application started.");
    logger.error("An error occurred.");
}