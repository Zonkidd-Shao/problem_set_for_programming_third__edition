// 习题5-3 使用函数计算两点间的距离
#include <iostream>
#include <cmath>
#include <iomanip>
double dist(double x1,double y1,double x2,double y2){return std::sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));}
int main(){double x1,y1,x2,y2;std::cin>>x1>>y1>>x2>>y2;std::cout<<"dist = "<<std::fixed<<std::setprecision(2)<<dist(x1,y1,x2,y2)<<"\n";}
