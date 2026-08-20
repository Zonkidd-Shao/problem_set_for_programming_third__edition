#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n;double s=1,f=1;scanf("%d",&n);for(int i=1;i<=n;i++){f*=i;s+=1/f;}printf("%.8f",s);}
