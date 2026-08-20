// 习题6-6 使用函数输出一个整数的逆序数
#include <iostream>
int reverse(int x){long long n=x;bool neg=n<0;if(neg)n=-n;long long r=0;while(n){r=r*10+n%10;n/=10;}return neg?-r:r;}
int main(){int x;std::cin>>x;std::cout<<reverse(x);}
