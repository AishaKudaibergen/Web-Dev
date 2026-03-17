def sum13(nums):
    if len(nums) == 0:
        return 0
        
    total = 0
    
    for i in range(len(nums)):

        if nums[i] == 13:
            continue
            
        if i > 0 and nums[i-1] == 13:
            continue
            
        total += nums[i]
            
    return total