#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n,a[100];scanf("%d",&n);for(int i=0;i<n;i++)scanf("%d",a+i);for(int i=0;i<n;i++){int k=i;for(int j=i+1;j<n;j++)if(a[j]>a[k])k=j;int t=a[i];a[i]=a[k];a[k]=t;}for(int i=0;i<n;i++)printf("%d%c",a[i],i==n-1?10:32);}