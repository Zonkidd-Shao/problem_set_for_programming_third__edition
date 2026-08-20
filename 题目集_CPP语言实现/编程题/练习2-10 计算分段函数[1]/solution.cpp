// 练习2-10 计算分段函数[1]
#include <iostream>
#include <iomanip>
int main(){double x;std::cin>>x;double y=x==0?0:1/x;std::cout<<std::fixed<<std::setprecision(1)<<"f("<<x<<") = "<<y<<"\n";}
