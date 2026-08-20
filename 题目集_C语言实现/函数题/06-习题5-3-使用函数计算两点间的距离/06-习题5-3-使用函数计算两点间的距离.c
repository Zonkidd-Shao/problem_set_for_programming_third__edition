#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
double dist(double x1,double y1,double x2,double y2){return hypot(x1-x2,y1-y2);} int main(void){double a,b,c,d;if(scanf("%lf%lf%lf%lf",&a,&b,&c,&d)==4)printf("%.2f",dist(a,b,c,d));}