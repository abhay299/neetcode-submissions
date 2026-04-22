class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = Math.max(...nums);

        let currMax = 1;
        let currMin = 1;

        for(const num of nums){
            const temp = currMax * num;
            currMax = Math.max(currMax * num, currMin * num, num);
            currMin = Math.min(temp, currMin * num, num);

            res = Math.max(currMax, res);
        }

        return res;
    }
}
