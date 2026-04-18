class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let cache = [];

        function dfs(i){
            if( i === s.length) return 1;

            if(s[i] === '0') return 0;

            if(cache[i]) return cache[i];

            let count = dfs(i + 1);

            if(i+1 < s.length && (s[i] === '1' || (s[i] === '2' && s[i+1] <= '6'))){
                count += dfs(i + 2)
            }

            cache[i] = count;
            return count;
        }

        const res = dfs(0);
        
        return res;
    }
}
