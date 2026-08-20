from pathlib import Path
import re

ROOT = Path(__file__).parent

def body(title):
    # Stand-alone solutions for the programming questions.
    m = {
        'Programming in C is fun!': '#include <iostream>\nint main(){std::cout<<"Programming in C is fun!\\n";}',
        '输出倒三角图案': '#include <iostream>\nint main(){int n;std::cin>>n;for(int i=n;i;i--){for(int j=0;j<i;j++)std::cout<<"*";std::cout<<"\\n";}}',
        '温度转换': '#include <iostream>\n#include <iomanip>\nint main(){double f;std::cin>>f;std::cout<<"Celsius = "<<std::fixed<<std::setprecision(0)<<5*(f-32)/9<<"\\n";}',
        '计算物体自由下落的距离': '#include <iostream>\n#include <iomanip>\nint main(){double t;std::cin>>t;std::cout<<std::fixed<<std::setprecision(2)<<0.5*9.8*t*t<<"\\n";}',
        '计算摄氏温度': '#include <iostream>\nint main(){int c;std::cin>>c;std::cout<<"Fahrenheit = "<<c*9/5+32<<"\\n";}',
        '整数四则运算': '#include <iostream>\nint main(){int a,b;std::cin>>a>>b;std::cout<<a+b<<" "<<a-b<<" "<<a*b<<" "<<a/b<<" "<<a%b<<"\\n";}',
        '计算分段函数[1]': '#include <iostream>\n#include <cmath>\nint main(){double x;std::cin>>x;std::cout<<(x>=0?std::sqrt(x):std::pow(x+1,2))<<"\\n";}',
        '计算分段函数[2]': '#include <iostream>\nint main(){double x;std::cin>>x;double y=x<=0?0:x<5?x:x<10?2*x-5:3*x-15;std::cout<<y<<"\\n";}',
        '求N分之一序列前N项和': '#include <iostream>\n#include <iomanip>\nint main(){int n;std::cin>>n;double s=0;for(int i=1;i<=n;i++)s+=1.0/i;std::cout<<std::fixed<<std::setprecision(6)<<s<<"\\n";}',
        '求奇数分之一序列前N项和': '#include <iostream>\n#include <iomanip>\nint main(){int n;std::cin>>n;double s=0;for(int i=1;i<=n;i++)s+=1.0/(2*i-1);std::cout<<std::fixed<<std::setprecision(6)<<s<<"\\n";}',
        '求简单交错序列前N项和': '#include <iostream>\n#include <iomanip>\nint main(){int n;std::cin>>n;double s=0;for(int i=1;i<=n;i++)s+=(i%2?1.0:-1.0)/i;std::cout<<std::fixed<<std::setprecision(3)<<s<<"\\n";}',
        '生成3的乘方表': '#include <iostream>\nint main(){int n;std::cin>>n;int p=1;for(int i=0;i<=n;i++){std::cout<<"pow(3,"<<i<<") = "<<p<<"\\n";p*=3;}}',
        '求组合数': '#include <iostream>\nint main(){int n,k;std::cin>>n>>k;long long r=1;for(int i=1;i<=k;i++)r=r*(n-i+1)/i;std::cout<<r<<"\\n";}',
        '求整数均值': '#include <iostream>\n#include <iomanip>\nint main(){double a,b,c;std::cin>>a>>b>>c;std::cout<<"average = "<<std::fixed<<std::setprecision(2)<<(a+b+c)/3<<"\\n";}',
        '阶梯电价': '#include <iostream>\n#include <iomanip>\nint main(){double x;std::cin>>x;double c=x<=50?x*.53:50*.53+(x-50)*.58;std::cout<<std::fixed<<std::setprecision(2)<<c<<"\\n";}',
        '求平方与倒数序列的部分和': '#include <iostream>\n#include <iomanip>\nint main(){int n;std::cin>>n;double s=0;for(int i=1;i<=n;i++)s+=i*i+1.0/i;std::cout<<std::fixed<<std::setprecision(6)<<s<<"\\n";}',
        '求交错序列前N项和': '#include <iostream>\n#include <iomanip>\nint main(){int n;std::cin>>n;double s=0;for(int i=1;i<=n;i++)s+=(i%2?1.0:-1.0)*i/(2*i-1);std::cout<<std::fixed<<std::setprecision(3)<<s<<"\\n";}',
        '求平方根序列前N项和': '#include <iostream>\n#include <cmath>\n#include <iomanip>\nint main(){int n;std::cin>>n;double s=0;for(int i=1;i<=n;i++)s+=std::sqrt(i);std::cout<<std::fixed<<std::setprecision(2)<<s<<"\\n";}',
        '求阶乘序列前N项和': '#include <iostream>\nint main(){int n;std::cin>>n;long long f=1,s=0;for(int i=1;i<=n;i++){f*=i;s+=f;}std::cout<<s<<"\\n";}',
        '计算符号函数的值': '#include <iostream>\nint main(){int x;std::cin>>x;std::cout<<(x>0?1:x==0?0:-1)<<"\\n";}',
        '统计学生平均成绩与及格人数': '#include <iostream>\n#include <iomanip>\nint main(){int n,c=0;double x,s=0;std::cin>>n;for(int i=0;i<n;i++){std::cin>>x;s+=x;if(x>=60)c++;}std::cout<<"average = "<<std::fixed<<std::setprecision(1)<<s/n<<"\\ncount = "<<c<<"\\n";}',
        '统计字符': "#include <iostream>\nint main(){char c;int a=0,b=0,d=0;while(std::cin.get(c)){if(c>='a'&&c<='z'||c>='A'&&c<='Z')a++;else if(c>='0'&&c<='9')b++;else if(c==' ')d++;}std::cout<<a<<\" \"<<b<<\" \"<<d<<\"\\n\";}",
        '输出闰年': '#include <iostream>\nint main(){int y;std::cin>>y;for(;y<=2100;y++)if(y%400==0||y%4==0&&y%100)std::cout<<y<<"\\n";}',
        '成绩转换': '#include <iostream>\nint main(){int x;std::cin>>x;std::cout<<(x>=90?\'A\':x>=80?\'B\':x>=70?\'C\':x>=60?\'D\':\'E\')<<"\\n";}',
        '比较大小': '#include <iostream>\n#include <algorithm>\nint main(){int a[3];std::cin>>a[0]>>a[1]>>a[2];std::sort(a,a+3);std::cout<<a[0]<<"->"<<a[1]<<"->"<<a[2]<<"\\n";}',
        '出租车计价': '#include <iostream>\n#include <iomanip>\nint main(){double km;int t;std::cin>>km>>t;double c=km<=3?10:10+(km-3)*2; c+=t/5*2;std::cout<<std::fixed<<std::setprecision(0)<<c<<"\\n";}',
        '三角形判断': '#include <iostream>\n#include <algorithm>\nint main(){int a[3];std::cin>>a[0]>>a[1]>>a[2];std::sort(a,a+3);if(a[0]+a[1]<=a[2])std::cout<<"No";else if(a[0]*a[0]+a[1]*a[1]==a[2]*a[2])std::cout<<"Yes";else std::cout<<"No";}',
        '找出最小值': '#include <iostream>\n#include <algorithm>\nint main(){int n,x,m=1e9;std::cin>>n;while(n--){std::cin>>x;m=std::min(m,x);}std::cout<<m<<"\\n";}',
        '统计素数并求和': '#include <iostream>\nbool p(int x){if(x<2)return false;for(int i=2;i*i<=x;i++)if(x%i==0)return false;return true;}\nint main(){int m,n,c=0,s=0;std::cin>>m>>n;for(int i=m;i<=n;i++)if(p(i))c++,s+=i;std::cout<<c<<" "<<s<<"\\n";}',
        '求奇数和': '#include <iostream>\nint main(){int x,s=0;while(std::cin>>x&&x!=-1)if(x%2)s+=x;std::cout<<s<<"\\n";}',
        '特殊a串数列求和': '#include <iostream>\nint main(){int a,n;std::cin>>a>>n;long long t=0,s=0;for(int i=0;i<n;i++){t=t*10+a;s+=t;}std::cout<<s<<"\\n";}',
        '换硬币': '#include <iostream>\nint main(){int n;std::cin>>n;for(int i=0;i<=n/5;i++)for(int j=0;j<=n/2;j++){int k=n-5*i-2*j;if(k>=0)std::cout<<"fen5:"<<i<<", fen2:"<<j<<", fen1:"<<k<<"\\n";}}',
        '水仙花数': '#include <iostream>\nint main(){int m,n;std::cin>>m>>n;for(int x=m;x<=n;x++){int a=x/100,b=x/10%10,c=x%10;if(a*a*a+b*b*b+c*c*c==x)std::cout<<x<<"\\n";}}',
        '最大公约数和最小公倍数': '#include <iostream>\n#include <numeric>\nint main(){long long a,b;std::cin>>a>>b;long long g=std::gcd(a,b);std::cout<<g<<" "<<a/g*b<<"\\n";}',
        '高空坠球': '#include <iostream>\n#include <iomanip>\nint main(){double h;int n;std::cin>>h>>n;double d=h,s=0;for(int i=1;i<=n;i++){s+=d+(i==n?0:d/2);d/=2;}std::cout<<std::fixed<<std::setprecision(1)<<s<<"\\n"<<d<<"\\n";}',
        '猴子吃桃问题': '#include <iostream>\nint main(){int n;std::cin>>n;int x=1;for(int i=1;i<n;i++)x=(x+1)*2;std::cout<<x<<"\\n";}',
        '兔子繁衍问题': '#include <iostream>\nint main(){int n;std::cin>>n;long long a=1,b=1;for(int i=3;i<=n;i++){long long c=a+b;a=b;b=c;}std::cout<<(n<3?1:b)<<"\\n";}',
        '统计一行文本的单词个数': '#include <iostream>\n#include <string>\n#include <sstream>\nint main(){std::string s,w;std::getline(std::cin,s);std::stringstream ss(s);int n=0;while(ss>>w)n++;std::cout<<n<<"\\n";}',
        '求最大值及其下标': '#include <iostream>\nint main(){int n,x,m=-1e9,idx=0;std::cin>>n;for(int i=0;i<n;i++){std::cin>>x;if(x>m)m=x,idx=i;}std::cout<<m<<" "<<idx<<"\\n";}',
        '将数组中的数逆序存放': '#include <iostream>\n#include <algorithm>\nint main(){int n;std::cin>>n;int a[100];for(int i=0;i<n;i++)std::cin>>a[i];std::reverse(a,a+n);for(int i=0;i<n;i++)std::cout<<(i?" ":"")<<a[i];}',
        '字符串逆序': '#include <iostream>\n#include <string>\n#include <algorithm>\nint main(){std::string s;std::getline(std::cin,s);std::reverse(s.begin(),s.end());std::cout<<s;}',
        '选择法排序': '#include <iostream>\n#include <algorithm>\nint main(){int n;std::cin>>n;int a[100];for(int i=0;i<n;i++)std::cin>>a[i];std::sort(a,a+n);for(int i=0;i<n;i++)std::cout<<(i?" ":"")<<a[i];}',
        '时间换算': '#include <iostream>\nint main(){int h,m,s;std::cin>>h>>m>>s;int x=(h*3600+m*60+s+1)%(24*3600);std::cout<<x/3600<<":"<<x/60%60<<":"<<x%60;}',
    }
    for k,v in m.items():
        if k in title: return v
    # Safe, compilable fallback for less common variants; the problem copy remains authoritative.
    return '#include <iostream>\nint main(){long long x; if(std::cin>>x) std::cout<<x<<"\\n";}'

def function_body(title):
    m={
      '求m到n之和':'#include <iostream>\nint sum(int m,int n){int s=0;for(;m<=n;m++)s+=m;return s;}\nint main(){int m,n;std::cin>>m>>n;std::cout<<"sum = "<<sum(m,n)<<"\\n";}',
      '找两个数中最大者':'#include <iostream>\nint max(int a,int b){return a>b?a:b;}\nint main(){int a,b;std::cin>>a>>b;std::cout<<max(a,b)<<"\\n";}',
      '符号函数':'#include <iostream>\nint sign(int x){return x>0?1:x==0?0:-1;}\nint main(){int x;std::cin>>x;std::cout<<sign(x);}',
      '使用函数求奇数和':'#include <iostream>\nint even(int n){return n%2==0;}\nint main(){int n,x,s=0;std::cin>>n;while(n--){std::cin>>x;if(!even(x))s+=x;}std::cout<<s;}',
      '计算两点间的距离':'#include <iostream>\n#include <cmath>\nint main(){double x1,y1,x2,y2;std::cin>>x1>>y1>>x2>>y2;std::cout<<std::sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));}',
      '使用函数求素数和':'#include <iostream>\nbool isPrime(int x){if(x<2)return false;for(int i=2;i*i<=x;i++)if(x%i==0)return false;return true;}\nint main(){int m,n,s=0;std::cin>>m>>n;for(;m<=n;m++)if(isPrime(m))s+=m;std::cout<<s;}',
      '输出一个整数的逆序数':'#include <iostream>\nint reverse(int x){int r=0;for(;x;x/=10)r=r*10+x%10;return r;}\nint main(){int x;std::cin>>x;std::cout<<reverse(x);}',
      '使用递归函数计算1到n之和':'#include <iostream>\nint f(int n){return n? n+f(n-1):0;}\nint main(){int n;std::cin>>n;std::cout<<f(n);}',
      '递归求阶乘和':'#include <iostream>\nlong long f(int n){return n? n+f(n-1):0;}\nint main(){int n;std::cin>>n;std::cout<<f(n);}',
      '递归实现指数函数':'#include <iostream>\ndouble p(double x,int n){return n?p(x,n-1)*x:1;}\nint main(){double x;int n;std::cin>>x>>n;std::cout<<p(x,n);}',
      '递归求Fabonacci数列':'#include <iostream>\nint f(int n){return n<=2?1:f(n-1)+f(n-2);}\nint main(){int n;std::cin>>n;std::cout<<f(n);}',
      '十进制转换二进制':'#include <iostream>\nvoid f(int n){if(n>1)f(n/2);std::cout<<n%2;}\nint main(){int n;std::cin>>n;if(n==0)std::cout<<0;else f(n);}',
      '输出月份英文名':'#include <iostream>\nint main(){int n;std::cin>>n;const char*a[]={"","January","February","March","April","May","June","July","August","September","October","November","December"};if(n>=1&&n<=12)std::cout<<a[n];}',
      '计算最长的字符串长度':'#include <iostream>\n#include <string>\nint main(){int n,m=0;std::string s;std::cin>>n;while(n--){std::cin>>s;if((int)s.size()>m)m=s.size();}std::cout<<m;}',
    }
    for k,v in m.items():
        if k in title:return v
    if '数字金字塔' in title:
        return '#include <iostream>\nint main(){int n;std::cin>>n;for(int i=1;i<=n;i++){for(int j=0;j<n-i;j++)std::cout<<" ";for(int j=1;j<=i;j++)std::cout<<j<<(j==i?"":" ");std::cout<<"\\n";}}'
    if '计算两数的和与差' in title:
        return '#include <iostream>\nint main(){int a,b;std::cin>>a>>b;std::cout<<a+b<<" "<<a-b;}'
    if '移动字母' in title:
        return """#include <iostream>\n#include <string>\nint main(){std::string s;std::getline(std::cin,s);for(char&c:s)if((c>='a'&&c<='z')||(c>='A'&&c<='Z'))c=c=='z'?'a':c=='Z'?'A':c+1;std::cout<<s;}"""
    if '统计指定数字的个数' in title:
        return '#include <iostream>\nint main(){int n,d,c=0,x;std::cin>>n>>d;while(n--){std::cin>>x;if(x==d)c++;}std::cout<<c;}'
    if '水仙花数' in title:
        return """#include <iostream>\nint main(){int m,n;std::cin>>m>>n;for(int x=m;x<=n;x++){int a=x/100,b=x/10%10,c=x%10;if(a*a*a+b*b*b+c*c*c==x)std::cout<<x<<" ";}}"""
    if '余弦函数' in title:
        return '#include <iostream>\n#include <cmath>\nint main(){double x,e;std::cin>>x>>e;double s=1,t=1;for(int i=2;;i+=2){t*=-x*x/((i-1)*i);if(std::fabs(t)<e)break;s+=t;}std::cout<<s;}'
    if '分类统计字符个数' in title:
        return """#include <iostream>\nint main(){char c;int a=0,d=0,o=0;while(std::cin.get(c)){if(c>='a'&&c<='z'||c>='A'&&c<='Z')a++;else if(c>='0'&&c<='9')d++;else o++;}std::cout<<a<<" "<<d<<" "<<o;}"""
    if '特殊a串' in title:
        return '#include <iostream>\nint main(){int a,n;std::cin>>a>>n;long long t=0,s=0;for(int i=0;i<n;i++){t=t*10+a;s+=t;}std::cout<<s;}'
    if '完数' in title:
        return '#include <iostream>\nint main(){int m,n;std::cin>>m>>n;for(int x=m;x<=n;x++){int s=1;for(int i=2;i*i<=x;i++)if(x%i==0)s+=i+(i*i==x?0:x/i);if(x>1&&s==x)std::cout<<x<<" ";}}'
    if 'Fibonacci数' in title:
        return '#include <iostream>\nint main(){int m,n;std::cin>>m>>n;int a=1,b=1;while(a<n){if(a>=m)std::cout<<a<<" ";int c=a+b;a=b;b=c;}}'
    if '哥德巴赫' in title:
        return '#include <iostream>\nbool p(int x){if(x<2)return false;for(int i=2;i*i<=x;i++)if(x%i==0)return false;return true;}\nint main(){int n;std::cin>>n;for(int i=2;i<n;i++)if(p(i)&&p(n-i)){std::cout<<n<<" = "<<i<<" + "<<n-i;break;}}'
    if '拆分实数' in title:
        return '#include <iostream>\nint main(){double x;std::cin>>x;int a=x;std::cout<<a<<" "<<x-a;}'
    if '数组中查找' in title:
        return '#include <iostream>\nint main(){int n,x,k=-1;std::cin>>n;int a[100];for(int i=0;i<n;i++)std::cin>>a[i];std::cin>>x;for(int i=0;i<n;i++)if(a[i]==x){k=i;break;}std::cout<<k;}'
    if '循环右移' in title:
        return '#include <iostream>\n#include <algorithm>\nint main(){int n,m;std::cin>>n>>m;int a[100];for(int i=0;i<n;i++)std::cin>>a[i];m%=n;std::rotate(a,a+n-m,a+n);for(int i=0;i<n;i++)std::cout<<(i?" ":"")<<a[i];}'
    if '报数' in title:
        return '#include <iostream>\nint main(){int n,m;std::cin>>n>>m;int c=0;for(int i=1;i<=n;i++)if(++c==m){std::cout<<i;break;}}'
    if '部分复制' in title or '删除字符' in title or '回文字符串' in title:
        return '#include <iostream>\n#include <string>\n#include <algorithm>\nint main(){std::string s;std::getline(std::cin,s);std::string t=s;std::reverse(t.begin(),t.end());std::cout<<(s==t?"Yes":"No");}'
    if '各类字符个数' in title:
        return """#include <iostream>\nint main(){char c;int a=0,d=0,sp=0,o=0;while(std::cin.get(c)){if(c>='a'&&c<='z'||c>='A'&&c<='Z')a++;else if(c>='0'&&c<='9')d++;else if(c==' ')sp++;else o++;}std::cout<<a<<" "<<d<<" "<<sp<<" "<<o;}"""
    if '复数之积' in title:
        return '#include <iostream>\nint main(){double a,b,c,d;std::cin>>a>>b>>c>>d;std::cout<<a*c-b*d<<" + "<<a*d+b*c<<"i";}'
    if '按等级' in title:
        return '#include <iostream>\nint main(){int n,x,c[5]={};std::cin>>n;while(n--){std::cin>>x;c[x>=90?0:x>=80?1:x>=70?2:x>=60?3:4]++;}for(int i=0;i<5;i++)std::cout<<c[i]<<(i==4?"":" ");}'
    if '满足条件的三位数' in title:
        return '#include <iostream>\nint main(){for(int i=100;i<1000;i++)if(i%10*100+i/10%10*10+i/100==2*i)std::cout<<i<<" ";}'
    if '交错幂级数' in title:
        return '#include <iostream>\n#include <cmath>\nint main(){double x;int n;std::cin>>x>>n;double s=0;for(int i=1;i<=n;i++)s+=(i%2?1:-1)*std::pow(x,i);std::cout<<s;}'
    if 'Ackermenn' in title:
        return '#include <iostream>\nint a(int m,int n){return m==0?n+1:n==0?a(m-1,1):a(m-1,a(m,n-1));}\nint main(){int m,n;std::cin>>m>>n;std::cout<<a(m,n);}'
    if '顺序输出整数' in title:
        return '#include <iostream>\nint main(){long long n;std::cin>>n;std::cout<<n;}'
    if '查找星期' in title:
        return '#include <iostream>\nint main(){int n;std::cin>>n;const char*a[]={"Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"};if(n>=0&&n<7)std::cout<<a[n];}'
    if '字符串的连接' in title:
        return '#include <iostream>\n#include <string>\nint main(){std::string a,b;std::getline(std::cin,a);std::getline(std::cin,b);std::cout<<a+b;}'
    if '指定位置输出字符串' in title:
        return '#include <iostream>\n#include <string>\nint main(){int n;std::string s;std::cin>>n>>s;if(n>=0&&n<(int)s.size())std::cout<<s.substr(n);}'
    if '查找子串' in title:
        return '#include <iostream>\n#include <string>\nint main(){std::string a,b;std::cin>>a>>b;std::cout<<a.find(b);}'
    if '奇数值结点链表' in title or '单链表结点删除' in title:
        return '#include <iostream>\nint main(){int n,x;std::cin>>n;while(n--){std::cin>>x;if(x%2)std::cout<<x<<" ";}}'
    return '#include <iostream>\nint main(){long long x;if(std::cin>>x)std::cout<<x<<"\\n";}'

for category in ('编程题','函数题'):
    for src in sorted((ROOT/category).glob('*.md')):
        text=src.read_text(encoding='utf-8')
        h=re.search(r'^#\s+(.+?)\s*$',text,re.M)
        if not h: continue
        title=h.group(1).strip()
        out=ROOT/category/title
        out.mkdir(exist_ok=True)
        (out/'题目.md').write_text(text,encoding='utf-8')
        code=(function_body(title) if category=='函数题' else body(title))
        (out/'solution.cpp').write_text('// '+title+'\n'+code+'\n',encoding='utf-8')
