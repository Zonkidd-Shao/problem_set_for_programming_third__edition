// 习题8-2 在数组中查找指定元素
#include <iostream>
int search(int list[],int n,int x){for(int i=0;i<n;i++)if(list[i]==x)return i;return -1;}
int main(){int n,x;std::cin>>n;int a[100];for(int i=0;i<n;i++)std::cin>>a[i];std::cin>>x;int k=search(a,n,x);if(k==-1)std::cout<<"Not found\n";else std::cout<<"index = "<<k<<"\n";}
