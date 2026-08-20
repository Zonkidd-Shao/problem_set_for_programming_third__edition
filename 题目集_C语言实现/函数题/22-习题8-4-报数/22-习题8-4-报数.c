#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
void CountOff(int n,int m,int out[]){int a[100],left=n,k=0,pos=0;for(int i=0;i<n;i++)a[i]=i+1;while(left){int c=0;while(c<m){if(a[pos])c++;if(c==m)break;pos=(pos+1)%n;}out[a[pos]-1]=++k;a[pos]=0;left--;do{pos=(pos+1)%n;}while(!a[pos]);}}
int main(void){int n,m,a[100];if(scanf("%d%d",&n,&m)==2){CountOff(n,m,a);for(int i=0;i<n;i++)printf("%d%c",a[i],i==n-1?'\n':' ');}}