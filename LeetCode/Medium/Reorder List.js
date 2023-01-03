// 성공

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const queue = [];
    
    while(head){
        queue.push(head);
        head = head.next;
    }

    for(let i = 0; i < Math.floor(queue.length / 2); i++){
        if(queue[i].next === queue.at(-1 - i)){
            queue[i + 1].next = null;
            break;
        }else{
            [queue[i].next, queue.at(-1 - i).next] = [queue.at(-1 - i), queue[i].next];
        }
    }

    if(queue.length % 2){
        queue[queue.length / 2 - 0.5].next = null;
    }
};