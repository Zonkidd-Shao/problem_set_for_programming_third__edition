#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int fib(int n){if(n<=2)return 1;int a=1,b=1;for(int i=3;i<=n;i++){int t=a+b;a=b;b=t;}return b;}
void PrintFN(int m,int n){int a=1,b=1,any=0;while(a<=n){if(a>=m){if(any)putchar(' ');printf("%d",a);any=1;}int t=a+b;a=b;b=t;}if(!any)puts("No Fibonacci number");}
int main(void){int m,n;if(scanf("%d%d",&m,&n)==2)PrintFN(m,n);}