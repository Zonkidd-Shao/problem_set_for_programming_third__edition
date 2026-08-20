// 习题11-6 查找子串
#include <iostream>
#include <string>
#include <cstring>
char* search(char* s,char* t){char* p=std::strstr(s,t);return p;}
int main(){std::string a,b;std::cin>>a>>b;char* p=search(a.data(),b.data());std::cout<<(p?int(p-a.data()):-1)<<"\n";}
