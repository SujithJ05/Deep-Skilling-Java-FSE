package com.example;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class Calculator {

    @Test
    public void testAddition() {
        int a = 3;
        int b = 2;
        int result = a + b;
        assertEquals(5, result);
    }
}
