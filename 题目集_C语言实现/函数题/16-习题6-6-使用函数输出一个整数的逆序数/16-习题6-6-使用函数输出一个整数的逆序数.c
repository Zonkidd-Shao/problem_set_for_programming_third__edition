#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int reverse(int x){int s=0,sgn=x<0?-1:1;x=abs(x);do{s=s*10+x%10;x/=10;}while(x);return s*sgn;} int main(void){int x;if(scanf("%d",&x)==1)printf("%d",reverse(x));}