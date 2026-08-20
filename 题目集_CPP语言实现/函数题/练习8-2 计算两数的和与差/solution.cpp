// 练习8-2 计算两数的和与差
#include <iostream>
#include <iomanip>
void sum_diff(float op1,float op2,float* psum,float* pdiff){*psum=op1+op2;*pdiff=op1-op2;}
int main(){float a,b,s,d;std::cin>>a>>b;sum_diff(a,b,&s,&d);std::cout<<std::fixed<<std::setprecision(2)<<"The sum is "<<s<<"\nThe diff is "<<d<<"\n";}
