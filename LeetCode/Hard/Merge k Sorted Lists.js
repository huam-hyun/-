// 성공
// Beats 44.62% / 97.52%
// 매번 lists의 최솟값을 찾아줬더니 시간이 좀 느린거 같다.
// 하지만 변수를 적게 사용해서인지 메모리는 굉장히 적게 혔다

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const _lists = lists.filter(e => typeof e?.val === 'number');
    const answer = new ListNode();
    let tail = answer;

    while(_lists.length){
        if(_lists.length === 1){
            tail.next = _lists[0];
            break;
        }

        const idx = _lists.reduce((p, c, i) => _lists[p].val < c.val ? p : i, 0);
        tail.next = _lists[idx];

        if(!_lists[idx].next){
            _lists.splice(idx, 1);
        }else{
            _lists[idx] = _lists[idx].next;
        }
        
        tail = tail.next;
    }

    return answer.next;

    function ListNode(val, next) {
       this.val = (val===undefined ? 0 : val);
       this.next = (next===undefined ? null : next);
    }
};