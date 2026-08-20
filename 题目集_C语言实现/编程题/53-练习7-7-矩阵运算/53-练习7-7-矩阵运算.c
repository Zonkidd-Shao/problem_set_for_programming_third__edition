#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int main(void){int n,a[20][20],s=0;scanf("%d",&n);for(int i=0;i<n;i++)for(int j=0;j<n;j++){scanf("%d",&a[i][j]);if(i+j!=n-1&&i!=n-1&&j!=n-1)s+=a[i][j];}printf("%d",s);}