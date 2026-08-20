// 习题10-2 递归求阶乘和
#include <iostream>
#include <iomanip>
double fact(int n){return n? n*fact(n-1):1;}
double factsum(int n){double s=0;for(int i=1;i<=n;i++)s+=fact(i);return s;}
int main(){int n;std::cin>>n;std::cout<<"fact("<<n<<") = "<<std::fixed<<std::setprecision(0)<<fact(n)<<"\nsum = "<<factsum(n)<<"\n";}
