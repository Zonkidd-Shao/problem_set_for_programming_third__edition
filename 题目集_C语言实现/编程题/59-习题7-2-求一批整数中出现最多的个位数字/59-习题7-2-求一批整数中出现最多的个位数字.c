#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n,x,c[10]={0};scanf("%d",&n);for(int i=0;i<n;i++){scanf("%d",&x);if(x==0)c[0]++;while(x){c[abs(x%10)]++;x/=10;}}int mx=0;for(int i=0;i<10;i++)if(c[i]>mx)mx=c[i];printf("%d:",mx);for(int i=0;i<10;i++)if(c[i]==mx)printf(" %d",i);putchar('\n');}
