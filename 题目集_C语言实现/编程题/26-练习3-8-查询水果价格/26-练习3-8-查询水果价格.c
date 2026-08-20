#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int x,cnt=0;double p[]={3,2.5,4.1,10.2};puts("[1] apple\n[2] pear\n[3] orange\n[4] grape\n[0] exit");while(cnt<5&&scanf("%d",&x)==1&&x!=0){printf("price = %.2f\n",x>=1&&x<=4?p[x-1]:0.0);cnt++;}}
