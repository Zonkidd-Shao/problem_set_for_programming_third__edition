#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n;double s=0;scanf("%d",&n);for(int i=1;i<=n;i++)s+=(i%2?1:-1)*(double)i/(2*i-1);printf("%.3f",s);}