// 练习2-13 求N分之一序列前N项和
#include <iostream>
#include <iomanip>
int main(){int n;std::cin>>n;double s=0;for(int i=1;i<=n;i++)s+=1.0/i;std::cout<<"sum = "<<std::fixed<<std::setprecision(6)<<s<<"\n";}
