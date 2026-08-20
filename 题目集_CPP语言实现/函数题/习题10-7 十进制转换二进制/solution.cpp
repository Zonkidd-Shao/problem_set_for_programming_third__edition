// 习题10-7 十进制转换二进制
#include <iostream>
void dectobin(int n){if(n>1)dectobin(n/2);std::cout<<n%2;}
int main(){int n;std::cin>>n;if(n==0)std::cout<<0;else dectobin(n);std::cout<<"\n";}
