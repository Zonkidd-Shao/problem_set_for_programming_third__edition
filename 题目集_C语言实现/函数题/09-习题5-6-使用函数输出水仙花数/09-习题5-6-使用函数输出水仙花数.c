#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int narcissistic(int x){int n=0,t=x,s=0;if(x<100)return 0;while(t){n++;t/=10;}t=x;while(t){int d=t%10,p=1;for(int i=0;i<n;i++)p*=d;s+=p;t/=10;}return s==x;}
void PrintN(int m,int n){int f=0;for(int i=m+1;i<n;i++)if(narcissistic(i)){printf("%d\n",i);f=1;}if(!f)puts("No narcissistic number");}
int main(void){int m,n;if(scanf("%d%d",&m,&n)==2)PrintN(m,n);return 0;}