#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n,x,s=0,c=0;scanf("%d",&n);for(int i=0;i<n;i++){scanf("%d",&x);s+=x;if(x>=60)c++;}printf("average = %.1f\ncount = %d",s/(double)n,c);}