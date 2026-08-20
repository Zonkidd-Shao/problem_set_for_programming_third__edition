// 习题8-5 使用函数实现字符串部分复制
#include <iostream>
#include <string>
#include <algorithm>
#include <cstring>
void strmcpy(char* t,int m,char* s){if(m<1||m>(int)std::strlen(t)){s[0]='\0';return;}std::strcpy(s,t+m-1);}
int main(){int m;std::string t;std::cin>>m;std::cin.ignore();std::getline(std::cin,t);if(m<1||m>(int)t.size())std::cout<<"\n";else std::cout<<t.substr(m-1)<<"\n";}
