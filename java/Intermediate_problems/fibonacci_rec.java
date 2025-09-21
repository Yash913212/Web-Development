package Intermediate_problems;

import java.util.Scanner;

public class fibonacci_rec {
    static int fib(int n){
        if (n <= 1){
            return n;
        }
        return fib(n-1)+fib(n-2);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println("fibnacci sequence:");
        for (int i = 0; i < n; i++){
            System.out.println(fib(i)+ " ");
        }
    }
}
