class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        function dfs(i){

            if(i >= nums.length) return 0;

            return Math.max(nums[i] + dfs(i + 2), dfs(i + 1));
        }

        const maxVal = dfs(0)
        return maxVal
    }
}
