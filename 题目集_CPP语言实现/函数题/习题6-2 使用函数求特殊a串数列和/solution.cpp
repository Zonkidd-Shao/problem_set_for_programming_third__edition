// 习题6-2 使用函数求特殊a串数列和
#include <iostream>
int fn(int a,int n){int r=0;while(n--)r=r*10+a;return r;}
int SumA(int a,int n){int term=0,sum=0;for(int i=0;i<n;i++){term=term*10+a;sum+=term;}return sum;}
int main(){int a,n;std::cin>>a>>n;std::cout<<"fn("<<a<<", "<<n<<") = "<<fn(a,n)<<"\ns = "<<SumA(a,n)<<"\n";}
