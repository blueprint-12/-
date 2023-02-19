input = [3, 5, 6, 1, 2, 4]


def find_max_num(array):
    for num in array:
        for compare_num in array:
            if num < compare_num:
                break #이중for문 첫번째 수와 왼쪽 수 두개를 비교
    else:
        return num


result = find_max_num(input) 
print(result)

