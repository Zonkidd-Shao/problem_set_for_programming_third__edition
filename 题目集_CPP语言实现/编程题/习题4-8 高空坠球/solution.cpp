// 习题4-8 高空坠球
#include <iostream>
#include <iomanip>
int main(){double h;int n;std::cin>>h>>n;if(n==0){std::cout<<"0.0 0.0\n";return 0;}double d=h,s=0;for(int i=1;i<=n;i++){s+=d+(i==n?0:d/2);d/=2;}std::cout<<std::fixed<<std::setprecision(1)<<s<<" "<<d<<"\n";}
