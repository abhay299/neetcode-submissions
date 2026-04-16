class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let longestStr = ''

            function loop(left, right){
                while(left >= 0 && right < s.length && s[left] === s[right]){
                   
                     const current = s.slice(left, right + 1);

                    if (current.length > longestStr.length) {
                        longestStr = current;
                    }

                    left--;
                    right++;
                }
            }

        for(let idx = 0; idx < s.length; idx++){
            loop(idx, idx);
            loop(idx, idx + 1)
        }

        return longestStr
    }
}
