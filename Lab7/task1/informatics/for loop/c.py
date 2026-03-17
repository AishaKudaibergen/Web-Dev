a = int(input())
b = int(input())
for i in range(a, b + 1):
    root = i**0.5
    if root == int (root):
        print (i, end =  " ")