package CoreJava.Assignments;

import java.util.Scanner;

public class Amstrong {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int AmstrongNumber = sc.nextInt();
        int power = 0;
        int temp=AmstrongNumber;
        int result=0;
        while(temp>0){
            temp/=10;
            power++;
        }
        temp=AmstrongNumber;
        while(temp>0){
            double remainder = Math.pow(temp%10,power);
            result += remainder;
            temp/=10; 
        }
        if(result==AmstrongNumber){
            System.out.println("True");
        }else{
            System.out.println("False");
        }

        sc.close();
    }
}
