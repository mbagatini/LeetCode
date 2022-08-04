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
 * @return {boolean}
 */
var isBalanced = function (root) {
	// calculates node is balanced and the heigh of tree
	var dfs = function (r) {
		if (r == null) {
			return [true, 0];
		}

		var left = dfs(r.left);
		var right = dfs(r.right);

		var isBalanced = false;

		if (left[0] && right[0]) {
			isBalanced = Math.abs(left[1] - right[1]) <= 1;
		}

		// the 1 represents the curret root
		var h = 1 + Math.max(left[1], right[1]);

		return [isBalanced, h];
	};

	var res = dfs(root);

	return res[0];
};