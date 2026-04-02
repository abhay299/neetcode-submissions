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
     * @return {TreeNode}
     */
    invertTree(root) {
        // If the current node is null, return null.
        // Swap the node's left and right pointers.
        // Recursively call dfs on the new left child.
        // Recursively call dfs on the new right child.
        // Return the current node (now inverted).

        if(!root) return null;

        [root.left, root.right] = [root.right, root.left];

        this.invertTree(root.left);
        this.invertTree(root.right);

        return root
    }
}
