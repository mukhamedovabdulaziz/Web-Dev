import math

def find_smallest_divisor(x):
    if x % 2 == 0:
        return 2
    
    for i in range(3, int(math.sqrt(x)) + 1, 2):
        if x % i == 0:
            return i
    
    return x

x = int(input())

result = find_smallest_divisor(x)

print(result)
