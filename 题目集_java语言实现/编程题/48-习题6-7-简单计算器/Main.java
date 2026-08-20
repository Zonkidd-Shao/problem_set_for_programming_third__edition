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
public static void main(String[] a) { String e=next();if(!e.endsWith("=")){System.out.println("ERROR");return;}e=e.substring(0,e.length()-1);try{int i=0,sign=1;while(i<e.length()&&e.charAt(i)=='-'){sign=-sign;i++;}int v=0;while(i<e.length()&&Character.isDigit(e.charAt(i)))v=v*10+e.charAt(i++)-'0';v*=sign;while(i<e.length()){char op=e.charAt(i++);if(i>=e.length()||!Character.isDigit(e.charAt(i))){System.out.println("ERROR");return;}int x=0;while(i<e.length()&&Character.isDigit(e.charAt(i)))x=x*10+e.charAt(i++)-'0';if(op=='+')v+=x;else if(op=='-')v-=x;else if(op=='*')v*=x;else if(op=='/'&&x!=0)v/=x;else{System.out.println("ERROR");return;}}System.out.println(v);}catch(Exception z){System.out.println("ERROR");}}
}
