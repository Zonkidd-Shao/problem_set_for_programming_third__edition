// 习题7-8 字符串转换成十进制整数
#include <iostream>
#include <string>
#include <cctype>
int main(){std::string s;std::getline(std::cin,s,'#');bool negative=false,started=false;long long value=0;for(char c:s){if(!started&&c=='-')negative=true;if(std::isxdigit((unsigned char)c)){started=true;int d=std::isdigit((unsigned char)c)?c-'0':std::tolower((unsigned char)c)-'a'+10;value=value*16+d;}}if(negative)value=-value;std::cout<<value<<"\n";}
