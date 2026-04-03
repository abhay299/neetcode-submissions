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
     * @return {number}
     */
    goodNodes(root) {
        let count = 0;

        function dfs(node, currentMax){
            if(!node) return;

            console.log('curr node:', node.val)
            if(node.val >= currentMax){
                count++
            }
            currentMax = Math.max(node.val, currentMax)
            console.log('max:', currentMax)

            dfs(node.left, currentMax);
            dfs(node.right, currentMax)
        }

        dfs(root, root.val)

        return count;
    }
}
