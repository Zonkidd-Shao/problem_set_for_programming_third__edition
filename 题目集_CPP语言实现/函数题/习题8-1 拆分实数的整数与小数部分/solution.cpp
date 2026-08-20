// 习题8-1 拆分实数的整数与小数部分
#include <iostream>
void splitfloat(float x,int* intpart,float* fracpart){*intpart=(int)x;*fracpart=x-*intpart;}
int main(){float x,frac;int part;std::cin>>x;splitfloat(x,&part,&frac);std::cout<<"The integer part is "<<part<<"\nThe fractional part is "<<frac<<"\n";}
