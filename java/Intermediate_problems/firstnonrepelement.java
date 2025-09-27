package Intermediate_problems;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class firstnonrepelement {
    public  static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int arr[] = new int[n];
        for(int i=0;i<n;i++){
            arr[i] = sc.nextInt();
        }
        Map<Integer,Integer> map = new HashMap<Integer,Integer>();
        for(int num : arr){
            map.put(num,map.getOrDefault(num,0)+1);
        }
        boolean found = false;
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if(entry.getValue() == 1){
                System.out.println("First non-repelement is" +  entry.getKey());
                found = true;
                break;
            }
        }
        if(!found){
            System.out.println("no non-repelement");
        }
    }
}
