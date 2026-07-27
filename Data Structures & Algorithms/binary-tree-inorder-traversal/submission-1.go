/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func inorderTraversal(root *TreeNode) []int {

    numbers := make([]int,0)

    var dfs func(*TreeNode)
     dfs = func(node *TreeNode){
        if node == nil {
            return
        }

        dfs(node.Left)
        numbers = append(numbers, node.Val)
        dfs(node.Right)
    }

    dfs(root)
    return numbers

}
