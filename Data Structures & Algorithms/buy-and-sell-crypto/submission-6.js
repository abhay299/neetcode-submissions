class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(prices.length === 1) return 0

        let i = 0
        let j = 1
        let res = 0

        while(j < prices.length) {
            const cost = prices[i]
            const sell = prices[j]
           if(cost < sell){
                const profit = sell - cost
                res = Math.max(res, profit)
            }else{
                i = j
            }
            j++
        }

        return res
    }
}
