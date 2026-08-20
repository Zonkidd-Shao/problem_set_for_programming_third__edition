// 习题9-2 计算两个复数之积
#include <iostream>
struct complex{int real;int imag;};
struct complex multiply(struct complex x,struct complex y){return {x.real*y.real-x.imag*y.imag,x.real*y.imag+x.imag*y.real};}
int main(){int a,b,c,d;std::cin>>a>>b>>c>>d;auto product=multiply({a,b},{c,d});std::cout<<"("<<a<<"+"<<b<<"i) * ("<<c<<"+"<<d<<"i) = "<<product.real<<" + "<<product.imag<<"i\n";}
