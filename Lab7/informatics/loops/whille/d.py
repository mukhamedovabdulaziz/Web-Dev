# Ввод числа N
N = int(input())

binary_representation = bin(N)[2:]

if binary_representation.count('1') == 1:
    print("YES")
else:
    print("NO")
