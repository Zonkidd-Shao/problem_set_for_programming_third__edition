#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int x,s=0;while(scanf("%d",&x)==1&&x>0)if(x%2)s+=x;printf("%d",s);}
