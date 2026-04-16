class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let p1 = 0
        let p2 = heights.length - 1

        let maxVolume = 0
        while(p1 < p2){
            const minHeight = Math.min(heights[p1], heights[p2])
            const currentVolume = minHeight * (p2 - p1)

            if(currentVolume > maxVolume){
                maxVolume = currentVolume
            }

            if(heights[p1] > heights[p2]){ 
                p2--
                continue
            }

            p1++
        }

        return maxVolume
    }
}
