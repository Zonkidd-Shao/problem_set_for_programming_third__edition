// 习题10-3 递归实现指数函数
#include <iostream>
#include <iomanip>
double calc_pow(double x,int n){return n?x*calc_pow(x,n-1):1;}
int main(){double x;int n;std::cin>>x>>n;std::cout<<std::setprecision(0)<<calc_pow(x,n)<<"\n";}
