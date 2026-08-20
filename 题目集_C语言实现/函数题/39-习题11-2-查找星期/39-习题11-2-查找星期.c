#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int getindex(char*s){char*w[]={"Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"};for(int i=0;i<7;i++)if(!strcmp(s,w[i]))return i;return -1;} int main(void){char s[80];if(scanf("%79s",s)==1)printf("%d",getindex(s));}