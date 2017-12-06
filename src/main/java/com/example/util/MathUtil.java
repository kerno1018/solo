package com.example.util;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DecimalFormat;

public class MathUtil {
    public static String formatDouble(Double value){
        DecimalFormat f = new DecimalFormat("0.00000000000000");
        return f.format(value);
    }
    public static Double formatDoubleWith2point(Double value){
        BigDecimal b   =   new BigDecimal(value);
        double   f1   =   b.setScale(5,   RoundingMode.HALF_UP).doubleValue();
        DecimalFormat f = new DecimalFormat("0.00000");
        return Double.valueOf(f.format(f1));
    }
}
