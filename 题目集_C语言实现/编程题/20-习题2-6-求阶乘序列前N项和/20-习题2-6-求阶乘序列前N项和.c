#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n;long long f=1,s=0;scanf("%d",&n);for(int i=1;i<=n;i++){f*=i;s+=f;}printf("%lld",s);}