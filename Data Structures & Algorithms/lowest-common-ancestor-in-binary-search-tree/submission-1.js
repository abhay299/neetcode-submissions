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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        function traversal(root){
            if(!root) return;

            if(p.val < root.val && q.val < root.val){
                return traversal(root.left);
            }else if(p.val > root.val && q.val > root.val)
                return traversal(root.right);
            else{
                return root
            }
        }

        const node = traversal(root);
        return node;
    }
}
