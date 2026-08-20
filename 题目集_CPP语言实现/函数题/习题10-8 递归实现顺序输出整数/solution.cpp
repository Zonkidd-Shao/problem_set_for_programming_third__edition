// 习题10-8 递归实现顺序输出整数
#include <iostream>
void printdigits(int n){if(n>=10)printdigits(n/10);std::cout<<n%10<<"\n";}
int main(){int n;std::cin>>n;if(n<0){std::cout<<"-\n";n=-n;}if(n==0)std::cout<<"0\n";else printdigits(n);}
