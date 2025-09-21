package Intermediate_problems;

import java.util.Scanner;

public class twopointers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of the array");
        int n = sc.nextInt();
        int arr[] = new int[n];
        System.out.println("Enter the elements of the array");
        for(int i=0;i<n;i++){
            arr[i] = sc.nextInt();
        }
        System.out.println("enter target");
        int target = sc.nextInt();
        int left = 0,right = n-1;
        boolean found = false;

        while(left < right){
            int sum = arr[left] + arr[right];

            if(sum == target){
            System.out.println("pair found: "+arr[left]+"+"+arr[right]);
            found = true;
            break;
            }else if(sum < target){
                left++;
            }else{
                right--;
            }
        }
        if(!found){
            System.out.println("pair not found");
        }
    }
}
