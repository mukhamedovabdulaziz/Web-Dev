import math

def find_divisors(x):
    divisors = []
    for i in range(1, int(math.sqrt(x)) + 1):
        if x % i == 0:
            divisors.append(i)
            if i != math.sqrt(x):
                divisors.append(x // i)
    divisors.sort()
    return divisors

x = int(input())

divisors = find_divisors(x)

for divisor in divisors:
    print(divisor, end=' ')
