#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){char s[1000];int c=0,in=0;fgets(s,sizeof s,stdin);for(int i=0;s[i];i++)if(s[i]==' '||s[i]=='\n'||s[i]=='\t')in=0;else if(!in){c++;in=1;}printf("%d",c);}
