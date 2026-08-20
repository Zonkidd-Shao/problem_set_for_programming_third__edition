// 习题11-5 指定位置输出字符串
#include <iostream>
#include <string>
#include <cstring>
char* match(char* s,char ch1,char ch2){char* p=std::strchr(s,ch1);if(!p)return nullptr;char* q=std::strchr(p,ch2);if(q){for(char* x=p;x<=q;x++)std::cout<<*x;}else for(char* x=p;*x;x++)std::cout<<*x;std::cout<<"\n";return p;}
int main(){std::string s;char ch1,ch2;std::cin>>s>>ch1>>ch2;std::size_t p=s.find(ch1);if(p==std::string::npos){std::cout<<"\n\n";return 0;}std::size_t q=s.find(ch2,p);if(q==std::string::npos)q=s.size()-1;std::cout<<s.substr(p,q-p+1)<<"\n"<<s.substr(p)<<"\n";}
