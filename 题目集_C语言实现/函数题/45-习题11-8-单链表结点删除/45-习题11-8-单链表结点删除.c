#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
struct ListNode{int data;struct ListNode*next;}; struct ListNode*readlist(void){int x;struct ListNode*h=NULL,**p=&h;while(scanf("%d",&x)==1&&x!=-1){*p=malloc(sizeof **p);(*p)->data=x;p=&(*p)->next;}*p=NULL;return h;} struct ListNode*deletem(struct ListNode*L,int m){struct ListNode**p=&L;while(*p){if((*p)->data==m){struct ListNode*t=*p;*p=t->next;free(t);}else p=&(*p)->next;}return L;} void printlist(struct ListNode*L){for(;L;L=L->next)printf("%d ",L->data);} int main(void){int m;struct ListNode*l=readlist();scanf("%d",&m);printlist(deletem(l,m));}