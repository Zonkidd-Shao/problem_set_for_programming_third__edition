// 习题11-3 计算最长的字符串长度
#include <iostream>
#include <string>
#include <cstring>
int max_len(char* s[],int n){int m=0;for(int i=0;i<n;i++)if((int)std::strlen(s[i])>m)m=std::strlen(s[i]);return m;}
int main(){int n,m=0;std::string s;std::cin>>n;while(n--){std::cin>>s;if((int)s.size()>m)m=s.size();}std::cout<<m<<"\n";}
