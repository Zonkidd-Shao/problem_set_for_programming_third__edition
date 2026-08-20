#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){double a,b,c,d,x,y;scanf("%lf%lf%lf%lf",&a,&b,&c,&d);x=a+c;y=b+d;if(fabs(x)<0.05)x=0;if(fabs(y)<0.05)y=0;printf("(%.1f, %.1f)",x,y);}
