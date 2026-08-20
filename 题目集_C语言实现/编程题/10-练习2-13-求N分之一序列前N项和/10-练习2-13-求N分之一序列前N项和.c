#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n;double s=0;scanf("%d",&n);for(int i=1;i<=n;i++)s+=1.0/i;printf("sum = %.6f",s);}
