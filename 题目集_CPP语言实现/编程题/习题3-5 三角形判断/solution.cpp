// 习题3-5 三角形判断
#include <iostream>
#include <cmath>
#include <iomanip>
int main(){double x1,y1,x2,y2,x3,y3;std::cin>>x1>>y1>>x2>>y2>>x3>>y3;double a=std::hypot(x1-x2,y1-y2),b=std::hypot(x1-x3,y1-y3),c=std::hypot(x2-x3,y2-y3);if(a+b<=c||a+c<=b||b+c<=a){std::cout<<"Impossible\n";return 0;}double p=(a+b+c)/2;double area=std::sqrt(p*(p-a)*(p-b)*(p-c));std::cout<<"L = "<<std::fixed<<std::setprecision(2)<<a+b+c<<", A = "<<area<<"\n";}
