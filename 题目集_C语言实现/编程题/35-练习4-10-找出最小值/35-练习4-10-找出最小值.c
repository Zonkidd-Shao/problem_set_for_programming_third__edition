#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n,x,m;scanf("%d",&n);scanf("%d",&m);for(int i=1;i<n;i++){scanf("%d",&x);if(x<m)m=x;}printf("min = %d",m);}
