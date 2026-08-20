// 练习2-17 生成3的乘方表
#include <iostream>
int main(){int n;std::cin>>n;int p=1;for(int i=0;i<=n;i++){std::cout<<"pow(3,"<<i<<") = "<<p<<"\n";p*=3;}}
