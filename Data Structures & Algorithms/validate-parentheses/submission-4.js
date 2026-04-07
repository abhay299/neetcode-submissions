class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []

        // if opening bracket then add to stack.
        // if closing bracket and top element in stack then pop from stack
        // else return false.
        // if iteration completed and stack is empty then return true
        // else return false

        const brackets = {
            "(": ")",
            "{": "}",
            "[": "]",
        }

        for(const char of s){
            if(brackets[char]){
                stack.push(brackets[char])
            }else{
                if(stack.length && stack[stack.length - 1] === char){
                    stack.pop()
                }else{
                    return false
                }
            }
        }
        
        return !stack.length
    }
}
