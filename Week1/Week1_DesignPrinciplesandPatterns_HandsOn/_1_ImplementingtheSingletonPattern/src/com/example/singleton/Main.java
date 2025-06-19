package com.example.singleton;

public class Main {
    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("First log");
        logger2.log("Second log");


        if (logger1 == logger2) {
            System.out.println("logger1 and logger2 are the same");
        } else {
            System.out.println("logger1 and logger2 are different");
        }
    }
}
