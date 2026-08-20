#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
double fact(int n){return n<2?1:n*fact(n-1);} double factsum(int n){return n<1?0:fact(n)+factsum(n-1);} int main(void){int n;if(scanf("%d",&n)==1)printf("%.0f",factsum(n));}