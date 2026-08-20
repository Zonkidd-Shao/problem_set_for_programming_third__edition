#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){double x1,y1,x2,y2,x3,y3;scanf("%lf%lf%lf%lf%lf%lf",&x1,&y1,&x2,&y2,&x3,&y3);double a=hypot(x1-x2,y1-y2),b=hypot(x1-x3,y1-y3),c=hypot(x2-x3,y2-y3);if(!(a+b>c&&a+c>b&&b+c>a)){puts("Impossible");return 0;}double p=(a+b+c)/2;printf("L = %.2f, A = %.2f",a+b+c,sqrt(p*(p-a)*(p-b)*(p-c)));}
