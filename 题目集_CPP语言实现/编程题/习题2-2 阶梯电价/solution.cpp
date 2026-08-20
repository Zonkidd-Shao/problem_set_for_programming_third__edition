// 习题2-2 阶梯电价
#include <iostream>
#include <iomanip>
int main(){double x;std::cin>>x;if(x<0){std::cout<<"Invalid Value!\n";return 0;}double c=x<=50?x*.53:50*.53+(x-50)*.58;std::cout<<"cost = "<<std::fixed<<std::setprecision(2)<<c<<"\n";}
