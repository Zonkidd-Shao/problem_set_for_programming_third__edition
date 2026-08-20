#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int fn(int a,int n){int x=0;while(n--)x=x*10+a;return x;} int SumA(int a,int n){int s=0;for(int i=1;i<=n;i++)s+=fn(a,i);return s;} int main(void){int a,n;if(scanf("%d%d",&a,&n)==2)printf("%d",SumA(a,n));}