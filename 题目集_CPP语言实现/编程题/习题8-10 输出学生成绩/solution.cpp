// 习题8-10 输出学生成绩
#include <iostream>
#include <iomanip>
#include <vector>
#include <algorithm>
int main(){int n;std::cin>>n;std::vector<double>a(n);for(double& x:a)std::cin>>x;double sum=0;for(double x:a)sum+=x;auto mm=std::minmax_element(a.begin(),a.end());std::cout<<std::fixed<<std::setprecision(2)<<"average = "<<sum/n<<"\nmax = "<<*mm.second<<"\nmin = "<<*mm.first<<"\n";}
