// 练习7-9 计算天数
#include <iostream>
#include <string>
int main(){std::string s;std::cin>>s;int y=std::stoi(s.substr(0,4)),m=std::stoi(s.substr(5,2)),d=std::stoi(s.substr(8,2));int days[]={0,31,28,31,30,31,30,31,31,30,31,30,31};if(y%400==0||(y%4==0&&y%100!=0))days[2]=29;int ans=d;for(int i=1;i<m;i++)ans+=days[i];std::cout<<ans<<"\n";}
