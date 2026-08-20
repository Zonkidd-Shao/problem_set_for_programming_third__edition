// 习题6-7 简单计算器
#include <iostream>
#include <string>
#include <cctype>
int main(){std::string s;std::cin>>s;long long result=0,num=0;char op='+';bool valid=true,have=false;for(char ch:s){if(std::isdigit((unsigned char)ch)){num=num*10+ch-'0';have=true;}else if(ch=='='){if(!have){valid=false;break;}if(op=='+')result+=num;else if(op=='-')result-=num;else if(op=='*')result*=num;else if(op=='/'&&num!=0)result/=num;else valid=false;break;}else if(ch=='+'||ch=='-'||ch=='*'||ch=='/'){if(!have){valid=false;break;}if(op=='+')result+=num;else if(op=='-')result-=num;else if(op=='*')result*=num;else if(op=='/'&&num!=0)result/=num;else {valid=false;break;}op=ch;num=0;have=false;}else valid=false;}if(valid)std::cout<<result<<"\n";else std::cout<<"ERROR\n";}
