#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n,count=0;scanf("%d",&n);for(int a=n/5;a>=1;a--)for(int b=(n-5*a)/2;b>=1;b--){int c=n-5*a-2*b;if(c>=1){printf("fen5:%d, fen2:%d, fen1:%d, total:%d\n",a,b,c,a+b+c);count++;}}printf("count = %d",count);}
