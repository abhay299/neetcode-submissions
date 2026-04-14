class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
            const cache = [];

        function rob(index){
            if(index >= arr.length) return 0;

            const maxVal = Math.max(rob(arr[index] + arr[index+2], arr[index + 1]))
            return maxVal;
        };

        


    }
}
