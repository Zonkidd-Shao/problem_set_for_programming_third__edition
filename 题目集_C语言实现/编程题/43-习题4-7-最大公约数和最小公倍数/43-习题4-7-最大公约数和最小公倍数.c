#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int a,b,x,y;scanf("%d%d",&a,&b);x=a;y=b;while(y){int t=x%y;x=y;y=t;}printf("%d %d",x,a/x*b);}