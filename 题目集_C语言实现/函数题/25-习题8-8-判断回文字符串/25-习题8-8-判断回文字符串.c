#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
typedef enum{false,true}bool; bool palindrome(char*s){size_t i=0,j=strlen(s);if(!j)return true;for(j--;i<j;i++,j--)if(s[i]!=s[j])return false;return true;} int main(void){char s[256];if(scanf("%255s",s)==1)puts(palindrome(s)?"Yes":"No");}