// 练习4-7 求e的近似值
#include <iostream>
#include <iomanip>
int main(){int n;std::cin>>n;double sum=1,term=1;for(int i=1;i<=n;i++){term/=i;sum+=term;}std::cout<<std::fixed<<std::setprecision(8)<<sum<<"\n";}
