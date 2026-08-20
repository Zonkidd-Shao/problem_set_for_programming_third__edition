#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
void ArrayShift(int*a,int n,int m){if(n<1)return;m%=n;int*t=malloc(n*sizeof(int));for(int i=0;i<n;i++)t[(i+m)%n]=a[i];memcpy(a,t,n*sizeof(int));free(t);} int main(void){int n,m,a[100];if(scanf("%d%d",&n,&m)==2){for(int i=0;i<n;i++)scanf("%d",&a[i]);ArrayShift(a,n,m);for(int i=0;i<n;i++)printf("%d%c",a[i],i==n-1?'\n':' ');}}