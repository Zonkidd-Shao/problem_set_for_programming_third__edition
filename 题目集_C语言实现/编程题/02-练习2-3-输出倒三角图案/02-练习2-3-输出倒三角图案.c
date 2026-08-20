#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){for(int i=4;i>=1;i--){for(int j=0;j<4-i;j++)putchar(' ');for(int j=0;j<i;j++){if(j)putchar(' ');putchar('*');}putchar('\n');}return 0;}
