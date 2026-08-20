// 习题6-8 统计一行文本的单词个数
#include <iostream>
#include <string>
#include <sstream>
int main(){std::string s,w;std::getline(std::cin,s);std::stringstream ss(s);int n=0;while(ss>>w)n++;std::cout<<n<<"\n";}
