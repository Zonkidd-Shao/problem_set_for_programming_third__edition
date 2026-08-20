// 习题9-4 查找书籍
#include <iostream>
#include <iomanip>
#include <string>
#include <vector>
#include <limits>
struct Book{std::string name;double price;};
int main(){int n;std::cin>>n;std::string line;std::getline(std::cin,line);std::vector<Book>a;for(int i=0;i<n;i++){std::getline(std::cin,line);std::string name=line;double p;std::cin>>p;std::getline(std::cin,line);a.push_back({name,p});}auto hi=a.begin(),lo=a.begin();for(auto it=a.begin();it!=a.end();it++){if(it->price>hi->price)hi=it;if(it->price<lo->price)lo=it;}std::cout<<std::fixed<<std::setprecision(2)<<hi->price<<", "<<hi->name<<"\n"<<lo->price<<", "<<lo->name<<"\n";}
