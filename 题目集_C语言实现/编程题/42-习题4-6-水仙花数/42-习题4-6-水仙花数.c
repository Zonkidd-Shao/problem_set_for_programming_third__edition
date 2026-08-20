#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n;scanf("%d",&n);for(int x=(int)pow(10,n-1);x<(int)pow(10,n);x++){int t=x,s=0;while(t){int d=t%10,p=1;for(int i=0;i<n;i++)p*=d;s+=p;t/=10;}if(s==x)printf("%d\n",x);}}