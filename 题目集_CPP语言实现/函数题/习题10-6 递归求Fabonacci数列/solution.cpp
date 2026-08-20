// 习题10-6 递归求Fabonacci数列
#include <iostream>
int f(int n){return n<2?n:f(n-1)+f(n-2);}
int main(){int n;std::cin>>n;std::cout<<f(n)<<"\n";}
