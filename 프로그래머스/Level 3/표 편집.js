// 1차 시도 실패, 효율성 6 ~ 10 실패
// 커서 움직이는 부분이 느린 것 같다. 더 빠른 방법을 생각해봐야겠다

// 2차 시도 성공
// 다른 사람들의 힌트를 참고했다
// 양방향 리스트를 사용하여 다음 포인터를 찾는 시간을 단축시켜 성공했다
function solution(n, k, cmd) {
    let answer = '';
    let pointer = k;
    let stack = [];
    const table = {};
    
    function Node(pre, next){
        this.state = 'O';
        this.pre = pre;
        this.next = next;
    }
    
    for(let i = -1; i <= n; i++){
        table[i] = new Node(i - 1, i + 1);
    }
    
    for(let j = 0; j < cmd.length; j++){
        const command = cmd[j][0];
        
        switch(command){
            case 'U':
                const Unum = +cmd[j].split(' ')[1];
                for(let i = 0; i < Unum; i++){
                    pointer = table[pointer].pre;
                }
                break;
            case 'D':
                const Dnum = +cmd[j].split(' ')[1];
                for(let i = 0; i < Dnum; i++){
                    pointer = table[pointer].next;
                }
                break;
            case 'C':
                stack.push(pointer);
                table[pointer].state = 'X';
                table[table[pointer].pre].next = table[pointer].next;
                table[table[pointer].next].pre = table[pointer].pre;
                pointer = table[pointer].next < n ? table[pointer].next : table[pointer].pre;
                break;
            case 'Z':
                const back = stack.pop();
                table[back].state = 'O';
                table[table[back].pre].next = back;
                table[table[back].next].pre = back;
                break;
        }
    }
    
    for(let i = 0; i < n; i++){
        answer += table[i].state;
    }

    return answer;
}

// 1차 시도
function solution(n, k, cmd) {
    let answer = '';
    
    function Table(n, k){
        this.array = new Array(n).fill('O');
        this.stack = [];
        this.pointer = k;
        
        this.command = (cmd) => {
            switch(cmd[0]){
                case 'U':
                    let Unum = +cmd.split(' ')[1];
                    
                    for(let i = this.pointer - 1; i >= 0; i--){
                        if(this.array[i] === 'O') Unum--;
                        
                        if(Unum === 0){
                            this.pointer = i;
                            break;
                        }
                    }
                    
                    break;
                case 'D':
                    let Dnum = +cmd.split(' ')[1];
                    
                    for(let i = this.pointer + 1; i < this.array.length; i++){
                        if(this.array[i] === 'O') Dnum--;
                        
                        if(Dnum === 0){
                            this.pointer = i;
                            break;
                        }
                    }
                    
                    break;
                case 'C':
                    this.stack.push(this.pointer);
                    this.array[this.pointer] = 'X';
                    
                    const avail = this.array.indexOf('O', this.pointer + 1);
                    
                    if(avail === -1){
                        while(this.array[this.pointer] === 'X'){
                            this.pointer--;
                        }
                    }else{
                        this.pointer = avail;
                    }
                    
                    break;
                case 'Z':
                    const back = this.stack.pop();
                    this.array[back] = 'O';
                    
                    break;
            }
        }
        
        this.getArray = () => {
            return this.array.join('');
        }
    }
    
    const table = new Table(n, k);
    
    cmd.forEach(e => {
        table.command(e);
    })
    
    answer = table.getArray();
    
    return answer;
}