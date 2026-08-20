// 练习4-11 统计素数并求和
#include <iostream>
bool p(int x){if(x<2)return false;for(int i=2;i*i<=x;i++)if(x%i==0)return false;return true;}
int main(){int m,n,c=0,s=0;std::cin>>m>>n;for(int i=m;i<=n;i++)if(p(i))c++,s+=i;std::cout<<c<<" "<<s<<"\n";}
