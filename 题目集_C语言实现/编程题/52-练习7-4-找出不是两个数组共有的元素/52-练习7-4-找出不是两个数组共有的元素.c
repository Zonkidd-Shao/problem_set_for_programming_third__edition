#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n,m,a[100],b[100],out[200],k=0;scanf("%d",&n);for(int i=0;i<n;i++)scanf("%d",&a[i]);scanf("%d",&m);for(int i=0;i<m;i++)scanf("%d",&b[i]);for(int i=0;i<n;i++){int f=0;for(int j=0;j<m;j++)if(a[i]==b[j])f=1;if(!f){int q=0;for(int j=0;j<k;j++)if(out[j]==a[i])q=1;if(!q)out[k++]=a[i];}}for(int i=0;i<m;i++){int f=0;for(int j=0;j<n;j++)if(b[i]==a[j])f=1;if(!f){int q=0;for(int j=0;j<k;j++)if(out[j]==b[i])q=1;if(!q)out[k++]=b[i];}}for(int i=0;i<k;i++)printf("%d%c",out[i],i==k-1?'\n':' ');}