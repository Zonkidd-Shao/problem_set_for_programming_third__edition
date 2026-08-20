#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
void strmcpy(char*t,int m,char*s){int n=(int)strlen(t);if(m<1||m>n){*s=0;return;}strcpy(s,t+m-1);} int main(void){char t[1000],s[1000];int m;scanf("%d",&m);getchar();fgets(t,sizeof t,stdin);t[strcspn(t,"\n")]=0;strmcpy(t,m,s);puts(s);}