// 练习7-4 找出不是两个数组共有的元素
#include <iostream>
#include <vector>
#include <algorithm>
int main(){int n,m;std::cin>>n;std::vector<int>a(n);for(int&x:a)std::cin>>x;std::cin>>m;std::vector<int>b(m);for(int&x:b)std::cin>>x;std::vector<int>out;auto add=[&](int x,const std::vector<int>& other){if(std::find(other.begin(),other.end(),x)==other.end()&&std::find(out.begin(),out.end(),x)==out.end())out.push_back(x);};for(int x:a)add(x,b);for(int x:b)add(x,a);for(size_t i=0;i<out.size();i++)std::cout<<(i?" ":"")<<out[i];std::cout<<"\n";}
