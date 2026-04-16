class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {

        // assume every element as center and use 2 pointers left and right and check if elements are equal
        // decrement left and increment right
        // store current longest str length, replace only if bigger found.
        // use same index if odd length of input.
        // change right index to index + 1 if input is of even length;

        let longestStr = '';

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
