// 习题8-4 报数
#include <iostream>
#include <vector>
void CountOff(int n,int m,int out[]){std::vector<int>a;for(int i=1;i<=n;i++)a.push_back(i);int pos=0;for(int order=1;!a.empty();order++){pos=(pos+m-1)%a.size();out[a[pos]-1]=order;a.erase(a.begin()+pos);}}
int main(){int n,m;std::cin>>n>>m;int out[100];CountOff(n,m,out);for(int i=0;i<n;i++)std::cout<<out[i]<<" ";std::cout<<"\n";}
