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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const res = [];

        function preOrder(node){
            if(!node) return;
            
            preOrder(node.left);
            res.push(node.val);
            preOrder(node.right);
        }

        preOrder(root);

        return res[k-1]
    }
}
