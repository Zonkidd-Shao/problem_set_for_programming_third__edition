// 习题8-8 判断回文字符串
#include <iostream>
#include <string>
#include <algorithm>
#include <cstring>
bool palindrome(char* s){int n=std::strlen(s);for(int i=0;i<n/2;i++)if(s[i]!=s[n-1-i])return false;return true;}
int main(){std::string s;std::cin>>s;std::cout<<(palindrome(s.data())?"Yes":"No")<<"\n"<<s<<"\n";}
