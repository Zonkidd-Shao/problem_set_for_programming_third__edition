// 习题5-1 符号函数
#include <iostream>
int sign(int x){return x>0?1:x==0?0:-1;}
int main(){int x;std::cin>>x;std::cout<<"sign("<<x<<") = "<<sign(x)<<"\n";}
