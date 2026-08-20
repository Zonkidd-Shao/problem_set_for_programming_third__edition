// 习题5-2 使用函数求奇数和
#include <iostream>
#include <vector>
int even(int n){return n%2==0;}
int OddSum(int List[],int N){int s=0;for(int i=0;i<N;i++)if(!even(List[i]))s+=List[i];return s;}
int main(){int n,x,s=0;std::cin>>n;std::vector<int>a;while(n--){std::cin>>x;a.push_back(x);if(!even(x))s+=x;}std::cout<<"Sum of ( ";for(int v:a)if(!even(v))std::cout<<v<<" ";std::cout<<") = "<<s<<"\n";}
