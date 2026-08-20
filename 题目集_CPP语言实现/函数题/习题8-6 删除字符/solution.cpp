// 习题8-6 删除字符
#include <iostream>
#include <string>
#include <algorithm>
#include <limits>
void delchar(char* str,char c){char* p=str;for(char* q=str;*q;q++)if(*q!=c)*p++=*q;*p='\0';}
int main(){char c;std::cin.get(c);std::cin.ignore(std::numeric_limits<std::streamsize>::max(),'\n');std::string s;std::getline(std::cin,s);s.erase(std::remove(s.begin(),s.end(),c),s.end());std::cout<<s<<"\n";}
