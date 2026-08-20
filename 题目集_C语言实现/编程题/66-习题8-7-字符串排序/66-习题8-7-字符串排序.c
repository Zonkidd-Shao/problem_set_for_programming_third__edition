#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){char s[5][100];for(int i=0;i<5;i++)scanf("%99s",s[i]);for(int i=0;i<5;i++)for(int j=i+1;j<5;j++)if(strcmp(s[i],s[j])>0){char t[100];strcpy(t,s[i]);strcpy(s[i],s[j]);strcpy(s[j],t);}puts("After sorted:");for(int i=0;i<5;i++)puts(s[i]);}
