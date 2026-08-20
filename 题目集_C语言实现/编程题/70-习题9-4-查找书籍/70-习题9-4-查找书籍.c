#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n;char name[100],hi[100],lo[100];double x,mx=-1,mn=1e100;scanf("%d",&n);for(int i=0;i<n;i++){scanf(" %99[^\n]",name);scanf("%lf",&x);if(x>mx)mx=x,strcpy(hi,name);if(x<mn)mn=x,strcpy(lo,name);}printf("%.2f, %s\n%.2f, %s",mx,hi,mn,lo);}
