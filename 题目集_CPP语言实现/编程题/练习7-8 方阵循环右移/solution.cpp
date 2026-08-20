// 练习7-8 方阵循环右移
#include <iostream>
#include <vector>
int main(){int m,n;std::cin>>m>>n;std::vector<std::vector<int>>a(n,std::vector<int>(n));for(auto&row:a)for(int&x:row)std::cin>>x;m%=n;for(auto&row:a){for(int j=0;j<n;j++)std::cout<<row[(j-m+n)%n]<<" ";std::cout<<"\n";}}
