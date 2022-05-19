let num = [5,8,2,9,3]
console.log(`O vetor tem ${num.length} posições`)
console.log(`O elemento que ocupa a posição de índice 0 é o ${num[0]}`)
num.sort()
console.log(num)
num.push(1)
console.log(num)
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)
pos = num.indexOf(4)
if(pos == -1){
console.log(`O valor 4 não foi encontrado nesse array`)
}else{
  console.log(`O valor 4 encontra-se na posição ${pos}`)
}