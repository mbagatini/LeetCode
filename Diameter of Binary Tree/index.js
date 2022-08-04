/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
	var res = 0;

	// calculates depth and height of each node
	var dfs = function (r) {
		if (r == null) {
			return -1;
		}

		var left = dfs(r.left);
		var right = dfs(r.right);
		res = Math.max(res, 2 + left + right);

		return 1 + Math.max(left, right);
	}

	dfs(root);

	return res;
};
