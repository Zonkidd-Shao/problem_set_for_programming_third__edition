// 练习7-2 求最大值及其下标
#include <iostream>
int main(){int n,x,m=-1e9,idx=0;std::cin>>n;for(int i=0;i<n;i++){std::cin>>x;if(x>m)m=x,idx=i;}std::cout<<m<<" "<<idx<<"\n";}
