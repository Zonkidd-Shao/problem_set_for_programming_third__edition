#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int m,n,x;scanf("%d%d",&m,&n);for(int i=0;i<m;i++){int s=0;for(int j=0;j<n;j++){scanf("%d",&x);s+=x;}printf("%d\n",s);}}
