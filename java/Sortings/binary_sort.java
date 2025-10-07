package Sortings;
import java.util.*;

public class binary_sort {
    public static void main(String[] args) {


        int[] arr = {1,6,4,9,2};
        int n = arr.length;
        for(int i=0;i<n-1;i++){
            for(int j=0;j<n-i-1;j++){
                //for printing in ascending order
                //if(arr[j]>arr[j+1]){
                //for printing in decending order
                 if(arr[j]<arr[j+1]){
                   int temp = arr[j];
                   arr[j] = arr[j+1];
                   arr[j+1] = temp;
                }
            }

        }
        for(int i=0;i<n;i++){
            System.out.print(arr[i]+" ");
        }
    }
}
