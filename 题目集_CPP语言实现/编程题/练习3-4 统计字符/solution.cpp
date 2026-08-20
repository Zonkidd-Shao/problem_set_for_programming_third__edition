// 练习3-4 统计字符
#include <iostream>
int main(){char c;int letter=0,blank=0,digit=0,other=0;for(int i=0;i<10&&std::cin.get(c);i++){if((c>='a'&&c<='z')||(c>='A'&&c<='Z'))letter++;else if(c>='0'&&c<='9')digit++;else if(c==' '||c=='\n')blank++;else other++;}std::cout<<"letter = "<<letter<<", blank = "<<blank<<", digit = "<<digit<<", other = "<<other<<"\n";}
