#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){char s[1000],h[1000];int neg=0,k=0;fgets(s,sizeof s,stdin);for(int i=0;s[i]&&s[i]!='#';i++){if(s[i]=='-'&&k==0)neg=1;else if(isxdigit((unsigned char)s[i]))h[k++]=s[i];}h[k]=0;long long v=strtoll(h,NULL,16);printf("%lld",neg?-v:v);}