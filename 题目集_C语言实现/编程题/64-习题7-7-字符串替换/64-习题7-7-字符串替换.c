#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){char s[1000];fgets(s,sizeof s,stdin);for(int i=0;s[i];i++)if(s[i]>='A'&&s[i]<='Z')s[i]='Z'-(s[i]-'A');fputs(s,stdout);}
