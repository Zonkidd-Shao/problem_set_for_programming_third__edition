#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n,*a;scanf("%d",&n);a=malloc(n*sizeof* a);for(int i=0;i<n;i++)scanf("%d",&a[i]);int sum=0,mn=a[0],mx=a[0];for(int i=0;i<n;i++){sum+=a[i];if(a[i]<mn)mn=a[i];if(a[i]>mx)mx=a[i];}printf("average = %.2f\nmax = %.2f\nmin = %.2f",sum/(double)n,(double)mx,(double)mn);free(a);}
