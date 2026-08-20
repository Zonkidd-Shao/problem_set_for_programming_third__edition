#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){char c,s[1000];scanf("%c",&c);getchar();fgets(s,sizeof s,stdin);int k=-1;for(int i=0;s[i]&&s[i]!='\n';i++)if(s[i]==c)k=i;if(k>=0)printf("index = %d",k);else printf("Not Found");}
