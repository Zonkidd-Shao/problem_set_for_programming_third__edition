#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int h,m,s,n;scanf("%d:%d:%d%d",&h,&m,&s,&n);int t=(h*3600+m*60+s+n)%86400;printf("%02d:%02d:%02d",t/3600,t/60%60,t%60);}