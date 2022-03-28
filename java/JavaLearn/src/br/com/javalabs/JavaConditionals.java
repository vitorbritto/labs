package br.com.javalabs;

public class JavaConditionals {
    public static void main(String[] args) {
        int userAge  = 40;
        int authorizedAge = 18;

        if (userAge > authorizedAge) {
            System.out.println("Authorized!");
        } else {
            System.out.println("Not Authorized!");
        }

    }
}
