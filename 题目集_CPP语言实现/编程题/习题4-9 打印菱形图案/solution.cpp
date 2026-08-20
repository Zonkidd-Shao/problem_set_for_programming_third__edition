// 习题4-9 打印菱形图案
#include <iostream>
int main(){int n;std::cin>>n;for(int stars=1;stars<=n;stars+=2){for(int i=0;i<n-stars;i++)std::cout<<' ';for(int i=0;i<stars;i++)std::cout<<"* ";std::cout<<"\n";}for(int stars=n-2;stars>=1;stars-=2){for(int i=0;i<n-stars;i++)std::cout<<' ';for(int i=0;i<stars;i++)std::cout<<"* ";std::cout<<"\n";}}
