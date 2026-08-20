// 练习2-11 计算分段函数[2]
#include <iostream>
#include <iomanip>
#include <cmath>
int main(){double x;std::cin>>x;double y=x>=0?std::sqrt(x):std::pow(x+1,2)+2*x+1/x;std::cout<<std::fixed<<std::setprecision(2)<<"f("<<x<<") = "<<y<<"\n";}
