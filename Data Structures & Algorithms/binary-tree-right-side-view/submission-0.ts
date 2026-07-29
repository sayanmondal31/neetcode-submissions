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
    rightSideView(root: TreeNode | null): number[] {
        let res: number[] = [];
        let queue: TreeNode[] = [];

        if (root != null) {
            queue.push(root);
        }

        while (queue.length > 0) {
            let size = queue.length;
            let level: number[] = [];
            for (let i = 0; i < size; i++) {
                let curr = queue.shift();
                level.push(curr.val!);

                if (curr.left) {
                    queue.push(curr.left);
                }
                if (curr.right) {
                    queue.push(curr.right);
                }
            }
            res.push(level[level.length-1])
        }

        return res
    }
}
