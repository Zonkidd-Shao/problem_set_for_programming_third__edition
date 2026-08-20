// 习题7-3 判断上三角矩阵
#include <iostream>
int main(){int t;std::cin>>t;while(t--){int n;std::cin>>n;bool ok=true;for(int i=0;i<n;i++)for(int j=0;j<n;j++){int x;std::cin>>x;if(i>j&&x!=0)ok=false;}std::cout<<(ok?"YES":"NO")<<"\n";}}
