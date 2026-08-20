#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n,y,any=0;scanf("%d",&n);if(n<2001||n>2100){puts("Invalid year!");return 0;}for(y=2001;y<=n;y++)if((y%4==0&&y%100)||y%400==0){printf("%d\n",y);any=1;}if(!any)puts("None");}
