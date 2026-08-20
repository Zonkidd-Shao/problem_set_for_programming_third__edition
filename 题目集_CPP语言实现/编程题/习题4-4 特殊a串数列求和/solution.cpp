// 习题4-4 特殊a串数列求和
#include <iostream>
int main(){int a,n;std::cin>>a>>n;long long t=0,s=0;for(int i=0;i<n;i++){t=t*10+a;s+=t;}std::cout<<"s = "<<s<<"\n";}
