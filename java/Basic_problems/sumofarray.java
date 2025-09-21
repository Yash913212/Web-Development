package Basic_problems;
// import java.util.Scanner;

// public class sumofarray {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int n = sc.nextInt();
//         int arr[] = new int[n];
//         int sum = 0;
//         for (int i = 0; i < n; i++) {
//             arr[i] = sc.nextInt();
//             sum += arr[i];
//         }
//         System.out.println(sum);
//         sc.close(); // Properly close the Scanner
//     }
// }

import java.util.Scanner;

public class sumofarray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int arr[] = new int[n]; // Semicolon added here
        int sum = 0;
        
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
            sum += arr[i];
        }
        
        System.out.println(sum);
        sc.close();
    }
}