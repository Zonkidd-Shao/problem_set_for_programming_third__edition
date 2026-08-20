#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n,x,c[5]={0};scanf("%d",&n);for(int i=0;i<n;i++){scanf("%d",&x);c[x>=90?0:x>=80?1:x>=70?2:x>=60?3:4]++;}for(int i=0;i<5;i++)printf("%d%c",c[i],i==4?'\n':' ');}