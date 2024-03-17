N = int(input())

numbers = list(map(int, input().split()))

for i in range(0, N, 2):
    print(numbers[i], end=" ")
