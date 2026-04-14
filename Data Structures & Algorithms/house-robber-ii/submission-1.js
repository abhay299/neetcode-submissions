class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        if(nums.length <= 1) return [nums[0]];
        
        const newList1 = nums.slice(0, nums.length - 1)
        const newList2 = nums.slice(1)

        function dfs(index, arr){
              const cache = []

             if(index >= arr.length) return 0;

            if(cache[index]) return cache[index];

            cache[index] = Math.max(arr[index] + dfs(index + 2, arr), dfs(index + 1, arr));

            return cache[index];
        }
        
        const val1 = dfs(0, newList1)
        const val2 = dfs(0, newList2)

        return Math.max(val1, val2)
    }
}
