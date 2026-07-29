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
    levelOrder(root: TreeNode | null): number[][] {
        let outputArr = [];

        function bfs(root: TreeNode | null) {
            let queue = [];

            if (root !== null) {
                queue.push(root);
            }

            while (queue.length > 0) {
                let levelNodes = [];
                let size = queue.length
                for (let i = 0; i < size; i++) {
                    let curr = queue.shift();
                    levelNodes.push(curr.val);

                    if (curr.left) {
                        queue.push(curr.left);
                    }

                    if (curr.right) {
                        queue.push(curr.right);
                    }
                }
                outputArr.push(levelNodes);
            }
        }

        bfs(root)
        return outputArr
    }
}
