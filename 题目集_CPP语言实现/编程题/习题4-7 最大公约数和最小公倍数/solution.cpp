// 习题4-7 最大公约数和最小公倍数
#include <iostream>
#include <numeric>
int main(){long long a,b;std::cin>>a>>b;long long g=std::gcd(a,b);std::cout<<g<<" "<<a/g*b<<"\n";}
