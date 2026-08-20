#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int prime(int p){if(p<2)return 0;for(int i=2;i*i<=p;i++)if(p%i==0)return 0;return 1;} int PrimeSum(int m,int n){int s=0;for(int i=m;i<=n;i++)if(prime(i))s+=i;return s;} int main(void){int m,n;if(scanf("%d%d",&m,&n)==2)printf("%d",PrimeSum(m,n));}