package Intermediate_problems;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class removeduplicateshmap {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int arr[] = new int[n];
        for (int i = 0; i < n; i++){
            arr[i] = sc.nextInt();
        }
        Map<Integer,Boolean> map = new HashMap<>();
        for( int num : arr){
            map.put(num,true);
        }
        System.out.println("removing duplicates:");
        for(int key : map.keySet()){
            System.out.println(key + " ");
        }
    }
}
