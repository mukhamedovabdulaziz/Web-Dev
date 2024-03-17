N = int(input())

numbers = list(map(int, input().split()))

for i in range(N // 2):
    numbers[i], numbers[N - i - 1] = numbers[N - i - 1], numbers[i]

print(*numbers)
