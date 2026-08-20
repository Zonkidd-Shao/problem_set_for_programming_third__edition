// 习题4-3 求分数序列前N项和
#include <iostream>
#include <iomanip>
int main(){int n;std::cin>>n;double numerator=2,denominator=1,sum=0;for(int i=0;i<n;i++){sum+=numerator/denominator;double next=numerator+denominator;denominator=numerator;numerator=next;}std::cout<<std::fixed<<std::setprecision(2)<<sum<<"\n";}
