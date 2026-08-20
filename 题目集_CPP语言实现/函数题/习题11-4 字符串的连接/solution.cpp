// 习题11-4 字符串的连接
#include <iostream>
#include <string>
#include <cstring>
char* str_cat(char* s,char* t){std::strcat(s,t);return s;}
int main(){std::string a,b;std::cin>>a>>b;std::cout<<a+b<<"\n"<<a+b<<"\n";}
