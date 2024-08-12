package CoreJava.Assignments;

import java.util.Scanner;

public class Factorial {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int factorialNumber = sc.nextInt();
        int result=1;
        for(int i=1;i<=factorialNumber;i++){
            result= result*i;
        }
         System.out.print(result+" ");
        sc.close();
    }
}
