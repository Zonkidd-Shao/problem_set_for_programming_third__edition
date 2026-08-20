#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
void splitfloat(float x,int*ip,float*fp){*ip=(int)x;*fp=x-*ip;} int main(void){float x,f;int i;if(scanf("%f",&x)==1){splitfloat(x,&i,&f);printf("%d\n%f",i,f);}}