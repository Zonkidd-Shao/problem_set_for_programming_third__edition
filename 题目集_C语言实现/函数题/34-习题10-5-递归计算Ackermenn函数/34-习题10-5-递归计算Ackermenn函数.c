#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int Ack(int m,int n){if(!m)return n+1;if(!n)return Ack(m-1,1);return Ack(m-1,Ack(m,n-1));} int main(void){int m,n;if(scanf("%d%d",&m,&n)==2)printf("%d",Ack(m,n));}