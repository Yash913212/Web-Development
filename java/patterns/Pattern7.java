public class Pattern7 {
    public static void main(String[] args) {
        int n=6;
        // for(int i=0;i<n;i++){
        //     for(int z=0;z<i+1;z++){
        //         System.out.print((z+1)+" ");
        //     }
        //     System.out.println();
        // }
        for(int i=0;i<n;i++){
            for(int j=0;j<n-i-1;j++){
                System.out.print("  ");
            }for(int k=i;k>=0;k--){
                System.out.print((k+1)+" ");
            }
            System.out.println();
        }
    }
}
