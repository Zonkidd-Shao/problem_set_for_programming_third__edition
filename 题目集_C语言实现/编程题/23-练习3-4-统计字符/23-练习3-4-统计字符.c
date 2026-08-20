#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int c=0,l=0,d=0,o=0;for(int i=0;i<10;i++){int x=getchar();if(isalpha(x))l++;else if(x==' '||x=='\n')c++;else if(isdigit(x))d++;else o++;}printf("letter = %d, blank = %d, digit = %d, other = %d",l,c,d,o);}