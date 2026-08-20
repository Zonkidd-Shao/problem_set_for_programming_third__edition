// 习题4-5 换硬币
#include <iostream>
int main(){int n,count=0;std::cin>>n;for(int i=n/5;i>=1;i--)for(int j=(n-5*i)/2;j>=1;j--){int k=n-5*i-2*j;if(k>=1){std::cout<<"fen5:"<<i<<", fen2:"<<j<<", fen1:"<<k<<", total:"<<i+j+k<<"\n";count++;}}std::cout<<"count = "<<count<<"\n";}
