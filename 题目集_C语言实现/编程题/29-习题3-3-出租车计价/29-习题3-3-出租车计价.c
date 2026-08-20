#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){double d,p=10;int wait;scanf("%lf%d",&d,&wait);if(d>3)p+=(d<=10?(d-3)*2:7*2+(d-10)*3);p+=(wait/5)*2;printf("%.0f",p);}
