#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){double e,s=0,t;int i=1;scanf("%lf",&e);do{t=(i%2?1:-1)/(3.0*i-2);s+=t;i++;}while(fabs(t)>e);printf("sum = %.6f",s);}
