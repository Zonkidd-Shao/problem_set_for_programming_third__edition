#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int l,u;scanf("%d%d",&l,&u);if(l>u){puts("Invalid.");return 0;}puts("fahr celsius");for(int f=l;f<=u;f+=2)printf("%d %6.1f\n",f,5.0*(f-32)/9);}
