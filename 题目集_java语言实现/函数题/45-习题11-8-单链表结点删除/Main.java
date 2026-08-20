import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.*;

public class Main {
    static final String INPUT;
    static int POS = 0;
    static {
        try { INPUT = new String(System.in.readAllBytes(), StandardCharsets.UTF_8); }
        catch (IOException e) { throw new RuntimeException(e); }
    }
    static String next() {
        while (POS < INPUT.length() && Character.isWhitespace(INPUT.charAt(POS))) POS++;
        int start = POS;
        while (POS < INPUT.length() && !Character.isWhitespace(INPUT.charAt(POS))) POS++;
        return INPUT.substring(start, POS);
    }
    static String line() {
        while (POS < INPUT.length() && (INPUT.charAt(POS) == '
' || INPUT.charAt(POS) == '')) POS++;
        int start = POS;
        while (POS < INPUT.length() && INPUT.charAt(POS) != '
' && INPUT.charAt(POS) != '') POS++;
        return INPUT.substring(start, POS);
    }
    static int nextInt() { return Integer.parseInt(next()); }
    static long nextLong() { return Long.parseLong(next()); }
    static double nextDouble() { return Double.parseDouble(next()); }
    static boolean prime(int x) {
        if (x < 2) return false;
        for (int i = 2; i * i <= x; i++) if (x % i == 0) return false;
        return true;
    }
    static String join(int[] a) {
        StringBuilder b = new StringBuilder();
        for (int i = 0; i < a.length; i++) { if (i > 0) b.append(' '); b.append(a[i]); }
        return b.toString();
    }
    static String repeat(String s, int n) {
        StringBuilder b = new StringBuilder();
        for (int i = 0; i < n; i++) b.append(s);
        return b.toString();
    }
static class Node{int x;Node next;Node(int x){this.x=x;}}static Node read(){Node h=null,t=null;while(POS<INPUT.length()){int x=nextInt();if(x==-1)break;Node q=new Node(x);if(h==null)h=q;else t.next=q;t=q;}return h;}public static void main(String[] a){Node h=read();int m=nextInt(),dummy=0;Node z=new Node(0);z.next=h;Node p=z;while(p.next!=null)if(p.next.x==m)p.next=p.next.next;else p=p.next;for(p=z.next;p!=null;p=p.next)System.out.print(p.x+" ");System.out.println();}
}
