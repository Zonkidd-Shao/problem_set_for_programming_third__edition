// 练习2-15 求简单交错序列前N项和
#include <iostream>
#include <iomanip>
int main(){int n;std::cin>>n;double s=0;for(int i=1;i<=n;i++)s+=(i%2?1.0:-1.0)/(3*i-2);std::cout<<"sum = "<<std::fixed<<std::setprecision(3)<<s<<"\n";}
