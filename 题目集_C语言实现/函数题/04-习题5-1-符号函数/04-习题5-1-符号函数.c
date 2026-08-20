#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int sign(int x){return (x>0)-(x<0);} int main(void){int x;if(scanf("%d",&x)==1)printf("%d",sign(x));}