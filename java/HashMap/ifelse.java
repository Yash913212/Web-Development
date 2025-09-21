package HashMap;
import java.util.HashMap;

public class ifelse {
    public static void main(String[] args) {
        HashMap<Integer,Integer> dp = new HashMap<>();
        dp.put(3,8);
        

        int n = 10;
        if(dp.containsKey(n)){
            int prev = dp.get(n);
            dp.put(10,prev+1);
        }else{
            dp.put(n,10);
        }
        for(int boom:dp.keySet()){
            System.out.println(boom+" "+dp.get(boom));
        }
    }
}
