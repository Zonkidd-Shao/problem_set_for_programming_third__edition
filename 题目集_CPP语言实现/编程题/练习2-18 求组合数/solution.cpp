// 练习2-18 求组合数
#include <iostream>
#include <iomanip>
int main(){int m,n;std::cin>>m>>n;double r=1;for(int i=1;i<=m;i++)r*=double(n-m+i)/i;std::cout<<"result = "<<std::fixed<<std::setprecision(0)<<r<<"\n";}
