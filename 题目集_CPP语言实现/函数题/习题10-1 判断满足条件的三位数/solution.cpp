// 习题10-1 判断满足条件的三位数
#include <iostream>
#include <cmath>
int search(int n){int count=0;for(int x=101;x<=n;x++){int y=(int)std::sqrt(x);if(y*y!=x)continue;int a=x/100,b=x/10%10,c=x%10;if(a==b||a==c||b==c)count++;}return count;}
int main(){int n;std::cin>>n;std::cout<<"count="<<search(n)<<"\n";}
