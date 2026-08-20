// 练习8-8 移动字母
#include <iostream>
#include <string>
#include <cstring>
void Shift(char s[]){int n=std::strlen(s);if(n<3)return;std::string t=s;s[0]='\0';std::strcat(s,t.substr(3).c_str());std::strcat(s,t.substr(0,3).c_str());}
int main(){std::string s;std::getline(std::cin,s);if(s.size()>=3)s=s.substr(3)+s.substr(0,3);std::cout<<s<<"\n";}
