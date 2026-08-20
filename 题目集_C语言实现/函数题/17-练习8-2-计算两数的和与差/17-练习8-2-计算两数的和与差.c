#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
void sum_diff(float a,float b,float*s,float*d){*s=a+b;*d=a-b;} int main(void){float a,b,s,d;if(scanf("%f%f",&a,&b)==2){sum_diff(a,b,&s,&d);printf("%.2f %.2f",s,d);}}