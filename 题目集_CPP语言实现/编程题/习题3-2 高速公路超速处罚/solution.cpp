// 习题3-2 高速公路超速处罚
#include <iostream>
int main(){double speed,limit;std::cin>>speed>>limit;double p=(speed-limit)*100.0/limit;if(p<10){std::cout<<"OK\n";}else{int percent=(int)(p+0.5);if(p>=50)std::cout<<"Exceed "<<percent<<"%. License Revoked\n";else std::cout<<"Exceed "<<percent<<"%. Ticket 200\n";}}
