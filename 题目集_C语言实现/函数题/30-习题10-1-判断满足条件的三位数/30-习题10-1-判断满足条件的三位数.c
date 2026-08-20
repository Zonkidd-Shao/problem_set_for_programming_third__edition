#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int search(int n){int c=0;for(int x=101;x<=n;x++){int r=(int)sqrt(x);if(r*r!=x)continue;int a=x/100,b=x/10%10,d=x%10;if(a==b||a==d||b==d)c++;}return c;} int main(void){int n;if(scanf("%d",&n)==1)printf("%d",search(n));}