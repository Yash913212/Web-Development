package Intermediate_problems;

import java.util.Scanner;

public class countsubwithsumslidingwindow {
    public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();
            int arr[] = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int x = sc.nextInt();
            int left = 0, sum = 0, count = 0;
            for(int right = 0; right < n; right++){
                sum += arr[right];
                while(sum > x && left <= right){
                    sum -= arr[left++];
                    left++;
                }
                count += (right - left + 1);
            }
            System.out.println("Count of Subarray"+ x +" = "+count);
    }
}
