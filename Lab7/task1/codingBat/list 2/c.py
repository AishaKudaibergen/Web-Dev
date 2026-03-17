def centered_average(nums):
    total_sum = sum(nums)
    
    min_val = min(nums)
    max_val = max(nums)

    centered_sum = total_sum - min_val - max_val
    
    count = len(nums) - 2
    return centered_sum // count