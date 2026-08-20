// 习题9-5 通讯录排序
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
struct Person{std::string name,birth,phone;};
int main(){int n;std::cin>>n;std::vector<Person>a(n);for(auto& p:a)std::cin>>p.name>>p.birth>>p.phone;std::sort(a.begin(),a.end(),[](const Person&x,const Person&y){return x.birth<y.birth;});for(const auto&p:a)std::cout<<p.name<<" "<<p.birth<<" "<<p.phone<<"\n";}
