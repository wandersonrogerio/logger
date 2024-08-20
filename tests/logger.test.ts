import { Logger } from "../src/logger";

describe("Logger", () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("should correctly log info messages", () => {
    const logger = new Logger("info");
    const message = "Info message test";
    logger.info(message);

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(message));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("info"));
  });

  it("should not log debug messages if the level is info", () => {
    const logger = new Logger("info");
    logger.debug("This message should not appear");

    expect(consoleSpy).not.toHaveBeenCalled();
  });

  it("should log error messages", () => {
    const logger = new Logger("error");
    const errorMessage = "Test error";
    logger.error(errorMessage);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining(errorMessage)
    );
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("error"));
  });
});