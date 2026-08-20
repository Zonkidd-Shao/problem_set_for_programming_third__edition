// 练习3-3 统计学生平均成绩与及格人数
#include <iostream>
#include <iomanip>
int main(){int n,c=0;double x,s=0;std::cin>>n;for(int i=0;i<n;i++){std::cin>>x;s+=x;if(x>=60)c++;}std::cout<<"average = "<<std::fixed<<std::setprecision(1)<<s/n<<"\ncount = "<<c<<"\n";}
