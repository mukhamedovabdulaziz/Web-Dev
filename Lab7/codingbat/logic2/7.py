def make_chocolate(small, big, goal):
  max_big_bars = goal // 5
  
  if max_big_bars > big:
    big_bars_used = big
  else:
    big_bars_used = max_big_bars
    
  remaining_goal = goal - (big_bars_used * 5)
    
  if remaining_goal <= small:
    return remaining_goal
  else:
    return -1
