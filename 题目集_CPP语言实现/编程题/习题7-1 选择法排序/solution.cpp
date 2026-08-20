// 习题7-1 选择法排序
#include <iostream>
#include <algorithm>
int main(){int n;std::cin>>n;int a[100];for(int i=0;i<n;i++)std::cin>>a[i];std::sort(a,a+n,std::greater<int>());for(int i=0;i<n;i++)std::cout<<(i?" ":"")<<a[i];std::cout<<"\n";}
