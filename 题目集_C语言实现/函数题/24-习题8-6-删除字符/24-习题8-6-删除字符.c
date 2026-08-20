#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
void delchar(char*s,char c){char*p=s;while((*p++=*s++))if(p[-1]==c)p--; } int main(void){char s[256],c;if(scanf("%255s %c",s,&c)==2){delchar(s,c);puts(s);}}