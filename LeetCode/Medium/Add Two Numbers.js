// 성공
// 링크드 리스트로 덧셈하여 링크드 리스트 반환하는 문제였다
/** ListNode 구조
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let answer = new ListNode(0, null);
    let beforeNode = null;
    let over = 0;

    while(l2 || l1 || over){
        const curNode = new ListNode(0, null);

        sum = (l1?.val || 0) + (l2?.val || 0) + over;
        curNode.val = sum % 10;
        over = sum >= 10 ? 1 : 0;

        l1 = l1?.next;
        l2 = l2?.next;

        if(!beforeNode) answer = curNode;
        else beforeNode.next = curNode;

        beforeNode = curNode;
    }

    function ListNode(val, next) {
       this.val = (val===undefined ? 0 : val);
       this.next = (next===undefined ? null : next);
    }

    return answer;
};