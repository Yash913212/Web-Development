package Intermediate_problems;

import java.util.Scanner;

public class Slidingwindownaxsumsubarray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int arr[] = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        System.out.println("Enter window size");
        int k = sc.nextInt();

        // Calculate the sum of the first window
        int windowsum = 0;
        for (int i = 0; i < k; i++) {
            windowsum += arr[i];
        }

        int maxsum = windowsum;

        // Slide the window and update the maximum sum
        for (int i = k; i < n; i++) {
            windowsum += arr[i] - arr[i - k];
            maxsum = Math.max(maxsum, windowsum);
        }

        System.out.println("Maximum sum of subarray of size " + k + " is " + maxsum);
        sc.close();
    }
}