// 习题2-5 求平方根序列前N项和
#include <iostream>
#include <cmath>
#include <iomanip>
int main(){int n;std::cin>>n;double s=0;for(int i=1;i<=n;i++)s+=std::sqrt(i);std::cout<<"sum = "<<std::fixed<<std::setprecision(2)<<s<<"\n";}
