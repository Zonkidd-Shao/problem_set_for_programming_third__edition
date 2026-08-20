import std.collection.*
import std.env.*
import std.convert.*
import std.math.*

func fields(raw: String): ArrayList<String> {
    var s = raw.replace("\r", " ").replace("\n", " ").replace("\t", " ")
    var result = ArrayList<String>()
    for (part in s.split(" ")) {
        let p = part
        if (p != "") { result.add(p) }
    }
    return result
}

func inputLines(raw: String): ArrayList<String> {
    var result = ArrayList<String>()
    for (line in raw.replace("\r", "").split("\n")) { result.add(line) }
    return result
}

func iv(s: String): Int64 { Int64.parse(s) }
func dv(s: String): Float64 { Float64.parse(s) }
func f2(x: Float64): String { x.format(".2") }
func f1(x: Float64): String { x.format(".1") }
func f3(x: Float64): String { x.format(".3") }
func f4(x: Float64): String { x.format(".4") }
func f6(x: Float64): String { x.format(".6") }
func f8(x: Float64): String { x.format(".8") }
func isLower(ch: UInt8): Bool { ch >= 97 && ch <= 122 }
func isUpper(ch: UInt8): Bool { ch >= 65 && ch <= 90 }
func isDigit(ch: UInt8): Bool { ch >= 48 && ch <= 57 }
func runeString(ch: UInt8): String { Rune(UInt32(ch)).toString() }

func prime(x: Int64): Bool {
    if (x < 2) { return false }
    var d = 2
    while (d * d <= x) {
        if (x % d == 0) { return false }
        d += 1
    }
    return true
}

func gcd(a0: Int64, b0: Int64): Int64 {
    var a = if (a0 < 0) { -a0 } else { a0 }
    var b = if (b0 < 0) { -b0 } else { b0 }
    while (b != 0) { let r = a % b; a = b; b = r }
    return a
}

func ipow(x: Int64, n: Int64): Int64 {
    var r = 1
    var k = n
    var b = x
    while (k > 0) {
        if (k % 2 == 1) { r *= b }
        b *= b
        k /= 2
    }
    return r
}

func dpow(x: Float64, n: Int64): Float64 {
    var r = 1.0
    var k = n
    var b = x
    while (k > 0) {
        if (k % 2 == 1) { r *= b }
        b *= b
        k /= 2
    }
    return r
}

func fact(n: Int64): Float64 {
    var r = 1.0
    var i = 2
    while (i <= n) { r *= Float64(i); i += 1 }
    return r
}

func fib0(n: Int64): Int64 {
    if (n <= 0) { return 0 }
    var a = 0
    var b = 1
    var i = 0
    while (i < n) { let c = a + b; a = b; b = c; i += 1 }
    return a
}

func fib1(n: Int64): Int64 {
    if (n <= 1) { return 1 }
    var a = 1
    var b = 1
    var i = 2
    while (i <= n) { let c = a + b; a = b; b = c; i += 1 }
    return b
}

func narcissistic(x: Int64): Bool {
    if (x < 100) { return false }
    var n = x
    var digits = 0
    while (n > 0) { digits += 1; n /= 10 }
    n = x
    var sum = 0
    while (n > 0) { sum += ipow(n % 10, digits); n /= 10 }
    return sum == x
}

func printInts(a: ArrayList<Int64>): Unit {
    var i = 0
    while (i < a.size) {
        if (i > 0) { print(" ") }
        print(a[i])
        i += 1
    }
    println()
}

func ack(m: Int64, n: Int64): Int64 {
    if (m == 0) { return n + 1 }
    if (n == 0) { return ack(m - 1, 1) }
    return ack(m - 1, ack(m, n - 1))
}

func digitCount(number0: Int64, digit: Int64): Int64 {
    var number = if (number0 < 0) { -number0 } else { number0 }
    if (number == 0) { return if (digit == 0) { 1 } else { 0 } }
    var count = 0
    while (number > 0) { if (number % 10 == digit) { count += 1 }; number /= 10 }
    return count
}

func solve(id: Int64, raw: String, t: ArrayList<String>): Unit {
    let ls = inputLines(raw)

    // Function exercises 5-1 through 11-8.
    if (id == 1) { var s=0; var x=iv(t[0]); while (x<=iv(t[1])) { s+=x; x+=1 }; println("sum = ${s}"); return }
    if (id == 2) { println("max = ${if (iv(t[0]) > iv(t[1])) { iv(t[0]) } else { iv(t[1]) }}"); return }
    if (id == 3) { let n=iv(t[0]); var i=1; while(i<=n){ var j=0; while(j<n-i){print(" ");j+=1}; j=0; while(j<i){print("${i} ");j+=1}; println();i+=1 }; return }
    if (id == 4) { let x=iv(t[0]); println("sign(${x}) = ${if(x>0){1}else if(x<0){-1}else{0}}"); return }
    if (id == 5) { let n=iv(t[0]); var sum=0; print("Sum of ( "); var i=0; while(i<n){let x=iv(t[i+1]);if(x%2!=0){print("${x} ");sum+=x};i+=1}; println(") = ${sum}"); return }
    if (id == 6) { let x=dv(t[0])-dv(t[2]); let y=dv(t[1])-dv(t[3]); println("dist = ${f2(sqrt(x*x+y*y))}"); return }
    if (id == 7) { let m=iv(t[0]);let n=iv(t[1]);var s=0;print("Sum of ( ");var x=m;while(x<=n){if(prime(x)){print("${x} ");s+=x};x+=1};println(") = ${s}");return }
    if (id == 8) { println("Number of digit ${iv(t[1])} in ${iv(t[0])}: ${digitCount(iv(t[0]),iv(t[1]))}"); return }
    if (id == 9) { let m=iv(t[0]);let n=iv(t[1]);if(narcissistic(m)){println("${m} is a narcissistic number")};var x=m+1;while(x<n){if(narcissistic(x)){println(x)};x+=1};if(narcissistic(n)){println("${n} is a narcissistic number")};return }
    if (id == 10) { let e=dv(t[0]);let x=dv(t[1]);var term=1.0;var sum=1.0;var k=1;while(abs(term)>=e){term=-term*x*x/(Float64((2*k-1)*(2*k)));sum+=term;k+=1};println("cos(${f2(x)}) = ${f6(sum)}");return }
    if (id == 11) { var a=0;var b=0;var c=0;var d=0;for(ch in raw.toArray()){if(isLower(ch)||isUpper(ch)){a+=1}else if(isDigit(ch)){c+=1}else if(ch==32||ch==10||ch==13){b+=1}else{d+=1}};if(b>0){b-=1};println("letter = ${a}, blank = ${b}, digit = ${c}, other = ${d}");return }
    if (id == 12) { let a=iv(t[0]);let n=iv(t[1]);var term=0;var sum=0;var i=0;while(i<n){term=term*10+a;sum+=term;i+=1};println("fn(${a}, ${n}) = ${term}");println("s = ${sum}");return }
    if (id == 13) { let m=iv(t[0]);let n=iv(t[1]);var sm=0;var dm=1;while(dm<m){if(m%dm==0){sm+=dm};dm+=1};if(sm==m){println("${m} is a perfect number")};var sn=0;var dn=1;while(dn<n){if(n%dn==0){sn+=dn};dn+=1};if(sn==n){println("${n} is a perfect number")};var found=false;var x=m;while(x<=n){var s=0;var d=1;while(d<x){if(x%d==0){s+=d};d+=1};if(s==x){found=true;print("${x} = ");var first=true;d=1;while(d<x){if(x%d==0){if(!first){print(" + ")};print(d);first=false};d+=1};println()};x+=1};if(!found){println("No perfect number")};return }
    if (id == 14) { let m=iv(t[0]);let n=iv(t[1]);print("fib(${iv(t[2])}) = ${fib0(iv(t[2]))}\n");var first=true;var k=0;while(fib0(k)<=n){let z=fib0(k);if(z>=m){if(!first){print(" ")};print(z);first=false};k+=1};if(first){println("No Fibonacci number")}else{println()};return }
    if (id == 15) { let n=iv(t[1]);let original=iv(t[0]);if(prime(original)){println("${original} is a prime number")};var p=if(original<6){6}else{original};if(p%2==1){p+=1};var count=0;while(p<=n){var q=3;while(q<=p/2){if(prime(q)&&prime(p-q)){print("${p}=${q}+${p-q}");break};q+=2};count+=1;if(count%5==0){println()}else{print(", ")};p+=2};return }
    if (id == 16) { var x=iv(t[0]);var sign=1;if(x<0){sign=-1;x=-x};var r=0;while(x>0){r=r*10+x%10;x/=10};println(sign*r);return }
    if (id == 17) { let a=dv(t[0]);let b=dv(t[1]);println("The sum is ${f2(a+b)}");println("The diff is ${f2(a-b)}");return }
    if (id == 18) { let s=ls[0];let a=s.toArray();var out="";var i=3;while(i<a.size){out+=runeString(a[i]);i+=1};i=0;while(i<3){out+=runeString(a[i]);i+=1};println(out);return }
    if (id == 19) { let x=dv(t[0]);let q=Int64(x);println("The integer part is ${q}");println("The fractional part is ${f3(x-Float64(q))}");return }
    if (id == 20) { let n=iv(t[0]);let x=iv(t[n+1]);var ans=-1;var i=0;while(i<n){if(iv(t[i+1])==x){ans=i;break};i+=1};if(ans<0){println("Not found")}else{println("index = ${ans}")};return }
    if (id == 21) { let n=iv(t[0]);var m=iv(t[1]);var a=ArrayList<Int64>();var i=0;while(i<n){a.add(iv(t[i+2]));i+=1};m%=n;var j=0;while(j<n){if(j>0){print(" ")};print(a[(j+n-m)%n]);j+=1};println();return }
    if (id == 22) { let n=iv(t[0]);let m=iv(t[1]);var people=ArrayList<Int64>();var i=1;while(i<=n){people.add(i);i+=1};var out=ArrayList<Int64>();i=0;while(i<n){out.add(0);i+=1};var pos=0;var order=1;while(people.size>0){pos=(pos+m-1)%people.size;let who=people[pos];out[who-1]=order;people.remove(at:pos);order+=1;if(pos==people.size){pos=0}};printInts(out);return }
    if (id == 23) { let s=ls[1];let m=iv(t[0]);let a=s.toArray();var out="";var i=m-1;while(i<a.size){out+=runeString(a[i]);i+=1};println(out);return }
    if (id == 24) { let c=ls[0].toArray()[0];var out="";for(ch in ls[1].toArray()){if(ch!=c){out+=runeString(ch)}};println(out);return }
    if (id == 25) { let a=ls[0].toArray();var ok=true;var i=0;while(i<a.size/2){if(a[i]!=a[a.size-1-i]){ok=false};i+=1};println(if(ok){"Yes"}else{"No"});println(ls[0]);return }
    if (id == 26) { var upper=0;var lower=0;var blank=0;var digit=0;var other=0;for(ch in raw.toArray()){if(isUpper(ch)){upper+=1}else if(isLower(ch)){lower+=1}else if(ch==32){blank+=1}else if(isDigit(ch)){digit+=1}else{other+=1}};if(other>0){other-=1};println("${upper} ${lower} ${blank} ${digit} ${other}");return }
    if (id == 27) { let a=iv(t[0]);let b=iv(t[1]);let c=iv(t[2]);let d=iv(t[3]);println("(${a}+${b}i) * (${c}+${d}i) = ${a*c-b*d} + ${a*d+b*c}i");return }
    if (id == 28) { let n=iv(t[0]);var fail=0;var i=0;while(i<n){let score=iv(t[i*3+3]);if(score<60){fail+=1};i+=1};println("The count for failed (<60): ${fail}");println("The grades:");i=0;while(i<n){let no=t[i*3+1];let name=t[i*3+2];let score=iv(t[i*3+3]);let g=if(score>=85){"A"}else if(score>=70){"B"}else if(score>=60){"C"}else{"D"};println("${no} ${name} ${g}");i+=1};return }
    if (id == 29) { let n=iv(t[0]);var s=0;var i=1;while(i<=n){s+=i;i+=1};println(if(n>0){s}else{0});return }
    if (id == 30) { let n=iv(t[0]);var count=0;var x=101;while(x<=n){let a=x/100;let b=x/10%10;let c=x%10;var sq=1;while(sq*sq<x){sq+=1};if(sq*sq==x&&(a==b||a==c||b==c)){count+=1};x+=1};println("count=${count}");return }
    if (id == 31) { let n=iv(t[0]);println("fact(${n}) = ${Int64(fact(n))}");var s=0.0;var i=1;while(i<=n){s+=fact(i);i+=1};println("sum = ${Int64(s)}");return }
    if (id == 32) { println(Int64(dpow(dv(t[0]),iv(t[1]))));return }
    if (id == 33) { let x=dv(t[0]);let n=iv(t[1]);var s=0.0;var i=1;while(i<=n){let v=dpow(x,i);s+=if(i%2==1){v}else{-v};i+=1};println(f2(s));return }
    if (id == 34) { println(ack(iv(t[0]),iv(t[1])));return }
    if (id == 35) { println(fib0(iv(t[0])));return }
    if (id == 36) { var n=iv(t[0]);if(n==0){println(0);return};var bits="";while(n>0){bits=if(n%2==0){"0"}else{"1"}+bits;n/=2};println(bits);return }
    if (id == 37) { let a=ls[0];var i=0;while(i<a.toArray().size){println(runeString(a.toArray()[i]));i+=1};return }
    if (id == 38) { let m=["","January","February","March","April","May","June","July","August","September","October","November","December"];let n=iv(t[0]);if(n>=1&&n<=12){println(m[n])}else{println("wrong input!")};return }
    if (id == 39) { let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var i=0;while(i<7){if(ls[0]==days[i]){println(i);return};i+=1};println("wrong input!");return }
    if (id == 40) { let n=iv(t[0]);var best=0;var i=1;while(i<=n){let z=ls[i].size;if(z>best){best=z};i+=1};println(best);return }
    if (id == 41) { println(ls[0]+ls[1]);println(ls[0]+ls[1]);return }
    if (id == 42) { let a=ls[0].toArray();let ch1=ls[1].toArray()[0];let ch2=ls[1].toArray()[2];var start=-1;var end=-1;var i=0;while(i<a.size){if(start<0&&a[i]==ch1){start=i};if(start>=0&&a[i]==ch2){end=i;break};i+=1};if(start>=0){if(end<0){end=a.size-1};i=start;while(i<=end){print(runeString(a[i]));i+=1};println();i=start;while(i<a.size){print(runeString(a[i]));i+=1};println()}else{println();println()};return }
    if (id == 43) { let s=ls[0];let q=ls[1];println(s.indexOf(q) ?? -1);return }
    if (id == 44) { var odd=ArrayList<Int64>();var even=ArrayList<Int64>();var i=0;while(i<t.size&&iv(t[i])!=-1){let x=iv(t[i]);if(x%2==0){even.add(x)}else{odd.add(x)};i+=1};printInts(odd);printInts(even);return }
    if (id == 45) { var i=0;while(i<t.size&&iv(t[i])!=-1){let x=iv(t[i]);let m=iv(t[t.size-1]);if(x!=m){print("${x} ")};i+=1};println();return }

    // Programming exercises. IDs 101-171 correspond to the numbered files.
    if (id == 101) { println("Programming in C is fun!");return }
    if (id == 102) { println("* * * *");println(" * * *");println("  * *");println("   *");return }
    if (id == 103) { println("fahr = 150, celsius = ${(150-32)*5/9}");return }
    if (id == 104) { println("height = ${5*3*3}");return }
    if (id == 105) { println("Celsius = ${(iv(t[0])-32)*5/9}");return }
    if (id == 106) { let a=iv(t[0]);let b=iv(t[1]);println("${a} + ${b} = ${a+b}");println("${a} - ${b} = ${a-b}");println("${a} * ${b} = ${a*b}");println("${a} / ${b} = ${a/b}");return }
    if (id == 107) { let x=dv(t[0]);let y=if(x==0.0){0.0}else{1.0/x};println("f(${f1(x)}) = ${f1(y)}");return }
    if (id == 108) { let x=dv(t[0]);let y=if(x>=0.0){sqrt(x)}else{x*x+2.0*x-2.0};println("f(${f2(x)}) = ${f2(y)}");return }
    if (id == 109) { let lo=iv(t[0]);let hi=iv(t[1]);if(lo>hi){println("Invalid.");return};println("fahr celsius");var x=lo;while(x<=hi){let cs=f1(Float64(5*(x-32))/9.0);var pad="";while(pad.size+cs.size<6){pad+=" "};println("${x}${pad}${cs}");x+=2};return }
    if (id == 110) { var s=0.0;var i=1;let n=iv(t[0]);while(i<=n){s+=1.0/Float64(i);i+=1};println("sum = ${f6(s)}");return }
    if (id == 111) { var s=0.0;var i=0;let n=iv(t[0]);while(i<n){s+=1.0/Float64(2*i+1);i+=1};println("sum = ${f6(s)}");return }
    if (id == 112) { var s=0.0;var i=0;let n=iv(t[0]);while(i<n){let q=1.0/Float64(3*i+1);s+=if(i%2==0){q}else{-q};i+=1};println("sum = ${f3(s)}");return }
    if (id == 113) { let n=iv(t[0]);var i=0;while(i<=n){println("pow(3,${i}) = ${ipow(3,i)}");i+=1};return }
    if (id == 114) { let m=iv(t[0]);let n=iv(t[1]);var r=1.0;var i=1;while(i<=m){r*=Float64(n-m+i)/Float64(i);i+=1};println("result = ${Int64(r)}");return }
    if (id == 115) { var s=iv(t[0])+iv(t[1])+iv(t[2])+iv(t[3]);println("Sum = ${s}; Average = ${f1(Float64(s)/4.0)}");return }
    if (id == 116) { let x=dv(t[0]);if(x<0.0){println("Invalid Value!")}else{let c=if(x<=50.0){x*0.53}else{50.0*0.53+(x-50.0)*0.58};println("cost = ${f2(c)}")};return }
    if (id == 117) { let m=iv(t[0]);let n=iv(t[1]);var s=0.0;var i=m;while(i<=n){s+=Float64(i*i)+1.0/Float64(i);i+=1};println("sum = ${f6(s)}");return }
    if (id == 118) { let n=iv(t[0]);var s=0.0;var i=1;while(i<=n){let q=Float64(i)/Float64(2*i-1);s+=if(i%2==1){q}else{-q};i+=1};println(f3(s));return }
    if (id == 119) { var s=0.0;var i=1;while(i<=iv(t[0])){s+=sqrt(Float64(i));i+=1};println("sum = ${f2(s)}");return }
    if (id == 120) { var s=0;var p=1;var i=1;while(i<=iv(t[0])){p*=i;s+=p;i+=1};println(s);return }
    if (id == 121) { let x=iv(t[0]);println("sign(${x}) = ${if(x>0){1}else if(x==0){0}else{-1}}");return }
    if (id == 122) { let n=iv(t[0]);var s=0;var pass=0;var i=0;while(i<n){let x=iv(t[i+1]);s+=x;if(x>=60){pass+=1};i+=1};println("average = ${f1(Float64(s)/Float64(n))}");println("count = ${pass}");return }
    if (id == 123) { var a=0;var b=0;var c=0;var d=0;for(ch in raw.toArray()){if(isLower(ch)||isUpper(ch)){a+=1}else if(isDigit(ch)){c+=1}else if(ch==32||ch==10||ch==13){b+=1}else{d+=1}};println("letter = ${a}, blank = ${b}, digit = ${c}, other = ${d}");return }
    if (id == 124) { let y=iv(t[0]);if(y<2001||y>2100){println("Invalid year!");return};var found=false;var x=2001;while(x<=y){if((x%4==0&&x%100!=0)||x%400==0){println(x);found=true};x+=1};if(!found){println("None")};return }
    if (id == 125) { let x=iv(t[0]);println(if(x>=90){"A"}else if(x>=80){"B"}else if(x>=70){"C"}else if(x>=60){"D"}else{"E"});return }
    if (id == 126) { println("[1] apple");println("[2] pear");println("[3] orange");println("[4] grape");println("[0] exit");var i=0;while(i<t.size&&i<5){let x=iv(t[i]);if(x==0){break};let p=if(x==1){3.0}else if(x==2){2.5}else if(x==3){4.1}else if(x==4){10.2}else{0.0};println("price = ${f2(p)}");i+=1};return }
    if (id == 127) { var a=[iv(t[0]),iv(t[1]),iv(t[2])];var i=0;while(i<3){var j=i+1;while(j<3){if(a[i]>a[j]){let z=a[i];a[i]=a[j];a[j]=z};j+=1};i+=1};println("${a[0]}->${a[1]}->${a[2]}");return }
    if (id == 128) { let v=iv(t[0]);let limit=iv(t[1]);let pct=Float64(v-limit)*100.0/Float64(limit);let p=Int64(pct+0.5);if(p<10){println("OK")}else if(p<50){println("Exceed ${p}%. Ticket 200")}else{println("Exceed ${p}%. License Revoked")};return }
    if (id == 129) { let d=dv(t[0]);let wait=iv(t[1]);var cost=10.0;if(d>3.0){if(d<=10.0){cost+=(d-3.0)*2.0}else{cost+=14.0+(d-10.0)*3.0}};cost+=Float64(wait/5)*2.0;println(Int64(cost+0.5));return }
    if (id == 130) { let n=iv(t[0]);var a=0;var b=0;var c=0;var d=0;var e=0;var i=0;while(i<n){let x=iv(t[i+1]);if(x>=90){a+=1}else if(x>=80){b+=1}else if(x>=70){c+=1}else if(x>=60){d+=1}else{e+=1};i+=1};println("${a} ${b} ${c} ${d} ${e}");return }
    if (id == 131) { let x1=dv(t[0]);let y1=dv(t[1]);let x2=dv(t[2]);let y2=dv(t[3]);let x3=dv(t[4]);let y3=dv(t[5]);let a=sqrt((x1-x2)**2+(y1-y2)**2);let b=sqrt((x1-x3)**2+(y1-y3)**2);let c=sqrt((x2-x3)**2+(y2-y3)**2);if(a+b<=c||a+c<=b||b+c<=a){println("Impossible")}else{let p=(a+b+c)/2.0;println("L = ${f2(a+b+c)}, A = ${f2(sqrt(p*(p-a)*(p-b)*(p-c)))}")};return }
    if (id == 132) { let e=dv(t[0]);var s=0.0;var den=1.0;var sign=1.0;while(true){let term=sign/den;s+=term;if(abs(term)<=e){break};den+=3.0;sign=-sign};println("sum = ${f6(s)}");return }
    if (id == 133) { let target=iv(t[0]);let max=iv(t[1]);var i=2;while(i<t.size&&i<=max+1){let g=iv(t[i]);if(g<0){println("Game Over");return};if(g==target){if(i==2){println("Bingo!")}else if(i<=4){println("Lucky You!")}else{println("Good Guess!")};return}else if(g>target){println("Too big")}else{println("Too small")};i+=1};println("Game Over");return }
    if (id == 134) { let n=iv(t[0]);var s=1.0;var p=1.0;var i=1;while(i<=n){p*=Float64(i);s+=1.0/p;i+=1};println(f8(s));return }
    if (id == 135) { let n=iv(t[0]);var best=iv(t[1]);var i=1;while(i<n){let x=iv(t[i+1]);if(x<best){best=x};i+=1};println("min = ${best}");return }
    if (id == 136) { let m=iv(t[0]);let n=iv(t[1]);var count=0;var sum=0;var x=m;while(x<=n){if(prime(x)){count+=1;sum+=x};x+=1};println("${count} ${sum}");return }
    if (id == 137) { var s=0;var i=0;while(i<t.size){let x=iv(t[i]);if(x<=0){break};if(x%2!=0){s+=x};i+=1};println(s);return }
    if (id == 138) { let x=dv(t[0]);var s=1.0;var term=1.0;var i=1;while(true){term*=x/Float64(i);s+=term;if(abs(term)<0.00001){break};i+=1};println(f4(s));return }
    if (id == 139) { let n=iv(t[0]);var s=0.0;var a=2.0;var b=1.0;var i=0;while(i<n){s+=a/b;let z=a;a=a+b;b=z;i+=1};println(f2(s));return }
    if (id == 140) { let a=iv(t[0]);let n=iv(t[1]);var term=0;var s=0;var i=0;while(i<n){term=term*10+a;s+=term;i+=1};println("s = ${s}");return }
    if (id == 141) { let x=iv(t[0]);var count=0;var five=x/5;while(five>=1){var two=x/2;while(two>=1){let one=x-5*five-2*two;if(one>=1){println("fen5:${five}, fen2:${two}, fen1:${one}, total:${five+two+one}");count+=1};two-=1};five-=1};println("count = ${count}");return }
    if (id == 142) { let n=iv(t[0]);let lo=ipow(10,n-1);let hi=ipow(10,n)-1;var x=lo;while(x<=hi){var z=x;var s=0;while(z>0){s+=ipow(z%10,n);z/=10};if(s==x){println(x)};x+=1};return }
    if (id == 143) { let a=iv(t[0]);let b=iv(t[1]);let g=gcd(a,b);println("${g} ${a/g*b}");return }
    if (id == 144) { let h=Float64(iv(t[0]));let n=iv(t[1]);var distance=0.0;var rebound=h;var i=0;while(i<n){distance+=rebound;rebound/=2.0;if(i<n-1){distance+=rebound};i+=1};println("${f1(distance)} ${f1(rebound)}");return }
    if (id == 145) { let n=iv(t[0]);var i=1;while(i<=n){var j=0;while(j<(n-i)/2){print("  ");j+=1};j=0;while(j<i){print("* ");j+=1};println();i+=2};i=n-2;while(i>0){var j=0;while(j<(n-i)/2){print("  ");j+=1};j=0;while(j<i){print("* ");j+=1};println();i-=2};return }
    if (id == 146) { var x=1;var i=0;while(i<iv(t[0])-1){x=(x+1)*2;i+=1};println(x);return }
    if (id == 147) { let n=iv(t[0]);var a=1;var b=1;var m=1;while(a<n){let z=a;a=b;b=z+b;m+=1};println(m);return }
    if (id == 148) { let expr=raw.split("=")[0];var acc=0;var number="";var op="+";var error=false;for(ch in expr.toArray()){if(isDigit(ch)){number+=runeString(ch)}else{let v=iv(number);if(op=="+"){acc+=v}else if(op=="-"){acc-=v}else if(op=="*"){acc*=v}else if(op=="/"){if(v==0){error=true}else{acc/=v}}else{error=true};number="";op=runeString(ch)}};if(number!=""){let v=iv(number);if(op=="+"){acc+=v}else if(op=="-"){acc-=v}else if(op=="*"){acc*=v}else if(op=="/"){if(v==0){error=true}else{acc/=v}}else{error=true}};if(error){println("ERROR")}else{println(acc)};return }
    if (id == 149) { let s=ls[0];var count=0;var inside=false;for(ch in s.toArray()){if(ch!=32&&!inside){count+=1;inside=true}else if(ch==32){inside=false}};println(count);return }
    if (id == 150) { let n=iv(t[0]);var best=iv(t[1]);var idx=0;var i=1;while(i<n){let x=iv(t[i+1]);if(x>best){best=x;idx=i};i+=1};println("${best} ${idx}");return }
    if (id == 151) { let n=iv(t[0]);var a=ArrayList<Int64>();var i=0;while(i<n){a.add(iv(t[i+1]));i+=1};i=0;while(i<n/2){let z=a[i];a[i]=a[n-1-i];a[n-1-i]=z;i+=1};printInts(a);return }
    if (id == 152) { let n=iv(t[0]);var a=ArrayList<Int64>();var i=0;while(i<n){a.add(iv(t[i+1]));i+=1};let k=n+1;let m=iv(t[k]);var b=ArrayList<Int64>();i=0;while(i<m){b.add(iv(t[k+1+i]));i+=1};var out=ArrayList<Int64>();i=0;while(i<n){var seen=false;var j=0;while(j<m){if(a[i]==b[j]){seen=true};j+=1};if(!seen){var dup=false;j=0;while(j<out.size){if(out[j]==a[i]){dup=true};j+=1};if(!dup){out.add(a[i])}};i+=1};i=0;while(i<m){var seen=false;var j=0;while(j<n){if(b[i]==a[j]){seen=true};j+=1};if(!seen){var dup=false;j=0;while(j<out.size){if(out[j]==b[i]){dup=true};j+=1};if(!dup){out.add(b[i])}};i+=1};printInts(out);return }
    if (id == 153) { let n=iv(t[0]);var sum=0;var k=1;var i=0;while(i<n){var j=0;while(j<n){let x=iv(t[k]);if(i<n-1&&j<n-1&&i+j!=n-1){sum+=x};k+=1;j+=1};i+=1};println(sum);return }
    if (id == 154) { let m=iv(t[0]);let n=iv(t[1]);var k=2;var i=0;while(i<n){var row=ArrayList<Int64>();var j=0;while(j<n){row.add(iv(t[k]));k+=1;j+=1};j=0;while(j<n){if(j>0){print(" ")};print(row[(j+n-m%n)%n]);j+=1};println();i+=1};return }
    if (id == 155) { let p=t[0].split("/");let y=iv(p[0]);let m=iv(p[1]);let d=iv(p[2]);let days=[31,28,31,30,31,30,31,31,30,31,30,31];var total=d;var i=0;while(i<m-1){total+=days[i];i+=1};if((y%4==0&&y%100!=0)||y%400==0){if(m>2){total+=1}};println(total);return }
    if (id == 156) { let c=ls[0].toArray()[0];let a=ls[1].toArray();var idx=-1;var i=0;while(i<a.size){if(a[i]==c){idx=i};i+=1};if(idx<0){println("Not Found")}else{println("index = ${idx}")};return }
    if (id == 157) { let a=ls[0].toArray();var i=a.size-1;while(i>=0){print(runeString(a[i]));i-=1};println();return }
    if (id == 158) { let n=iv(t[0]);var a=ArrayList<Int64>();var i=0;while(i<n){a.add(iv(t[i+1]));i+=1};i=0;while(i<n){var j=i+1;while(j<n){if(a[i]<a[j]){let z=a[i];a[i]=a[j];a[j]=z};j+=1};i+=1};printInts(a);return }
    if (id == 159) { let n=iv(t[0]);var cnt=[0,0,0,0,0,0,0,0,0,0];var i=0;while(i<n){var x=iv(t[i+1]);if(x==0){cnt[0]+=1};while(x>0){cnt[x%10]+=1;x/=10};i+=1};var mx=0;i=0;while(i<10){if(cnt[i]>mx){mx=cnt[i]};i+=1};print("${mx}:");i=0;while(i<10){if(cnt[i]==mx){print(" ${i}")};i+=1};println();return }
    if (id == 160) { let T=iv(t[0]);var k=1;var q=0;while(q<T){let n=iv(t[k]);k+=1;var ok=true;var i=0;while(i<n){var j=0;while(j<n){if(i>j&&iv(t[k])!=0){ok=false};k+=1;j+=1};i+=1};println(if(ok){"YES"}else{"NO"});q+=1};return }
    if (id == 161) { let m=iv(t[0]);let n=iv(t[1]);var k=2;var i=0;while(i<m){var s=0;var j=0;while(j<n){s+=iv(t[k]);k+=1;j+=1};println(s);i+=1};return }
    if (id == 162) { let n=iv(t[0]);var a=ArrayList<Int64>();var k=1;var i=0;while(i<n*n){a.add(iv(t[k]));k+=1;i+=1};i=0;while(i<n){var rowMax=a[i*n];var j=1;while(j<n){if(a[i*n+j]>rowMax){rowMax=a[i*n+j]};j+=1};j=0;while(j<n){if(a[i*n+j]==rowMax){var colMin=a[j];var r=1;while(r<n){if(a[r*n+j]<colMin){colMin=a[r*n+j]};r+=1};if(rowMax==colMin){println("${i} ${j}");return}};j+=1};i+=1};println("NONE");return }
    if (id == 163) { var count=0;for(ch in ls[0].toArray()){if(isUpper(ch)&&ch!=65&&ch!=69&&ch!=73&&ch!=79&&ch!=85){count+=1}};println(count);return }
    if (id == 164) { var out="";for(ch in ls[0].toArray()){if(isUpper(ch)){out+=Rune(90-UInt32(ch)+65).toString()}else{out+=runeString(ch)}};println(out);return }
    if (id == 165) { var value=0;var negative=false;var seen=false;for(ch in ls[0].toArray()){if(ch==35){break};if(!seen&&ch==45){negative=true};var v:Int64=if(isDigit(ch)){Int64(UInt32(ch)-48)}else if(ch>=97&&ch<=102){Int64(UInt32(ch)-97+10)}else if(ch>=65&&ch<=70){Int64(UInt32(ch)-65+10)}else{99};if(v<16){value=value*16+v;seen=true}};println(if(negative){-value}else{value});return }
    if (id == 166) { var a=ArrayList<String>();for(x in t){a.add(x)};var i=0;while(i<a.size){var j=i+1;while(j<a.size){if(a[i]>a[j]){let z=a[i];a[i]=a[j];a[j]=z};j+=1};i+=1};println("After sorted:");for(x in a){println(x)};return }
    if (id == 167) { let n=iv(t[0]);var sum=0;var max=iv(t[1]);var min=max;var i=0;while(i<n){let x=iv(t[i+1]);sum+=x;if(x>max){max=x};if(x<min){min=x};i+=1};println("average = ${f2(Float64(sum)/Float64(n))}");println("max = ${f2(Float64(max))}");println("min = ${f2(Float64(min))}");return }
    if (id == 168) { let p=t[0].split(":");let h=iv(p[0]);let m=iv(p[1]);let s=iv(p[2]);let add=iv(t[1]);let total=(h*3600+m*60+s+add)%86400;let hh=(total/3600).format("2").replace(" ","0");let mm=(total/60%60).format("2").replace(" ","0");let ss=(total%60).format("2").replace(" ","0");println("${hh}:${mm}:${ss}");return }
    if (id == 169) { var x=dv(t[0])+dv(t[2]);var y=dv(t[1])+dv(t[3]);if(abs(x)<0.00005){x=0.0};if(abs(y)<0.00005){y=0.0};println("(${f1(x)}, ${f1(y)})");return }
    if (id == 170) { let n=iv(t[0]);var names=ArrayList<String>();var prices=ArrayList<Float64>();var i=0;while(i<n){names.add(ls[1+i*2]);prices.add(dv(ls[2+i*2]));i+=1};var hi=0;var lo=0;i=1;while(i<n){if(prices[i]>prices[hi]){hi=i};if(prices[i]<prices[lo]){lo=i};i+=1};println("${f2(prices[hi])}, ${names[hi]}");println("${f2(prices[lo])}, ${names[lo]}");return }
    if (id == 171) { let n=iv(t[0]);var names=ArrayList<String>();var birth=ArrayList<String>();var phone=ArrayList<String>();var i=0;while(i<n){names.add(t[i*3+1]);birth.add(t[i*3+2]);phone.add(t[i*3+3]);i+=1};i=0;while(i<n){var j=i+1;while(j<n){if(birth[i]>birth[j]){let z=birth[i];birth[i]=birth[j];birth[j]=z;let a=names[i];names[i]=names[j];names[j]=a;let b=phone[i];phone[i]=phone[j];phone[j]=b};j+=1};i+=1};i=0;while(i<n){println("${names[i]} ${birth[i]} ${phone[i]}");i+=1};return }
}

main() {
    let raw = getStdIn().readToEnd() ?? ""
    let t = fields(raw)
    solve(144, raw, t)
}
