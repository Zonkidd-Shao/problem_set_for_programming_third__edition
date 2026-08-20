// 习题5-6 使用函数输出水仙花数
#include <iostream>
#include <cmath>
int narcissistic(int x){if(x<0)return 0;int t=x,digits=0;do{digits++;t/=10;}while(t);t=x;long long sum=0;do{sum+=(long long)std::pow(t%10,digits);t/=10;}while(t);return sum==x;}
void PrintN(int m,int n){for(int x=m+1;x<n;x++)if(narcissistic(x))std::cout<<x<<"\n";}
int main(){int m,n;std::cin>>m>>n;if(narcissistic(m))std::cout<<m<<" is a narcissistic number\n";PrintN(m,n);if(narcissistic(n))std::cout<<n<<" is a narcissistic number\n";}
