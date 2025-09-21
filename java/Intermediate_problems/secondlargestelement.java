package Intermediate_problems;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class secondlargestelement {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size of array: ");
        int n = sc.nextInt();
        int[] arr = new int[n];

        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();

        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num < first) {
                second = num;
            }
        }
        System.out.println("Second Largest = " + second);
    }

    public static class linearsearch {
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter the number of elements in the array");
            int n = sc.nextInt();
            int arr[] = new int[n];
            System.out.println("Enter the elements "+n+ "in the array");
            for(int i=0;i<n;i++){
                arr[i] = sc.nextInt();
            }
            System.out.println("Enter the elements in the array");
            int key = sc.nextInt();
            boolean found = false;
            for(int i=0;i<n;i++){
                if(arr[i] == key){
                    System.out.println("Found at index:"+i);
                    found = true;
                }
            }
            if(!found) System.out.println("Not found");
        }

    }

    public static class reomveduplicates {
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter the number of elements in the array");
            int n = sc.nextInt();
            int[] arr = new int[n];
            System.out.println("enter the elements in the array");
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            Map<Integer, Boolean> map = new HashMap<>();
            for(int num : arr){
                map.put(num,true);
            }
            System.out.println("after removing");
            for(int key : map.keySet()){
                System.out.println(key+" ");
            }
        }
    }
}

