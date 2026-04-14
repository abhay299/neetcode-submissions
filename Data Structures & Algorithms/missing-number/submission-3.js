class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        // Brute force
        // nums.sort((a,b) => a - b)
        const size = nums.length;

        // for (let i = 0; i <= size; i++){
        //     if (i !== nums[i]) return i
        // }

        const xorArr = []
        for (let i = 0; i < size; i++){
            xorArr.push(i ^ nums[i])
        }

        let res = size
        for (let i = 0; i < xorArr.length; i++){
            res = res ^ xorArr[i]
        }

return res
    

    }
}
