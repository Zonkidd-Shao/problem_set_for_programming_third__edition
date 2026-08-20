// 练习3-8 查询水果价格
#include <iostream>
#include <iomanip>
int main(){std::cout<<"[1] apple\n[2] pear\n[3] orange\n[4] grape\n[0] exit\n";int x,count=0;const double price[]={0,3.00,2.50,4.10,10.20};while(count<5&&std::cin>>x&&x!=0){std::cout<<"price = "<<std::fixed<<std::setprecision(2)<<((x>=1&&x<=4)?price[x]:0.0)<<"\n";count++;}}
