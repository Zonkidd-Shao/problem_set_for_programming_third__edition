#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
double funcos(double e,double x){double s=1,t=1;int k=1;while(fabs(t)>e){t*=-x*x/(2*k*(2*k-1));s+=t;k++;}return s;} int main(void){double e,x;if(scanf("%lf%lf",&e,&x)==2)printf("%.6f",funcos(e,x));}