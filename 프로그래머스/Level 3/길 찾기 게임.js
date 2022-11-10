// 성공
// preorder과 postorder를 나눠서 각각 함수를 만들어줬다

function solution(nodeinfo) {
    let preorder = [];
    let postorder = [];
    
    // 배열의 원소에 노드 번호를 넣고 y내림차순으로 정렬한다
    nodeinfo = nodeinfo.map((e, i) => [i + 1, e[0], e[1]]);
    nodeinfo.sort((a, b) => b[2] - a[2]);
    
    // 전위순회와 후위순회를 구한다
    getPreorder([...nodeinfo], preorder);
    getPostorder([...nodeinfo], postorder);
    
    return [preorder, postorder];
}

// 전위 순회
function getPreorder(nodes, pre){
    // nodes의 길이가 1 이하일 때 처리
    if(nodes.length === 1 && !pre.includes(nodes[0][0])){
        pre.push(nodes[0][0]);
    }else if(!nodes.length){
        return;
    }
    
    const mid = nodes.shift();
    const left = nodes.filter(e => e[1] < mid[1]);
    const right = nodes.filter(e => e[1] > mid[1]);
    
    // 전위의 경우 배열의 마지막에 mid를 추가해주면 된다
    if(!pre.includes(mid[0])){
        pre.push(mid[0]);    
    }
    
    // 전위의 순회 순서는 mid, left, right이기 때문에 순서대로 순회한다
    getPreorder(left, pre);
    getPreorder(right, pre);
}

// 후위 순회
function getPostorder(nodes, post){
    // nodes의 길이가 1 이하일 때 처리
    if(nodes.length === 1 && !post.includes[nodes[0][0]]){
        post.unshift(nodes[0][0]);
    }else if(!nodes.length){
        return;
    }
    
    const mid = nodes.shift();
    const left = nodes.filter(e => e[1] < mid[1]);
    const right = nodes.filter(e => e[1] > mid[1]);
    
    // 후위의 경우 배열의 앞부분에 mid를 추가해주면 된다
    if(!post.includes(mid[0])){
        post.unshift(mid[0]);    
    }
    
    // 후우의 순회 순서는 left, right, mid이지만 배열에 알맞게 순서를 넣기 위해서 right를 먼저 실행해준다
    getPostorder(right, post);
    getPostorder(left, post);
}