#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n;scanf("%d",&n);for(int i=0;i<n;i++){for(int j=0;j<2*abs(n/2-i);j++)putchar(' ');for(int j=0;j<n-2*abs(n/2-i);j++)printf("* ");putchar('\n');}}
