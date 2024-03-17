import math

number = int(input())

def find_smallest_divisor(number):
    divisor = 2
    while divisor <= math.sqrt(number):
        if number % divisor == 0:
            return divisor
        divisor += 1
    return number

print(find_smallest_divisor(number))
