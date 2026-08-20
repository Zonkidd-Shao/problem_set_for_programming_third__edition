#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
double fn(double x,int n){if(n<=0)return 0;return fn(x,n-1)+(n%2?1:-1)*pow(x,n);} int main(void){double x;int n;if(scanf("%lf%d",&x,&n)==2)printf("%.6f",fn(x,n));}
