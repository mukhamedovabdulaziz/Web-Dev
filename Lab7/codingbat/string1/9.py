def combo_string(a, b):
  short = a if len(a) < len(b) else b
  long = b if len(a) < len(b) else a
    
  return short + long + short
