#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){char s[1000];fgets(s,sizeof s,stdin);int n=strlen(s);if(n&&s[n-1]==10)n--;for(int i=n-1;i>=0;i--)putchar(s[i]);}