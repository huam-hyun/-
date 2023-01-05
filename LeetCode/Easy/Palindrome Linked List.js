// 성공
// 연결 리스트에서 slow, fast 투 포인터 테크닉이 계속 보여서 검색을 해 보았다
// slow는 1칸, fast는 2칸씩 계속 움직이는데 그러면 slow는 항상 현재까지 탐색한 리스트의 중간에 위치하게 된다
// 유용하니 잘 기억해 두자

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head.next) return true;

    let s = '';

    while(head){
        s += head.val;
        head = head.next;
    }
    
    let left = 0, right = s.length - 1;

    while(left < right){
        if(s[left++] !== s[right--]) return false;
    }

    return true;
};