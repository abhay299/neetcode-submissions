class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = []
        const subset = []
        // let sum = 0;

        function dfs(index, difference){

            if(difference === 0){
                result.push([...subset])
                return
            }

            if(index >= nums.length || difference < 0) return;

            
            subset.push(nums[index])
            dfs(index, difference - nums[index])
        
            subset.pop();
            dfs(index + 1, difference)
            
        }

        dfs(0, target);

        return result
    }
}
