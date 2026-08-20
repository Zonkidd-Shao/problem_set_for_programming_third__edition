// 习题11-7 奇数值结点链表
#include <iostream>
#include <vector>
struct ListNode{int data;ListNode* next;};
ListNode* readlist(){ListNode* head=nullptr;ListNode** tail=&head;int x;while(std::cin>>x&&x!=-1){*tail=new ListNode{x,nullptr};tail=&(*tail)->next;}return head;}
ListNode* getodd(ListNode** L){ListNode* odd=nullptr;ListNode** tail=&odd;ListNode** p=L;while(*p){if((*p)->data%2){ListNode* q=*p;*p=q->next;q->next=nullptr;*tail=q;tail=&q->next;}else p=&(*p)->next;}return odd;}
int main(){ListNode* L=readlist();ListNode* O=getodd(&L);for(ListNode*p=O;p;p=p->next)std::cout<<p->data<<" ";std::cout<<"\n";for(ListNode*p=L;p;p=p->next)std::cout<<p->data<<" ";std::cout<<"\n";}
