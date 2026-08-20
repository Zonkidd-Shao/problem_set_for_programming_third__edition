// 习题7-4 求矩阵各行元素之和
#include <iostream>
int main(){int m,n;std::cin>>m>>n;for(int i=0;i<m;i++){int sum=0;for(int j=0;j<n;j++){int x;std::cin>>x;sum+=x;}std::cout<<sum<<"\n";}}
