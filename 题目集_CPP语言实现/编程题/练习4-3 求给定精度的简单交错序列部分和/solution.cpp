// 练习4-3 求给定精度的简单交错序列部分和
#include <iostream>
#include <iomanip>
#include <cmath>
int main(){double eps;std::cin>>eps;double sum=0,term=1;int i=1,sign=1;while(true){sum+=sign*term;if(term<=eps)break;i+=3;term=1.0/i;sign=-sign;}std::cout<<"sum = "<<std::fixed<<std::setprecision(6)<<sum<<"\n";}
