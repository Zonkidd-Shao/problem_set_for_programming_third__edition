#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n,p=1;scanf("%d",&n);for(int i=1;i<n;i++)p=(p+1)*2;printf("%d",p);}