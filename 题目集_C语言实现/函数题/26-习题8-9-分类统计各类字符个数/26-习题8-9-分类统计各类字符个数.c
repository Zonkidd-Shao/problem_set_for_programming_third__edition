#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
void StringCount(char*s){int a=0,b=0,c=0,d=0,e=0;for(int i=0;s[i];i++){if(isupper((unsigned char)s[i]))a++;else if(islower((unsigned char)s[i]))b++;else if(s[i]==' ')c++;else if(isdigit((unsigned char)s[i]))d++;else e++;}printf("%d %d %d %d %d",a,b,c,d,e);} int main(void){char s[1000];fgets(s,sizeof s,stdin);StringCount(s);}