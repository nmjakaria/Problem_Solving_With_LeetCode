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
 * @return {number[][]}
 */
var levelOrder = function (root) {

    if (root === null) return [];

    const queue = [root];
    const result = [];
    let front = 0;

    while (front < queue.length) {
        const levelSize = queue.length - front;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const curr = queue[front++];
            currentLevel.push(curr.val);

            if (curr.left !== null) {
                queue.push(curr.left);
            }

            if (curr.right !== null) {
                queue.push(curr.right);
            }
        }
        result.push(currentLevel);
    }
    return result;


};