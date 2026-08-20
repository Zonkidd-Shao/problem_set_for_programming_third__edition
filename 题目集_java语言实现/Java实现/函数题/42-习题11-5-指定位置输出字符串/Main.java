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
public static void main(String[] a){String s=next();char a1=next().charAt(0),b=next().charAt(0);int i=s.indexOf(a1),j=i<0?-1:s.indexOf(b,i);if(i>=0&&j>=0){System.out.println(s.substring(i,j+1));System.out.println(s.substring(i));}else{System.out.println();System.out.println();}}
}
