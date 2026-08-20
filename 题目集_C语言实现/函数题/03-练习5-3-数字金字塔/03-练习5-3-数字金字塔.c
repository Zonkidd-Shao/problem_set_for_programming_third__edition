#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
void pyramid(int n){for(int i=1;i<=n;i++){for(int j=1;j<=n-i;j++)printf(" ");for(int j=1;j<=i;j++)printf("%d ",i);putchar('\n');}} int main(void){int n;if(scanf("%d",&n)==1)pyramid(n);}