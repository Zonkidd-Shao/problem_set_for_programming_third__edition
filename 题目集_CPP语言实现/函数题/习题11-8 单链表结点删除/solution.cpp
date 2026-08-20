// 习题11-8 单链表结点删除
#include <iostream>
#include <vector>
struct ListNode{int data;ListNode* next;};
ListNode* readlist(){ListNode* head=nullptr;ListNode** tail=&head;int x;while(std::cin>>x&&x!=-1){*tail=new ListNode{x,nullptr};tail=&(*tail)->next;}return head;}
ListNode* deletem(ListNode* L,int m){while(L&&L->data==m){ListNode*q=L;L=L->next;delete q;}for(ListNode*p=L;p&&p->next;){if(p->next->data==m){ListNode*q=p->next;p->next=q->next;delete q;}else p=p->next;}return L;}
int main(){ListNode* L=readlist();int m;std::cin>>m;L=deletem(L,m);for(ListNode*p=L;p;p=p->next)std::cout<<p->data<<" ";std::cout<<"\n";}
