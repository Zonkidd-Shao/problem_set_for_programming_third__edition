#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
void Shift(char*s){size_t n=strlen(s);if(n>=3){char t[4];memcpy(t,s,3);memmove(s,s+3,n-2);memcpy(s+n-3,t,3);}} int main(void){char s[256];if(scanf("%255s",s)==1){Shift(s);puts(s);}}