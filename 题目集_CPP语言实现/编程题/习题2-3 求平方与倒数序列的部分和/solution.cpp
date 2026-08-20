// 习题2-3 求平方与倒数序列的部分和
#include <iostream>
#include <iomanip>
int main(){int m,n;std::cin>>m>>n;double s=0;for(int i=m;i<=n;i++)s+=i*i+1.0/i;std::cout<<"sum = "<<std::fixed<<std::setprecision(6)<<s<<"\n";}
