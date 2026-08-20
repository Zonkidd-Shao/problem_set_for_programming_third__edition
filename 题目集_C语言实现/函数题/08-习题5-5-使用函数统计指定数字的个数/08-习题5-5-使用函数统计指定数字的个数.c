#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int CountDigit(int x,int d){int c=0;if(x==0)return d==0;for(x=abs(x);x;x/=10)c+=(x%10==d);return c;} int main(void){int x,d;if(scanf("%d%d",&x,&d)==2)printf("%d",CountDigit(x,d));}