// 练习10-1 使用递归函数计算1到n之和
#include <iostream>
int sum(int n){return n>0?n+sum(n-1):0;}
int main(){int n;std::cin>>n;std::cout<<sum(n)<<"\n";}
