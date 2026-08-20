#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
struct ListNode{int data;struct ListNode*next;}; struct ListNode*readlist(void){int x;struct ListNode*h=NULL,**p=&h;while(scanf("%d",&x)==1&&x!=-1){*p=malloc(sizeof **p);(*p)->data=x;p=&(*p)->next;}*p=NULL;return h;} struct ListNode*getodd(struct ListNode**L){struct ListNode*h=NULL,**p=&h,**q=L;while(*q){struct ListNode*t=*q;*q=t->next;if(t->data%2){*p=t;p=&t->next;}else free(t);}*p=NULL;return h;} void printlist(struct ListNode*L){for(;L;L=L->next)printf("%d ",L->data);} int main(void){struct ListNode*l=readlist(),*o=getodd(&l);printlist(o);}