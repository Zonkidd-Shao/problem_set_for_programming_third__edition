// 习题11-2 查找星期
#include <iostream>
#include <string>
int getindex(char* s){const char*a[]={"Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"};for(int i=0;i<7;i++)if(std::string(s)==a[i])return i;return -1;}
int main(){std::string s;std::cin>>s;int i=getindex(s.data());if(i<0)std::cout<<"wrong input!\n";else std::cout<<i<<"\n";}
