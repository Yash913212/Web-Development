package Basic_problems;

import java.util.Scanner;

public class fibonacci_ite {
    public static  void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number : ");
        int n = sc.nextInt();
        int a = 0, b = 1;

        System.out.println("Fibonacci series :");
        for(int i=1;i<=n;i++){
            System.out.print(a+" ");
            int sum = a+b;
            a = b;
            b = sum;
        }
        System.out.println();
    }
}
