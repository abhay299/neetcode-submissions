class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {

        const cache = [];
        
        function dfs(i){
            if(i >= cost.length) return 0;

            if(cache[i]){
                return cache[i];
            }
            cache[i] = cost[i] + Math.min(dfs(i + 1), dfs(i + 2));
            return cache[i]
        }

        return Math.min(dfs(0), dfs(1))
    }
}
