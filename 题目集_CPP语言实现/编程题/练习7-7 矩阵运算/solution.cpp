// 练习7-7 矩阵运算
#include <iostream>
int main(){int n;std::cin>>n;long long sum=0;for(int i=0;i<n;i++)for(int j=0;j<n;j++){int x;std::cin>>x;if(i!=n-1&&j!=n-1&&i+j!=n-1)sum+=x;}std::cout<<sum<<"\n";}
