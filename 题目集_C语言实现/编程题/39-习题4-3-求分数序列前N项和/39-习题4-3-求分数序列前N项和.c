#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n;double a=2,b=1,s=0;scanf("%d",&n);for(int i=0;i<n;i++){s+=a/b;double t=a;a+=b;b=t;}printf("%.2f",s);}