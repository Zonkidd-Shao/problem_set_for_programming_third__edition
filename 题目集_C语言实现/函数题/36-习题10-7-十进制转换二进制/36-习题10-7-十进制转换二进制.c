#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
void dectobin(int n){if(n>1)dectobin(n/2);putchar('0'+n%2);} int main(void){int n;if(scanf("%d",&n)==1){if(!n)putchar('0');else dectobin(n);}}