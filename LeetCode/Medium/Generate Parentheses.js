// 성공
// Beats 58.41% / 26.41%
// 정답 set과 괄호 set을 두어 정답에 해당하는 괄호를 정답 set로 옮기는 방식
// checkParenthesis 함수로 어떤 괄호를 추가할 수 있는지 체크 후 nextSet에 저장
// nextSet이 없을 때까지 반복한다

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n === 1) return ['()'];

    const answer = new Set();
    let parenthesis = new Set('(');

    while(parenthesis.size){
        const nextSet = new Set();
        parenthesis.forEach(e => {
            switch(checkParenthesis(e)){
                case 'o':
                    nextSet.add(e + '(');
                    break;
                case 'oc':
                    nextSet.add(e + '(');
                    nextSet.add(e + ')');
                    break;
                case 'c':
                    nextSet.add(e + ')');
                    break;
                default:
                    answer.add(e);
                    break;
            }
        });

        parenthesis = nextSet;
    }

    return [...answer];

    function checkParenthesis(string){
        let open = 0, close = 0;

        for(let i = 0; i < string.length; i++){
            if(string[i] === '(') open++;
            else close++;
        }

        if(open === close && open < n) return 'o';
        else if(open > close && open < n) return 'oc';
        else if(open > close && open === n) return 'c';
        else return 'answer';
    }
};