# 习题6-4 使用函数输出指定范围内的Fibonacci数

- **分值：** 20分

## 题目描述

本题要求实现一个计算Fibonacci数的简单函数，并利用其实现另一个函数，输出两正整数$$m$$和$$n$$（$$0<m\le n\le 10000$$）之间的所有Fibonacci数。所谓Fibonacci数列就是满足任一项数字是前两项的和（最开始两项均定义为1）的数列。

## 函数接口定义
```c
int fib( int n );
void PrintFN( int m, int n );
```

其中函数`fib`须返回第`n`项Fibonacci数；函数`PrintFN`要在一行中输出给定范围[`m`, `n`]内的所有Fibonacci数，相邻数字间有一个空格，行末不得有多余空格。如果给定区间内没有Fibonacci数，则输出一行“No Fibonacci number”。

## 裁判测试程序样例
```c
#include <stdio.h>

int fib( int n );
void PrintFN( int m, int n );
	
int main()
{
    int m, n, t;

    scanf("%d %d %d", &m, &n, &t);
    printf("fib(%d) = %d
", t, fib(t));
    PrintFN(m, n);

    return 0;
}

/* 你的代码将被嵌在这里 */
```

## 输入样例
```
20 100 7
```

## 输出样例
```
fib(7) = 13
21 34 55 89
```

## 输入样例
```
2000 2500 8
```

## 输出样例
```
fib(8) = 21
No Fibonacci number
```
