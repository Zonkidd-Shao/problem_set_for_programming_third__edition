// 练习2-12 输出华氏-摄氏温度转换表
#include <iostream>
#include <iomanip>
int main(){int lower,upper;std::cin>>lower>>upper;if(lower<0||upper>100||lower>upper){std::cout<<"Invalid.\n";return 0;}std::cout<<"fahr celsius\n";for(int f=lower;f<=upper;f+=2)std::cout<<f<<std::setw(6)<<std::fixed<<std::setprecision(1)<<5.0*(f-32)/9<<"\n";}
