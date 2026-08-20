// 习题10-4 递归求简单交错幂级数的部分和
#include <iostream>
#include <cmath>
#include <iomanip>
double fn(double x,int n){double s=0;for(int i=1;i<=n;i++)s+=(i%2?1:-1)*std::pow(x,i);return s;}
int main(){double x;int n;std::cin>>x>>n;std::cout<<std::fixed<<std::setprecision(2)<<fn(x,n)<<"\n";}
