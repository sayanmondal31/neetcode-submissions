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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root: TreeNode | null, targetSum: number): boolean {
        const dfs = (node: TreeNode|null, currSum: number) => {
            if (node == null) {
                return false;
            }

            currSum += node.val;
            if(!node.left && !node.right){
                return currSum === targetSum
            }

            return dfs(node.left, currSum) || dfs(node.right, currSum);
        }

        return dfs(root,0)
    }
}
