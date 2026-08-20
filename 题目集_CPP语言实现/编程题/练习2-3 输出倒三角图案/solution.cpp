// 练习2-3 输出倒三角图案
#include <iostream>
int main(){for(int i=4;i>=1;i--){for(int j=0;j<4-i;j++)std::cout<<' ';for(int j=0;j<i;j++)std::cout<<"*"<<(j+1==i?'\n':' ');}}
