// 习题3-3 出租车计价
#include <iostream>
#include <iomanip>
int main(){double km;int t;std::cin>>km>>t;double c;if(km<=3)c=10;else if(km<=13)c=10+(km-3)*2;else c=30+(km-13)*3;c+=t/5*2;std::cout<<std::fixed<<std::setprecision(0)<<c<<"\n";}
