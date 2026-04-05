class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

        const result = []
        const subset = []

        function dfs(index){
            if(index >= nums.length){
                return result.push([...subset])
            }

            subset.push(nums[index])
            dfs(index + 1)

            subset.pop()
            dfs(index + 1)
        }

        dfs(0)

        return result;
    }
}
