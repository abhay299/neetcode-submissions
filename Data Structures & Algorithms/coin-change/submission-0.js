class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const arr = new Array(amount + 1).fill(Infinity);
        arr[0] = 0;


        for(let i = 1; i <= amount; i++){
            for(const coin of coins){
                if(i - coin >= 0){
                    arr[i] = Math.min(arr[i], 1 + arr[i - coin])
                }
            }
        }

        return arr[amount] === Infinity ? -1 : arr[amount];
    }
}
