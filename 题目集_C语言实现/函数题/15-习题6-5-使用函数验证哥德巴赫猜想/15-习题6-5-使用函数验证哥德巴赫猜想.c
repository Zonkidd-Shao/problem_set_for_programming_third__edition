#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int prime(int p){if(p<2)return 0;for(int i=2;i*i<=p;i++)if(p%i==0)return 0;return 1;} void Goldbach(int n){for(int p=3;p<=n/2;p+=2)if(prime(p)&&prime(n-p)){printf("%d=%d+%d",n,p,n-p);return;}}
int main(void){int n;if(scanf("%d",&n)==1)Goldbach(n);}