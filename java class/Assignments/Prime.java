package CoreJava.Assignments;

import java.util.Scanner;

public class Prime {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        boolean isPrime = true;
        int number = sc.nextInt();
        if(number == 1 || number == 4) 
            isPrime = false;
       
        for(int i=2;i<number;i++){
            if(number%i==0){
                isPrime = false;
                break;
            }
        }
        System.out.println(isPrime);
        sc.close();
    }
}
