// 习题10-5 递归计算Ackermenn函数
#include <iostream>
int Ack(int m,int n){return m==0?n+1:n==0?Ack(m-1,1):Ack(m-1,Ack(m,n-1));}
int main(){int m,n;std::cin>>m>>n;std::cout<<Ack(m,n)<<"\n";}
