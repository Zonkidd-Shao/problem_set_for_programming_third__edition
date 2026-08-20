// 练习2-14 求奇数分之一序列前N项和
#include <iostream>
#include <iomanip>
int main(){int n;std::cin>>n;double s=0;for(int i=1;i<=n;i++)s+=1.0/(2*i-1);std::cout<<"sum = "<<std::fixed<<std::setprecision(6)<<s<<"\n";}
