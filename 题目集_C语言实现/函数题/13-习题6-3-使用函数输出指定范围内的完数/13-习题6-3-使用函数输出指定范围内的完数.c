#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int factorsum(int n){int s=0;for(int i=1;i<n;i++)if(n%i==0)s+=i;return s;}
void PrintPN(int m,int n){int any=0;for(int x=m;x<=n;x++)if(factorsum(x)==x){if(any)putchar('\n');printf("%d = ",x);int first=1;for(int i=1;i<x;i++)if(x%i==0){if(!first)printf(" + ");printf("%d",i);first=0;}any=1;}if(!any)puts("No perfect number");}
int main(void){int m,n;if(scanf("%d%d",&m,&n)==2)PrintPN(m,n);}