#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int v,l;scanf("%d%d",&v,&l);double p=(v-l)*100.0/l;if(p>=50)printf("Exceed %.0f%%. License Revoked",p);else if(p>=10)printf("Exceed %.0f%%. Ticket 200",p);else puts("OK");}
