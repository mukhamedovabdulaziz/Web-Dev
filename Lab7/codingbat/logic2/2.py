def lone_sum(a, b, c):
  if a != b and a != c and b != c:
    return a + b + c
  elif a == b == c:
    return 0
  else:
    if a == b:
      return c
    elif a == c:
      return b
    else:
      return a
