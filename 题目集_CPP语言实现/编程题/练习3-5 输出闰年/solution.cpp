// 练习3-5 输出闰年
#include <iostream>
int main(){int y;std::cin>>y;if(y<2001||y>2100){std::cout<<"Invalid year!\n";return 0;}bool found=false;for(int x=2001;x<=y;x++)if(x%400==0||(x%4==0&&x%100!=0)){std::cout<<x<<"\n";found=true;}if(!found)std::cout<<"None\n";}
