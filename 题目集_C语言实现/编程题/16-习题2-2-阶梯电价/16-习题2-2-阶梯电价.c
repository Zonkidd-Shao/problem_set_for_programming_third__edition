#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){double x;scanf("%lf",&x);if(x<0)puts("Invalid Value!");else printf("cost = %.2f",x<=50?x*.53:50*.53+(x-50)*.58);}
