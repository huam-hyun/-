// 성공
// Beats 95.7% / 48.91%
// list1과 list2 둘 중 하나라도 비어 있을 경우 한쪽을 그대로 리턴(둘 다 없을 경우는 빈 리스트)
// head === list1과 list2 중 맨 첫 값이 작은 쪽을 head로 지정한다
// tail === 현재까지 연결된 리스트의 마지막 노드
// lNode, rNode === 현재 연결되지 않은 노드들 중 가장 앞부분
// 1. lNode와 rNode의 val을 비교하여 작은 쪽을 tail.next에 연결한다
// 2. 연결된 쪽(lNode or rNode)은 다음 노드로 이동한다
// 3. tail의 노드를 변경해준다
// 4. lNode와 rNode 둘 중 하나가 없어질 때 까지 반복한다
// 5. tail 뒤에 남아있는 노드가 있는 리스트를 연결해 준다
// 6. head를 반환한다

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1 || !list2) return list1 || list2; 

    const head = list1.val < list2.val ? list1 : list2;
    let tail = head;
    let lNode = head === list1 ? list1.next : list1;
    let rNode = head === list2 ? list2.next : list2;

    while(lNode && rNode){
        if(lNode.val < rNode.val){
            tail.next = lNode;
            lNode = lNode.next;
        }else{
            tail.next = rNode;
            rNode = rNode.next;
        }
        tail = tail.next;
    }

    if(lNode) tail.next = lNode;
    if(rNode) tail.next = rNode;

    return head;
};