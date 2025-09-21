package HashMap;
import java.util.HashMap; // Added import statement

public class Hmap {
    public static void main(String[] args) {
        HashMap<Integer, Integer> hello = new HashMap<>();
        hello.put(2, 5);
        // hello.put(1, 0);
         hello.put(10, 10);
        //  int prev = hello.get(1);
        //  hello.put(1,prev+1);


        
        if(hello.containsKey(10)){
            int prev = hello.get(10);
            hello.put(10,prev+1);
        }
        System.out.println(hello.get(10));
    }
}