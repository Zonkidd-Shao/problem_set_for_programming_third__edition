#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int sum(int m,int n){int s=0;for(int i=m;i<=n;i++)s+=i;return s;}
int main(void){int m,n;if(scanf("%d%d",&m,&n)==2)printf("%d",sum(m,n));return 0;}