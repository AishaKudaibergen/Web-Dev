#list 
if __name__ == '__main__':
    N = int(input())
    result_list = []
    
    for _ in range(N):
        command_parts = input().split()
        cmd = command_parts[0]
        
        if cmd == "insert":
            result_list.insert(int(command_parts[1]), int(command_parts[2]))
            
        elif cmd == "print":
            print(result_list)
            
        elif cmd == "remove":
            result_list.remove(int(command_parts[1]))
            
        elif cmd == "append":
            result_list.append(int(command_parts[1]))
            
        elif cmd == "sort":
            result_list.sort()
            
        elif cmd == "pop":
            result_list.pop()
            
        elif cmd == "reverse":
            result_list.reverse()