import math

def count_divisors(x):
    count = 0
    for i in range(1, int(math.sqrt(x)) + 1):
        if x % i == 0:
            count += 1
            if i != math.sqrt(x):
                count += 1
    return count

x = int(input())

divisor_count = count_divisors(x)

print(divisor_count)
