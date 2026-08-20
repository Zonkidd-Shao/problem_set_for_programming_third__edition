// 习题6-1 分类统计字符个数
#include <iostream>
void StringCount(char s[]){int letter=0,blank=0,digit=0,other=0;for(int i=0;s[i];i++){char c=s[i];if((c>='a'&&c<='z')||(c>='A'&&c<='Z'))letter++;else if(c>='0'&&c<='9')digit++;else if(c==' '||c=='\n')blank++;else other++;}std::cout<<"letter = "<<letter<<", blank = "<<blank<<", digit = "<<digit<<", other = "<<other<<"\n";}
int main(){char s[11]={};for(int i=0;i<10&&std::cin.get(s[i]);i++){}StringCount(s);}
