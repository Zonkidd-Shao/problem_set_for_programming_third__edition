// 习题6-5 使用函数验证哥德巴赫猜想
#include <iostream>
bool p(int x){if(x<2)return false;for(int i=2;i*i<=x;i++)if(x%i==0)return false;return true;}
int prime(int x){return p(x);}
void Goldbach(int n){for(int i=3;i<=n/2;i+=2)if(prime(i)&&prime(n-i)){std::cout<<n<<"="<<i<<"+"<<n-i;return;}}
int main(){int m,n;std::cin>>m>>n;if(prime(m))std::cout<<m<<" is a prime number\n";if(m<6)m=6;if(m%2)m++;int cnt=0;for(int x=m;x<=n;x+=2){Goldbach(x);cnt++;if(cnt%5)std::cout<<", ";else std::cout<<"\n";}}
