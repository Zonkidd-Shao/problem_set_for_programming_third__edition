#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int m,n;double s=0;scanf("%d%d",&m,&n);for(int i=m;i<=n;i++)s+=i*i+1.0/i;printf("sum = %.6f",s);}
