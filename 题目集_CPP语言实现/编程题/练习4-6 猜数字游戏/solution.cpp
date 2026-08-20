// 练习4-6 猜数字游戏
#include <iostream>
int main(){int target,n;std::cin>>target>>n;for(int i=1;i<=n;i++){int guess;std::cin>>guess;if(guess<0){std::cout<<"Game Over\n";return 0;}if(guess>target)std::cout<<"Too big\n";else if(guess<target)std::cout<<"Too small\n";else{if(i==1)std::cout<<"Bingo!\n";else if(i<=3)std::cout<<"Lucky You!\n";else std::cout<<"Good Guess!\n";return 0;}}std::cout<<"Game Over\n";}
