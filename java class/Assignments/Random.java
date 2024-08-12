package CoreJava.Assignments;

import java.util.Scanner;

public class Random {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();
        double random =Math.random();
        
        System.out.println(random*number);
        sc.close();
    }
}
