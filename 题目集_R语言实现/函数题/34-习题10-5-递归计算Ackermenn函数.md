# 习题10-5 递归计算Ackermenn函数

- **分值：** 15分

## 题目描述

本题要求实现Ackermenn函数的计算，其函数定义如下：


![](~/48)

## 函数接口定义
```c
int Ack( int m, int n );
```

其中`m`和`n`是用户传入的非负整数。函数`Ack`返回Ackermenn函数的相应值。题目保证输入输出都在长整型

范围内。

## 裁判测试程序样例
```c
#include <stdio.h>

int Ack( int m, int n );

int main()
{
    int m, n;
    
    scanf("%d %d", &m, &n);
    printf("%d
", Ack(m, n));
    
    return 0;
}

/* 你的代码将被嵌在这里 */
```

## 输入样例
```
2 3
```

## 输出样例
```
9
```
