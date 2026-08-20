#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
struct student{int num;char name[20];int score;char grade;}; int set_grade(struct student*p,int n){int fail=0;for(int i=0;i<n;i++){p[i].grade=p[i].score>=85?'A':p[i].score>=70?'B':p[i].score>=60?'C':'D';if(p[i].grade=='D')fail++;}return fail;} int main(void){return 0;}
