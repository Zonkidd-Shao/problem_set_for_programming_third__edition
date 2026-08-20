// 习题5-7 使用函数求余弦函数的近似值
#include <iostream>
#include <cmath>
#include <iomanip>
double funcos(double e,double x){double s=1,t=1;for(int i=2;;i+=2){t*=-x*x/((i-1)*i);s+=t;if(std::fabs(t)<e)break;}return s;}
int main(){double e,x;std::cin>>e>>x;std::cout<<"cos("<<std::fixed<<std::setprecision(2)<<x<<") = "<<std::setprecision(6)<<funcos(e,x)<<"\n";}
