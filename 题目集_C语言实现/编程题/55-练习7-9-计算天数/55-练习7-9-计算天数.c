#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int y,m,d,s=0,md[]={0,31,28,31,30,31,30,31,31,30,31,30,31};scanf("%d/%d/%d",&y,&m,&d);for(int i=1;i<m;i++)s+=md[i];if(m>2&&((y%4==0&&y%100)||y%400==0))s++;printf("%d",s+d);}