#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
char*str_cat(char*s,char*t){return strcat(s,t);} int main(void){char s[256],t[128];if(scanf("%255s%127s",s,t)==2)puts(str_cat(s,t));}