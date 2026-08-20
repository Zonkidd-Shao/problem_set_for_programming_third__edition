#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int a[3];scanf("%d%d%d",a,a+1,a+2);for(int i=0;i<3;i++)for(int j=i+1;j<3;j++)if(a[i]>a[j]){int t=a[i];a[i]=a[j];a[j]=t;}printf("%d->%d->%d",a[0],a[1],a[2]);}
