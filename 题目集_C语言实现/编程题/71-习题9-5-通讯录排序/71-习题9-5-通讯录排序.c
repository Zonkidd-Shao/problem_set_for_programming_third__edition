#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
struct P{char name[30],birth[20],phone[30];}; int main(void){int n;struct P a[100];scanf("%d",&n);for(int i=0;i<n;i++)scanf("%29s%19s%29s",a[i].name,a[i].birth,a[i].phone);for(int i=0;i<n;i++)for(int j=i+1;j<n;j++)if(strcmp(a[i].birth,a[j].birth)>0){struct P t=a[i];a[i]=a[j];a[j]=t;}for(int i=0;i<n;i++)printf("%s %s %s\n",a[i].name,a[i].birth,a[i].phone);}