package br.com.javalabs;

public class JavaOperators {
    public static void main(String[] args) {

        // Arithmetic (+, -, *, /, %)
        double n1 = 10;
        double n2 = 20;

        double addition = n1 + n2;
        double subtraction = n1 - n2;
        double multiplication = n1 * n2;
        double division = n1 / n2;

        System.out.println("Addition: " + addition);
        System.out.println("Subtraction: " + subtraction);
        System.out.println("Multiplication: " + multiplication);
        System.out.println("Division: " + division);

        int modulus = 21 % 7;
        System.out.println("Modulus: " + modulus);

        // Logic
        // (<, >, <=, >=, ==, !=)
        boolean isGreaterThanMinVersionSDK = true;
        boolean isGreaterThanMaxVersionSDK = false;
        boolean isGreaterThan = 30 > 20;
        boolean isGreaterEqualThan = 30 >= 20;
        boolean isLessThan = 30 < 20;
        boolean isLessEqualThan = 30 <= 20;
        boolean isEqual = 30 == 20;
        boolean isNotEqual = 30 != 20;

        // (&& (AND), || (OR), ! (NOT)
        int age = 40;
        float salary = 3500;
        boolean isApproved = age > 30 && salary > 3200;
        boolean isDenied = age > 30 || salary > 3200;

        System.out.println("Result: " + isApproved);
        System.out.println("Result: " + isDenied);

        // Attribution
        int counter = 0;
        counter += 1;
        counter ++;
        counter --;
        ++counter;
        --counter;

        System.out.println("Counter: " + counter);
    }
}