// 习题9-6 按等级统计学生成绩
#include <iostream>
#include <string>
struct student{int num;char name[20];int score;char grade;};
int set_grade(student* p,int n){int failed=0;for(int i=0;i<n;i++){if(p[i].score>=85)p[i].grade='A';else if(p[i].score>=70)p[i].grade='B';else if(p[i].score>=60)p[i].grade='C';else{p[i].grade='D';failed++;}}return failed;}
int main(){int n;std::cin>>n;student a[100];for(int i=0;i<n;i++)std::cin>>a[i].num>>a[i].name>>a[i].score;int failed=set_grade(a,n);std::cout<<"The count for failed (<60): "<<failed<<"\nThe grades:\n";for(int i=0;i<n;i++)std::cout<<a[i].num<<" "<<a[i].name<<" "<<a[i].grade<<"\n";}
