#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int max(int a,int b){return a>b?a:b;} int main(void){int a,b;if(scanf("%d%d",&a,&b)==2)printf("%d",max(a,b));}