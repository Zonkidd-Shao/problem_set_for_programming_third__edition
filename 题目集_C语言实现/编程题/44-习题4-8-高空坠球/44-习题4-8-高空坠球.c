#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){double h,rebound;int n;scanf("%lf%d",&h,&n);double d=0;rebound=h;for(int i=1;i<=n;i++){if(i==1)d+=h;else d+=2*rebound;rebound/=2;}printf("%.1f %.1f",d,rebound);}
