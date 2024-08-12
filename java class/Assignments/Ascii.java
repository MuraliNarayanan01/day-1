package CoreJava.Assignments;

public class Ascii {
    public static void main(String[] args) {
        char val = 'a';
        for(int k=0;k<26;++k){
            System.out.print((char)(val + k)+" ");
        }
        System.out.println();
        for(char i='A';i<= 'Z';++i){
            System.out.print(i+" ");
        }
}
}