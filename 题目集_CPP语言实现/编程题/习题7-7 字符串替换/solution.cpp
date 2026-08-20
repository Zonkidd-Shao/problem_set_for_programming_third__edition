// 习题7-7 字符串替换
#include <iostream>
#include <string>
int main(){std::string s;std::getline(std::cin,s);for(char& c:s)if(c>='A'&&c<='Z')c='Z'-(c-'A');std::cout<<s<<"\n";}
