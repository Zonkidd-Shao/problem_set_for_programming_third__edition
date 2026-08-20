// 习题7-5 找鞍点
#include <iostream>
#include <vector>
#include <algorithm>
int main(){int n;std::cin>>n;std::vector<std::vector<int>> a(n,std::vector<int>(n));for(auto& row:a)for(int& x:row)std::cin>>x;for(int i=0;i<n;i++){int mx=*std::max_element(a[i].begin(),a[i].end());for(int j=0;j<n;j++)if(a[i][j]==mx){bool mincol=true;for(int k=0;k<n;k++)if(a[k][j]<a[i][j])mincol=false;if(mincol){std::cout<<i<<" "<<j<<"\n";return 0;}}}std::cout<<"NONE\n";}
