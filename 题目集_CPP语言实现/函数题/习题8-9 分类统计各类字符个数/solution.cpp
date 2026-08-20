// 习题8-9 分类统计各类字符个数
#include <iostream>
void StringCount(char* s){int upper=0,lower=0,space=0,digit=0,other=0;for(int i=0;s[i];i++){char c=s[i];if(c>='A'&&c<='Z')upper++;else if(c>='a'&&c<='z')lower++;else if(c==' ')space++;else if(c>='0'&&c<='9')digit++;else other++;}std::cout<<upper<<" "<<lower<<" "<<space<<" "<<digit<<" "<<other<<"\n";}
int main(){std::string s;std::getline(std::cin,s);StringCount(s.data());}
