package HashMap;
import java.util.HashMap;;
public class Numbercount {
    public static void main(String[] args) {
         HashMap<Integer,Integer>dp = new HashMap<>();
    int arr[] = {1,2,3,4,5,6,1,2,3,4,};
    for(int i=0;i<arr.length;i++){
        // int n = arr[i];
        // dp.put(n,1);

        int n = arr[i];
        if(dp.containsKey(n)){
            int prev = dp.get(n);
            dp.put(n,prev+100);
        }else{
            dp.put(n,100);
        }
    }
    for(int boom:dp.keySet()){
        System.out.println(boom+" "+dp.get(boom));
    }



    }
   

}
