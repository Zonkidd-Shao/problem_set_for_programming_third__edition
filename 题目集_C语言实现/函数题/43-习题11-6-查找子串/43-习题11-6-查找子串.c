#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
char*search(char*s,char*t){return strstr(s,t);} int main(void){char s[256],t[128];if(scanf("%255s%127s",s,t)==2){char*p=search(s,t);if(p)puts(p);}}