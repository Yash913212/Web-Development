package Basic_problems;

import java.util.Scanner;

public class frequencyofeachelement {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        boolean[] flag = new boolean[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        for (int i = 0; i < n; i++) {
            if(flag[i]) continue;
            int count = 1;
            for(int j=i+1;j<n;j++){
                if(arr[j]==arr[i]){
                    flag[j] = true;
                    count++;
                }
            }
            System.out.println(arr[i] + " occurs " + count + " time(s)");
        }
    }
}
