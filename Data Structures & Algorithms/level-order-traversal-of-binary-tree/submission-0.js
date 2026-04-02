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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];
        
        const queue = [];
        const result = []

        queue.push(root);

        while(queue.length){
            const size = queue.length;
            const temp = [];

            for(let index = 0; index < size; index++){
                const node = queue.shift();
                temp.push(node.val);

                if(node.left){
                    queue.push(node.left);
                }

                if(node.right){
                    queue.push(node.right);
                }
            }

            result.push(temp)
        }

        return result
    }
}
