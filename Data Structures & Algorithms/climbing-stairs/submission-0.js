class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(!n) return 1;
        if(n===1) return 1;

        return (this.climbStairs(n-1) +   this.climbStairs(n-2));
    }
}
