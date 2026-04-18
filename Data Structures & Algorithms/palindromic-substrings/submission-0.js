class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {

        if(s.length <= 1) return s;

        const res = [];

        function palindrome(left, right){

            while (left >= 0 && right < s.length && s[left] === s[right]){
                const currString = s.slice(left, right + 1);

                res.push(currString);

                left--;
                right++;
            }
        }

        for(let i = 0; i < s.length; i++){
            palindrome(i, i);
            palindrome(i, i+1)
        }

        
        return res.length;
    }

}
