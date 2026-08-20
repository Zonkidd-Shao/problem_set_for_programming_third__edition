// 习题2-4 求交错序列前N项和
#include <iostream>
#include <iomanip>
int main(){int n;std::cin>>n;double s=0;for(int i=1;i<=n;i++)s+=(i%2?1.0:-1.0)*i/(2*i-1);std::cout<<std::fixed<<std::setprecision(3)<<s<<"\n";}
