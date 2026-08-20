#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
void StringCount(char s[]){int a=0,b=0,c=0,d=0;for(int i=0;s[i];i++){if(isalpha((unsigned char)s[i]))a++;else if(s[i]==' '||s[i]=='\n')b++;else if(isdigit((unsigned char)s[i]))c++;else d++;}printf("letter = %d, blank = %d, digit = %d, other = %d",a,b,c,d);}
int main(void){char s[1000];fgets(s,sizeof s,stdin);StringCount(s);}