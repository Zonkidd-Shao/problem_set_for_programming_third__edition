#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int secret,n,x;scanf("%d%d",&secret,&n);for(int i=1;i<=n;i++){if(scanf("%d",&x)!=1||x<0){puts("Game Over");return 0;}if(x==secret){puts(i==1?"Bingo!":i<=3?"Lucky You!":"Good Guess!");return 0;}puts(x>secret?"Too big":"Too small");}puts("Game Over");}
