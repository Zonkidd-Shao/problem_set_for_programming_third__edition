#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
int max_len(char*s[],int n){int m=0;for(int i=0;i<n;i++){int z=(int)strlen(s[i]);if(z>m)m=z;}return m;} int main(void){return 0;}