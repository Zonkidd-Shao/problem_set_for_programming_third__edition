#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
char*getmonth(int n){static char*m[]={"January","February","March","April","May","June","July","August","September","October","November","December"};return n>=1&&n<=12?m[n-1]:NULL;} int main(void){int n;if(scanf("%d",&n)==1){char*p=getmonth(n);if(p)puts(p);}}