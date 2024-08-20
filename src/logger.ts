type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogMessage {
  level: LogLevel;
  message: string;
  timestamp: string;
}

export class Logger {
  private logLevel: LogLevel;

  constructor(logLevel: LogLevel = 'info') {
    this.logLevel = logLevel;
  }

  private log(level: LogLevel, message: string): void {
    if (this.isLogLevelEnabled(level)) {
      const logMessage: LogMessage = {
        level,
        message,
        timestamp: new Date().toISOString(),
      };
      console.log(JSON.stringify(logMessage));
    }
  }

  private isLogLevelEnabled(level: LogLevel): boolean {
    const levels: LogLevel[] = ['debug', 'info', 'warn', 'error'];
    return levels.indexOf(level) >= levels.indexOf(this.logLevel);
  }

  public debug(message: string): void {
    this.log('debug', message);
  }

  public info(message: string): void {
    this.log('info', message);
  }

  public warn(message: string): void {
    this.log('warn', message);
  }

  public error(message: string): void {
    this.log('error', message);
  }
}