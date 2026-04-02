/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        const result = [];

        if(!root) return result;

        const q = [];
        q.push(root);

        while(q.length){
            const size = q.length;
            const temp = [];

            for(let index = 0; index < size; index++){
                const node = q.shift();
                temp.push(node.val);

                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }

            result.push(temp.pop())
        }

        return result
    }
}
