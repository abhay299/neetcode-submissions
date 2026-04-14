class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length <= 1) return [nums[0]];

        const newList1 = nums.slice(0, nums.length - 1)
        const newList2 = nums.slice(1)

        function rob(arr){
            const cache = []

            function dfs(index){
                if(index >= arr.length) return 0;

                if(cache[index]) return cache[index];

                cache[index] = Math.max(arr[index] + dfs(index + 2), dfs(index + 1));

                return cache[index];
            }

            return dfs(0)
        }
        
        const val1 = rob(newList1)
        const val2 = rob(newList2)

        return Math.max(val1, val2)
    }
}
