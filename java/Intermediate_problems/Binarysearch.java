package Intermediate_problems;

import java.util.Arrays;
import java.util.Scanner;

public class Binarysearch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter the string");
        int n = sc.nextInt();
        int arr[] = new int[n];
        System.out.println("enter the string");
        for(int i=0;i<n;i++)
            arr[i] = sc.nextInt();
        System.out.println("enter the element you want to search");
        int key = sc.nextInt();

        //binarysearch
        int low=0,high=n-1;
        boolean found = false;
        while(low<=high){
            int mid = (low  + high)/2;
            if(arr[mid] == key){
                System.out.println("Element found at index : "+mid);
                found = true;
                break;
            }else if(arr[mid]<key){
                low = mid + 1;
            }else{
                high =  mid - 1;
            }
        }
        if(!found) System.out.println("not found");

    }
}
