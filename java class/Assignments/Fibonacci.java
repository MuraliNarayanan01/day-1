package CoreJava.Assignments;
import java.util.Scanner;

class Fibonacci {
    public static void main(String[] args) { 
        int start = 0;
        int next  = 1;
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number for Fibonnacci series: ");
        int terms = sc.nextInt();
        for(int i=0;i<terms;i++){
            System.out.print(start + " ");
            int temp = start + next;
            start = next;
            next=temp;
        }


        sc.close();
    }
}
