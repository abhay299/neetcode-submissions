class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        // const hashMap = {}
        // let j = 0
        // while(j < nums.length){
        //     if(!hashMap[nums[j]]){
        //         hashMap[nums[j]] = nums[j]
        //     }else{
        //         delete hashMap[nums[j]]
        //     }
        //     j++
        // }

        let xor = 0
        for(const num of nums){
            xor = xor ^ num
        }
        
        return xor
    }
}
