#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
struct complex{int real,imag;}; struct complex multiply(struct complex x,struct complex y){struct complex z={x.real*y.real-x.imag*y.imag,x.real*y.imag+x.imag*y.real};return z;} int main(void){struct complex a,b,c;if(scanf("%d%d%d%d",&a.real,&a.imag,&b.real,&b.imag)==4){c=multiply(a,b);printf("%d+%di",c.real,c.imag);}}