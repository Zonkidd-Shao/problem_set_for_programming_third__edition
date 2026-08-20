#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n;long long p=1;scanf("%d",&n);for(int i=0;i<=n;i++){if(i)p*=3;printf("pow(3,%d) = %lld\n",i,p);}}
