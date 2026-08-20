// 习题8-3 数组循环右移
#include <iostream>
#include <algorithm>
void ArrayShift(int a[],int n,int m){m%=n;std::rotate(a,a+n-m,a+n);}
int main(){int n,m;std::cin>>n>>m;int a[100];for(int i=0;i<n;i++)std::cin>>a[i];ArrayShift(a,n,m);for(int i=0;i<n;i++)std::cout<<(i?" ":"")<<a[i];std::cout<<"\n";}
