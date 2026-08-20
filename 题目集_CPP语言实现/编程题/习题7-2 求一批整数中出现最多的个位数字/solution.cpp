// 习题7-2 求一批整数中出现最多的个位数字
#include <iostream>
#include <cstdlib>
int main(){int n;std::cin>>n;int cnt[10]={};while(n--){long long x;std::cin>>x;if(x==0)cnt[0]++;else{if(x<0)x=-x;while(x){cnt[x%10]++;x/=10;}}}int best=0;for(int i=1;i<10;i++)if(cnt[i]>best)best=cnt[i];std::cout<<best<<":";bool first=true;for(int i=0;i<10;i++)if(cnt[i]==best){std::cout<<(first?" ":" ")<<i;first=false;}std::cout<<"\n";}
