// 习题9-3 平面向量加法
#include <iostream>
#include <iomanip>
#include <cmath>
int main(){double x1,y1,x2,y2;std::cin>>x1>>y1>>x2>>y2;double x=x1+x2,y=y1+y2;if(std::fabs(x)<0.00005)x=0;if(std::fabs(y)<0.00005)y=0;std::cout<<std::fixed<<std::setprecision(1)<<"("<<x<<", "<<y<<")\n";}
