// 练习4-10 找出最小值
#include <iostream>
#include <algorithm>
int main(){int n,x,m=1e9;std::cin>>n;while(n--){std::cin>>x;m=std::min(m,x);}std::cout<<"min = "<<m<<"\n";}
