#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
char*match(char*s,char a,char b){char*p=strchr(s,a);if(!p){putchar('\n');return s+strlen(s);}for(char*q=p;*q;q++){putchar(*q);if(*q==b)break;}putchar('\n');return p;} int main(void){char s[100],a,b;if(scanf("%99s %c %c",s,&a,&b)==3)match(s,a,b);}
