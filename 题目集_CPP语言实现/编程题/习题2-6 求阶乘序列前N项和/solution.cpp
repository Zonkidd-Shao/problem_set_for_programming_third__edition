// 习题2-6 求阶乘序列前N项和
#include <iostream>
int main(){int n;std::cin>>n;long long f=1,s=0;for(int i=1;i<=n;i++){f*=i;s+=f;}std::cout<<s<<"\n";}
