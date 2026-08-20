#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){double x,s=1,t=1;scanf("%lf",&x);for(int k=1;;k++){t*=x/k;s+=t;if(fabs(t)<1e-5)break;}printf("%.4f",s);}