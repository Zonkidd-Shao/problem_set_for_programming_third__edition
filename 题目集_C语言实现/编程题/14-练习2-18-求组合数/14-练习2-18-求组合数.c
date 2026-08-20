#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int m,n;double r=1;scanf("%d%d",&m,&n);for(int i=1;i<=m;i++)r*=((double)(n-i+1))/i;printf("result = %.0f",r);}
