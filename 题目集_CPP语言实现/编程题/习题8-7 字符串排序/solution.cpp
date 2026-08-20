// 习题8-7 字符串排序
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
int main(){std::vector<std::string> a(5);for(auto& s:a)std::cin>>s;std::sort(a.begin(),a.end());std::cout<<"After sorted:\n";for(const auto& s:a)std::cout<<s<<"\n";}
