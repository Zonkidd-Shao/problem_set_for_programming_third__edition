#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n,a[100],k=0;scanf("%d",&n);for(int i=0;i<n;i++){scanf("%d",a+i);if(a[i]>a[k])k=i;}printf("%d %d",a[k],k);}