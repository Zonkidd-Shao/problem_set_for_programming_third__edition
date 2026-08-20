#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
double calc_pow(double x,int n){return n==0?1:x*calc_pow(x,n-1);} int main(void){double x;int n;if(scanf("%lf%d",&x,&n)==2)printf("%.2f",calc_pow(x,n));}