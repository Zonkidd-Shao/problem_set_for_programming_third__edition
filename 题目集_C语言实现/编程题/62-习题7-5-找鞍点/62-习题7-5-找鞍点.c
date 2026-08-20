#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n,a[20][20],found=0;scanf("%d",&n);for(int i=0;i<n;i++)for(int j=0;j<n;j++)scanf("%d",&a[i][j]);for(int i=0;i<n&&!found;i++){int mx=a[i][0];for(int j=1;j<n;j++)if(a[i][j]>mx)mx=a[i][j];for(int j=0;j<n;j++)if(a[i][j]==mx){int ok=1;for(int k=0;k<n;k++)if(a[k][j]<mx)ok=0;if(ok){printf("%d %d\n",i,j);found=1;break;}}}if(!found)puts("NONE");}
