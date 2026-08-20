// 习题7-6 统计大写辅音字母
#include <iostream>
#include <string>
int main(){std::string s;std::getline(std::cin,s);int count=0;for(char c:s)if(c>='A'&&c<='Z'&&c!='A'&&c!='E'&&c!='I'&&c!='O'&&c!='U')count++;std::cout<<count<<"\n";}
