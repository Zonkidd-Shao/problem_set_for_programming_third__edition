#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int a,b;char op;if(scanf("%d",&a)!=1)return 0;while(scanf(" %c",&op)==1&&op!='='){if(scanf("%d",&b)!=1){puts("ERROR");return 0;}if(op=='+')a+=b;else if(op=='-')a-=b;else if(op=='*')a*=b;else if(op=='/'&&b)a/=b;else{puts("ERROR");return 0;}}printf("%d",a);}
