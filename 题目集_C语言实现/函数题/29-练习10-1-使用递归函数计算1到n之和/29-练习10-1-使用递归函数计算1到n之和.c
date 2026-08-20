#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int sum(int n){return n>0?n+sum(n-1):0;} int main(void){int n;if(scanf("%d",&n)==1)printf("%d",sum(n));}