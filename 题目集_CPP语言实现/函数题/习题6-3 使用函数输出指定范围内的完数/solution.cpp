// 习题6-3 使用函数输出指定范围内的完数
#include <iostream>
#include <vector>
int factorsum(int x){if(x<=1)return 0;int s=1;for(int i=2;i*i<=x;i++)if(x%i==0)s+=i+(i*i==x?0:x/i);return s;}
void PrintPN(int m,int n){bool found=false;for(int x=m;x<=n;x++)if(factorsum(x)==x){found=true;std::vector<int>f;for(int i=1;i<x;i++)if(x%i==0)f.push_back(i);std::cout<<x<<" = ";for(size_t i=0;i<f.size();i++)std::cout<<(i?" + ":"")<<f[i];std::cout<<"\n";}if(!found)std::cout<<"No perfect number\n";}
int main(){int m,n;std::cin>>m>>n;if(factorsum(m)==m)std::cout<<m<<" is a perfect number\n";if(n!=m&&factorsum(n)==n)std::cout<<n<<" is a perfect number\n";PrintPN(m,n);}
