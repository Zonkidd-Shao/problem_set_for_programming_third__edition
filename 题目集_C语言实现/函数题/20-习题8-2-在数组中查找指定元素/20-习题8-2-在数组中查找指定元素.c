#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int search(int a[],int n,int x){for(int i=0;i<n;i++)if(a[i]==x)return i;return -1;} int main(void){int n,x,a[100];if(scanf("%d",&n)==1){for(int i=0;i<n;i++)scanf("%d",&a[i]);scanf("%d",&x);printf("%d",search(a,n,x));}}