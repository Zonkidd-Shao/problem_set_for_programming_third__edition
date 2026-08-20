// 习题9-1 时间换算
#include <iostream>
#include <iomanip>
int main(){int h,m,s,n;char c;std::cin>>h>>c>>m>>c>>s>>n;int x=(h*3600+m*60+s+n)%(24*3600);std::cout<<std::setfill('0')<<std::setw(2)<<x/3600<<":"<<std::setw(2)<<x/60%60<<":"<<std::setw(2)<<x%60<<"\n";}
