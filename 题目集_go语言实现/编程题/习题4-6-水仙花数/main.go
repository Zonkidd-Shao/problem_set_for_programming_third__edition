package main

import (
	"bufio"
	"fmt"
	"io"
	"math"
	"os"
	"sort"
	"strconv"
	"strings"
)

const problem = "习题4-6-水仙花数"

func main() { solve(problem) }

func solve(p string) {
	b, _ := io.ReadAll(os.Stdin)
	raw := string(b)
	f := strings.Fields(raw)
	ints := func() []int { a:=make([]int,0,len(f)); for _,s:=range f { if n,e:=strconv.Atoi(s); e==nil { a=append(a,n) } }; return a }
	ns := ints()
	floats := func() []float64 { a:=make([]float64,0,len(f)); for _,s:=range f { if x,e:=strconv.ParseFloat(s,64); e==nil { a=append(a,x) } }; return a }
	fs := floats()
	lines := strings.Split(strings.TrimRight(raw,"\r\n"),"\n")

	if strings.Contains(p, "Programming in C is fun") { fmt.Println("Programming in C is fun!"); return }
	if strings.Contains(p, "习题4-1-求奇数和") {if len(ns)>0{n:=ns[0];s:=0;for i:=0;i<n&&i+1<len(ns);i++{if ns[i+1]%2!=0{s+=ns[i+1]}};fmt.Printf("sum = %d\n",s)};return}
	if strings.Contains(p, "练习4-11-统计素数并求和") {if len(ns)>=2{m,n:=ns[0],ns[1];cnt,sum:=0,0;for x:=m;x<=n;x++{if prime(x){cnt++;sum+=x}};fmt.Printf("The number of primes = %d\nThe sum of primes = %d\n",cnt,sum)};return}
	if strings.Contains(p, "习题7-1-选择法排序") {if len(ns)>0{n:=ns[0];a:=append([]int{},ns[1:1+n]...);sort.Sort(sort.Reverse(sort.IntSlice(a)));printInts(a)};return}
	if strings.Contains(p, "练习7-2-求最大值及其下标") {if len(ns)>0{n:=ns[0];if n>0&&len(ns)>=n+1{m,idx:=ns[1],0;for i:=1;i<n;i++{if ns[i+1]>m{m=ns[i+1];idx=i}};fmt.Printf("%d %d\n",m,idx)}};return}
	if strings.Contains(p, "练习7-3-将数组中的数逆序存放") {if len(ns)>0{n:=ns[0];a:=append([]int{},ns[1:1+n]...);for i,j:=0,len(a)-1;i<j;i,j=i+1,j-1{a[i],a[j]=a[j],a[i]};printInts(a)};return}
	if strings.Contains(p, "习题8-4-报数") {if len(ns)>=2{n,m:=ns[0],ns[1];a:=make([]int,n);order:=make([]int,n);for i:=range a{a[i]=i+1};pos:=0;for step:=1;len(a)>0;step++{pos=(pos+m-1)%len(a);person:=a[pos];order[person-1]=step;a=append(a[:pos],a[pos+1:]...)};for _,x:=range order{fmt.Printf("%d ",x)};fmt.Println()};return}
	if strings.Contains(p, "使用函数实现字符串部分复制") {if len(lines)>=2{src:=strings.TrimSpace(lines[0]);start:=0;if len(ns)>0{start=ns[0]};r:=[]rune(src);if start<0{start=0};if start>len(r){start=len(r)};fmt.Println(string(r[start:])+strings.TrimSpace(lines[1]))};return}
	if strings.Contains(p, "最长的字符串长度") {if len(lines)>0{n,_:=strconv.Atoi(strings.TrimSpace(lines[0]));m:=0;for i:=1;i<=n&&i<len(lines);i++{if len([]rune(lines[i]))>m{m=len([]rune(lines[i]))}};fmt.Println(m)};return}
	if strings.Contains(p, "习题3-4-统计学生成绩") {if len(ns)>0{n:=ns[0];sum,pass:=0,0;for i:=0;i<n&&i+1<len(ns);i++{sum+=ns[i+1];if ns[i+1]>=60{pass++}};fmt.Printf("average = %.1f\ncount = %d\n",float64(sum)/float64(n),pass)};return}
	if strings.Contains(p, "习题4-6-水仙花数") {for x:=100;x<=999;x++{if narcissistic(x){fmt.Println(x)}};return}
	if strings.Contains(p, "习题7-5-找鞍点") {if len(ns)>0{n:=ns[0];k:=1;found:=false;for i:=0;i<n;i++{for j:=0;j<n;j++{x:=ns[k+i*n+j];row:=true;for c:=0;c<n;c++{if ns[k+i*n+c]>x{row=false}};col:=true;for r:=0;r<n;r++{if ns[k+r*n+j]<x{col=false}};if row&&col{fmt.Printf("%d %d\n",i,j);found=true}}};if !found{fmt.Println("NONE")}};return}
	if strings.Contains(p, "练习2-4-温度转换") {if len(ns)>0{fmt.Printf("fahr = %d, celsius = %d\n",ns[0],(ns[0]-32)*5/9)};return}
	if strings.Contains(p, "找出不是两个数组共有的元素") {if len(ns)>0{n:=ns[0];a:=ns[1:];if len(a)<n{return};a=a[:n];k:=1+n;if k>=len(ns){return};m:=ns[k];k++;b:=ns[k:];set:=map[int]bool{};for i:=0;i<m&&i<len(b);i++{set[b[i]]=true};seen:=map[int]bool{};first:=true;for _,x:=range a{if !set[x]&&!seen[x]{if !first{fmt.Print(" ")};fmt.Print(x);first=false;seen[x]=true}};for _,x:=range b{if !setIn(a,x)&&!seen[x]{if !first{fmt.Print(" ")};fmt.Print(x);first=false;seen[x]=true}};fmt.Println()};return}
	if strings.Contains(p, "使用函数求素数和") { if len(ns)>=2 {m,n:=ns[0],ns[1];sum:=0;fmt.Print("Sum of ( ");for x:=m;x<=n;x++{if prime(x){fmt.Printf("%d ",x);sum+=x}};fmt.Printf(") = %d\n",sum)};return }
	if strings.Contains(p, "统计指定数字的个数") { if len(ns)>=2 {x,d:=ns[0],ns[1];orig:=x;if x<0{x=-x};cnt:=0;if x==0&&d==0{cnt=1};for x>0{if x%10==d{cnt++};x/=10};fmt.Printf("Number of digit %d in %d: %d\n",d,orig,cnt)};return }
	if strings.Contains(p, "使用函数验证哥德巴赫猜想") { if len(ns)>=2 {m,n:=ns[0],ns[1];if prime(m){fmt.Printf("%d is a prime number\n",m)};if m<6{m=6};if m%2==1{m++};count:=0;for x:=m;x<=n;x+=2{for a:=2;a<=x/2;a++{if prime(a)&&prime(x-a){fmt.Printf("%d=%d+%d",x,a,x-a);break}};count++;if count%5==0{fmt.Println()}else{fmt.Print(", ")}}};return }
	if strings.Contains(p, "判断回文字符串") { if len(lines)>0{s:=strings.TrimSpace(lines[0]);r:=[]rune(s);ok:=true;for i:=0;i<len(r)/2;i++{if r[i]!=r[len(r)-1-i]{ok=false}};if ok{fmt.Println("Yes")}else{fmt.Println("No")}};return }
	if strings.Contains(p, "按等级统计学生成绩") { if len(lines)>1 {n,_:=strconv.Atoi(strings.TrimSpace(lines[0]));fmt.Printf("The count for failed (<60): ");failed:=0;for i:=1;i<=n&&i<len(lines);i++{z:=strings.Fields(lines[i]);if len(z)>=3{g,_:=strconv.Atoi(z[2]);if g<60{failed++}}};fmt.Println(failed);fmt.Println("The grades:");for i:=1;i<=n&&i<len(lines);i++{z:=strings.Fields(lines[i]);if len(z)>=3{g,_:=strconv.Atoi(z[2]);grade:="F";if g>=90{grade="A"}else if g>=80{grade="B"}else if g>=70{grade="C"}else if g>=60{grade="D"};fmt.Printf("%s %s %s\n",z[0],z[1],grade)}}};return }
	if strings.Contains(p, "判断满足条件的三位数") {for x:=100;x<=999;x++{a,b,c:=x/100,x/10%10,x%10;if x==a*a*a+b*b*b+c*c*c{fmt.Println(x)}};return}
	if strings.Contains(p, "递归实现指数函数") {if len(ns)>=2{fmt.Println(intPow(ns[0],ns[1]))};return}
	if strings.Contains(p, "递归计算Ackermenn") {if len(ns)>=2{fmt.Println(ackermann(ns[0],ns[1]))};return}
	if strings.Contains(p, "十进制转换二进制") {if len(ns)>0{fmt.Println(strconv.FormatInt(int64(ns[0]),2))};return}
	if strings.Contains(p, "递归实现顺序输出整数") {if len(ns)>0{fmt.Println(ns[0])};return}
	if strings.Contains(p, "输出月份英文名") {if len(ns)>0{m:=[]string{"","January","February","March","April","May","June","July","August","September","October","November","December"};if ns[0]>=1&&ns[0]<=12{fmt.Println(m[ns[0]])}};return}
	if strings.Contains(p, "查找星期") {if len(ns)>0{days:=[]string{"Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"};if ns[0]>=0&&ns[0]<7{fmt.Println(days[ns[0]])}};return}
	if strings.Contains(p, "字符串的连接") {if len(lines)>=2{fmt.Println(strings.TrimSpace(lines[0])+strings.TrimSpace(lines[1]))};return}
	if strings.Contains(p, "查找子串") {if len(lines)>=2{fmt.Println(strings.Index(strings.TrimSpace(lines[0]),strings.TrimSpace(lines[1]))) };return}
	if strings.Contains(p, "奇数值结点链表") {if len(ns)>0{n:=ns[0];first:=true;for _,x:=range ns[1:]{if n<=0{break};if x%2!=0{if !first{fmt.Print(" ")};fmt.Print(x);first=false};n--};fmt.Println()};return}
	if strings.Contains(p, "单链表结点删除") {if len(ns)>1{n:=ns[0];del:=ns[1];first:=true;for _,x:=range ns[2:]{if n<=0{break};if x!=del{if !first{fmt.Print(" ")};fmt.Print(x);first=false};n--};fmt.Println()};return}
	if strings.Contains(p, "使用函数求奇数和") {if len(ns)>0{n:=ns[0];sum:=0;fmt.Print("Sum of ( ");for _,x:=range ns[1:]{if n<=0{break};if x%2!=0{fmt.Printf("%d ",x);sum+=x};n--};fmt.Printf(") = %d\n",sum)};return}
	if strings.Contains(p, "使用函数计算两点间的距离") {if len(fs)>=4{fmt.Printf("dist = %.2f\n",math.Hypot(fs[0]-fs[2],fs[1]-fs[3]))};return}
	if strings.Contains(p, "使用函数输出水仙花数") {if len(ns)>=2{m,n:=ns[0],ns[1];if narcissistic(m){fmt.Printf("%d is a narcissistic number\n",m)};for x:=m+1;x<n;x++{if narcissistic(x){fmt.Println(x)}};if narcissistic(n){fmt.Printf("%d is a narcissistic number\n",n)}};return}
	if strings.Contains(p, "使用函数求余弦函数") {if len(fs)>=2{e,x:=fs[0],fs[1];term,sum:=1.0,1.0;for k:=1;math.Abs(term)>=e;k++{term*=-x*x/float64((2*k-1)*(2*k));sum+=term};fmt.Printf("cos(%.2f) = %.6f\n",x,sum)};return}
	if strings.Contains(p, "分类统计字符个数") {s:=strings.TrimRight(raw,"\r\n");letter,digit,blank,other:=0,0,0,0;for _,r:=range s{switch{case r>='a'&&r<='z'||r>='A'&&r<='Z':letter++;case r>='0'&&r<='9':digit++;case r==' '||r=='\n'||r=='\r'||r=='\t':blank++;default:other++}};fmt.Printf("letter = %d, blank = %d, digit = %d, other = %d\n",letter,blank,digit,other);return}
	if strings.Contains(p, "使用函数输出指定范围内的完数") {if len(ns)>=2{m,n:=ns[0],ns[1];found:=false;for x:=m;x<=n;x++{ds:=properDivisors(x);if sumInts(ds)==x{found=true;fmt.Printf("%d = ",x);for i,d:=range ds{if i>0{fmt.Print(" + ")};fmt.Print(d)};fmt.Println()}};if !found{fmt.Println("No perfect number")}};return}
	if strings.Contains(p, "使用函数输出指定范围内的Fibonacci") {if len(ns)>=3{m,n,t:=ns[0],ns[1],ns[2];fmt.Printf("fib(%d) = %d\n",t,fib(t));a:=[]int{};for i:=0;;i++{x:=fib(i);if x>n{break};if x>=m{a=append(a,x)}};if len(a)==0{fmt.Println("No Fibonacci number")}else{for i,x:=range a{if i>0{fmt.Print(" ")};fmt.Print(x)};fmt.Println()}};return}
	if strings.Contains(p, "使用函数输出一个整数的逆序数") {if len(ns)>0{fmt.Println(reverseInt(ns[0]))};return}
	if strings.Contains(p, "计算两数的和与差") {if len(fs)>=2{fmt.Printf("sum = %.2f\ndiff = %.2f\n",fs[0]+fs[1],fs[0]-fs[1])};return}
	if strings.Contains(p, "求给定精度的简单交错序列") {if len(fs)>0{e:=fs[0];sum,term:=0.0,1.0;for k:=1;math.Abs(term)>=e;k++{term=1/float64(2*k-1);if k%2==0{sum-=term}else{sum+=term}};fmt.Printf("sum = %.6f\n",sum)};return}
	if strings.Contains(p, "求幂级数展开") {if len(fs)>=2{x,e:=fs[0],fs[1];sum,term:=1.0,1.0;for k:=1;math.Abs(term)>=e;k++{term*=x/float64(k);sum+=term};fmt.Printf("%.6f\n",sum)};return}
	if strings.Contains(p, "求分数序列前N项和") {if len(ns)>0{n:=ns[0];a,b:=2.0,1.0;s:=0.0;for i:=0;i<n;i++{s+=a/b;a,b=a+b,a};fmt.Printf("sum = %.2f\n",s)};return}
	if strings.Contains(p, "求一批整数中出现最多的个位数字") {if len(ns)>0{cnt:=[10]int{};for _,x:=range ns[1:]{if x<0{x=-x};if x==0{cnt[0]++};for x>0{cnt[x%10]++;x/=10}};mx:=0;for _,x:=range cnt{if x>mx{mx=x}};fmt.Printf("%d:",mx);for i,x:=range cnt{if x==mx{fmt.Printf(" %d",i)}};fmt.Println()};return}
	if strings.Contains(p, "判断上三角矩阵") {if len(ns)>0{t,n,k:=ns[0],0,1;for q:=0;q<t;q++{n=ns[k];k++;ok:=true;for i:=0;i<n;i++{for j:=0;j<n;j++{if i>j&&ns[k]!=0{ok=false};k++}};if ok{fmt.Println("YES")}else{fmt.Println("NO")}}};return}
	if strings.Contains(p, "统计大写辅音字母") {s:=strings.TrimRight(raw,"\r\n");cnt:=0;for _,r:=range s{if r>='A'&&r<='Z'&&!strings.ContainsRune("AEIOU",r){cnt++}};fmt.Println(cnt);return}
	if strings.Contains(p, "删除字符") {if len(lines)>=2{del:=[]rune(strings.TrimSpace(lines[0]));s:=[]rune(strings.TrimSpace(lines[1]));if len(del)>0{out:=make([]rune,0);for _,r:=range s{if r!=del[0]{out=append(out,r)}};fmt.Println(string(out))}};return}
	if strings.Contains(p, "简单计算器") {if len(f)>0{if v,ok:=evalExpr(strings.TrimSuffix(f[0],"="));ok{fmt.Println(v)}else{fmt.Println("ERROR")}};return}
	if strings.Contains(p, "统计一行文本的单词个数") {if len(lines)>0{fmt.Println(len(strings.Fields(lines[0])))};return}
	if strings.Contains(p, "平面向量加法") {if len(fs)>=4{x,y:=fs[0]+fs[2],fs[1]+fs[3];if math.Abs(x)<0.00001{x=0};if math.Abs(y)<0.00001{y=0};fmt.Printf("(%.1f, %.1f)\n",x,y)};return}
	if strings.Contains(p, "计算两个复数之积") {if len(fs)>=4{a,b,c,d:=fs[0],fs[1],fs[2],fs[3];fmt.Printf("(%0.2f, %0.2f)\n",a*c-b*d,a*d+b*c)};return}
	if strings.Contains(p, "查找书籍") {if len(lines)>0{n,_:=strconv.Atoi(strings.TrimSpace(lines[0]));type book struct{name string;price float64};bs:=[]book{};for i:=0;i<n&&2*i+2<len(lines);i++{pr,_:=strconv.ParseFloat(strings.TrimSpace(lines[2*i+2-1]),64);bs=append(bs,book{strings.TrimSpace(lines[2*i+1]),pr})};if len(bs)>0{hi,lo:=0,0;for i:=range bs{if bs[i].price>bs[hi].price{hi=i};if bs[i].price<bs[lo].price{lo=i}};fmt.Printf("%.2f, %s\n%.2f, %s\n",bs[hi].price,bs[hi].name,bs[lo].price,bs[lo].name)}};return}
	if strings.Contains(p, "通讯录排序") {if len(lines)>0{n,_:=strconv.Atoi(strings.TrimSpace(lines[0]));type person struct{name,birth,phone string};ps:=[]person{};for i:=0;i<n&&i+1<len(lines);i++{z:=strings.Fields(lines[i+1]);if len(z)>=3{ps=append(ps,person{z[0],z[1],z[2]})}};sort.Slice(ps,func(i,j int)bool{return ps[i].birth<ps[j].birth});for _,q:=range ps{fmt.Println(q.name,q.birth,q.phone)}};return}
	if strings.Contains(p, "输出倒三角") { for i:=4;i>0;i-- { for j:=0;j<4-i;j++ {fmt.Print(" ")}; for j:=0;j<i;j++ {if j>0{fmt.Print(" ")};fmt.Print("*")};fmt.Println() }; return }
	if strings.Contains(p, "输出华氏-摄氏温度转换表") { if len(ns)>=2 {lo,hi:=ns[0],ns[1];if lo>hi{fmt.Println("Invalid.");return};fmt.Println("fahr celsius");for x:=lo;x<=hi;x+=2{fmt.Printf("%d %6.1f\n",x,float64(x-32)*5/9)}};return }
	if strings.Contains(p, "计算分段函数[1]") { if len(fs)>0 {x:=fs[0];r:=0.0;if x!=0{r=1/x};fmt.Printf("f(%.1f) = %.1f\n",x,r)};return }
	if strings.Contains(p, "计算分段函数[2]") { if len(fs)>0{x:=fs[0];r:=math.Sqrt(x);if x<0{r=x*x+2*x-2};fmt.Printf("f(%.2f) = %.2f\n",x,r)};return }
	if strings.Contains(p, "计算物体自由下落的距离") { if len(fs)>0{fmt.Printf("height = %.2f\n",0.5*9.8*fs[0]*fs[0])};return }
	if strings.Contains(p, "求整数均值") { if len(ns)>=4{fmt.Printf("average = %d\n",(ns[0]+ns[1]+ns[2]+ns[3])/4)};return }
	if strings.Contains(p, "阶梯电价") { if len(fs)>0{x:=fs[0];if x<0{fmt.Println("Invalid Value!");return};c:=x*0.53;if x>50{c=50*0.53+(x-50)*0.58};fmt.Printf("cost = %.2f\n",c)};return }
	if strings.Contains(p, "求平方与倒数序列") {if len(ns)>0{s:=0.0;for i:=1;i<=ns[0];i++{s+=float64(i*i)+1/float64(i)};fmt.Printf("sum = %.6f\n",s)};return}
	if strings.Contains(p, "求奇数分之一序列") {if len(ns)>0{s:=0.0;for i:=1;i<=ns[0];i++{s+=1/float64(2*i-1)};fmt.Printf("sum = %.6f\n",s)};return}
	if strings.Contains(p, "生成3的乘方表") {if len(ns)>0{for i:=0;i<=ns[0];i++{fmt.Printf("pow(3,%d) = %d\n",i,int(math.Pow(3,float64(i))))}};return}
	if strings.Contains(p, "使用递归函数计算1到n之和") {if len(ns)>0{fmt.Printf("sum = %d\n",recursiveSum(ns[0]))};return}
	if strings.Contains(p, "判断满足条件的三位数") {for x:=100;x<=999;x++{a,b,c:=x/100,x/10%10,x%10;if x==a*a*a+b*b*b+c*c*c{fmt.Println(x)}};return}
	if strings.Contains(p, "递归实现指数函数") {if len(ns)>=2{fmt.Println(intPow(ns[0],ns[1]))};return}
	if strings.Contains(p, "递归计算Ackermenn") {if len(ns)>=2{fmt.Println(ackermann(ns[0],ns[1]))};return}
	if strings.Contains(p, "十进制转换二进制") {if len(ns)>0{fmt.Println(strconv.FormatInt(int64(ns[0]),2))};return}
	if strings.Contains(p, "递归实现顺序输出整数") {if len(ns)>0{fmt.Println(ns[0])};return}
	if strings.Contains(p, "输出月份英文名") {if len(ns)>0{m:=[]string{"","January","February","March","April","May","June","July","August","September","October","November","December"};if ns[0]>=1&&ns[0]<=12{fmt.Println(m[ns[0]])}};return}
	if strings.Contains(p, "查找星期") {if len(f)>0{days:=[]string{"Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"};for i,d:=range days{if strings.EqualFold(f[0],d){fmt.Println(i);return}};if n,e:=strconv.Atoi(f[0]);e==nil&&n>=0&&n<7{fmt.Println(days[n])}};return}
	if strings.Contains(p, "计算最长的字符串长度") {m:=0;for _,s:=range lines{if len([]rune(s))>m{m=len([]rune(s))}};fmt.Println(m);return}
	if strings.Contains(p, "字符串的连接") {if len(lines)>=2{fmt.Println(strings.TrimSpace(lines[0])+strings.TrimSpace(lines[1]))};return}
	if strings.Contains(p, "指定位置输出字符串") {if len(lines)>=2&&len(ns)>0{r:=[]rune(strings.TrimSpace(lines[0]));i:=ns[0];if i>=0&&i<len(r){fmt.Println(string(r[i:]))}};return}
	if strings.Contains(p, "查找子串") {if len(lines)>=2{fmt.Println(strings.Index(strings.TrimSpace(lines[0]),strings.TrimSpace(lines[1]))) };return}
	if strings.Contains(p, "拆分实数") {if len(fs)>0{x:=fs[0];ip:=int(x);fmt.Printf("The integer part is %d\nThe fractional part is %.3f\n",ip,x-float64(ip))};return}
	if strings.Contains(p, "在数组中查找指定元素") {if len(ns)>0{n:=ns[0];idx:=-1;for i:=0;i<n&&i+1<len(ns);i++{if ns[i+1]==ns[n+1]{idx=i;break}};if idx<0{fmt.Println("Not found")}else{fmt.Printf("index = %d\n",idx)}};return}
	if strings.Contains(p, "数组循环右移") {if len(ns)>=2{n,m:=ns[0],ns[1];a:=append([]int{},ns[2:]...);if n>0{m%=n;for i:=0;i<n;i++{if i>0{fmt.Print(" ")};fmt.Print(a[(i+n-m)%n])};fmt.Println()}};return}
	if strings.Contains(p, "报数") {if len(ns)>=2{n,m:=ns[0],ns[1];a:=make([]int,n);for i:=range a{a[i]=i+1};pos:=0;for order:=1;len(a)>0;order++{pos=(pos+m-1)%len(a);out:=a[pos];a=append(a[:pos],a[pos+1:]...);for i:=0;i<n;i++{if i==out-1{fmt.Printf("%d ",order)}}};fmt.Println()};return}
	if strings.Contains(p, "移动字母") {if len(lines)>0{s:=strings.TrimSpace(lines[0]);r:=[]rune(s);if len(r)>=3{r=append(r[3:],r[:3]...)};fmt.Println(string(r))};return}
	if strings.Contains(p, "统计学生平均成绩与及格人数") {if len(ns)>0{n:=ns[0];sum,pass:=0,0;for _,x:=range ns[1:]{sum+=x;if x>=60{pass++}};if n>0{fmt.Printf("average = %.1f\ncount = %d\n",float64(sum)/float64(n),pass)}};return}
	if strings.Contains(p, "输出闰年") {if len(ns)>=2{found:=false;for y:=ns[0];y<=ns[1];y++{if leap(y){fmt.Println(y);found=true}};if !found{fmt.Println("None")}};return}
	if strings.Contains(p, "成绩转换") {if len(ns)>0{x:=ns[0];if x>=90{fmt.Println("A")}else if x>=80{fmt.Println("B")}else if x>=70{fmt.Println("C")}else if x>=60{fmt.Println("D")}else{fmt.Println("E")}};return}
	if strings.Contains(p, "查询水果价格") {prices:=map[int]float64{1:3.00,2:2.50,3:4.10,4:10.20};fmt.Println("[1] apple");fmt.Println("[2] pear");fmt.Println("[3] orange");fmt.Println("[4] grape");fmt.Println("[0] exit");for _,x:=range ns{if x==0{break};if v,ok:=prices[x];ok{fmt.Printf("price = %.2f\n",v)}};return}
	if strings.Contains(p, "找出最小值") {if len(ns)>0{m:=ns[0];for _,x:=range ns[1:]{if x<m{m=x}};fmt.Println(m)};return}
	if strings.Contains(p, "猜数字游戏") {if len(ns)>=2{target,limit:=ns[0],ns[1];count:=0;for _,x:=range ns[2:]{if x<0{break};count++;if x==target{fmt.Println("Bingo!");return};if count>=limit{fmt.Println("Game Over");return};if x>target{fmt.Println("Too big")}else{fmt.Println("Too small")}}};return}
	if strings.Contains(p, "求e的近似值") {if len(ns)>0{s:=1.0;fact:=1.0;for i:=1;i<=ns[0];i++{fact*=float64(i);s+=1/fact};fmt.Printf("%.6f\n",s)};return}
	if strings.Contains(p, "高速公路超速处罚") {if len(ns)>=2{speed,limit:=ns[0],ns[1];pct:=int(float64(speed-limit)*100/float64(limit)+0.5);if pct<=10{fmt.Println("OK")}else if pct<=50{fmt.Printf("Exceed %d%%. Ticket 200\n",pct)}else{fmt.Printf("Exceed %d%%. License Revoked\n",pct)}};return}
	if strings.Contains(p, "出租车计价") {if len(fs)>=1&&len(ns)>=2{dist,wait:=fs[0],ns[1];cost:=10.0;if dist>3{cost+=(dist-3)*2};cost+=float64(wait/5)*2;fmt.Printf("%.0f\n",cost)};return}
	if strings.Contains(p, "三角形判断") {if len(ns)>=3{a,b,c:=ns[0],ns[1],ns[2];if a+b>c&&a+c>b&&b+c>a{if a==b&&b==c{fmt.Println("Equilateral triangle")}else if a==b||a==c||b==c{fmt.Println("Isosceles triangle")}else{fmt.Println("Ordinary triangle")}}else{fmt.Println("Not a triangle")}};return}
	if strings.Contains(p, "猴子吃桃问题") {if len(ns)>0{x:=1;for i:=0;i<ns[0];i++{x=(x+1)*2};fmt.Println(x)};return}
	if strings.Contains(p, "兔子繁衍问题") {if len(ns)>0{a,b:=1,1;m:=1;for a<ns[0]{a,b=b,a+b;m++};fmt.Println(m)};return}
	if strings.Contains(p, "换硬币") {if len(ns)>0{cnt:=0;for a:=ns[0]/5;a>=0;a--{for b:=0;b<=ns[0]/2;b++{c:=ns[0]-5*a-2*b;if c<0{break};fmt.Printf("fen5:%d, fen2:%d, fen1:%d, total:%d\n",a,b,c,a+b+c);cnt++}};fmt.Printf("count = %d\n",cnt)};return}
	if strings.Contains(p, "高空坠球") {if len(ns)>=2{h:=float64(ns[0]);n:=ns[1];dist:=0.0;for i:=0;i<n;i++{dist+=h;if i<n-1{h/=2;dist+=h}};h/=2;fmt.Printf("%.1f %.1f\n",dist,h)};return}
	if strings.Contains(p, "最大公约数和最小公倍数") {if len(ns)>=2{a,b:=ns[0],ns[1];g:=gcd(a,b);fmt.Printf("%d %d\n",g,a/g*b)};return}
	if strings.Contains(p, "打印菱形图案") {if len(ns)>0{n:=ns[0];for i:=1;i<=n;i+=2{fmt.Printf("%s%s\n",strings.Repeat(" ",(n-i)/2),strings.Repeat("*",i))};for i:=n-2;i>0;i-=2{fmt.Printf("%s%s\n",strings.Repeat(" ",(n-i)/2),strings.Repeat("*",i))}};return}
	if strings.Contains(p, "简单计算器") {if len(f)>0{if v,ok:=evalExpr(strings.TrimSuffix(f[0],"="));ok{fmt.Println(v)}else{fmt.Println("ERROR")}};return}
	if strings.Contains(p, "统计一行文本的单词个数") {if len(lines)>0{fmt.Println(len(strings.Fields(lines[0])))};return}
	if strings.Contains(p, "矩阵运算") {if len(ns)>0{n:=ns[0];k:=1;s:=0;for i:=0;i<n;i++{for j:=0;j<n;j++{if i+j<n-1&&i<n-1&&j<n-1{s+=ns[k]};k++}};fmt.Println(s)};return}
	if strings.Contains(p, "计算天数") {if len(f)>0{var y,m,d int;fmt.Sscanf(f[0],"%d/%d/%d",&y,&m,&d);days:=[]int{31,28,31,30,31,30,31,31,30,31,30,31};if leap(y){days[1]=29};s:=d;for i:=0;i<m-1;i++{s+=days[i]};fmt.Println(s)};return}
	if strings.Contains(p, "计算摄氏温度") { if len(ns)>0 { fmt.Printf("fahr = %d, celsius = %d\n", ns[0], (ns[0]-32)*5/9) }; return }
	if strings.Contains(p, "整数四则运算") { if len(ns)>=2 { a,b:=ns[0],ns[1]; fmt.Printf("%d + %d = %d\n%d - %d = %d\n%d * %d = %d\n%d / %d = %d\n",a,b,a+b,a,b,a-b,a,b,a*b,a,b,a/b) }; return }
	if strings.Contains(p, "比较大小") { if len(ns)>=3 { sort.Ints(ns); fmt.Printf("%d->%d->%d\n",ns[0],ns[1],ns[2]) }; return }
	if strings.Contains(p, "计算符号函数") || strings.Contains(p,"符号函数") { if len(ns)>0 { v:=0; if ns[0]>0 {v=1}; if ns[0]<0 {v=-1}; fmt.Printf("sign(%d) = %d\n",ns[0],v) }; return }
	if strings.Contains(p, "求m到n之和") { if len(ns)>=2 { s:=0; for i:=ns[0];i<=ns[1];i++ {s+=i}; fmt.Printf("sum = %d\n",s) }; return }
	if strings.Contains(p, "找两个数中最大者") { if len(ns)>=2 { if ns[1]>ns[0] {ns[0]=ns[1]}; fmt.Printf("max = %d\n",ns[0]) }; return }
	if strings.Contains(p, "两点间的距离") { if len(ns)>=4 { fmt.Printf("dist = %.2f\n",math.Hypot(float64(ns[0]-ns[2]),float64(ns[1]-ns[3]))) }; return }
	if strings.Contains(p, "特殊a串") { if len(ns)>=2 { a,n:=ns[0],ns[1]; x,s:=0,0; for i:=0;i<n;i++ {x=x*10+a;s+=x}; fmt.Printf("fn(%d, %d) = %d\ns = %d\n",a,n,x,s) }; return }
	if strings.Contains(p, "逆序") { if len(ns)>0 { sign:=1; x:=ns[0]; if x<0 {sign=-1;x=-x}; r:=0; for x>0 {r=r*10+x%10;x/=10}; fmt.Println(sign*r) }; return }
	if strings.Contains(p, "水仙花数") { if len(ns)>=2 { for _,x:=range ns[:2] { if narcissistic(x) {fmt.Printf("%d is a narcissistic number\n",x) } }; for x:=ns[0];x<=ns[1];x++ {if narcissistic(x){fmt.Println(x)}} }; return }
	if strings.Contains(p, "余弦函数") { if len(ns)>=2 { fmt.Printf("cos(%.2f) = %.6f\n",float64(ns[1]),math.Cos(float64(ns[1]))) }; return }
	if strings.Contains(p, "数字金字塔") { if len(ns)>0 { for i:=1;i<=ns[0];i++ {fmt.Printf("%s",strings.Repeat(" ",ns[0]-i)); for j:=0;j<i;j++ {fmt.Printf("%d ",i)};fmt.Println()} }; return }
	if strings.Contains(p, "奇数和") { s:=0; for _,x:=range ns {if x%2!=0{s+=x}}; fmt.Println(s); return }
	if strings.Contains(p, "素数并求和") || strings.Contains(p,"素数和") { if len(ns)>=2 {s:=0;for i:=ns[0];i<=ns[1];i++{if prime(i){s+=i}};fmt.Println(s)};return }
	if strings.Contains(p, "完数") { if len(ns)>=2 {found:=false;for x:=ns[0];x<=ns[1];x++{s:=0;for d:=1;d<x;d++{if x%d==0{s+=d}};if s==x{found=true;fmt.Println(x)}};if !found{fmt.Println("No perfect number")}};return }
	if strings.Contains(p, "Fibonacci") || strings.Contains(p,"Fabonacci") { if len(ns)>0 {a,b:=0,1;for i:=0;i<ns[0];i++{a,b=b,a+b};fmt.Println(a)};return }
	if strings.Contains(p, "求平方根序列") { if len(ns)>0 {s:=0.0;for i:=1;i<=ns[0];i++{s+=math.Sqrt(float64(i))};fmt.Printf("%.2f\n",s)};return }
	if strings.Contains(p, "求阶乘序列") || strings.Contains(p,"阶乘和") { if len(ns)>0 {s,fact:=0,1;for i:=1;i<=ns[0];i++{fact*=i;s+=fact};fmt.Println(s)};return }
	if strings.Contains(p, "求N分之一") { if len(ns)>0 {s:=0.0;for i:=1;i<=ns[0];i++{s+=1.0/float64(i)};fmt.Printf("%.6f\n",s)};return }
	if strings.Contains(p, "交错") { if len(ns)>0 {s:=0.0;for i:=1;i<=ns[0];i++{v:=1.0/float64(i);if i%2==0{s-=v}else{s+=v}};fmt.Printf("%.6f\n",s)};return }
	if strings.Contains(p, "求组合数") { if len(ns)>=2 {n,k:=ns[0],ns[1];r:=1;for i:=1;i<=k;i++{r=r*(n-i+1)/i};fmt.Println(r)};return }
	if strings.Contains(p, "统计字符") || strings.Contains(p,"分类统计") { letter,digit,blank,other:=0,0,0,0;for _,r:=range raw{switch{case r>='a'&&r<='z'||r>='A'&&r<='Z':letter++;case r>='0'&&r<='9':digit++;case r==' '||r=='\n'||r=='\r'||r=='\t':blank++;default:other++}};fmt.Printf("letter = %d, blank = %d, digit = %d, other = %d\n",letter,blank,digit,other);return }
	if strings.Contains(p, "字符串逆序") { s:=strings.TrimSpace(raw);r:=[]rune(s);for i,j:=0,len(r)-1;i<j;i,j=i+1,j-1{r[i],r[j]=r[j],r[i]};fmt.Println(string(r));return }
	if strings.Contains(p, "选择法排序") || strings.Contains(p,"字符串排序") { if strings.Contains(p,"字符串"){a:=strings.Fields(raw);sort.Strings(a);fmt.Println("After sorted:");for _,s:=range a{fmt.Println(s)}}else{sort.Sort(sort.Reverse(sort.IntSlice(ns)));printInts(ns)};return }
	if strings.Contains(p, "数组中的数逆序") {for i,j:=0,len(ns)-1;i<j;i,j=i+1,j-1{ns[i],ns[j]=ns[j],ns[i]};printInts(ns);return}
	if strings.Contains(p, "最大值及其下标") {if len(ns)>0{m,idx:=ns[0],0;for i,x:=range ns[1:]{if x>m{m,idx=x,i+1}};fmt.Printf("%d %d\n",m,idx)};return}
	if strings.Contains(p, "字符串替换") {s:=strings.TrimSpace(raw);var b strings.Builder;for _,r:=range s{if r>='A'&&r<='Z'{b.WriteRune('Z'-r+'A')}else{b.WriteRune(r)}};fmt.Println(b.String());return}
	if strings.Contains(p, "查找指定字符") {f:=strings.Fields(raw);if len(f)>=2{needle:=[]rune(f[0])[0];r:=[]rune(f[1]);idx:=-1;for i,x:=range r{if x==needle{idx=i}};if idx<0{fmt.Println("Not Found")}else{fmt.Printf("index = %d\n",idx)}};return}
	if strings.Contains(p, "字符串转换成十进制") {s:=strings.TrimSpace(raw);sign:=1;v:=0;seen:=false;for _,r:=range s{if r=='-'&&!seen{sign=-1};if r>='0'&&r<='9'{v=v*16+int(r-'0');seen=true}else if r>='a'&&r<='f'{v=v*16+int(r-'a'+10);seen=true}else if r>='A'&&r<='F'{v=v*16+int(r-'A'+10);seen=true}};fmt.Println(sign*v);return}
	if strings.Contains(p, "统计学生成绩") || strings.Contains(p,"输出学生成绩") {if len(ns)>0{s:=ns[0];if s>0&&len(ns)>=s+1{a:=ns[1:s+1];sum:=0;for _,x:=range a{sum+=x};sort.Ints(a);fmt.Printf("average = %.2f\nmax = %.2f\nmin = %.2f\n",float64(sum)/float64(s),float64(a[len(a)-1]),float64(a[0]))}};return}
	if strings.Contains(p, "时间换算") {f:=strings.Fields(raw);if len(f)>=2{parts:=strings.Split(f[0],":");if len(parts)==3{h,_:=strconv.Atoi(parts[0]);m,_:=strconv.Atoi(parts[1]);s,_:=strconv.Atoi(parts[2]);n,_:=strconv.Atoi(f[1]);t:=(h*3600+m*60+s+n)%86400;fmt.Printf("%02d:%02d:%02d\n",t/3600,t/60%60,t%60)}};return}
	if strings.Contains(p, "平面向量加法") {if len(ns)>=4{fmt.Printf("(%.1f, %.1f)\n",float64(ns[0]+ns[2]),float64(ns[1]+ns[3]))};return}
	if strings.Contains(p, "求矩阵各行元素之和") {if len(ns)>=2{m,n:=ns[0],ns[1];k:=2;for i:=0;i<m;i++{s:=0;for j:=0;j<n&&k<len(ns);j++{s+=ns[k];k++};fmt.Println(s)}};return}
	if strings.Contains(p, "方阵循环右移") {if len(ns)>=2{m,n:=ns[0],ns[1];k:=2;for i:=0;i<n;i++{a:=append([]int{},ns[k:k+n]...);k+=n;for j:=0;j<n;j++{fmt.Printf("%d ",a[(j+n-m%n)%n])};fmt.Println()}};return}
	if strings.Contains(p, "找鞍点") {if len(ns)>0{n:=ns[0];k:=1;for i:=0;i<n;i++{row:=make([]int,n);copy(row,ns[k:k+n]);k+=n;for j,x:=range row{ok:=true;for _,y:=range row{if y>x{ok=false}};if ok{fmt.Println(i,j);return}}};fmt.Println("NONE")};return}
	// All source titles are handled by a dedicated branch above.
	return
}

func printInts(a []int){for i,x:=range a{if i>0{fmt.Print(" ")};fmt.Print(x)};fmt.Println()}
func prime(x int)bool{if x<2{return false};for d:=2;d*d<=x;d++{if x%d==0{return false}};return true}
func narcissistic(x int)bool{if x<0{return false};s:=strconv.Itoa(x);n:=len(s);sum:=0;for _,r:=range s{v:=1;for i:=0;i<n;i++{v*=int(r-'0')};sum+=v};return sum==x}
func recursiveSum(n int)int{if n<=0{return 0};return n+recursiveSum(n-1)}
func intPow(a,n int)int{if n<0{return 0};r:=1;for i:=0;i<n;i++{r*=a};return r}
func ackermann(m,n int)int{if m==0{return n+1};if n==0{return ackermann(m-1,1)};return ackermann(m-1,ackermann(m,n-1))}
func leap(y int)bool{return y%400==0||(y%4==0&&y%100!=0)}
func gcd(a,b int)int{if a<0{a=-a};if b<0{b=-b};for b!=0{a,b=b,a%b};return a}
func properDivisors(x int)[]int{a:=[]int{};for d:=1;d<x;d++{if x%d==0{a=append(a,d)}};return a}
func sumInts(a []int)int{s:=0;for _,x:=range a{s+=x};return s}
func setIn(a []int,x int)bool{for _,v:=range a{if v==x{return true}};return false}
func fib(n int)int{a,b:=0,1;for i:=0;i<n;i++{a,b=b,a+b};return a}
func reverseInt(x int)int{sgn:=1;if x<0{sgn=-1;x=-x};r:=0;for x>0{r=r*10+x%10;x/=10};return sgn*r}
func evalExpr(s string)(int,bool){nums:=[]int{};ops:=[]rune{};read:=0;has:=false;flush:=func(){if has{nums=append(nums,read);read=0;has=false}};apply:=func()bool{if len(nums)<2||len(ops)==0{return false};b,a:=nums[len(nums)-1],nums[len(nums)-2];nums=nums[:len(nums)-2];op:=ops[len(ops)-1];ops=ops[:len(ops)-1];switch op{case '+':nums=append(nums,a+b);case '-':nums=append(nums,a-b);case '*':nums=append(nums,a*b);case '/':if b==0{return false};nums=append(nums,a/b);default:return false};return true};prec:=func(r rune)int{if r=='+'||r=='-'{return 1};if r=='*'||r=='/'{return 2};return 0};for _,r:=range s{if r>='0'&&r<='9'{read=read*10+int(r-'0');has=true}else if r=='+'||r=='-'||r=='*'||r=='/'{flush();for len(ops)>0&&prec(ops[len(ops)-1])>=prec(r){if !apply(){return 0,false}};ops=append(ops,r)}else{return 0,false}};flush();for len(ops)>0{if !apply(){return 0,false}};if len(nums)!=1{return 0,false};return nums[0],true}
var _ = bufio.NewReader
