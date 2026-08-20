// 练习7-10 查找指定字符
#include <iostream>
#include <string>
#include <limits>
int main(){char target;std::cin.get(target);std::cin.ignore(std::numeric_limits<std::streamsize>::max(),'\n');std::string s;std::getline(std::cin,s);std::size_t pos=s.rfind(target);if(pos==std::string::npos)std::cout<<"Not Found\n";else std::cout<<"index = "<<pos<<"\n";}
