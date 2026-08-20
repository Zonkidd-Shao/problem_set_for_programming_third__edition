#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int m,n,a[20][20],b[20][20];scanf("%d%d",&m,&n);m%=n;for(int i=0;i<n;i++)for(int j=0;j<n;j++)scanf("%d",&a[i][j]);for(int i=0;i<n;i++)for(int j=0;j<n;j++)b[i][(j+m)%n]=a[i][j];for(int i=0;i<n;i++){for(int j=0;j<n;j++)printf("%d%c",b[i][j],j==n-1?'\n':' ');}}
