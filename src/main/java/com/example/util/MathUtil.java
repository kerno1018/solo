package com.example.util;

import java.text.DecimalFormat;

public class MathUtil {
    public static String formatDouble(Double value){
        DecimalFormat f = new DecimalFormat("0.00000000000000");
        return f.format(value);
    }
    public static Double formatDoubleWith2point(Double value){
        DecimalFormat f = new DecimalFormat("0.000");
        return Double.valueOf(f.format(value));
    }
}
