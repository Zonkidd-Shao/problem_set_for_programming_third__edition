// 练习5-1 求m到n之和
#include <iostream>
int sum(int m,int n){int s=0;for(;m<=n;m++)s+=m;return s;}
int main(){int m,n;std::cin>>m>>n;std::cout<<"sum = "<<sum(m,n)<<"\n";}
