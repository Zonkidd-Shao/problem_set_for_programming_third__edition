// 习题4-6 水仙花数
#include <iostream>
#include <cmath>
int main(){int n;std::cin>>n;int lo=1;for(int i=1;i<n;i++)lo*=10;int hi=lo*10;for(int x=lo;x<hi;x++){int y=x;long long s=0;while(y){s+=(long long)std::pow(y%10,n);y/=10;}if(s==x)std::cout<<x<<"\n";}}
