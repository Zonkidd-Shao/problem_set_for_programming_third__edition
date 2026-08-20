// 习题3-4 统计学生成绩
#include <iostream>
int main(){int n,x,c[5]={};std::cin>>n;while(n--){std::cin>>x;c[x>=90?0:x>=80?1:x>=70?2:x>=60?3:4]++;}for(int i=0;i<5;i++)std::cout<<(i?" ":"")<<c[i];std::cout<<"\n";}
