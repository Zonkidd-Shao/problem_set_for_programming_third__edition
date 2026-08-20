// 练习7-3 将数组中的数逆序存放
#include <iostream>
#include <algorithm>
int main(){int n;std::cin>>n;int a[100];for(int i=0;i<n;i++)std::cin>>a[i];std::reverse(a,a+n);for(int i=0;i<n;i++)std::cout<<(i?" ":"")<<a[i];}
