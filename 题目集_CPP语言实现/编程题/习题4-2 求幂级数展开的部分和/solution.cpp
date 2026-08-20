// 习题4-2 求幂级数展开的部分和
#include <iostream>
#include <cmath>
#include <iomanip>
int main(){double x;std::cin>>x;double term=1,sum=1;for(int k=1;;k++){term*=x/k;sum+=term;if(std::fabs(term)<1e-5)break;}std::cout<<std::fixed<<std::setprecision(4)<<sum<<"\n";}
