#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){char s[1000];int c=0;fgets(s,sizeof s,stdin);for(int i=0;s[i];i++)if(isupper((unsigned char)s[i])&&!strchr("AEIOU",s[i]))c++;printf("%d",c);}