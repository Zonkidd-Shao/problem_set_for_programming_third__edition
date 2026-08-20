#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int m,n,s=0,c=0;scanf("%d%d",&m,&n);for(int i=m;i<=n;i++){int p=1;for(int j=2;j*j<=i;j++)if(i%j==0)p=0;if(p&&i>1){s+=i;c++;}}printf("%d %d",c,s);}