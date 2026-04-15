class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // [-1000, -999, 0, 999, 1000]

        let p1 = 0
        let p2 = numbers.length - 1
        while(p1 < p2){
            const sum = numbers[p1] + numbers[p2]
            if(sum === target){
                return [p1 + 1, p2+ 1]
            }

            if(target > sum){
                p1++
            }else{
                p2--
            }
        }


    }
}
