// 习题5-5 使用函数统计指定数字的个数
#include <iostream>
int CountDigit(int number,int digit){long long n=number;if(n<0)n=-n;if(n==0)return digit==0;int c=0;while(n){if(n%10==digit)c++;n/=10;}return c;}
int main(){int n,d;std::cin>>n>>d;std::cout<<"Number of digit "<<d<<" in "<<n<<": "<<CountDigit(n,d)<<"\n";}
