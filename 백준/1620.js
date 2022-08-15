const input = `26 5
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
25
Raichu
3
Pidgey
Kakuna`.split('\n')

const [N, M] = input.shift().split(' ').map(Number)
const Ns = input.slice(0, N)
const Ms = input.slice(N)
const NameSet = {}
const NumberSet = {}
let answer = ''

for(let i = 1; i <= N; i++){
    NameSet[Ns[i-1]] = i
    NumberSet[i] = Ns[i-1]
}

Ms.forEach(e =>{
    if(NameSet[e]){
        answer += NameSet[e] + '\n'
    }else if(NumberSet[e]){
        answer += NumberSet[e] + '\n'
    }
})

console.log(answer)