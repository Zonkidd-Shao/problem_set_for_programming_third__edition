#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
void printdigits(int n){if(n>=10)printdigits(n/10);printf("%d\n",n%10);} int main(void){int n;if(scanf("%d",&n)==1)printdigits(abs(n));}