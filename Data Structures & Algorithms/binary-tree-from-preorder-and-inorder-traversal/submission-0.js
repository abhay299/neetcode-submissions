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

    constructor(val = 0, left = null, right = null) {
          this.val = val;
          this.left = left;
          this.right = right;
      }

    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if(!preorder.length || !inorder.length) return null;

        const rootVal = preorder[0];

        const node = new TreeNode(preorder[0]);
        const midIndex = inorder.indexOf(rootVal);

        node.left = this.buildTree(preorder.slice(1, midIndex + 1), inorder.slice(0, midIndex));
        node.right = this.buildTree(preorder.slice(midIndex + 1), inorder.slice(midIndex + 1, inorder.length))

        return node;
    }
}
