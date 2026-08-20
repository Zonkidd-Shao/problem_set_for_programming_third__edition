#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int even(int n){return n%2==0;} int OddSum(int a[],int n){int s=0;for(int i=0;i<n;i++)if(!even(a[i]))s+=a[i];return s;} int main(void){int n,a[100];if(scanf("%d",&n)==1){for(int i=0;i<n;i++)scanf("%d",&a[i]);printf("%d",OddSum(a,n));}}