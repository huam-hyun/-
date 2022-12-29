/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
// 성공
// 뒤에서 n번째 노드는 삭제한 후 ListNode를 반환하는 문제
// addresses 변수에 각 노드들의 주소를 저장해 두고 n번째 노드를 삭제해 주었다

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head.next) return head.next;

    let curNode = head;
    const addresses = [];
    
    while(curNode){
        addresses.push(curNode);
        curNode = curNode.next;
    }

    // remove connection
    if(addresses.length < n + 1) head = addresses[1];
    else addresses.at(-n - 1).next = addresses.at(-n).next;
    addresses.at(-n).next = null;

    return head;

    function ListNode(val, next){
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
};