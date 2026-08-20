// 习题5-4 使用函数求素数和
#include <iostream>
bool isPrime(int x){if(x<2)return false;for(int i=2;i*i<=x;i++)if(x%i==0)return false;return true;}
int prime(int p){return isPrime(p);}
int PrimeSum(int m,int n){int s=0;for(int p=m;p<=n;p++)if(prime(p))s+=p;return s;}
int main(){int m,n,s=0;std::cin>>m>>n;std::cout<<"Sum of ( ";for(int p=m;p<=n;p++)if(prime(p)){std::cout<<p<<" ";s+=p;}std::cout<<") = "<<s<<"\n";}
