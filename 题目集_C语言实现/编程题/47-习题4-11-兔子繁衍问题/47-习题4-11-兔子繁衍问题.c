#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n,a=1,b=1,m=2;scanf("%d",&n);if(n<=1){printf("1");return 0;}while(b<n){int t=a+b;a=b;b=t;m++;}printf("%d",m);}
