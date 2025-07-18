package com.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        logger.info("This is an INFO message");
        logger.warn("This is a WARNING message");
        logger.error("This is an ERROR message");
        logger.debug("This is a DEBUG message (only visible if log level is DEBUG or lower)");
    }
}
