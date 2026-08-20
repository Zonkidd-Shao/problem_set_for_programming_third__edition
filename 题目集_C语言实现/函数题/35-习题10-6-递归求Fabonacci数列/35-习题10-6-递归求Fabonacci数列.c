#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int f(int n){return n==0?0:n==1?1:f(n-1)+f(n-2);} int main(void){int n;if(scanf("%d",&n)==1)printf("%d",f(n));}
