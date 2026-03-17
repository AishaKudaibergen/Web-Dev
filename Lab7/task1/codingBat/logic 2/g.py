def make_chocolate(small, big, goal):
    max_big = goal // 5
    
    if big >= max_big:
        goal -= max_big * 5
    else:
        goal -= big * 5
        
    if goal <= small:
        return goal
    return -1