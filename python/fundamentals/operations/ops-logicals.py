print(7 > 3 and 2 > 3)

# AND (only one must be false to evaluate to false)
print(True and True)   # True
print(True and False)  # False
print(False and True)  # False
print(False and False) # False

# OR (all must be false to evaluate to false)
print(True or True)    # True
print(True or False)   # True
print(False or True)   # True
print(False or False)  # False


# XOR (must be one or another)
print(True != True)  # False
print(True != False) # True 
print(False != True) # True 
print(True != False) # True 

# Negation (unary)
print(not True)  # False
print(not False) # True