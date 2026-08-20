// 习题4-11 兔子繁衍问题
#include <iostream>
int main(){long long target;std::cin>>target;long long a=1,b=1;int month=1;while(a<target){long long c=a+b;a=b;b=c;month++;}std::cout<<month<<"\n";}
