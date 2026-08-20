#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int t,n,x,ok;scanf("%d",&t);for(int k=0;k<t;k++){scanf("%d",&n);ok=1;for(int i=0;i<n;i++)for(int j=0;j<n;j++){scanf("%d",&x);if(i>j&&x)ok=0;}puts(ok?"YES":"NO");}}
