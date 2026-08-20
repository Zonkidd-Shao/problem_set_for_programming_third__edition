#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int a,n,x=0,s=0;scanf("%d%d",&a,&n);for(int i=0;i<n;i++){x=x*10+a;s+=x;}printf("s = %d",s);}
