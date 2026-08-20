// 练习5-3 数字金字塔
#include <iostream>
void pyramid(int n){for(int i=1;i<=n;i++){for(int j=0;j<n-i;j++)std::cout<<" ";for(int j=0;j<i;j++)std::cout<<i<<" ";std::cout<<"\n";}}
int main(){int n;std::cin>>n;pyramid(n);}
