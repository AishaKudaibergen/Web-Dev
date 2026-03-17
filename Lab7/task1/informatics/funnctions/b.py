def power(a, n):
    res = 1
    for i in range(n):
        res *= a
    return res

a, n = map(float, input().split())
n = int(n)

print(power(a, n))