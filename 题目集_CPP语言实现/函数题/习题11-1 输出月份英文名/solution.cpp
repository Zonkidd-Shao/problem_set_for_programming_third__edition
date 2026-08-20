// 习题11-1 输出月份英文名
#include <iostream>
char* getmonth(int n){static char a[][10]={"","January","February","March","April","May","June","July","August","September","October","November","December"};return n>=1&&n<=12?a[n]:nullptr;}
int main(){int n;std::cin>>n;char* s=getmonth(n);if(s)std::cout<<s<<"\n";else std::cout<<"wrong input!\n";}
