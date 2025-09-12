public class pattern {
    public static void main(String[] args) {
        
    
    int n=3;
    for(int i=0;i<n;i++){
        for(int j=0;j<n-i;j++){
            System.out.print("*");
        }
        for(int k=0;k<3;k++){
            System.out.print(" ");
        }
        for(int a=0;a<i+2;a++){
            System.out.print("a");
        }
        System.out.println();
    }
    



}
}
