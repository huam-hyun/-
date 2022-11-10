// 1차 시도 실패, 효율성 6 ~ 10 실패
// 커서 움직이는 부분이 느린 것 같다. 더 빠른 방법을 생각해봐야겠다

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