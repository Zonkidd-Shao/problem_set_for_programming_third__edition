#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){double x,y;scanf("%lf",&x);y=x<0?pow(x+1,2)+2*x+1/x:sqrt(x);printf("f(%.2f) = %.2f",x,y);}
