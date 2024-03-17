n = int(input())
res = 'NO'
if (n % 4 == 0):
    res = 'YES'
    if (n % 100 == 0):
        res = 'NO'
        if (n % 400 == 0):
            res = 'YES'
            
print(res)