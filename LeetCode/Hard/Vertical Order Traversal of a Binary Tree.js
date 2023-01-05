// 성공
// 성공은 했으나 속도가 느리다
// node의 값과 위치를 기억하기 위해 새로운 객체를 만드는 방법이 있는데 일일이 배열에 저장해두고 사용해서 그런 모양이다
// Map과 new 객체를 사용해서 속도를 줄여볼 생각이다

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
var verticalTraversal = function(root) {
    const location = [];
    let answer = [];

    searchTree(root, 0, 0);

    location.sort((a, b) => {
        a = a.split(' ');
        b = b.split(' ');

        if(a[2] === b[2]){
            if(a[1] === b[1]) return a[0] - b[0];
            else return a[1] - b[1];
        }else{
            return a[2] - b[2];
        }
    });

    const MIN_COL = -location[0].split(' ')[2];

    console.log(location)

    for(const loc of location){
        const [val, row, col] = loc.split(' ');

        if(!answer[+col + MIN_COL]){
            answer[+col + MIN_COL] = [val];
        }else{
            answer[+col + MIN_COL].push(val);
        }
    }

    return answer;

    function searchTree(node, row, col){
        location.push(`${node.val} ${row} ${col}`);

        if(node.left) searchTree(node.left, row + 1, col - 1);
        if(node.right) searchTree(node.right, row + 1, col + 1);
    }
};