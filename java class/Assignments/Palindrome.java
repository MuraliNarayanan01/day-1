package CoreJava.Assignments;

import java.util.Scanner;

public class Palindrome {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        int left = 0;
        int right = str.length() - 1;
        boolean isPalindrome = true;
        for(int i=0;i<str.length();i++){
            if(str.charAt(left)!=str.charAt(right)){
                isPalindrome= false;
                break;
            }
            else{
                left++;
                right--;
            }
        }
        System.out.println(isPalindrome);
        sc.close();
    }
}
