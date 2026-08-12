/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func hasPathSum(root *TreeNode, targetSum int) bool {
    var dfs func(*TreeNode, int) bool
    
    dfs = func (node *TreeNode, currSum int)bool{
        if node== nil{
            return false
        }

        nextSum := currSum + node.Val

        if node.Left == nil && node.Right == nil {
            return nextSum == targetSum
        }

        return dfs(node.Left, nextSum) || dfs(node.Right, nextSum)
    }

    return dfs(root,0)
}
