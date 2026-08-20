// 习题6-4 使用函数输出指定范围内的Fibonacci数
#include <iostream>
#include <vector>
int fib(int n){if(n<=2)return 1;return fib(n-1)+fib(n-2);}
void PrintFN(int m,int n){bool found=false;int a=1,b=1;while(a<=n){if(a>=m){if(found)std::cout<<" ";std::cout<<a;found=true;}int c=a+b;a=b;b=c;}if(found)std::cout<<"\n";else std::cout<<"No Fibonacci number\n";}
int main(){int m,n,t;std::cin>>m>>n>>t;std::cout<<"fib("<<t<<") = "<<fib(t)<<"\n";PrintFN(m,n);}
