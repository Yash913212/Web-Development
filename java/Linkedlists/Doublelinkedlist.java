package Linkedlists;

public class Doublelinkedlist {

        static class Node{
            int data;
            Node Next;
            Node Prev;
            Node(int value){
                data = value;
                Next = null;
                Prev = null;
            }
        }
    public static void main(String[] args) {
        Node head = new Node(1);
        Node head2 = new Node(2);

        head.Next = head2;
        head2.Prev = head;

        System.out.println(head.Next.data);
    }
}
