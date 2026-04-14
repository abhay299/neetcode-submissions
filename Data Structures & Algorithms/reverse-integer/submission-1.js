class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        const MIN = -2147483648; // -2^31
        const MAX = 2147483647; // 2^31 - 1

        let reverseNum = 0;

        while(x){
            const digit = x%10;
            x = Math.trunc(x/10);

            if (reverseNum > MAX / 10 || (reverseNum === MAX / 10 && digit > MAX % 10))
                return 0;
            if (reverseNum < MIN / 10 || (reverseNum === MIN / 10 && digit < MIN % 10))
                return 0;

            reverseNum = (reverseNum * 10) + digit;
        }

        return reverseNum
    }
}
